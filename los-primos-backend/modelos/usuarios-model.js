const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Usuarios = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    rol: {
        type: String
    },
    nombreUsuario:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
});

module.exports = mongoose.model('Usuarios', Usuarios);