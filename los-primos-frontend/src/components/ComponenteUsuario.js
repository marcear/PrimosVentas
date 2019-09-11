import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ComponenteTabla from './ComponenteTabla';
import {COLUMNAS_USUARIO} from '../config';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function UserComponent() {
    const classes = useStyles();
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
        <div >
            <Fab color="primary" aria-label="add" className={classes.fab}>
                <AddIcon />
            </Fab>
            <ComponenteTabla filas= {usuarios} cols= {COLUMNAS_USUARIO}/>
        </div>
    );
}

export default UserComponent;