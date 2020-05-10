import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

import axios from 'axios';

export default class MyDataTable extends React.Component {

    state = {
        globalFilter: null
    }


    render() {
        let header = (
            <div className="col-12" style={{ 'textAlign': 'left' }}>
                <i className="pi pi-search" style={{ margin: '4px 4px 0 0' }}></i>
                <InputText  type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Buscar registro"  />
            </div>
        );
        return (
            <DataTable 
                selection={this.props.empleadoSelected}
                onSelectionChange={e => {this.props.onSelection(e.value)}}
                selectionMode="single"
                value={this.props.data}
                rows={10}
                header="Responsive"
                paginator={true}
                header={header}
                globalFilter={this.state.globalFilter}
                responsive={true}>

                <Column field="dui" header="DUI" />
                <Column field="nombres" header="NOMBRES" />
                <Column field="apellidos" header="APELLIDOS" />
                <Column field="fechanacimiento" header="F_NACIMIENTO" />
                <Column field="estadocivil" header="ESTADO CIVIL" />
                <Column field="telefono" header="TELEFONO" />
                <Column field="tipo" header="TIPO" />
            </DataTable>
        );
    }
}
