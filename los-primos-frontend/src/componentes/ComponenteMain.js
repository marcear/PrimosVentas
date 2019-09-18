//React
import React from 'react';
import {withRouter} from 'react-router-dom';
//Componentes
import ComponenteNav from './ComponenteNav';
import ComponenteBarraLateral from './ComponenteBarraLateral';
import {OPCIONES_BARRA_LATERAL} from '../config';
import { cerrarSesion } from './Logout';
//Material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

    const useStyles = makeStyles(theme => ({
        main:{
            marginTop: theme.spacing(10),
            marginRight:theme.spacing(10),
            justifyContent:'flex-end',
            padding: theme.spacing(5)
        },
        root:{
            flexGrow:1
        }
    
}));

function ComponenteMain(props) {
    const classes = useStyles();
    const[abierta, setAbierta] = React.useState(false);

    function abrirBarraLateral() {
        setAbierta(true);
    }

    function cerrarBarraLateral() {
        setAbierta(false);
    }

    function deslogear() {
      cerrarSesion(props);
    }

    return(
              <div className={classes.root}>
                  <Grid 
                    container 
                    justify="flex-end"
                    direction="row" 
                    alignItems="center"
                  >
                  <ComponenteBarraLateral 
                      opciones={OPCIONES_BARRA_LATERAL}
                      open={abierta} 
                      cerrarDrawer={cerrarBarraLateral}
                      {...props}
                      />
                    <Grid item xs={12}>
                        <ComponenteNav 
                          className={classes.nav} 
                          onBarClick={abrirBarraLateral} 
                          barraLateralAbierta={abierta}
                          cerrarSesion={deslogear}
                          />
                    </Grid>
                    <Grid item xs={10} className={classes.main}>
                        <div>
                            {props.mainComponent}
                        </div>
                      </Grid>
                  </Grid>
              </div>
        );
}

export default withRouter(ComponenteMain);