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

#Argumentos para newrelic 
ARG NEW_RELIC_APP_NAME
ARG NEW_RELIC_LICENSE_KEY
# Copiamos solo los archivos necesarios del stage 1 al stage 2
COPY --from=build /app ./

#Convertimos los argumentos en variables de entorno para que node los lea
ENV NEW_RELIC_APP_NAME=$NEW_RELIC_APP_NAME
    #nombre de la app
ENV NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY
    #license key de la app


# Configuracion de new relic solo con variables de entorno 
ENV NEW_RELIC_NO_CONFIG_FILE=true 
    #significa que va a correr el agente sin un file de config  - parametro dado por new relic
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
    #tracing activado - parametro dado por new relic
ENV NEW_RELIC_LOG=stdout
    #logs a la consola - parametro dado por new relic

EXPOSE 4000

CMD ["node", "server.js"]