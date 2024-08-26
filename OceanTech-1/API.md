
### Estado do CRUDhandle
- **Create:** Implementado no componente `Register`, `AddVazamento`.
- **Read:** Implementado nos componentes `Login`, `ForgotPassword`, `UserList`,`fetchVazamentos`.
- **Update:** Implementado no componente `ForgotPassword`,`handleEditVazamento`.
- **Delete:** Implementado no componente `DeleteAccount`, `handleDeleteVazamento`.



## Documentação dos endpoints utilizados nos componentes `Login`, `ForgotPassword`, `UserList`, `Delete`, `Vazamento` e `Register`, juntamente com exemplos de requisição e resposta para cada um deles.

## 1. Endpoint `/users`

### Descrição
Este endpoint é utilizado para recuperar a lista de usuários cadastrados.

### Exemplo de Requisição
- **Método HTTP:** GET
- **URL:** `http://localhost:3000/users`

### Exemplo de Resposta
```json
[
  {
    "id": "1",
    "nome": "Administrador",
    "email": "admin@teste.com",
    "senha": "abc123"
  },
  {
    "id": "4987",
    "nome": "Vini",
    "email": "vini@gmail.com",
    "senha": "123"
  },
  {
    "id": "c5b3",
    "email": "calina@gmail.com",
    "senha": "abc123"
  }
]
```

## 2. Componente `Login`

### Descrição
Este componente realiza a autenticação do usuário.

### Exemplo de Requisição
- **Método HTTP:** GET
- **URL:** `http://localhost:3000/users`
- **Corpo da Requisição:**
```json
{
  "email": "admin@teste.com",
  "senha": "abc123"
}
```

### Exemplo de Resposta
- **Status Code:** 200 OK
```json
{
  "id": "1",
  "nome": "Administrador",
  "email": "admin@teste.com",
  "senha": "abc123"
}
```

## 3. Componente `ForgotPassword`

### Descrição
Este componente é utilizado para atualizar a senha do usuário.

### Exemplo de Requisição
- **Método HTTP:** GET
- **URL:** `http://localhost:3000/users`
- **Corpo da Requisição:**
```json
{
  "email": "admin@teste.com",
  "novaSenha": "nova123"
}
```

### Exemplo de Resposta
- **Status Code:** 200 OK
```json
{
  "id": "1",
  "nome": "Administrador",
  "email": "admin@teste.com",
  "senha": "nova123"
}
```

## 4. Componente `Register`

### Descrição
Este componente é utilizado para cadastrar um novo usuário.

### Exemplo de Requisição
- **Método HTTP:** POST
- **URL:** `http://localhost:3000/users`
- **Corpo da Requisição:**
```json
{
  "nome": "Novo Usuário",
  "email": "novo@teste.com",
  "senha": "nova123"
}
```

### Exemplo de Resposta
- **Status Code:** 201 Created
```json
{
  "id": "3",
  "nome": "Novo Usuário",
  "email": "novo@teste.com",
  "senha": "nova123"
}
```

## 5. Componente `DeleteAccount`

### Descrição
Este componente é utilizado para excluir a conta de um usuário.

### Exemplo de Requisição
- **Método HTTP:** DELETE
- **URL:** `http://localhost:3000/users/:id`
- **Corpo da Requisição:**
```json
{
  "email": "admin@teste.com",
  "senha": "abc123"
}
```

### Exemplo de Resposta
- **Status Code:** 204 No Content

## 6. Componente `UserList`

### Descrição
Este componente é utilizado para listar todos os usuários cadastrados.

### Exemplo de Requisição
- **Método HTTP:** GET
- **URL:** `http://localhost:3000/users`

### Exemplo de Resposta
```json
[
  {
    "id": "1",
    "nome": "Administrador",
    "email": "admin@teste.com",
  },
  {
    "id": "4987",
    "nome": "Vini",
    "email": "vini@gmail.com",
  },
  {
    "id": "c5b3",
    "email": "calina@gmail.com",
  }
]
```

## 7. Endpoint `/vazamentos`

### Descrição
Este endpoint é utilizado para realizar operações CRUD nos vazamentos.

### Exemplo de Requisição
- **Método HTTP:** GET
- **URL:** `http://localhost:3000/vazamentos`

### Exemplo de Resposta
```json
"vazamentos": [
    {
      "title": "Vazamento de oleo",
      "description": "Perto da petrobras, na cede de São Paulo",
      "id": "1"
    },
    {
      "id": "a87d",
      "title": "derramamento de liquido",
      "description": "um liquido marrom, escuro espesso caio na região proximo á copacabana, aparentemente estava vazando de um navio"
    }
  ]
```

### Exemplo de Requisição (Adicionar Vazamento)
- **Método HTTP:** POST
- **URL:** `http://localhost:3000/vazamentos`
- **Corpo da Requisição:**
```json
{
  "title": "Novo Vazamento",
  "description": "Descrição do novo vazamento"
}
```

### Exemplo de Resposta (Adicionar Vazamento)
- **Status Code:** 201 Created
```json
{
  "id": "3",
  "title": "Novo Vazamento",
  "description": "Descrição do novo vazamento"
}
```

### Exemplo de Requisição (Deletar Vazamento)
- **Método HTTP:** DELETE
- **URL:** `http://localhost:3000/vazamentos/:id`

### Exemplo de Resposta (Deletar Vazamento)
- **Status Code:** 204 No Content

