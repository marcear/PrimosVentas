import axios from 'axios';

export const loginUsuario = (usuario)=> {

    return new axios.post('http://localhost:4000/usuarios/autenticacion',{
        nombre: usuario.nombre,
        password: usuario.contraseña
    })
    .then(res => {
      return res;
    })
    .catch(e => {
        console.log(e)
    });
};