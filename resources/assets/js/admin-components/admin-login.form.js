import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class VazillaLoginForm extends Component {
    render() {
        return (
            <div id="admin-login-form-container">
                <form className="admin-login-form">
                    <div className="form-label-group">
                        <input type="email" id="admin-email-login" className="form-control" placeholder="Addresse e-mail" required autoFocus />
                        <label htmlFor="admin-email-login">Adresse e-mail</label>
                    </div>
                    <div className="form-label-group password-group">
                        <input type="password" id="admin-password-login" className="form-control" placeholder="Mot de passe" required />
                        <label htmlFor="admin-password-login">Mot de passe</label>
                    </div>
                    <button className="btn btn-outline-primary btn-block" type="submit">Connexion&nbsp;&nbsp;<span className="fa fa-angle-double-right"></span></button>
                </form>
            </div>
        );
    }
}
