import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //step 2
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            email: ''
        }
        this.changeNameHanler = this.changeNameHanler.bind(this);
        this.changePrenomHanler = this.changePrenomHanler.bind(this);
        this.changeEmailHanler = this.changeEmailHanler.bind(this);
        this.saveOrCreateEmploye = this.saveOrCreateEmploye.bind(this);
    }
    //step 3
    componentDidMount() {
        //step4
        if (this.state.id === '_add') {
            return
        } else {
            EmployeeService.getEmployeeById(this.state.id).then((resp) => {
                let employee = resp.data;
                this.setState({
                    id: employee.id,
                    nom: employee.nom,
                    prenom: employee.prenom,
                    email: employee.email
                });
            });
        }
    }


    changeNameHanler = (event) => {
        this.setState({ nom: event.target.value });
    }

    changePrenomHanler = (event) => {
        this.setState({ prenom: event.target.value });
    }

    changeEmailHanler = (event) => {
        this.setState({ email: event.target.value });
    }

    saveOrCreateEmploye = (event) => {
        event.preventDefault();
        let employee = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            email: this.state.email
        };
        //step 5
        if (this.state.id === '_add') {
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push("/employees");
            });
        } else {
            EmployeeService.UpdateEmployee(employee, this.state.id).then(res => {
                this.props.history.push("/employees");
            });
        }

    }
    cancel = (event) => {
        this.props.history.push("/employees");
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Ajouter un employé</h3>
        }else{
         return <h3 className="text-center">Modifier un employé</h3>
        }
    }

    getButtonText(){
        if (this.state.id === '_add') {
            return "Enregistrer";
        }else{
            return "Modifier";
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row py-5">
                        <div className="card">
                            <div className="card-heading btn-success">{this.getTitle()}  </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Nom</label>
                                        <input placeholder="Entrer le nom de l'employé"
                                            name="nom" className="form-control" value={this.state.nom}
                                            onChange={this.changeNameHanler}
                                            type="text"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Prenom</label>
                                        <input placeholder="Entrer le Prenom de l'employé"
                                            name="prenom" className="form-control" value={this.state.prenom}
                                            onChange={this.changePrenomHanler}
                                            type="text"
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label>Email</label>
                                        <input placeholder="Entrer l'Email de l'employé"
                                            name="email" className="form-control" value={this.state.email}
                                            onChange={this.changeEmailHanler}
                                            type="email"
                                        />
                                        <div className="form-group py-4">
                                            <button className="btn btn-success" onClick={this.saveOrCreateEmploye}>{this.getButtonText()} </button>
                                            <span>   </span>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Annuler</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}


export default CreateEmployee;