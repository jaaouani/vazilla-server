import React, { Component, Link } from 'react';
import ReactDOM from 'react-dom';

export default class VazillaOffCarousel extends Component {
    render() {
        return (
            <section className="carousel slide" id="vazilla-carousel" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#vazilla-carousel" data-slide-to="0" class="active"></li>
                <li data-target="#vazilla-carousel" data-slide-to="1"></li>
                <li data-target="#vazilla-carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active"><img src={require('../drawable/slide-00.png')} /></div>
                <div className="carousel-item"><img src={require('../drawable/slide-00.png')} /></div>
                <div className="carousel-item"><img src={require('../drawable/slide-00.png')} /></div>
              </div>
              <a className="carousel-control-prev" href="#vazilla-carousel" role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span></a>
              <a className="carousel-control-next" href="#vazilla-carousel" role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span></a>
            </section>
        );
    }
}