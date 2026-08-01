from sqlalchemy import Column, Integer, String

from app.database.database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)

    roll_number = Column(
        String,
        unique=True,
        nullable=False
    )

    full_name = Column(
        String,
        nullable=False
    )

    email = Column(
        String,
        unique=True,
        nullable=False
    )

    department = Column(
        String,
        nullable=False
    )

    semester = Column(
        Integer,
        nullable=False
    )

    section = Column(
        String,
        nullable=False
    )