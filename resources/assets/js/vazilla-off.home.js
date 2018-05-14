import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaOffHeader from './vazilla-off.header';
import VazillaOffCarousel from './vazilla-off.carousel';

export default class VazillaOffHome extends Component {
    render() {
        return (
            <div id="vazilla-wrapper">
                <VazillaOffHeader />
                <VazillaOffCarousel />
            </div>
        );
    }
}
if (document.getElementById('vazilla-root')) { ReactDOM.render(<VazillaOffHome />, document.getElementById('vazilla-root')); }
