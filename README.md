# Deli Lunch - Proyecto Integrador de Arquitectura Web.
¡Bienvenidos a Deli Lunch! 🧑‍🍳 Esta aplicación permite gestionar productos, pedidos y visualizar reportes desde una interfaz moderna. Fue desarrollada como trabajo práctico de la materia Arquitectura Web. Incluye backend en Node.js con Express y SQLite, y frontend en React, todo bajo el patrón de diseño MVC.

## Estructura del proyecto 📁 
El proyecto está dividido en dos carpetas principales:
- backend: contiene la API RestFul, base de datos y lógica del servidor.
- frontend: contiene la interfaz de usuario en React. 

## Comenzando 🚀
_Las siguintes instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋
Asegurate de tener instalado en tu máquina:
- ✅ Node.js (v18 o superior) – https://nodejs.org
- ✅ npm (v9 o superior) – viene incluido con Node.js

## 🔧 Ejecutar el proyecto paso a paso ▶️

📌 Una vez descomprimido el archivo .zip:

#### Iniciar el backend
1. Abrí la terminal y navegá a la carpeta del backend: cd backend
2. Instalá las dependencias necesarias con npm install 
3. Inicia el servidor backend con npm start 
4. El backend se iniciará en http://localhost:4000 (Podés verificar accediendo desde el navegador). En la consola deberás ver el siguiente mensaje: "Servidor corriendo en http://localhost:4000"

##### !! Atención !!
Si aparece el siguiente error "No se puede cargar el archivo. La ejecución de scripts está deshabilitada en este sistema." Ejecutá el siguiente comando: Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

#### Iniciar el frontend
1. En una segunda terminal (nueva ventana), navegá a la carpeta del frontend: cd frontend
2. Instalá las dependencias necesarias con npm install 
3. Inicia el servidor backend con npm start 
4. 🌐 El navegador se abrirá automáticamente en http://localhost:3000. Podrás ver en consola el siguiente mensaje: "Compiled successfully!
You can now view frontend in the browser. Local:http://localhost:3000"


## Ejecutando las pruebas ⚙️
Para verificar el correcto funcionamiento de la API, se desarrollaron pruebas automáticas con Jest y Supertest:
Desde la carpeta backend, ejecutá el siguiente comando: npx jest
Se correrán los tests definidos en:
- tests/comida.test.js
- tests/pedido.test.js
📂 Los tests comprueban endpoints para listar, crear, editar y eliminar tanto comidas como pedidos, incluyendo reportes de ingresos mensuales.

## Base de datos 🗄️ 
Se utiliza SQLite como base de datos local.
- La base de datos SQLite ya viene incluida en el proyecto (en /backend/db/). No es necesario instalar ni configurar ninguna base externa.

## Observaciones finales ✅ 
1. Asegurate de que los puertos 3000 (frontend) y 4000 (backend) estén libres.
2. Todo el proyecto está listo para ser ejecutado directamente después de descomprimir el archivo ZIP.
3. No es necesario conexión a internet para que funcione (salvo para instalar dependencias con npm).
4. Todas las dependencias necesarias (como Express, React, Jest, etc.) ya están definidas en el archivo package.json. Al ejecutar npm install, se instalarán automáticamente sin necesidad de pasos adicionales.

## 🛠️ Construido con
Estas son las tecnologías utilizadas para el desarrollo del proyecto Deli Lunch:
- ⚙️ [Node.js](https://nodejs.org/) – Entorno de ejecución para el backend.
- 🌐 [Express.js](https://expressjs.com/) – Framework web para construir la API RESTful.
- 🗃️ [SQLite](https://www.sqlite.org/index.html) – Base de datos ligera integrada como archivo local.
- 💻 [React](https://reactjs.org/) – Biblioteca JavaScript para la interfaz de usuario.
- 🎨 [CSS + HTML5 + JSX] – Para construir y estilizar los componentes de la interfaz.
- 🧪 [Jest](https://jestjs.io/) – Framework de testing para JavaScript.
- 🔍 [Supertest](https://github.com/visionmedia/supertest) – Librería para testear endpoints HTTP.
- 📦 [npm](https://www.npmjs.com/) – Manejador de paquetes usado para instalar dependencias.


🎓 Proyecto realizado como parte de la materia Arquitectura Web – 2025
👩‍💻 Desarrolladora: [Magalí Sarmiento]

