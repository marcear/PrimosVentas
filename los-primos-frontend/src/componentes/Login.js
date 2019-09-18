//React
import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

//Material ui
import {FormControl, InputLabel, Input, FormHelperText, Grid, Paper, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1,
        padding: theme.spacing(20)
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(10),
      },
      input: {
          width:'75%'
      },
      button: {
          marginTop: theme.spacing(3)
      }
}));

function Login(props) {
    debugger;
    const classes = useStyles();
    const [usuario, setUsuario] = useState({
        nombre: '',
        contraseña: ''
      });

    const [redirecciona, setRedirecciona] = useState(null);

    const handleChange = parametro => evento => {
        setUsuario({ ...usuario, [parametro]: evento.target.value });
    };

    function handleLogin(e) {
        e.preventDefault();
        if(usuario.nombre === "admin" && usuario.contraseña === "1234"){
            localStorage.setItem("usuario", usuario);
            setRedirecciona(true);
        }
    }
//Si el usuario se logeo correctamente, lo lleva a home
    if (redirecciona) {
        props.history.push('/');
        return (
            <Redirect to="/"/>
            );
    }
        return (
            <form className={classes.root} onSubmit={handleLogin} >
                <Grid 
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                >
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Grid item xs={12}>
                                <FormControl className={classes.input}>
                                    <InputLabel htmlFor="usuario">Usuario</InputLabel>
                                    <Input id="usuario" 
                                        aria-describedby="my-helper-text" 
                                        value={usuario.nombre} 
                                        onChange={handleChange('nombre')} />
                                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.input}>
                                    <InputLabel htmlFor="contraseña">Contraseña</InputLabel>
                                    <Input id="contraseña" type="password" 
                                        aria-describedby="my-helper-text"
                                        value={usuario.contraseña} 
                                        onChange={handleChange('contraseña')}
                                        />
                                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.input}>
                                <Button variant="contained" 
                                    color="primary" 
                                    className={classes.button}
                                    type={"submit"}
                                    >
                                    Ingresar
                                </Button>
                                </FormControl>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </form>
    );
}

export default Login;