# Stage 1: Construcción
FROM node:20-alpine AS build

WORKDIR /app

# COPIA SIN OPTIMIZACION FINAL
    # Copiamos todo el proyecto al contexto de construcción del stage 1
    #COPY . .

    # Instalamos las dependencias
    #RUN npm install

# COPIA pero optimizada
COPY package*.json ./
# copia solo los archivos de dependencias de node primero, que estan marcadas en el json
RUN npm ci
# ci es un comando de npm, mejor que install
COPY . .
# ahora sí copio todo el código

# Stage 2: Producción
FROM node:20-alpine

WORKDIR /app

# Argumentos para New Relic 
ARG NEW_RELIC_APP_NAME
ARG NEW_RELIC_LICENSE_KEY

# Copiamos solo los archivos necesarios del stage 1 al stage 2
COPY --from=build /app ./

RUN npm cache clean --force
# limpia el cache de archivos temporales 

# VARIABLES DE ENTORNO OPTIMIZADAS -> 1 SOLA LINEA
ENV NEW_RELIC_APP_NAME=$NEW_RELIC_APP_NAME \
    # Convertimos los argumentos en variables de entorno para que node los lea 
    # nombre de la app
    NEW_RELIC_LICENSE_KEY=$NEW_RELIC_LICENSE_KEY \
    # license key de la app
    # Configuracion de new relic solo con variables de entorno 
    NEW_RELIC_NO_CONFIG_FILE=true \
    # significa que va a correr el agente sin un file de config  - parametro dado por new relic
    NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true \
    # tracing activado - parametro dado por new relic
    NEW_RELIC_LOG=stdout \
    # logs a la consola - parametro dado por new relic
    PORT=4000

# Asignamos permisos al directorio de trabajo para el usuario 'node'
RUN chown -R node:node /app

# Ejecutar como usuario sin privilegios (mejor práctica de seguridad)
USER node

EXPOSE 4000

CMD ["node", "server.js"]
