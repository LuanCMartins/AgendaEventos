const express = require('express');
const UsuarioContoller = require('./controllers/UsuarioController');
const routes = express.Router();

routes.post('/cadastroUsuario', UsuarioContoller.armazenar);

module.exports = routes;