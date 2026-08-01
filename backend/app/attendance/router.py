from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.student.models import Student
from app.database.faculty_model import Faculty
from app.subject.models import Subject
from app.timetable.models import Timetable
from app.attendance.models import Attendance
from app.attendance.schemas import (
    AttendanceCreate,
    AttendanceUpdate,
    AttendanceResponse
)

router = APIRouter(
    prefix="/attendance",
    tags=["Attendance"]
)


# CREATE ATTENDANCE
@router.post("/", response_model=AttendanceResponse)
def create_attendance(
    attendance: AttendanceCreate,
    db: Session = Depends(get_db)
):

    if not db.query(Student).filter(Student.id == attendance.student_id).first():
        raise HTTPException(status_code=404, detail="Student not found")

    if not db.query(Faculty).filter(Faculty.id == attendance.faculty_id).first():
        raise HTTPException(status_code=404, detail="Faculty not found")

    if not db.query(Subject).filter(Subject.id == attendance.subject_id).first():
        raise HTTPException(status_code=404, detail="Subject not found")

    if not db.query(Timetable).filter(Timetable.id == attendance.timetable_id).first():
        raise HTTPException(status_code=404, detail="Timetable not found")

    new_attendance = Attendance(
        student_id=attendance.student_id,
        faculty_id=attendance.faculty_id,
        subject_id=attendance.subject_id,
        timetable_id=attendance.timetable_id,
        attendance_date=attendance.attendance_date,
        status=attendance.status
    )

    db.add(new_attendance)
    db.commit()
    db.refresh(new_attendance)

    return new_attendance


# GET ALL ATTENDANCE
@router.get("/", response_model=list[AttendanceResponse])
def get_all_attendance(db: Session = Depends(get_db)):
    return db.query(Attendance).all()


# GET ATTENDANCE BY ID
@router.get("/{attendance_id}", response_model=AttendanceResponse)
def get_attendance(attendance_id: int, db: Session = Depends(get_db)):
    attendance = db.query(Attendance).filter(
        Attendance.id == attendance_id
    ).first()

    if attendance is None:
        raise HTTPException(
            status_code=404,
            detail="Attendance not found"
        )

    return attendance


# UPDATE ATTENDANCE
@router.put("/{attendance_id}", response_model=AttendanceResponse)
def update_attendance(
    attendance_id: int,
    updated: AttendanceUpdate,
    db: Session = Depends(get_db)
):
    attendance = db.query(Attendance).filter(
        Attendance.id == attendance_id
    ).first()

    if attendance is None:
        raise HTTPException(
            status_code=404,
            detail="Attendance not found"
        )

    attendance.student_id = updated.student_id
    attendance.faculty_id = updated.faculty_id
    attendance.subject_id = updated.subject_id
    attendance.timetable_id = updated.timetable_id
    attendance.attendance_date = updated.attendance_date
    attendance.status = updated.status

    db.commit()
    db.refresh(attendance)

    return attendance


# DELETE ATTENDANCE
@router.delete("/{attendance_id}")
def delete_attendance(
    attendance_id: int,
    db: Session = Depends(get_db)
):
    attendance = db.query(Attendance).filter(
        Attendance.id == attendance_id
    ).first()

    if attendance is None:
        raise HTTPException(
            status_code=404,
            detail="Attendance not found"
        )

    db.delete(attendance)
    db.commit()

    return {
        "message": "Attendance deleted successfully"
    }