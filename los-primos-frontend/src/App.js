import React, { Component } from 'react';
import ComponenteUsuario from './componentes/ComponenteUsuario';
import ComponenteNav from './componentes/ComponenteNav';
import ComponenteMain from './componentes/ComponenteMain';
import Login from './componentes/Login';
import ComponenteBarraLateral from './componentes/ComponenteBarraLateral';


import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1
  }
}));


function App() {
 const classes = useStyles();
 const[abierta, setAbierta] = React.useState(false);

  function abrirBarraLateral() {
    setAbierta(true);
  }

  function cerrarBarraLateral() {
    setAbierta(false);
  }


    return (
        <div className={classes.root}>
          <Grid 
            container 
            justify="flex-end"
            direction="row" 
            alignItems="center"
          >
          <ComponenteBarraLateral 
              opciones={["Home","Usuarios","Ventas","Otro"]} 
              open={abierta} 
              cerrarDrawer={cerrarBarraLateral} 
              />
            <Grid item xs={12}>
                <ComponenteNav 
                  className={classes.nav} 
                  onBarClick={abrirBarraLateral} 
                  barraLateralAbierta={abierta}
                  />
            </Grid>
            <ComponenteMain >
              <ComponenteUsuario />
            </ComponenteMain>
          </Grid>
        </div>
        );
}

export default App;
