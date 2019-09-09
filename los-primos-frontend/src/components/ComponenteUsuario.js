import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useState, useEffect} from 'react';
import ComponenteTabla from './ComponenteTabla';
import {COLUMNAS_USUARIO} from '../config';
import axios from 'axios';


function UserComponent() {
    const[usuarios, setUsuarios] = useState([]);

    let cols = 
    [
        { id:1, nombre:"nombre"}, {id:2,nombre:"rol"}
    ];

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
        <div >
            <ComponenteTabla filas= {usuarios} cols= {COLUMNAS_USUARIO}/>
        </div>
    );
}

export default UserComponent;