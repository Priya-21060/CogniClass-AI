from pydantic import BaseModel, EmailStr


# User Registration Schema
class UserRegister(BaseModel):
    full_name: str
    email: EmailStr
    password: str


# User Login Schema
class UserLogin(BaseModel):
    email: EmailStr
    password: str