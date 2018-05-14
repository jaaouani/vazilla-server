import React, { Component, Link } from 'react';
import ReactDOM from 'react-dom';

export default class VazillaOffHeader extends Component {
    render() {
        return (
            <header id="vazilla-header">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm" id="vazilla-off-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/"><span className="f-box"><span className="fa fa-shopping-cart"></span>&nbsp;Vaz</span><span className="s-box">://a</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#vazilla-nav-content" aria-controls="vazilla-nav-content" aria-expanded="false" aria-label="Toggle navigation"><span className="fa fa-ellipsis-h"></span></button>
                        <div className="collapse navbar-collapse" id="vazilla-nav-content">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item"><button type="button" className="btn" id="btn-basket"><span className="fa fa-shopping-basket"></span><span className="badge badge-primary">0</span></button></li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="/login">Se Connecter</a></li>
                                <li className="nav-item"><a className="nav-link register-link" href="/register">Créer un compte</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown-language" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="flag-icon flag-icon-fr"></span></a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item"><span className="flag-icon flag-icon-us"></span>&nbsp;English</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}