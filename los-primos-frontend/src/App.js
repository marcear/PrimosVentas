import React, { Component } from 'react';
import ComponenteUsuario from './components/ComponenteUsuario';
import ComponenteNav from './components/ComponenteNav';

export default class App extends Component {
  
  render() {
    return (
        <div>
            <ComponenteNav />
            <ComponenteUsuario />
        </div>
        );
  }
 
}
