# Stage 1: Compilación de la aplicación de React
FROM node:18-alpine AS build

WORKDIR /app

# Copiamos package.json y package-lock.json para cachear la instalación de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de los archivos de la aplicación
COPY . .

# Compilamos la aplicación de React
RUN npm run build

# Stage 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiamos los archivos estáticos (el resultado de 'npm run build') al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto por defecto de Nginx
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]