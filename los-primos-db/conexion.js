const entidades = require('mongoose');
const PORT = process.env.PORT || 4000;
const URL = "mongodb://127.0.0.1:27017/los_primos";


const conexion = entidades.connect(URL, {useNewUrlParser: true });

conexion
    .then(db => console.log("Se conectó bien"))
    .catch(err => console.log("Problema al conectarse a la base de datos"));

module.exports = entidades;
