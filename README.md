# 🐳 Docker Full-Stack Application

Questo progetto è una **web application full-stack** che utilizza **Docker** per eseguire sia il **frontend** che il **backend** in container separati, gestiti tramite **Docker Compose**. 

## 🧑‍💻 Cosa fa il progetto?

Questa applicazione è composta da due parti principali:

- **Backend**: un'applicazione Node.js che fornisce un'API. Si occupa di gestire le richieste HTTP e restituire dati o rispondere alle operazioni.
- **Frontend**: un'applicazione web che comunica con il backend per visualizzare i dati. Può essere un'applicazione HTML semplice o un'app React.

Entrambe le applicazioni sono containerizzate utilizzando Docker, e la configurazione dei container è gestita tramite **Docker Compose**.

## 🚀 Funzionalità principali

- **Frontend**: un'interfaccia web che può essere servita tramite Nginx o un'app React.
- **Backend**: un'applicazione Node.js che espone una semplice API per il frontend.
- **Docker**: ciascun servizio è eseguito in un container isolato, garantendo un ambiente consistente e facilmente configurabile su qualsiasi sistema.
