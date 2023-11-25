const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();


//console.log(process.env);




// crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// Directorio Publico
app.use(express.static('public'));

// lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth',require('./routes/auth'))
//TODO: CRUD



// Escuchar peticiones
app.listen(  process.env.PORT, () => {
    console.log(`Servidor  funcionando en el puerto ${process.env.PORT}`)
} )