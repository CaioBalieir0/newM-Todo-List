# To-Do List - Desafio Técnico Fullstack

Este é um projeto de lista de tarefas (To-Do List) desenvolvido com **React** , **TypeScript**, **MongoDB** e **Spring Boot** . A aplicação é dividida em duas partes: o **frontend** , que é responsável pela interface do usuário, e o **backend** , que lida com as operações de dados e comunicação com o banco de dados MongoDB.

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
- **Node 20**
- **MongoDB** (localmente ou usando o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Maven** (Ou utilizar alguma IDE com o Maven já instalado, por exemplo IntelliJ)

## Instalação

### 1. **Clone o repositório**

Primeiro, clone o repositório para sua máquina local:

```
git clone https://github.com/CaioBalieir0/newM-Todo-List.git
cd newM-Todo-List
```

### 2. **Instale as dependências**

Instale as dependências na pasta `frontend `do projeto:

```
cd frontend
npm install
```

### 3. **Rodando o projeto**

#### Passos para Rodar o Backend

1. **Navegue até a pasta do backend:**
   No terminal, vá até a pasta `backend` do seu projeto:

   ```
   cd backend
   ```

2. **Instale as dependências do backend:**
   Instale com o **Maven**:

   ```
   mvn install
   ```
   Caso o Maven não esteja instalado, você pode usar o Maven Wrapper (mvnw), que vem com o projeto, e não precisa instalar o Maven manualmente. Para isso, rode:
    ```
    mvnw install
    ```
   Esse comando vai garantir que todas as dependências do projeto sejam baixadas.

3. **Rodar o Backend:**
   Para iniciar o servidor Spring Boot, execute o seguinte comando:

   ```
   mvnw spring-boot:run
   ```

   Isso vai iniciar o backend na **porta 8080** .

#### Passos para Rodar o Frontend

1. **Navegue até a pasta do frontend:**
   No terminal, vá até a pasta `frontend` do seu projeto:

   ```
   cd frontend
   ```

2. **Instale as dependências do frontend:**
   Instale com o **npm**:

   ```
   npm install
   ```

   Esse comando vai garantir que todas as dependências do projeto sejam baixadas.

3. **Rodar o frontend:**
   Para iniciar o servidor Next, execute o seguinte comando:

   ```
   npm run dev
   ```

   Isso vai iniciar o backend na **porta 3000** .

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

Se deseja rodar o MongoDB localmente e ainda não estiver rodando, siga essas instruções:

#### Passo 1: Iniciar o MongoDB

Para iniciar o MongoDB localmente, abra o [MongoDB Compass](https://www.mongodb.com/products/tools/compass) e se conecte à sua base de dados local, ou se preferir siga as seguintes instruçoes de como rodar localmente no Windows sem ultilizar o MongoDB Compass:

##### **Windows:**

1. Abra o **Prompt de Comando** ou o **PowerShell** .
2. Navegue até a pasta onde o MongoDB foi instalado (geralmente em `C:\Program Files\MongoDB\Server\<sua-versão>\bin\`).

```
mongod
```

#### Se deseja rodar o MongoDB Atlas,

Se estiver usando o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), que armazena os dados em nuvem, configure a URL de conexão no arquivo `.application.properties`, na pasta `\backend\src\main\resources`:

```
spring.data.mongodb.uri=//<seu-usuario>:<sua-senha>@<endereço-do-mongo>:<porta>/<nome-do-banco>

```
