import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VazillaOffHeader from '../vazilla-fragments/vazilla-off.header';
import VazillaOffCarousel from '../vazilla-fragments/vazilla-off.carousel';

export default class VazillaOffHome extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() { document.title = "Vazilla | Accueil"; }
    
    render() {
        return (
            <div id="vazilla-wrapper">
                <VazillaOffHeader />
                <VazillaOffCarousel />
            </div>
        );
    }
}

