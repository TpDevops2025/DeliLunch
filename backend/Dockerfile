# Stage 1: Construcción
FROM node:18-alpine AS build

WORKDIR /app

# Copiamos todo el proyecto al contexto de construcción del stage 1
COPY . .

# Instalamos las dependencias
RUN npm install

# Stage 2: Producción
FROM node:18-alpine

WORKDIR /app

# Copiamos solo los archivos necesarios del stage 1 al stage 2
COPY --from=build /app ./

EXPOSE 4000

CMD ["node", "server.js"]