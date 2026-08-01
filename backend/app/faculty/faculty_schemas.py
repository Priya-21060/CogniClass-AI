from pydantic import BaseModel, EmailStr


class FacultyCreate(BaseModel):
    full_name: str
    email: EmailStr
    employee_id: str
    department: str
    designation: str


class FacultyUpdate(BaseModel):
    full_name: str
    email: EmailStr
    employee_id: str
    department: str
    designation: str


class FacultyResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    employee_id: str
    department: str
    designation: str

    class Config:
        from_attributes = True