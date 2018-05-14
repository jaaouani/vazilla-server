import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import VazillaOffLogin from './account-components/vazilla-off.login';
import VazillaOffRegister from './account-components/vazilla-off.register';
import VazillaOffHome from './account-components/vazilla-off.home';

import VazillaAdminLogin from './admin-components/vazilla-admin.login';

export default class VazillaOffNavigation extends React.Component {
    constructor(props) { super(props); }
    render() { return(
        <BrowserRouter><div>
            <Route exact path="/" component={VazillaOffHome} /> 
            <Route path="/login" component={VazillaOffLogin} />
            <Route path="/register" component={VazillaOffRegister} /> 
            <Route exact path="/admin" component={VazillaAdminLogin} />
        </div></BrowserRouter>
    ); }
};
