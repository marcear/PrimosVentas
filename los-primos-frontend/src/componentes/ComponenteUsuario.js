import React from 'react';
import {useState, useEffect} from 'react';
import ComponenteTabla from './ComponenteTabla';
import {COLUMNAS_USUARIO} from '../config';
import axios from 'axios';


function ComponenteUsuario(props) {
    const[usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/usuarios')
        .then(res => {
            setUsuarios(res.data)
        })
        .catch(e => {
            console.log(e)
        });
      },[]);

    return(
        <div>
            <ComponenteTabla filas= {usuarios} cols= {COLUMNAS_USUARIO}/>
        </div>
    );
}

export default ComponenteUsuario;