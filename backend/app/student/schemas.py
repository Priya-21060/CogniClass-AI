from pydantic import BaseModel, EmailStr


class StudentCreate(BaseModel):
    roll_number: str
    full_name: str
    email: EmailStr
    department: str
    semester: int
    section: str


class StudentUpdate(BaseModel):
    roll_number: str
    full_name: str
    email: EmailStr
    department: str
    semester: int
    section: str


class StudentResponse(BaseModel):
    id: int
    roll_number: str
    full_name: str
    email: EmailStr
    department: str
    semester: int
    section: str

    class Config:
        from_attributes = True