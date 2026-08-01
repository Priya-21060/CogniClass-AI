from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.database.faculty_model import Faculty
from app.subject.models import Subject
from app.subject.schemas import (
    SubjectCreate,
    SubjectUpdate,
    SubjectResponse
)

router = APIRouter(
    prefix="/subjects",
    tags=["Subjects"]
)


# CREATE SUBJECT
@router.post("/", response_model=SubjectResponse)
def create_subject(
    subject: SubjectCreate,
    db: Session = Depends(get_db)
):
    # Check if subject code already exists
    existing_subject = db.query(Subject).filter(
        Subject.subject_code == subject.subject_code
    ).first()

    if existing_subject:
        raise HTTPException(
            status_code=400,
            detail="Subject code already exists"
        )

    # Check if faculty exists
    faculty = db.query(Faculty).filter(
        Faculty.id == subject.faculty_id
    ).first()

    if faculty is None:
        raise HTTPException(
            status_code=404,
            detail="Faculty not found"
        )

    new_subject = Subject(
        subject_name=subject.subject_name,
        subject_code=subject.subject_code,
        semester=subject.semester,
        credits=subject.credits,
        department=subject.department,
        faculty_id=subject.faculty_id
    )

    db.add(new_subject)
    db.commit()
    db.refresh(new_subject)

    return new_subject


# GET ALL SUBJECTS
@router.get("/", response_model=list[SubjectResponse])
def get_all_subjects(
    db: Session = Depends(get_db)
):
    return db.query(Subject).all()


# GET SUBJECT BY ID
@router.get("/{subject_id}", response_model=SubjectResponse)
def get_subject(
    subject_id: int,
    db: Session = Depends(get_db)
):
    subject = db.query(Subject).filter(
        Subject.id == subject_id
    ).first()

    if subject is None:
        raise HTTPException(
            status_code=404,
            detail="Subject not found"
        )

    return subject


# UPDATE SUBJECT
@router.put("/{subject_id}", response_model=SubjectResponse)
def update_subject(
    subject_id: int,
    updated: SubjectUpdate,
    db: Session = Depends(get_db)
):
    subject = db.query(Subject).filter(
        Subject.id == subject_id
    ).first()

    if subject is None:
        raise HTTPException(
            status_code=404,
            detail="Subject not found"
        )

    faculty = db.query(Faculty).filter(
        Faculty.id == updated.faculty_id
    ).first()

    if faculty is None:
        raise HTTPException(
            status_code=404,
            detail="Faculty not found"
        )

    subject.subject_name = updated.subject_name
    subject.subject_code = updated.subject_code
    subject.semester = updated.semester
    subject.credits = updated.credits
    subject.department = updated.department
    subject.faculty_id = updated.faculty_id

    db.commit()
    db.refresh(subject)

    return subject


# DELETE SUBJECT
@router.delete("/{subject_id}")
def delete_subject(
    subject_id: int,
    db: Session = Depends(get_db)
):
    subject = db.query(Subject).filter(
        Subject.id == subject_id
    ).first()

    if subject is None:
        raise HTTPException(
            status_code=404,
            detail="Subject not found"
        )

    db.delete(subject)
    db.commit()

    return {
        "message": "Subject deleted successfully"
    }