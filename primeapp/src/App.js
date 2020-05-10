import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Navbar from './componentes/Navbar';
import Inicio from './pages/Inicio';
import Empleados from './pages/Empleados';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar><br/>
          <Route exact path="/" render={()=> <Inicio/>} />
          <Route exact path="/Empleados" render={()=><Empleados/>} />
        </Router>
      </div>
    )
  }
}

