from pydantic import BaseModel


class ClassroomCreate(BaseModel):
    room_number: str
    building: str
    floor: int
    capacity: int


class ClassroomUpdate(BaseModel):
    room_number: str
    building: str
    floor: int
    capacity: int


class ClassroomResponse(BaseModel):
    id: int
    room_number: str
    building: str
    floor: int
    capacity: int

    class Config:
        from_attributes = True