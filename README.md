# 🐳 App Full-Stack con Docker (Frontend + Backend)

Questo progetto è una semplice applicazione full-stack containerizzata, composta da un **frontend** e un **backend**, gestiti tramite Docker e Docker Compose.

---

## 📁 Struttura del progetto

.
├── backend/ # Contiene il backend Node.js
│ ├── package.json
│ └── server.js
├── frontend/ # Contiene i file del frontend (HTML/JS o React)
│ └── index.html
├── Dockerfile # Dockerfile multi-stage per backend e frontend
└── docker-compose.yml


---

## 🚀 Come avviare il progetto

### ✅ Prerequisiti

- [Docker](https://www.docker.com/) installato
- [Docker Compose](https://docs.docker.com/compose/) installato

### ▶️ Comandi

1. Clona il repository:

```bash
git clone https://github.com/tuo-username/nome-repository.git
cd nome-repository

docker-compose up --build

