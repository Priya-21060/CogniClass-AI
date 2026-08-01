from datetime import time
from pydantic import BaseModel


class TimetableCreate(BaseModel):
    faculty_id: int
    subject_id: int
    classroom_id: int
    day: str
    start_time: time
    end_time: time
    semester: int
    section: str


class TimetableUpdate(BaseModel):
    faculty_id: int
    subject_id: int
    classroom_id: int
    day: str
    start_time: time
    end_time: time
    semester: int
    section: str


class TimetableResponse(BaseModel):
    id: int
    faculty_id: int
    subject_id: int
    classroom_id: int
    day: str
    start_time: time
    end_time: time
    semester: int
    section: str

    class Config:
        from_attributes = True