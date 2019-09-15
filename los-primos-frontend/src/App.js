import React from 'react';
import ComponenteMain from './componentes/ComponenteMain';
import { BrowserRouter as Router } from "react-router-dom";



function App() {

    return (
          <Router>
              <ComponenteMain />
          </Router>
        );
}

export default App;
