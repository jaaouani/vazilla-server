import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class VazillaLoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <React.Fragment>
            <div id="admin-login-form-container">
                <form className="admin-login-form">
                    <div className="form-label-group">
                        <input type="email" id="admin-email-login" className="form-control" placeholder="E-mail Address" required autoFocus onChange={ (t) => { this.props.changeUsername(t); } } required/>
                        <label htmlFor="admin-email-login">E-mail Address</label>
                    </div>
                    <div className="form-label-group password-group">
                        <input type="password" id="admin-password-login" className="form-control" placeholder="Password" required onChange={ (t) => { this.props.changePassword(t); } } />
                        <label htmlFor="admin-password-login">Password</label>
                    </div>
                    <button className="btn btn-outline-primary btn-block" type="submit">Log In&nbsp;&nbsp;<span className="fa fa-angle-double-right"></span></button>
                </form>
            </div>
        </React.Fragment>
        );
    }
}
