# 📘 Sistema de Login Local (React + TypeScript)

Este projeto consiste na implementação de um **sistema de Login e Registro totalmente funcional**, utilizando apenas **armazenamento local** (um array em memória e LocalStorage).  
Foi desenvolvido para atender aos requisitos da disciplina de **Interação Humano-Computador (IHC)**, com foco em **usabilidade**, **experiência do usuário** e **percepção de segurança**, sem necessidade de back-end ou internet.

---

## 🎯 Objetivo do Projeto

Criar um sistema simples de autenticação que permita:

- Registrar um novo usuário  
- Realizar login com validação local  
- Exibir feedback ao usuário  
- Simular fluxo real de um sistema, mas **funcionando totalmente offline**

O foco do projeto está na **facilidade de uso**, **clareza**, **feedback visual**, e **boa experiência para o usuário**, conforme os princípios de IHC.

---

# 🚀 Demonstração da Interface

*(Adicione prints aqui depois)*

---

# 🧩 Funcionalidades

### ✔ Registro de Usuário  
- Nome  
- Email  
- Senha  
- Campos validados localmente  
- Feedback informando sucesso ou erros  

### ✔ Login  
- Valida credenciais usando array armazenado localmente  
- Exibe mensagens claras caso o usuário erre email/senha  
- Mantém a experiência fluida

### ✔ Salvamento dos dados  
- Usuários são armazenados em:
  - **Array interno do sistema**
  - **LocalStorage** (para persistência mesmo recarregando a página)

### ✔ Feedback ao usuário  
- Mensagens coloridas  
- Alertas de validação  
- Confirmação visual  

### ✔ Funcionamento offline  
- Nenhuma dependência externa  
- Totalmente funcional localmente  

---

# 🧪 Metas de Usabilidade (Obrigatórias)

A interface foi desenhada considerando as seguintes metas:

### 🔹 Fácil de lembrar como usar
Layout simples com apenas duas telas: Login e Registro.

### 🔹 Fácil de entender
Labels claros, mensagens diretas e feedback visual imediato.

### 🔹 Útil
Simula um fluxo real de autenticação, mesmo sem back-end.

### 🔹 Seguro (Percepção do usuário)
- Senha oculta  
- Campos obrigatórios  
- Design que transmite profissionalismo  

### 🔹 Eficiente
Poucos passos para concluir ações, fluxo rápido e direto.

---

# 🎨 Metas de Experiência (5 escolhidas)

### 🎉 1. Divertido
Interface leve e amigável.

### ❤️ 2. Emocionalmente adequado
Mensagens positivas e acolhedoras.

### ✨ 3. Esteticamente apreciável
Design clean com alinhamentos perfeitos e boa tipografia.

### 🚀 4. Motivador
Feedback positivo ao completar ações.

### ⭐ 5. Satisfatório
O usuário consegue realizar tudo de forma simples e clara.

---

# 🛠 Tecnologias Utilizadas

- **React (Vite)**  
- **TypeScript**  
- **TailwindCSS**  
- **LocalStorage**  

---

# 📂 Estrutura do Projeto

src/

├── components/

│ ├── Login.tsx

│ └── Register.tsx

├── user.ts

├── App.tsx

├── main.tsx

└── index.css


---

# ▶ Instruções de Execução

### 1️⃣ Clonar o repositório
```
git clone https://github.com/seu-repositorio/login-local
```
### 2️⃣ Instalar dependências
```
npm install
```
### 3️⃣ Rodar o projeto
```
npm run dev
```
### 4️⃣ Acessar no navegador

http://localhost:5173/

---

# 📝 Sobre a Validação Local

Os usuários são armazenados em um array básico:

```ts
export const users = [
  {
    name: "exemplo",
    email: "teste@teste.com",
    password: "123456"
  }
]
````
E também gravados em:
```
localStorage["users"]
```
Assim, mesmo ao atualizar a página, os dados continuam.
