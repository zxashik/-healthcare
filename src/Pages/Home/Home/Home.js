import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';
import Trainer from '../Trainer/Trainer';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Trainer></Trainer>
            <Offers></Offers>
        </div>
    );
};

export default Home;