import React from 'react';
import ComponenteMain from './componentes/ComponenteMain';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import ComponenteUsuario from './componentes/ComponenteUsuario';
import Login from './componentes/Login';



function App() {

    const logeado = localStorage.getItem("usuario") != null;

    return (
          <Router>
              <Switch> */}
                    /<Route exact path="/" render={()=> logeado ? <ComponenteMain mainComponent={<div>Home</div>} /> : <Redirect to="/login" /> } />
                    <Route  path="/usuarios" render={()=> logeado ? <ComponenteMain mainComponent={<ComponenteUsuario/>} /> : <Redirect to="/login" /> } />
                    <Route  path="/ventas" render={()=> (logeado ? <ComponenteMain mainComponent={<div>Ventas</div>} /> : <Redirect to="/login" />) } />
                    <Route  path="/login" component={Login} />
                    <Route  path="*" render={()=> <div>No encontrado</div>} /> }
                 </Switch>
          </Router>
        );
}

export default App;
