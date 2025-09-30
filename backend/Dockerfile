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

#Configuracion de new relic solo con variables de entorno 
ENV NEW_RELIC_NO_CONFIG_FILE=true 
    #significa que va a correr el agente sin un file de config 
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout

EXPOSE 4000

CMD ["node", "server.js"]