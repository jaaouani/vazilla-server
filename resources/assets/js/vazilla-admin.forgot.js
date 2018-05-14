import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaAdminHeader from './vazilla-admin.header';

export default class VazillaAdminLogin extends Component {
    render() {
        return (
            <div>
                <VazillaAdminHeader />
            </div>
        );
    }
}
if (document.getElementById('vazilla-admin-login')) { ReactDOM.render(<VazillaAdminForgot />, document.getElementById('vazilla-admin-forgot')); }
