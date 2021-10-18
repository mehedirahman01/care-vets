import React from 'react';
import Cover from '../Cover/Cover';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            {/* Call Homepage Components */}
            <Header></Header>
            <Cover></Cover>
        </div>
    );
};

export default Home;