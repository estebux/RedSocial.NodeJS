const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const router = require('./network');

const app = express();

app.use(bodyParser.json());

//routes
app.use('/', router);

app.listen(config.cacheService.port, () => {
    console.log('Servicio caché redis de mysql escuchando en el puerto', config.cacheService.port);
});