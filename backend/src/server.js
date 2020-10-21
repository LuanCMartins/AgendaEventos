const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://administrador:0550@agendaeventos.kfr6i.mongodb.net/agendaeventos?retryWrites=true&w=majority', {
    useNewUrlParser : true
});

server.use(express.json());
server.use(routes);

server.listen(3333);