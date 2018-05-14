import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaOffNavigation from './vazilla.route';

export default class VazillaApplication extends Component {
    render() {
        return (<VazillaOffNavigation />);
    }
}
if (document.getElementById('vazilla-root')) { ReactDOM.render(<VazillaApplication />, document.getElementById('vazilla-root')); }
