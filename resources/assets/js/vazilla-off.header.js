import React, { Component, Link } from 'react';
import ReactDOM from 'react-dom';

export default class VazillaOffHeader extends Component {
    render() {
        return (
            <header id="vazilla-header" className="py-1">
                <div className="container">
                    <nav className="navbar navbar-expand-md" id="vazilla-off-navbar">
                        <a className="navbar-brand"><span className="f-box"><span className="fa fa-shopping-cart"></span>&nbsp;Vaz</span><span className="s-box">://a</span></a>
                    </nav>
                </div>
            </header>
        );
    }
}