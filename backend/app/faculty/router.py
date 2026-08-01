from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.database.faculty_model import Faculty
from app.database.models import User

from app.auth.dependencies import get_current_user

from app.faculty.faculty_schemas import (
    FacultyCreate,
    FacultyUpdate,
    FacultyResponse
)

router = APIRouter(
    prefix="/faculty",
    tags=["Faculty"]
)


# CREATE FACULTY
@router.post("/", response_model=FacultyResponse)
def create_faculty(
    faculty: FacultyCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing_email = db.query(Faculty).filter(
        Faculty.email == faculty.email
    ).first()

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Faculty email already exists"
        )

    existing_employee = db.query(Faculty).filter(
        Faculty.employee_id == faculty.employee_id
    ).first()

    if existing_employee:
        raise HTTPException(
            status_code=400,
            detail="Employee ID already exists"
        )

    new_faculty = Faculty(
        full_name=faculty.full_name,
        email=faculty.email,
        employee_id=faculty.employee_id,
        department=faculty.department,
        designation=faculty.designation
    )

    db.add(new_faculty)
    db.commit()
    db.refresh(new_faculty)

    return new_faculty


# GET ALL FACULTY
@router.get("/", response_model=list[FacultyResponse])
def get_all_faculty(
    db: Session = Depends(get_db)
):
    return db.query(Faculty).all()


# GET FACULTY BY ID
@router.get("/{faculty_id}", response_model=FacultyResponse)
def get_faculty(
    faculty_id: int,
    db: Session = Depends(get_db)
):
    faculty = db.query(Faculty).filter(
        Faculty.id == faculty_id
    ).first()

    if faculty is None:
        raise HTTPException(
            status_code=404,
            detail="Faculty not found"
        )

    return faculty


# UPDATE FACULTY
@router.put("/{faculty_id}", response_model=FacultyResponse)
def update_faculty(
    faculty_id: int,
    updated: FacultyUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    faculty = db.query(Faculty).filter(
        Faculty.id == faculty_id
    ).first()

    if faculty is None:
        raise HTTPException(
            status_code=404,
            detail="Faculty not found"
        )

    faculty.full_name = updated.full_name
    faculty.email = updated.email
    faculty.employee_id = updated.employee_id
    faculty.department = updated.department
    faculty.designation = updated.designation

    db.commit()
    db.refresh(faculty)

    return faculty


# DELETE FACULTY
@router.delete("/{faculty_id}")
def delete_faculty(
    faculty_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    faculty = db.query(Faculty).filter(
        Faculty.id == faculty_id
    ).first()

    if faculty is None:
        raise HTTPException(
            status_code=404,
            detail="Faculty not found"
        )

    db.delete(faculty)
    db.commit()

    return {
        "message": "Faculty deleted successfully"
    }