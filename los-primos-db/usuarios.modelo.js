const entidades = require('mongoose');
const Schema = entidades.Schema;

let EsquemaUsuarios = new Schema({
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

module.exports = entidades.model('Usuarios', EsquemaUsuarios);