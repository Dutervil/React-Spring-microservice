import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeService from '../services/EmployeeService';

class ViewEmployee extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            id : this.props.match.params.id,
            nom: '',
            prenom: '',
            email: ''
        }
        this.list=this.list.bind(this);
    }
 
    list(){
        this.props.history.push("/employees");
    }
    componentDidMount(){

        EmployeeService.getEmployeeById(this.state.id).then((resp)=>{
            let employee=resp.data;
            this.setState({
                id:employee.id,
                nom:employee.nom,
                prenom:employee.prenom,
                email:employee.email
            });
        });
     }
     
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card my-5">
                        <div className="card-body">
                            <h3 className="text-success">Identifiant de l'employé : {this.state.id}</h3>
                            <ol>
                                <li>{this.state.prenom} {this.state.nom}  <a href="mailto:${this.state.email}">{this.state.email}</a></li>
                            </ol>
                            <button className="btn btn-success" onClick={()=>this.list()}>Liste employee</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

 

export default ViewEmployee;