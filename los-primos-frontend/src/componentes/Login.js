//React
import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

//Material ui
import {FormControl, InputLabel, Input, FormHelperText, Grid, Paper, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

//Componentes
import { loginUsuario } from '../controladores/usuarioControlador';


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
      },
      hide: {
          display: 'none'
      },
      cargandoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.spacing(100)
      }
}));


function Login(props) {
    const classes = useStyles();
    const [cargando, setCargando] = useState(false);
    const [usuario, setUsuario] = useState({
        nombre: '',
        contraseña: ''
      });

    const [redirecciona, setRedirecciona] = useState(false);
    const [error, tieneError] = useState(false);
    const from = props.location.state || { from: { pathname: "/" } };

    const handleChange = parametro => evento => {
        tieneError(null);
        setUsuario({ ...usuario, [parametro]: evento.target.value });
    };

    async function handleLogin(e) {
        e.preventDefault();
        if(usuario.nombre != null && usuario.contraseña != null) {
            setCargando(true);
            const res = await loginUsuario(usuario);
            //Logeado correctamente, entonces guardo el token
            if(res.status == 200) {
                localStorage.setItem("token", res.data);
                props.history.push("/");
                setRedirecciona(true);
            }
        }
        else{
            tieneError(true);
        }

        setCargando(false);

    }

    const Cargando = () => {
        return (
        <div className={classes.cargandoContainer}>
            <CircularProgress className= {classes.cargandoItem} />
        </div>
        )};


//Si el usuario se logeo correctamente, lo lleva a home

    if(cargando) { 
        return (<Cargando />);
    }

    if (redirecciona) {
        //props.history.push('/');
        return (<Redirect to={from}/>) ;
    }
        return (
            <form className={classes.root} onSubmit={(e)=>{handleLogin(e)}} >
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
                                    <FormHelperText className={!error ? classes.hide : null } error={error} id="my-helper-text">usuario o contraseña incorrectos</FormHelperText>
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