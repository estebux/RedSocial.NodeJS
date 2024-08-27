// api/index.js
const express = require('express');
const user = require('./components/user/network'); // Ajusta la ruta si es necesario
const config = require('../config.js');

const app = express();

// ... otras configuraciones

app.use('/api/user', user); // Ruta para las operaciones relacionadas con usuarios

app.listen(config.api.port, () => {
  console.log('Servidor escuchando en el puerto ', config.api.port);
});