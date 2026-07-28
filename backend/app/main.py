from fastapi import FastAPI
from app.auth.router import router as auth_router

app = FastAPI(
    title="CogniClass AI API",
    version="1.0.0"
)

app.include_router(auth_router)

@app.get("/")
def root():
    return {
        "message": "CogniClass AI Backend Running 🚀"
    }