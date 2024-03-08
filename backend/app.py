from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# コンテナ内通信のみで使えるURL
frontend_server_url="http://frontend:5137"
backend_server_url="http://backend:8000"

app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "From Python"}

print("Hello, world!")