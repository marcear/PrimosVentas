const express = require('express');
const usuariosRouter = express.Router();
const Usuario = require('../../los-primos-db/usuarios.modelo');
const jwt = require('jsonwebtoken');
const config = require('../config');

usuariosRouter.route('/').get(function(req, res) {
    modelUsuario.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            console.log(todos);
            res.json(todos);
        }
    });
});


usuariosRouter.post('/agregar', async (req, res) => {
    const { nombre, nombreUsuario, password } = req.body;
    const usuario = new Usuario({nombre, nombreUsuario, password});
    await usuario.save();
    res.json({estado: "usuario agregado correctamente"});
})
   
    // usuario.save()
    //     .then(usuario => {
    //         res.status(200).json({'usuario': 'usuario agregado correctamente' + usuario});
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(400).json({"error": "hay error"})
    //     });
//});

usuariosRouter.route('/login').post(function(req, res) {
    const {usuario, password } = req.body;
    res.status(200).json({'Logeado': 'si'});
});

usuariosRouter.route('/autenticacion').post(function(req, res) {
    const { nombre, password } = req.body;

    Usuario.findOne({ nombre }, function(err, usuario) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
          error: 'Error interno, reintentar'
        });
      } else if (!usuario) {
        res.status(401)
          .json({
            error: 'Usuario o email incorrecto'
          });
      }
      else {
        usuario.esPasswordCorrecto(password, function(err, same) {
          if (err) {
            res.status(500)
              .json({
                error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401)
              .json({
                error: 'Incorrect email or password'
            });
          } else {
            // Issue token
            //console.log(config.SECRETO_SESSION);
            //res.status(200).json({secreto: config.SECRETO_SESSION });
            const payload = { nombre };
            const token = jwt.sign(payload, config.SECRETO_SESSION, {
              expiresIn: config.DURACION_SESSION
            });

            res.json(token);
           }
        });
      }
    });
  });


module.exports = usuariosRouter;