import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

import VazillaAdminHeader from '../vazilla-fragments/vazilla-admin.header';
import VazillaLoginForm from '../vazilla-fragments/admin-login.form';

export default class VazillaAdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
        this._onUsername = this._onUsername.bind(this);
        this._onPassword = this._onPassword.bind(this);
        this._onAuthentication = this._onAuthentication.bind(this);
    }

    componentDidMount() { document.title = "Vazilla | Administrateur"; }
    
    _onUsername(t) { this.setState({ username : t }); }
    _onPassword(t) { this.setState({ password : t }); }
    _onAuthentication() {
        if(this.state.username == '' || this.state.password == '') {
            if(validator.isEmail(this.state.username)) {
                if(this.state.password.length >= 8) {
                    console.log('connecting user.');
                } else {}
            } else {}
        } else {}
    }
    render() {
        return (
            <div>
                <VazillaAdminHeader />
                <VazillaLoginForm changeUsername={this._onUsername} changePassword={this._onPassword} />
            </div>
        );
    }
}
