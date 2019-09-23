const entidades = require('mongoose');
const Schema = entidades.Schema;
const bcrypt = require('bcrypt');

let EsquemaUsuario = new Schema({
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
    },
    password: {
        type: String,
        required: true
    }
});

EsquemaUsuario.pre('save', function(next) {
    // Hash de contraseña
    if (this.isNew || this.isModified('password')) {
      const document = this;
      bcrypt.hash(document.password, 10,
        function(err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
    } else {
      next();
    }
  });

  EsquemaUsuario.methods.esPasswordCorrecto = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same) {
        if (err) {
        callback(this.password);
        callback(err);
        } else {
        callback(err, same);
        }
    });
}

module.exports = entidades.model('Usuario', EsquemaUsuario);