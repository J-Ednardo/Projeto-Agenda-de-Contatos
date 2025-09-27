# Projeto Agenda de Contatos

Uma aplicação web completa para gerenciamento de contatos pessoais. Desenvolvida como parte de um estudo sobre desenvolvimento full-stack com Node.js, a agenda permite que usuários se cadastrem, façam login e gerenciem sua própria lista de contatos de forma segura e privada.

## ✨ Funcionalidades Principais

*   **Autenticação de Usuários:** Sistema seguro de cadastro e login, com senhas criptografadas.
*   **Gerenciamento de Contatos (CRUD):** Crie, visualize, edite e exclua contatos.
*   **Privacidade de Dados:** Cada usuário tem acesso apenas aos contatos que ele mesmo criou.
*   **Segurança:**
    *   Proteção contra ataques CSRF (Cross-Site Request Forgery) em todos os formulários.
    *   Validação de dados tanto no frontend (para uma melhor experiência do usuário) quanto no backend (para garantir a integridade dos dados).
*   **Interface Intuitiva:** Mensagens de feedback (sucesso e erro) para orientar o usuário.

## 🚀 Tecnologias Utilizadas

### Backend
*   **Node.js:** Ambiente de execução JavaScript no servidor.
*   **Express.js:** Framework para construção de aplicações web e APIs.
*   **MongoDB:** Banco de dados NoSQL orientado a documentos.
*   **Mongoose:** ODM (Object Data Modeling) para modelagem dos dados da aplicação com o MongoDB.
*   **EJS (Embedded JavaScript):** Template engine para renderizar as páginas HTML com dados dinâmicos.
*   **express-session & connect-mongo:** Gerenciamento de sessões de usuário, armazenadas no MongoDB.
*   **bcryptjs:** Biblioteca para criptografia de senhas (hashing).
*   **csurf:** Middleware para proteção contra ataques CSRF.
*   **dotenv:** Para gerenciamento de variáveis de ambiente.

### Frontend
*   **JavaScript (ES6+):** Validação de formulários e interatividade.
*   **Webpack & Babel:** Ferramentas para "transpilar" e empacotar o código JavaScript moderno para ser compatível com a maioria dos navegadores.
*   **core-js & regenerator-runtime:** Polyfills para garantir a compatibilidade de funcionalidades modernas do JavaScript em navegadores mais antigos.
*   **CSS3:** Estilização da aplicação.

## ⚙️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em seu ambiente local.

### Pré-requisitos

*   [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
*   [MongoDB](https://www.mongodb.com/try/download/community) (servidor local ou um cluster no MongoDB Atlas)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-seu-repositorio>
    cd Projeto-Agenda-de-Contatos
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes variáveis, substituindo pelos seus valores:
    ```env
    CONNECTIONSTRING=mongodb://usuario:senha@host:porta/banco_de_dados
    SESSION_SECRET=umsegredomuitoseguroedificildeadivinhar
    ```

4.  **Inicie o servidor:**
    ```bash
    npm start
    ```

5.  **Acesse a aplicação:**
    Abra seu navegador e acesse `http://localhost:3001`.
