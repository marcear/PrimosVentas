const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const mongoose = require('mongoose');
const usuariosRoutes = express.Router();

let Usuario = require('./usuarios-model');

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/los_primos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

usuariosRoutes.route('/').get(function(req, res) {
    Usuario.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

usuariosRoutes.route('/add').post(function(req, res) {
    let usuario = new Usuario(req.body);
    usuario.save()
        .then(usuario => {
            res.status(200).json({'usuario': 'usuario added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new usuario failed');
        });
});

app.use('/usuarios', usuariosRoutes);