const express = require('express');
const cors = require('cors');
const PlayersRouter = require('./routes/players.router.js');

const app = express();

// Leer archivo de configuracion
require('dotenv').config();

// Para poder leer json en el body
app.use(express.json()); 

// Configuración de CORS
app.use(cors());

// Para poder usar los routers
app.use(PlayersRouter);

// Inicio del servidor
const port = 3001;

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}.`);
});

module.exports = app;