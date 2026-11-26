# JJK Catálogo — Backend

## Sobre o projeto

A API permite cadastrar, listar, editar e excluir personagens de Jujutsu Kaisen, armazenando os dados no MongoDB.

## Tecnologias utilizadas

- Node.js
- JavaScript
- Express
- Mongoose
- MongoDB

## Estrutura do projeto

- src/config/database.js — conexão com o MongoDB
- src/models/Personagem.js — modelo de dados
- src/controllers/personagemController.js — operações do CRUD
- src/routes/personagemRoutes.js — rotas da API
- src/server.js — configuração e inicialização do servidor

## Como executar

1. Clone o repositório.
2. Abra a pasta do projeto no terminal.
3. Instale as dependências:

   npm install

4. Crie um arquivo .env seguindo o modelo .env.example.
5. Configure a string de conexão do seu MongoDB.
6. Inicie o servidor:

   npm start

7. Acesse http://localhost:3000 para verificar se a API está funcionando.

## Endpoints

| Método | Rota | Operação |
|---|---|---|
| POST | /api/personagens | Cadastrar |
| GET | /api/personagens | Listar |
| PUT | /api/personagens/:id | Editar |
| DELETE | /api/personagens/:id | Excluir |

## Entidade Personagem

- _id: identificador gerado pelo MongoDB.
- nome: texto obrigatório.
- descricao: texto opcional.