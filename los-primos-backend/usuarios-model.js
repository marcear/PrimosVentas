const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Usuarios = new Schema({
    nombre: {
        type: String
    },
    rol: {
        type: String
    }
});

module.exports = mongoose.model('Usuarios', Usuarios);