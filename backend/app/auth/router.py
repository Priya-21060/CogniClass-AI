from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.auth.schemas import UserRegister, UserLogin
from app.auth.security import hash_password
from app.database.dependencies import get_db
from app.database.models import User

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.get("/health")
def auth_health():
    return {"message": "Authentication module is working!"}


@router.post("/register")
def register(user: UserRegister, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        return {"message": "Email already registered"}

    new_user = User(
        full_name=user.full_name,
        email=user.email,
        hashed_password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully!",
        "user_id": new_user.id,
        "email": new_user.email
    }


@router.post("/login")
def login(user: UserLogin):
    return {
        "message": "Login request received successfully!",
        "email": user.email
    }