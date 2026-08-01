from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.database.faculty_model import Faculty
from app.subject.models import Subject
from app.classroom.models import Classroom
from app.timetable.models import Timetable
from app.timetable.schemas import (
    TimetableCreate,
    TimetableUpdate,
    TimetableResponse
)

router = APIRouter(
    prefix="/timetables",
    tags=["Timetable"]
)


# CREATE TIMETABLE
@router.post("/", response_model=TimetableResponse)
def create_timetable(
    timetable: TimetableCreate,
    db: Session = Depends(get_db)
):

    faculty = db.query(Faculty).filter(
        Faculty.id == timetable.faculty_id
    ).first()

    if faculty is None:
        raise HTTPException(
            status_code=404,
            detail="Faculty not found"
        )

    subject = db.query(Subject).filter(
        Subject.id == timetable.subject_id
    ).first()

    if subject is None:
        raise HTTPException(
            status_code=404,
            detail="Subject not found"
        )

    classroom = db.query(Classroom).filter(
        Classroom.id == timetable.classroom_id
    ).first()

    if classroom is None:
        raise HTTPException(
            status_code=404,
            detail="Classroom not found"
        )

    new_timetable = Timetable(
        faculty_id=timetable.faculty_id,
        subject_id=timetable.subject_id,
        classroom_id=timetable.classroom_id,
        day=timetable.day,
        start_time=timetable.start_time,
        end_time=timetable.end_time,
        semester=timetable.semester,
        section=timetable.section
    )

    db.add(new_timetable)
    db.commit()
    db.refresh(new_timetable)

    return new_timetable


# GET ALL TIMETABLES
@router.get("/", response_model=list[TimetableResponse])
def get_all_timetables(
    db: Session = Depends(get_db)
):
    return db.query(Timetable).all()


# GET TIMETABLE BY ID
@router.get("/{timetable_id}", response_model=TimetableResponse)
def get_timetable(
    timetable_id: int,
    db: Session = Depends(get_db)
):
    timetable = db.query(Timetable).filter(
        Timetable.id == timetable_id
    ).first()

    if timetable is None:
        raise HTTPException(
            status_code=404,
            detail="Timetable not found"
        )

    return timetable


# UPDATE TIMETABLE
@router.put("/{timetable_id}", response_model=TimetableResponse)
def update_timetable(
    timetable_id: int,
    updated: TimetableUpdate,
    db: Session = Depends(get_db)
):
    timetable = db.query(Timetable).filter(
        Timetable.id == timetable_id
    ).first()

    if timetable is None:
        raise HTTPException(
            status_code=404,
            detail="Timetable not found"
        )

    timetable.faculty_id = updated.faculty_id
    timetable.subject_id = updated.subject_id
    timetable.classroom_id = updated.classroom_id
    timetable.day = updated.day
    timetable.start_time = updated.start_time
    timetable.end_time = updated.end_time
    timetable.semester = updated.semester
    timetable.section = updated.section

    db.commit()
    db.refresh(timetable)

    return timetable


# DELETE TIMETABLE
@router.delete("/{timetable_id}")
def delete_timetable(
    timetable_id: int,
    db: Session = Depends(get_db)
):
    timetable = db.query(Timetable).filter(
        Timetable.id == timetable_id
    ).first()

    if timetable is None:
        raise HTTPException(
            status_code=404,
            detail="Timetable not found"
        )

    db.delete(timetable)
    db.commit()

    return {
        "message": "Timetable deleted successfully"
    }