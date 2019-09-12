const express = require('express');
const usuariosRouter = express.Router();
const modelUsuario = require('../../los-primos-db/usuarios.modelo');
let Usuario = require('../modelos/usuarios-model');

usuariosRouter.route('/').get(function(req, res) {
    modelUsuario.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});


usuariosRouter.route('/add').post(function(req, res) {
    let Usuario = new Usuario(req.body);
    modelUsuario.save()
        .then(usuario => {
            res.status(200).json({'usuario': 'usuario added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new usuario failed');
        });
});

module.exports = usuariosRouter;