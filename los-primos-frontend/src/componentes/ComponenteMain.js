import React from 'react';
import { Route, Switch } from "react-router-dom";
import {withRouter} from 'react-router-dom';

import ComponenteUsuario from './ComponenteUsuario';
import ComponenteNav from './ComponenteNav';
import ComponenteBarraLateral from './ComponenteBarraLateral';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const opciones =[
    {text:"Home", path:"/", exact:true,main:(props)=><ComponenteMain {...props} >Home</ComponenteMain>}
    ,{text:"Usuarios", path:"/usuarios",main:(props)=><ComponenteMain {...props}><ComponenteUsuario/></ComponenteMain>}
    ,{text:"Ventas", path:"/ventas",main:(props)=><ComponenteMain {...props}>Ventas</ComponenteMain>},
    {text:"Default", path:"/other"}
  ];
  
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


    
    return(
              <div className={classes.root}>
                  <Grid 
                    container 
                    justify="flex-end"
                    direction="row" 
                    alignItems="center"
                  >
                  <ComponenteBarraLateral 
                      opciones={opciones}
                      open={abierta} 
                      cerrarDrawer={cerrarBarraLateral}
                      {...props}
                      />
                    <Grid item xs={12}>
                        <ComponenteNav 
                          className={classes.nav} 
                          onBarClick={abrirBarraLateral} 
                          barraLateralAbierta={abierta}
                          />
                    </Grid>
                    <Grid item xs={10} className={classes.main}>
                        <Switch>
                            <Route exact path="/" render={()=> <div>Home</div>}/>
                            <Route path="/usuarios" render={()=><ComponenteUsuario/>} />
                            <Route path="/ventas" render={()=><div>Ventas</div> }/>
                        </Switch>
                      </Grid>
                  </Grid>
              </div>
        );
}

export default withRouter(ComponenteMain);