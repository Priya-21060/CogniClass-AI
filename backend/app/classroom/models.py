from sqlalchemy import Column, Integer, String

from app.database.database import Base


class Classroom(Base):
    __tablename__ = "classrooms"

    id = Column(Integer, primary_key=True, index=True)

    room_number = Column(
        String,
        unique=True,
        nullable=False
    )

    building = Column(
        String,
        nullable=False
    )

    floor = Column(
        Integer,
        nullable=False
    )

    capacity = Column(
        Integer,
        nullable=False
    )