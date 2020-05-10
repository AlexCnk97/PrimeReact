import React from 'react';

class Informacion extends React.Component {
    myStyle = () =>{
        return{
            color : this.props.tachado ? "red" : "blue"
        }
    }
    render(){
        return (
            <div style={this.myStyle()}>
                <h2>Hola mi nombre es: {this.props.name}</h2>
                <p>soy de la ciudad de: {this.props.ciudad}</p>
            </div>
        );
    }
}
const array = [
    {
        id: 1,
        name: "Alex",
        city: "Sonsonate",
        tachado: false
    },
    {
        id: 2,
        name: "Juan",
        city: "Izalco",
        tachado: true
    }
];
export default class Example extends React.Component {

    state = {
        informacion: array
    }
    render() {
        return (
            <div>{
                this.state.informacion.map(x => 
                    <Informacion name={x.name} ciudad={x.city} tachado={x.tachado} />
                )
            }</div>
        );
    }
}