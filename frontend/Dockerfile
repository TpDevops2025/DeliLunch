# Stage 1: Compilación de la aplicación de React
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Servir la app con Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

LABEL org.opencontainers.image.source="https://github.com/TpDevops2025/DeliLunch" \
      org.opencontainers.image.description="DeliLunch Frontend - React App" \
      org.opencontainers.image.authors="Magali Sarmiento" \
      org.opencontainers.image.licenses="MIT"

COPY --from=build --chown=nginx:nginx /app/build .

EXPOSE 80

# Ejecutamos con usuario sin privilegios
USER nginx

CMD ["nginx", "-g", "daemon off;"]
