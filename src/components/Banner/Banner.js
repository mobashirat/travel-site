import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import 'animate.css'

import banner1 from "../bannerimg/travelBanner2.jpg"
import banner2 from "../bannerimg/travelBanner2.png"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 class="animate__animated animate__backInRight animate__slower">Are You Ready To Go?</h3>
                        <p>Here we are to help you to fulfill your dreams and take you in your desire destination.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-size"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 class="animate__animated animate__backInRight animate__slower">Your Destination is waiting for you</h3>
                        <p>Most of the time we can not travel because of our proper plans.We are here to help you with this.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;