import React, { Component, Link } from 'react';
import ReactDOM from 'react-dom';

export default class VazillaAdminHeader extends Component {
    render() {
        return (
        <React.Fragment>
            <header id="vazilla-header">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm" id="vazilla-off-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/"><span className="f-box"><span className="fa fa-shopping-cart"></span>&nbsp;Vaz</span><span className="s-box">://a</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#vazilla-nav-content" aria-controls="vazilla-nav-content" aria-expanded="false" aria-label="Toggle navigation"><span className="fa fa-ellipsis-h"></span></button>
                        <div className="collapse navbar-collapse" id="vazilla-nav-content">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="/admin/forgot">Forgot password ?</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
        );
    }
}