import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaOffHeader from './vazilla-off.header';

export default class VazillaOffRegister extends Component {
    render() {
        return (
            <div className="container">
                <VazillaOffHeader />
            </div>
        );
    }
}
if (document.getElementById('vazilla-root-register')) { ReactDOM.render(<VazillaOffRegister />, document.getElementById('vazilla-root-register')); }
