import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaAdminHeader from './vazilla-admin.header';
import VazillaLoginForm from './admin-components/admin-login.form';

export default class VazillaAdminLogin extends Component {
    render() {
        return (
            <div>
                <VazillaAdminHeader />
                <VazillaLoginForm />
            </div>
        );
    }
}
if (document.getElementById('vazilla-admin-login')) { ReactDOM.render(<VazillaAdminLogin />, document.getElementById('vazilla-admin-login')); }
