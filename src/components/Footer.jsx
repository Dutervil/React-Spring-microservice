import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rihghts:"All Rights Reserved 2021 @Wadson@Programer"
        }
    }
    render() {
        return (
            <div>
                <footer className="footer">
                <span className="text-muted">{this.state.rihghts}</span>
                </footer>
            </div>
        );
    }
}

export default Footer;