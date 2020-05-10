import React from 'react';
import {Sidebar} from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Toolbar } from 'primereact/toolbar';
import { Link } from 'react-router-dom';
export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFullScreen: false
        };
    }
    render() {
        return (
            <div>
                <Toolbar>
                    <div className="p-toolbar-group-left">
                        <Button 
                            onClick={(e) => this.setState({visibleLeft:true})}
                            icon="pi pi-bars" 
                            className="p-button-secondary p-toolbar-separator" 
                            style={{ marginRight: '.35em' }} 
                        />

                        <Link to="/">
                            <Button label="Inicio" className="p-button-secondary" style={{ marginRight: '.25em' }} />
                        </Link>


                        <Link to="/Empleados">
                            <Button label="Empleados" className="p-button-secondary" style={{ marginRight: '.25em' }} />
                        </Link>

                    </div>
                    <div className="p-toolbar-group-right">
                        <Button icon="pi pi-search" style={{ marginRight: '.25em' }} />
                    </div>
                </Toolbar>
                <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={(e) => this.setState({ visibleLeft: false })}>
                    <h1 style={{ fontWeight: 'normal' }}>Left Sidebar</h1>
                    <Button type="button" onClick={(e) => this.setState({ visibleLeft: false })} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={(e) => this.setState({ visibleLeft: false })} label="Cancel" className="p-button-secondary" />
                </Sidebar>
            </div>
        )
    }
}