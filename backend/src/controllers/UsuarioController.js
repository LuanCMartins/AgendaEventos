const usuarios = require('../models/usuarios');
const Usuario = require ('../models/usuarios')

module.exports = {
    async armazenar(req, res) {
        const { login } = req.body;

        const userExists = await Usuario.findOne({ login : login });

        if (userExists) {
            return res.json(userExists);
        }

        const usuario = await Usuario.create({
            login : req.body.login,
            senha : req.body.senha,
            nome : req.body.nome
        })
        
        return res.json(usuario);
    }
};