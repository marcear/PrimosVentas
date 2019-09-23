const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { entidades } = require('../los-primos-db/conexion');

app.set('port', process.env.PORT || 4000);
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/usuarios', require('./rutas/ruta.usuarios'));

app.listen(app.get('port'),()=>{
    console.log("Servidor eschuchando en el puerto " + app.get('port'));
});