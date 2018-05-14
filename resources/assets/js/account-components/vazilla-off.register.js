import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaOffHeader from '../vazilla-fragments/vazilla-off.header';
import VazillaRegisterForm from '../vazilla-fragments/off-register.form';

export default class VazillaOffRegister extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', fullname: '' }
        this._onUsername = this._onUsername.bind(this);
        this._onPassword = this._onPassword.bind(this);
        this._onFullname = this._onFullname.bind(this);
        this._onAuthentication = this._onAuthentication.bind(this);
    }

    componentDidMount() { document.title= "Vazilla | Inscription"; }

    _onUsername(t) { this.setState({ username : t }); }
    _onPassword(t) { this.setState({ password : t }); }
    _onFullname(t) { this.setState({ fullname : t }); }
    _onAuthentication() {
        if(this.state.username == '' || this.state.password == '' || this.state.fullname == '') {
            if(validator.isEmail(this.state.username)) {
                if(this.state.password.length >= 8) {
                    if(this.state.fullname.length >= 3) {

                    } else {}
                } else {}
            } else {}
        } else {}
    }

    render() {
        return (
            <div>
                <VazillaOffHeader />
                <VazillaRegisterForm changeUsername={this._onUsername} changePassword={this._onPassword} changeFullname={this._onFullname}/>
            </div>
        );
    }
}

