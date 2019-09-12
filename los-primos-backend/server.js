const express = require('express');
const app = express();
const cors = require('cors');
const { entidades } = require('../los-primos-db/conexion');
const {usuariosRoutes} = require('./rutas/ruta.usuarios');
debugger;
app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 4000)
app.use('/usuarios',require('./rutas/ruta.usuarios'));

app.listen(app.get('port'),()=>{
    console.log("Servidor eschuchando en el puerto " + app.get('port'));
})
//app.use('/usuarios', usuariosRoutes);