from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.student.models import Student
from app.student.schemas import (
    StudentCreate,
    StudentUpdate,
    StudentResponse
)

router = APIRouter(
    prefix="/students",
    tags=["Students"]
)


# CREATE STUDENT
@router.post("/", response_model=StudentResponse)
def create_student(
    student: StudentCreate,
    db: Session = Depends(get_db)
):
    existing_roll = db.query(Student).filter(
        Student.roll_number == student.roll_number
    ).first()

    if existing_roll:
        raise HTTPException(
            status_code=400,
            detail="Roll number already exists"
        )

    existing_email = db.query(Student).filter(
        Student.email == student.email
    ).first()

    if existing_email:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    new_student = Student(
        roll_number=student.roll_number,
        full_name=student.full_name,
        email=student.email,
        department=student.department,
        semester=student.semester,
        section=student.section
    )

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return new_student


# GET ALL STUDENTS
@router.get("/", response_model=list[StudentResponse])
def get_all_students(
    db: Session = Depends(get_db)
):
    return db.query(Student).all()


# GET STUDENT BY ID
@router.get("/{student_id}", response_model=StudentResponse)
def get_student(
    student_id: int,
    db: Session = Depends(get_db)
):
    student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    return student


# UPDATE STUDENT
@router.put("/{student_id}", response_model=StudentResponse)
def update_student(
    student_id: int,
    updated: StudentUpdate,
    db: Session = Depends(get_db)
):
    student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    student.roll_number = updated.roll_number
    student.full_name = updated.full_name
    student.email = updated.email
    student.department = updated.department
    student.semester = updated.semester
    student.section = updated.section

    db.commit()
    db.refresh(student)

    return student


# DELETE STUDENT
@router.delete("/{student_id}")
def delete_student(
    student_id: int,
    db: Session = Depends(get_db)
):
    student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if student is None:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    db.delete(student)
    db.commit()

    return {
        "message": "Student deleted successfully"
    }