from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from connect import execute_insert, create_connect, execute_query

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/login/{email}/{senha}")
async def login(email : str, senha : str):
    dataBase = r'../BDiccf'
    conn = create_connect(dataBase)
    query = f"""
    select email
    from cadastro
    where email = "{email}"
    """
    linhas = execute_query(conn, query)
    mail = (len(linhas))
    
    query = f"""
    select senha
    from cadastro
    where senha = "{senha}"
    """
    linhas = execute_query(conn, query)
    sen = (len(linhas))
    
    return [mail, sen]