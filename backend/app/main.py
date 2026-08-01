from fastapi import FastAPI

# Routers
from app.auth.router import router as auth_router
from app.faculty.router import router as faculty_router
from app.subject.router import router as subject_router
from app.classroom.router import router as classroom_router
from app.student.router import router as student_router
from app.timetable.router import router as timetable_router
from app.attendance.router import router as attendance_router
from app.dashboard.router import router as dashboard_router

# Database
from app.database.database import engine
from app.database.models import Base
from app.database.faculty_model import Faculty

# Models
from app.subject.models import Subject
from app.classroom.models import Classroom
from app.student.models import Student
from app.timetable.models import Timetable
from app.attendance.models import Attendance

# Create all tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="CogniClass AI API",
    version="1.0.0"
)

# Register Routers
app.include_router(auth_router)
app.include_router(faculty_router)
app.include_router(subject_router)
app.include_router(classroom_router)
app.include_router(student_router)
app.include_router(timetable_router)
app.include_router(attendance_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {
        "message": "CogniClass AI Backend Running 🚀"
    }