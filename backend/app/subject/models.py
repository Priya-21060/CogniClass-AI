from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base


class Subject(Base):
    __tablename__ = "subjects"

    id = Column(Integer, primary_key=True, index=True)

    subject_name = Column(
        String,
        nullable=False
    )

    subject_code = Column(
        String,
        unique=True,
        nullable=False
    )

    semester = Column(
        Integer,
        nullable=False
    )

    credits = Column(
        Integer,
        nullable=False
    )

    department = Column(
        String,
        nullable=False
    )

    faculty_id = Column(
        Integer,
        ForeignKey("faculty.id"),
        nullable=False
    )

    faculty = relationship("Faculty")