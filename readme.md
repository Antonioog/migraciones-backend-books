<p align="center">
  <a href="https://expressjs.com/" target="blank"><img src="https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png" width="200" alt="Nest Logo" /></a>
</p>

#Book Api

##Descripción del proyecto

Este proyecto es una aplicación web que te permite crear autores, libros y subir imágenes de los libros. La aplicación está construida usando Node.js y Express, y utiliza una base de datos PostgreSQL para almacenar la información de los autores y los libros.

##Características principales

1. Crear autores: Puedes crear autores con información como nombre, apellido, fecha de nacimiento, foto y biografía.
2. Crear libros: Puedes crear libros y vincularlos a un autor específico. La información del libro incluye título, fecha de publicación, descripción
3. Subir imágenes: La aplicación te permite subir imágenes de portada de libros y almacenarlas en la base de datos.

##Tecnologías utilizadas

Express: Un framework minimalista de Node.js que facilita la creación de aplicaciones web y APIs.

##Express-rate-limit: Middleware de Express que limita la cantidad de solicitudes que un cliente puede hacer en un período de tiempo especificado.

##Express-validator: Middleware de Express que valida los datos de entrada antes de que se procesen.

##Firebase: Una plataforma de desarrollo de aplicaciones móviles y web que proporciona herramientas para crear, mejorar y hacer crecer aplicaciones.

##Helmet: Middleware de Express que ayuda a proteger la aplicación de varias vulnerabilidades web mediante la configuración adecuada de las cabeceras HTTP.

##HPP: Middleware de Express que previene los ataques de envenenamiento de parámetros HTTP.

##Morgan: Middleware de Express que registra solicitudes HTTP para el registro y análisis.

##Multer: Middleware de Express que maneja la carga de archivos multipart/form-data.

##PostgreSQL: Un sistema de gestión de bases de datos relacionales de código abierto.

##Sequelize: Un ORM (Object-Relational Mapping) para bases de datos SQL que simplifica la interacción con la base de datos y proporciona una capa de abstracción sobre SQL.

##XSS-clean: Middleware de Express que limpia las entradas de usuario para evitar ataques de XSS (cross-site scripting).

##Requeisitos previos
Antes de ejecutar el proyecto, asegúrate de tener instalado Node.js, PostgreSQL, nodemon en tu máquina.

##Cómo ejecutar el proyecto

Clonar el proyecto
Ejecutar npm install
Clonar el archivo .env.template y renombrarlo a .env
Cambiar las variables de entorno
Levantar la base datos
Levantar el modo de desarrollo: npm run start:dev