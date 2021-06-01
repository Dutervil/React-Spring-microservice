import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
            
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
         this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    addEmployee() {
        this.props.history.push("/add-employee/_add");
    }

    editEmployee(id) {
        this.props.history.push("/add-employee/" + id);
    }

   
    viewEmployee(id) {
        this.props.history.push("/view-employee/" + id);
    }
    componentDidMount() {
        EmployeeService.getEmployee().then((resp) => {
           this.setState({ employees: resp.data });
              console.log(resp.data);
        });
      
    }

    deleteEmployee(id) {

        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='container'>
                        <h1>Etes-vous Sure ?</h1>
                        <p>Vous voulez supprimer cet employé ?</p>
                        <button className="btn btn-primary my-2" onClick={onClose}>Non</button>
                        <span> </span>
                        <button className="btn btn-danger my-2"
                            onClick={() => {
                                EmployeeService.deleteEmployee(id).then(resp => {
                                    this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });

                                });
                                onClose();
                            }}
                        >
                            Supprimer
                  </button>
                    </div>
                );
            }
        });




    }
    render() {
        return (
            <div>
                <h2 className="text-center">Liste des employees</h2>
                <div className="row">
                    <div className="col-md-4 py-2">
                        <button className="btn btn-primary" onClick={this.addEmployee}>Nouvel Employé</button>

                    </div>
                    <di className="col-md-8">
                        <input type="text" className="form-control" placeholder="Entrer votre recherche"/>
                    </di>
                </div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                         this.state.employees.map(
                             employee =>
                                <tr key={employee.id}>

                                    <td>{employee.nom}</td>
                                    <td>{employee.prenom}</td>
                                    <td>{employee.email}</td>
                                   
                                    <td>
                                        <button className="btn btn-info" onClick={() => this.editEmployee(employee.id)}>Editer</button>
                                        <button style={{ marginLeft: "10px" }} className="btn btn-danger" onClick={() => this.deleteEmployee(employee.id)}>Supprimer</button>
                                        <button style={{ marginLeft: "10px" }} className="btn btn-success" onClick={() => this.viewEmployee(employee.id)}>Voir</button>

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <div className="d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}


export default ListEmployee;