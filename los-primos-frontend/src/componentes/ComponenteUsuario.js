import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ComponenteTabla from './ComponenteTabla';
import {COLUMNAS_USUARIO} from '../config';
import axios from 'axios';


function UserComponent() {
    //const classes = useStyles();
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

export default UserComponent;