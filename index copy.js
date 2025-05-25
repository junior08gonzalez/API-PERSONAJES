const express = require('express');
const bodyParser = require('body-parser');
const personajeRoutes = require('./src/routes/personajeRoutes');

const app = express();
const port = 3002;

app.use(bodyParser.json());

//Rutas

app.use('/api/personajes', personajeRoutes);

//Iniciar el servidor

app.listen(port,()=>{
    console.log("Servicio corriendo en http://localhost"+port);
});

