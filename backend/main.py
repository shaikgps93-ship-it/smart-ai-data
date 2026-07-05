from fastapi import FastAPI

app = FastAPI(
    title="AnnotaFlow AI",
    version="0.1.0"
)

@app.get("/")
def root():
    return {
        "status": "running",
        "message": "Welcome to AnnotaFlow AI 🚀"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }