from fastapi import FastAPI
from app.routes import router

app = FastAPI(title="LangChain-Ready FastAPI")

app.include_router(router)