from datetime import date
from pydantic import BaseModel


class AttendanceCreate(BaseModel):
    student_id: int
    faculty_id: int
    subject_id: int
    timetable_id: int
    attendance_date: date
    status: str


class AttendanceUpdate(BaseModel):
    student_id: int
    faculty_id: int
    subject_id: int
    timetable_id: int
    attendance_date: date
    status: str


class AttendanceResponse(BaseModel):
    id: int
    student_id: int
    faculty_id: int
    subject_id: int
    timetable_id: int
    attendance_date: date
    status: str

    class Config:
        from_attributes = True