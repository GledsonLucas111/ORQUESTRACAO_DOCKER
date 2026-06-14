

# Todo List - Next.js + Prisma + PostgreSQL (Docker Compose)

Este projeto é uma aplicação web de lista de tarefas (Todo List) desenvolvida como parte da Atividade Prática Avaliativa. A aplicação utiliza Next.js no front-end, Prisma como ORM para a comunicação com o banco de dados e PostgreSQL para a persistência das informações, sendo totalmente orquestrada utilizando Docker Compose.

## 🚀 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
* Git
* Docker e Docker Compose instalado no ambiente (recomendado uso de WSL2 no Windows)


## 🛠️ Passo a Passo para Inicialização

Siga a lista exata de comandos abaixo no terminal do seu ambiente para clonar e rodar o projeto do zero:

### 1. Clonar o Repositório
```bash
git clone <URL_DO_SEU_REPOSITORIO_AQUI>
cd todo_list

```

### 2. Configurar as Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para proteger os dados de conexão com o banco. Copie o arquivo de exemplo para criar o seu arquivo `.env`:

```bash
cp .env.example .env

```

*(Abra o arquivo `.env` gerado e ajuste as credenciais se achar necessário).*

### 3. Subir os Containers do Ambiente

Execute o comando abaixo para construir a imagem do Next.js e iniciar os serviços do banco de dados e da aplicação em segundo plano:

```bash
docker compose up -d --build

```

### 4. Sincronizar o Banco de Dados (Prisma)

Como o banco de dados PostgreSQL inicia completamente vazio no Docker, execute o comando abaixo para criar as tabelas necessárias utilizando o Prisma diretamente por dentro do container web:

```bash
docker exec -it nextjs-todo npx prisma db push

```

---

## 💻 Acessando a Aplicação

Após a execução dos passos acima, a aplicação estará pronta e disponível no seu navegador:

* **Front-end / API:** [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

---

## 🧰 Comandos Úteis de Gerenciamento

* **Visualizar os logs em tempo real:**
```bash
docker compose logs -f web

```


* **Apenas pausar os containers (sem perder os dados):**
```bash
docker compose stop

```


* **Retomar os containers pausados:**
```bash
docker compose start

```


* **Derrubar e destruir os containers e redes locais:**
```bash
docker compose down

```


* **Derrubar o ambiente limpando totalmente os volumes (para testes do zero):**
```bash
docker compose down -v

```
