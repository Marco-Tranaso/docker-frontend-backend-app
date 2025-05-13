# Dockerfile

# Build del backend
FROM node:16 AS backend

WORKDIR /app
COPY backend/package.json /app/
RUN npm install
COPY backend /app/

# Build del frontend
FROM nginx:alpine AS frontend

WORKDIR /usr/share/nginx/html
COPY frontend /usr/share/nginx/html

# Esporre la porta per il server Nginx
EXPOSE 80

# Configurazione finale
FROM backend AS final

EXPOSE 3000

CMD ["node", "app.js"]
