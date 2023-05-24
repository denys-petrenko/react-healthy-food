import React, { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import soup from "../../../assets/menu-soup.png";
import eggs from "../../../assets/menu-eggs.png";
import salad from "../../../assets/menu-salad.png";
import "./SimpleCarousel.scss";




export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        return (
            <div className="Carousel">
                <h2>Dish Of The Day</h2>
                <Slider {...settings}>
                    <div className="Card">
                        <img src={soup} alt='slide-1' />
                    </div>
                    <div className="Card">
                        <img src={eggs} alt='slide-2' />
                    </div>
                    <div className="Card">
                        <img src={salad} alt='slide-3' />
                    </div>
                </Slider>
            </div>
        );
    }
}
