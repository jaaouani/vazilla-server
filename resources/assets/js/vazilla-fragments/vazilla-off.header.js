import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class VazillaOffHeader extends Component {
    render() {
        return (
        <React.Fragment>
            <header id="vazilla-header">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm" id="vazilla-off-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/"><span className="f-box"><span className="fa fa-shopping-cart"></span>&nbsp;Vaz</span><span className="s-box">://a</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#vazilla-nav-content" aria-controls="vazilla-nav-content" aria-expanded="false" aria-label="Toggle navigation"><span className="fa fa-ellipsis-h"></span></button>
                        <div className="collapse navbar-collapse" id="vazilla-nav-content">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown"><a className="nav-link dropdown-toggle cart-btn" role="button" id="btn-basket" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="fa fa-shopping-basket"></span><span className="badge badge-primary">0</span></a>
                                    <div className="dropdown-menu" id="cart-dropdown" aria-labelledby="btn-basket">
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                                <li className="nav-item"><a className="nav-link register-link" href="/register">Register</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="dropdown-language" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flag-icon flag-icon-gb"></span>&nbsp;English</a>
                                    <div className="dropdown-menu" aria-labelledby="dropbown-language">
                                        <a className="dropdown-item"><span className="flag-icon flag-icon-fr"></span>&nbsp;French</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
        );
    }
}