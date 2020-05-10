import React from 'react';
import axios from 'axios';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';


export default class Formulario extends React.Component {
    state = {
        dui : this.props.seleccion.dui != null ? this.props.seleccion.dui : null,
        nombres: this.props.seleccion.nombres != null ? this.props.seleccion.nombres : null,
        apellidos: this.props.seleccion.apellidos != null ? this.props.seleccion.apellidos : null,
        fechanac: this.props.seleccion.fechanacimiento != null ? new Date(this.props.seleccion.fechanacimiento) : null,
        telefono: this.props.seleccion.telefono != null ? this.props.seleccion.telefono : null,
        tipo: 
            this.props.seleccion.tipo != null ? 
                this.props.seleccion.tipo == "mot"?
                    { name: 'Motorista', code: 'mot' }
                : 
                    { name: 'Ayudante', code: 'ayu' }   
            : null,
        estadocivil: 
            this.props.seleccion.estadocivil != null ? 
                this.props.seleccion.estadocivil == "sol" ?
                    { name: 'Soltero', code: 'sol' }
                :
                    { name: 'Casado', code: 'cas' }
            : null,
        estados: [
            { name: 'Soltero', code: 'sol' },
            { name: 'Casado', code: 'cas' }
        ],
        tipos: [
            { name: 'Motorista', code: 'mot' },
            { name: 'Ayudante', code: 'ayu' }
        ]

    };

    setDate = (x) => {
        var d = new Date(x),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        let f = [year, month, day].join('-');
        this.setState({ fechanac: f });
    }

    prepareToSend = (e) => {
        e.preventDefault();
        const data = {
            dui: this.state.dui,
            nombres: this.state.nombres,
            apellidos: this.state.apellidos,
            fechanacimiento: this.state.fechanac,
            estadocivil: this.state.estadocivil["code"],
            telefono: this.state.telefono,
            tipo: this.state.tipo["code"],
            avatarpath: "/avatar4.png"

        }
        var optionAxios = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        let url =  'http://localhost/API/empleado/create';
        let url2 =  'http://localhost/API/empleado/update';
        axios.post(this.props.seleccion.dui != null ? url2 : url, data, optionAxios)
            .then(res => {
                console.log(res.data);
                console.log(res);
                console.log(res.status);
                if (res.status == 201) {
                    if(this.props.seleccion.dui != null){
                        this.props.onsuccess("Se han guardado los cambios");    
                    }else{
                        this.props.onsuccess("Se ha registrado un nuevo empleado");
                    }
                    
                    this.props.load();
                    this.setState({
                        nombres: "",
                        apellidos: "",
                        dui: "",
                        fechanac: "",
                        telefono: "",
                        tipo: "",
                        estadocivil: "",
                    });
                    this.props.onhide();
                }else{
                    this.showError();
                }
            })
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.value });
    }
    render() {
        const es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };
        return (
            <div>
                <form onSubmit={this.prepareToSend}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Registro Empleado</h5><br />
                            <form>
                                <div className="row">
                                    <div className="col-12 float-left">
                                        <div className="form-group">
                                            <span className="p-float-label">
                                                <InputText id="float-input"
                                                    disabled={this.props.seleccion.dui}
                                                    className="col-12"
                                                    maxLength="9"
                                                    type="text"
                                                    value={this.state.dui}
                                                    onChange={(e) => this.setState({ dui: e.target.value })} />
                                                <label htmlFor="float-input">DUI</label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 float-left">
                                        <div className="form-group">
                                            <span className="p-float-label">
                                                <InputText id="nombres"
                                                    className="col-12"
                                                    type="text"
                                                    maxLength="15"
                                                    value={this.state.nombres}
                                                    onChange={(e) => this.setState({ nombres: e.target.value })} />
                                                <label htmlFor="nombres">Nombres</label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6 float-left">
                                        <div className="form-group">
                                            <span className="p-float-label">
                                                <InputText id="nombres"
                                                    className="col-12"
                                                    type="text"
                                                    maxLength="15"
                                                    value={this.state.apellidos}
                                                    onChange={(e) => this.setState({ apellidos: e.target.value })} />
                                                <label htmlFor="nombres">Apellidos</label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 float-left">
                                        <div className="form-group">
                                            <span className="p-float-label">
                                                <InputText id="float-input"
                                                    className="col-12"
                                                    type="text"
                                                    maxLength="8"
                                                    value={this.state.telefono}
                                                    onChange={(e) => this.setState({ telefono: e.target.value })} />
                                                <label htmlFor="float-input">Telefono</label>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 float-left">
                                        <div className="form-group">
                                            <Dropdown
                                                className="col-12"
                                                name="estadocivil"
                                                value={
                                                    this.state.estadocivil!=null?
                                                        this.state.estadocivil.code == "sol"?
                                                            {name: 'Soltero', code: 'sol'} :
                                                            {name: 'Casado', code: 'cas'}
                                                    :
                                                    null
                                                }
                                                options={this.state.estados}
                                                ariaLabel="Test" onChange={this.onChange}
                                                placeholder="Estado civil"
                                                optionLabel="name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 float-left">
                                        <div className="form-group">
                                            <Dropdown
                                                className="col-12"
                                                name="tipo"
                                                value={
                                                    this.state.tipo!=null?
                                                        this.state.tipo.code == "mot"?
                                                            { name: 'Motorista', code: 'mot' } :
                                                            { name: 'Ayudante', code: 'ayu' }
                                                    :
                                                    null
                                                }
                                                options={this.state.tipos}
                                                ariaLabel="Test" onChange={this.onChange}
                                                placeholder="Tipo Empleado"
                                                optionLabel="name"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group ">
                                            <Calendar
                                                locale={es}
                                                value={this.state.fechanac}
                                                onChange={(e) => this.setDate(e.value)}
                                            />
                                            <small id="emailHelp" className="form-text text-muted">
                                                Fecha de nacimiento
                                        </small>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}