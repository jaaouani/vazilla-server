import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaOffHeader from './vazilla-off.header';

export default class VazillaOffHome extends Component {
    render() {
        return (
            <div>
                <VazillaOffHeader />
            </div>
        );
    }
}
if (document.getElementById('vazilla-root')) { ReactDOM.render(<VazillaOffHome />, document.getElementById('vazilla-root')); }
