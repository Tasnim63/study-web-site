import React from 'react';
import Banner from './Banner';
import Collaborate from './Collaborate';
import Expert from './Expert';
import Featured from './Featured';
import Footer from './Footer';
import Info from './Info';
import Stories from './Stories';
import Subscriber from './Subscriber';
import Tutorial from './Tutorial';
import Why from './Why';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Featured></Featured>
            <Tutorial></Tutorial>
            <Expert></Expert>
            <Why></Why>
            <Stories></Stories>
            <Collaborate></Collaborate>
            <Subscriber></Subscriber>
            <Footer></Footer>
        </div>
    );
};

export default Home;