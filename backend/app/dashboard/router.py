from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.dependencies import get_db

from app.database.faculty_model import Faculty
from app.subject.models import Subject
from app.student.models import Student
from app.classroom.models import Classroom
from app.timetable.models import Timetable
from app.attendance.models import Attendance

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard(db: Session = Depends(get_db)):

    total_faculty = db.query(Faculty).count()

    total_students = db.query(Student).count()

    total_subjects = db.query(Subject).count()

    total_classrooms = db.query(Classroom).count()

    total_timetables = db.query(Timetable).count()

    total_attendance = db.query(Attendance).count()

    return {
        "total_faculty": total_faculty,
        "total_students": total_students,
        "total_subjects": total_subjects,
        "total_classrooms": total_classrooms,
        "total_timetables": total_timetables,
        "total_attendance": total_attendance
    }