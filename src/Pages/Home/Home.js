import React from 'react';
import AddSer from '../AddSer/AddSer';


import Banner from '../Banner/Banner';
import Login from '../Login/Login';
import Question from '../Question/Question';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AddSer></AddSer>
            <Question></Question>
            <Login></Login>
            
        </div>
    );
};

export default Home;