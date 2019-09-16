import React from 'react';
import ComponenteMain from './componentes/ComponenteMain';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import ComponenteUsuario from './componentes/ComponenteUsuario';
import Login from './componentes/Login';
import { makeStyles } from '@material-ui/core/styles';

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



function App() {
    const logeado = true;
    return (
          <Router>
              <Switch>
                    <Route exact path="/" render={()=> logeado ? <ComponenteMain mainComponent={<div>Home</div>} /> : <Redirect to="/login" /> } />
                    <Route  path="/usuarios" render={()=> logeado ? <ComponenteMain mainComponent={<ComponenteUsuario/>} /> : <Redirect to="/login" /> } />
                    <Route  path="/ventas" render={()=> (logeado ? <ComponenteMain mainComponent={<div>Ventas</div>} /> : <Redirect to="/login" />) } />
                    <Route  path="/login" render={(props)=><Login {...props}/>} />
                    <Route  path="*" render={()=> <div>No encontrado</div>} />
                </Switch>
          </Router>
        );
}

export default App;
