import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="#">GESTION DES EMPLOYEES</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Ajouter Employer </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Consulter les employes </a>
                                </li>
                              
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;