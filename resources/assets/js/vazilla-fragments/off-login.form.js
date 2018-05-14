import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class VazillaLoginForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <React.Fragment>
            <div id="off-login-form-container">
                <form className="off-login-form">
                    <div className="form-label-group">
                        <input type="email" id="off-email-login" className="form-control" placeholder="E-mail Address" required autoFocus onChange={ (t) => { this.props.changeUsername(t); } } required/>
                        <label htmlFor="off-email-login">E-mail Address</label>
                    </div>
                    <div className="form-label-group password-group">
                        <input type="password" id="off-password-login" className="form-control" placeholder="Password" required onChange={ (t) => { this.props.changePassword(t); } } />
                        <label htmlFor="off-password-login">Password</label>
                    </div>
                    <button className="btn btn-outline-primary btn-block" type="submit">Log In&nbsp;&nbsp;<span className="fa fa-angle-double-right"></span></button>
                    <a className="btn btn-outline-dark btn-block" href="/forgot">Forgot password&nbsp;&nbsp;<span className="fa fa-angle-double-left"></span></a>
                </form>
            </div>
        </React.Fragment>
        );
    }
}
