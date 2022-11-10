import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link
        to="/services"
        type="submit"
        className="inline-flex items-center justify-center w-screen  mx-auto h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
      >
        See All
      </Link>
      <Question></Question>
    </div>
  );
};

export default Home;
