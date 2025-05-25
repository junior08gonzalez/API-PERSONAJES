# 🥊 API-TUTORIALES - CRUD de Personajes de Ippo Makunouchi

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express** y **MySQL**, que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los personajes del famoso anime **Hajime no Ippo**, centrado en el protagonista **Ippo Makunouchi** y su mundo del boxeo.

## 🚀 Tecnologías Utilizadas

- ⚙️ **Node.js** – Entorno de ejecución para JavaScript.
- 🔁 **Express.js** – Framework web rápido y minimalista.
- 🗃️ **MySQL** – Base de datos relacional para almacenar los personajes.
- 📦 **body-parser** – Middleware para interpretar el cuerpo de las peticiones HTTP.
- 🔄 **Nodemon** (opcional) – Recarga automática en desarrollo.

## 📁 Estructura del Proyecto

API-TUTORIALES/
├── src/
│ ├── config/
│ │ └── dbConfig.js # Conexión a la base de datos
│ ├── controllers/
│ │ └── personajeController.js
│ ├── models/
│ │ └── personajeModel.js # Lógica de base de datos
│ └── routes/
│ └── personajeRoutes.js # Endpoints de la API
├── index.js # Entrada principal del servidor
└── README.md # Documentación del proyecto
