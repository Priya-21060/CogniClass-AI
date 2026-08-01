from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.classroom.models import Classroom
from app.classroom.schemas import (
    ClassroomCreate,
    ClassroomUpdate,
    ClassroomResponse
)

router = APIRouter(
    prefix="/classrooms",
    tags=["Classrooms"]
)


# CREATE CLASSROOM
@router.post("/", response_model=ClassroomResponse)
def create_classroom(
    classroom: ClassroomCreate,
    db: Session = Depends(get_db)
):
    existing_room = db.query(Classroom).filter(
        Classroom.room_number == classroom.room_number
    ).first()

    if existing_room:
        raise HTTPException(
            status_code=400,
            detail="Room number already exists"
        )

    new_classroom = Classroom(
        room_number=classroom.room_number,
        building=classroom.building,
        floor=classroom.floor,
        capacity=classroom.capacity
    )

    db.add(new_classroom)
    db.commit()
    db.refresh(new_classroom)

    return new_classroom


# GET ALL CLASSROOMS
@router.get("/", response_model=list[ClassroomResponse])
def get_all_classrooms(
    db: Session = Depends(get_db)
):
    return db.query(Classroom).all()


# GET CLASSROOM BY ID
@router.get("/{classroom_id}", response_model=ClassroomResponse)
def get_classroom(
    classroom_id: int,
    db: Session = Depends(get_db)
):
    classroom = db.query(Classroom).filter(
        Classroom.id == classroom_id
    ).first()

    if classroom is None:
        raise HTTPException(
            status_code=404,
            detail="Classroom not found"
        )

    return classroom


# UPDATE CLASSROOM
@router.put("/{classroom_id}", response_model=ClassroomResponse)
def update_classroom(
    classroom_id: int,
    updated: ClassroomUpdate,
    db: Session = Depends(get_db)
):
    classroom = db.query(Classroom).filter(
        Classroom.id == classroom_id
    ).first()

    if classroom is None:
        raise HTTPException(
            status_code=404,
            detail="Classroom not found"
        )

    classroom.room_number = updated.room_number
    classroom.building = updated.building
    classroom.floor = updated.floor
    classroom.capacity = updated.capacity

    db.commit()
    db.refresh(classroom)

    return classroom


# DELETE CLASSROOM
@router.delete("/{classroom_id}")
def delete_classroom(
    classroom_id: int,
    db: Session = Depends(get_db)
):
    classroom = db.query(Classroom).filter(
        Classroom.id == classroom_id
    ).first()

    if classroom is None:
        raise HTTPException(
            status_code=404,
            detail="Classroom not found"
        )

    db.delete(classroom)
    db.commit()

    return {
        "message": "Classroom deleted successfully"
    }