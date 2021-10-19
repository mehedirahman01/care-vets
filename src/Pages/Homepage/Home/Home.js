import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Cover from '../Cover/Cover';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeServices from '../HomeServices/HomeServices';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            {/* Call Homepage Components */}
            <Cover></Cover>
            <HomeServices></HomeServices>
            <WhyChooseUs></WhyChooseUs>
            <ClientFeedback></ClientFeedback>
        </div>
    );
};

export default Home;