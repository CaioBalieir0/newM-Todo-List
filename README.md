# To-Do List - Desafio Técnico Fullstack

Este é um projeto de lista de tarefas (To-Do List) desenvolvido com **React** , **TypeScript** e **MongoDB** . A aplicação é dividida em duas partes: o **frontend** , que é responsável pela interface do usuário, e o **backend** , que lida com as operações de dados e comunicação com o banco de dados MongoDB.

## Estrutura do Projeto

O projeto está dividido em duas pastas principais:

- `frontend`: Contém o código do cliente (interface do usuário) com **React** e **TypeScript** .
- `backend`: Contém o código do servidor com **Spring Boot** e **MongoDB** para gerenciar as operações CRUD das tarefas.

## Funcionalidades

### 1. **Back-End**

- API para gerenciamento de tarefas.
- Armazenamento das tarefas no MongoDB.
- Funcionalidade de criação, edição, visualização e exclusão de tarefas.

### 2. **Front-End**

- Interface construída com **React** e **TypeScript** .
- Funcionalidades para criação, edição, visualização e exclusão de tarefas.
- Layout responsivo e intuitivo.
- Implementação de níveis de status (não iniciadas, concluidas e em andamento).
- Barra de busca para procurar tarefas por nome.
- Implementação de níveis de prioridade para as tarefas (baixa, média, alta).

## Tecnologias Utilizadas

- **Backend** : Java, Spring Boot, MongoDB
- **Frontend** : React, Next.js, Bootstrap, TypeScript

## Requisitos

Antes de começar, você precisa ter as seguintes dependências instaladas:

- **JDK** **17**
- **npm** ou **yarn**
- **MongoDB** (localmente ou usando o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Instalação

### 1. **Clone o repositório**

Primeiro, clone o repositório para sua máquina local:

```
git clone https://github.com/CaioBalieir0/newM-Todo-List.git
cd newM-Todo-List
```

### 2. **Instale as dependências**

Instale as dependências na raíz do projeto:

```
npm install
```

Em seguida, instale separadamente as dependências do frontend:

- Para o **frontend** :

```
  cd frontend
  npm install
  cd ..
```

### 3. **Rodando o projeto**

Para rodar tanto o frontend quanto o backend com um único comando, use:

```
npm run dev
```

Esse comando irá iniciar os dois servidores simultaneamente:

- O frontend será executado no **Next.js** na porta `3000`.
- O backend será executado com **Spring Boot** na porta `8080`.

## Acesse a aplicação

- Frontend: [http://localhost:3000](http://localhost/3000)
- Backend: [http://localhost:8080/todos](http://localhost:8080/)

## Endpoints da API

| Método | Endpoint        | Descrição                                                                                                |
| ------ | --------------- | -------------------------------------------------------------------------------------------------------- |
| GET    | /todos          | Retorna uma lista de todas as tarefas.                                                                   |
| GET    | /todos/{taskId} | Retorna uma tarefa específica com base no ID fornecido.                                                  |
| POST   | /todos          | Cria uma nova tarefa com base nos dados fornecidos no corpo da requisição.                               |
| PUT    | /todos/{taskId} | Atualiza uma tarefa existente com base no ID fornecido e os novos dados passados no corpo da requisição. |
| DELETE | /todos/{taskId} | Deleta uma tarefa existente com base no ID fornecido.                                                    |

### 4. **Configuração do MongoDB**

Se deseja rodar o MongoDB localmente e ainda não estiver rodando, siga essas instruções

#### Passo 1: Iniciar o MongoDB

#### **Windows:**

1. Abra o **Prompt de Comando** ou o **PowerShell** .
2. Navegue até a pasta onde o MongoDB foi instalado (geralmente em `C:\Program Files\MongoDB\Server\<sua-versão>\bin\`).

```
mongod
```

3. Ou se preferir, conecte-se localmente utilizando a interface do MongoDB Compass.

#### Se deseja rodar o MongoDB Atlas,

Se estiver usando o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), configure a URL de conexão no arquivo `.env` na pasta `backend`:

```
MONGODB_URI=mongodb://<seu-usuario>:<sua-senha>@<endereço-do-mongo>:<porta>/<nome-do-banco>

```
