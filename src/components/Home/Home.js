import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

import TopServices from '../TopServices/TopServices';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopServices></TopServices>
            <Tours></Tours>
            <Review></Review>

        </div>
    );
};

export default Home;