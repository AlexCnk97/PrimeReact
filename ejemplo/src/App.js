import React from 'react';
import logo from './logo.svg';
import './App.css';
import Informacion from './components/Informacion';


export default class App extends React.Component {
  
  render(){
    const array = [
      {
        name : "Alex",
        lastname : "Chinque"
      }
    ]
    return (
      <div className="App">
        <Informacion name="Carlos" lastname="Gutierrez" array={array} ></Informacion>
        <Informacion name="Juan" lastname="Gutierrez" array={array} ></Informacion>
        <Informacion name="Alex" lastname="Gutierrez" array={array} ></Informacion>
        <Informacion name="Daniel" lastname="Gutierrez" array={array} ></Informacion>
        <Informacion name="Carlos" lastname="Gutierrez" array={array} ></Informacion>

      </div>
    );
  }
}

