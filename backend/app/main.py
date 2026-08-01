from fastapi import FastAPI

# Routers
from app.auth.router import router as auth_router
from app.faculty.router import router as faculty_router
from app.subject.router import router as subject_router
from app.classroom.router import router as classroom_router
from app.student.router import router as student_router

# Database
from app.database.database import engine
from app.database.models import Base
from app.database.faculty_model import Faculty

# Models
from app.subject.models import Subject
from app.classroom.models import Classroom
from app.student.models import Student

# Create all tables
Base.metadata.create_all(bind=engine)

# FastAPI App
app = FastAPI(
    title="CogniClass AI API",
    version="1.0.0"
)

# Routers
app.include_router(auth_router)
app.include_router(faculty_router)
app.include_router(subject_router)
app.include_router(classroom_router)
app.include_router(student_router)


@app.get("/")
def root():
    return {
        "message": "CogniClass AI Backend Running 🚀"
    }