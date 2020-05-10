import React from 'react';
import Formulario from '../componentes/empleados/Formulario';
import MyDataTable from '../componentes/empleados/DataTable';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Growl} from 'primereact/growl';

export default class Empleados extends React.Component {
    state = {
        empleados: [],
        empleadoSelected: [],
        displayBasic: false,
        visibled : true
    }

    componentDidMount() {
        axios.get('http://localhost/API/empleado').then(res => {
            console.log(res.data);
            this.setState({ empleados: res.data })
        })
    }

    onSelectedRow = (e) => {
        console.log(e);
        this.setState({ 
            empleadoSelected: e,
            visibled : false
        })

    }


    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    updateData = ()=>{
        axios.get('http://localhost/API/empleado').then(res => {
            console.log(res.data);
            this.setState({ empleados: res.data })
        })
    }

    onHide =() => {
        this.setState({
            displayBasic : false
        });
    }

    showSuccess = (msg) => {
        this.growl.show({severity: 'success', summary: msg, detail: 'Registro guardado'});
    }

    showError = () => {
        this.growl.show({severity: 'error', summary: 'Hubo problemas al registrar', detail: 'Problemas de servidor'});
    }
    


    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />
                <div className="container">
                    <div className="col-12 col-lg-12 float-left">
                        <Dialog visible={this.state.displayBasic}  onHide={() => this.onHide('displayBasic')}>
                            <Formulario 
                                onhide={this.onHide} 
                                load={this.updateData} 
                                seleccion={this.state.empleadoSelected}
                                onsuccess={this.showSuccess}
                                onerror={this.showError}
                            />
                        </Dialog>
                        <Button 
                            label="Crear" 
                            icon="pi pi-user-plus" 
                            onClick={() => {
                                this.onClick('displayBasic'); 
                                this.setState({
                                    empleadoSelected:[],
                                    visibled : true
                                });
                            }} />

                        <Button
                            disabled={this.state.visibled } 
                            label="Editar" 
                            className="p-button-success" 
                            icon="pi pi-user-plus" 
                            style={{marginLeft : "20px"}} onClick={() => this.onClick('displayBasic')} />
                        
                        
                    
                    </div>
                    <div className="col-12 col-lg-12 float-left">
                    <br/>
                        <MyDataTable 
                            empleadoSelected={this.state.empleadoSelected} 
                            data={this.state.empleados} 
                            onSelection={this.onSelectedRow} />
                    </div>

                </div>
            </div>
        )
    }
}