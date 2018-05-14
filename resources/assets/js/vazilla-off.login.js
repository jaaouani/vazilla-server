import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaOffHeader from './vazilla-off.header';

export default class VazillaOffLogin extends Component {
    render() {
        return (
            <div>
                <VazillaOffHeader />
            </div>
        );
    }
}
if (document.getElementById('vazilla-root-login')) { ReactDOM.render(<VazillaOffLogin />, document.getElementById('vazilla-root-login')); }
