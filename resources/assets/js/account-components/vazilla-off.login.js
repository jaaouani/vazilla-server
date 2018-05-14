import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaOffHeader from '../vazilla-fragments/vazilla-off.header';
import VazillaLoginForm from '../vazilla-fragments/off-login.form.js';

export default class VazillaOffLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
        this._onUsername = this._onUsername.bind(this);
        this._onPassword = this._onPassword.bind(this);
        this._onAuthentication = this._onAuthentication.bind(this);
    }

    componentDidMount() { document.title= "Vazilla | Connexion"; }

    _onUsername(t) { this.setState({ username : t }); }
    _onPassword(t) { this.setState({ password : t }); }
    _onAuthentication() {
        if(this.state.username == '' || this.state.password == '') {
            if(validator.isEmail(this.state.username)) {
                if(this.state.password.length >= 8) {
                } else {}
            } else {}
        } else {}
    }

    render() {
        return (
            <div>
                <VazillaOffHeader />
                <VazillaLoginForm changeUsername={this._onUsername} changePassword={this._onPassword} />
            </div>
        );
    }
}

