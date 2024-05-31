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

@app.post("/cadastro")
async def cadastro(request: Request):
    json = await request.json()
    dataBase = r'../BDiccf'
    conn = create_connect(dataBase)
    query = f"""
    select email, telefone
    from cadastro
    where email = "{json['email']}" or telefone = "{json['telefone']}"
    """
    linhas = execute_query(conn, query)
    msg = 0
    if len(linhas) == 0:
        query = f"""
        insert into cadastro (nome, sobrenome, email, datanasc, telefone, senha)
        VALUES("{json['nome']}","{json['sobrenome']}","{json['email']}","{json['datanasc']}","{json['telefone']}","{json['senha']}")
        """
        execute_insert(conn, query)
    else:
        print('Já existe')
        msg = 'jaexiste'
        
    return msg