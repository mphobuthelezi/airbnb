import React from 'react';
import Header from '../../components/LandingPage/Header/Header';
import Banner from '../../components/LandingPage/Banner/Banner';
import Footer from '../../components/AdminComponents/Footer';
import Inspiration from '../../components/LandingPage/Inspiration/Inspiration';
import './HomePage.css';

const HomePage = ({ openModal }) => {
  return (
    <div>
       {/* <button onClick={openModal}>Open Modal from Home Page</button> */}
      <Header />
      <Banner />
      < Inspiration />
      <Footer />
    </div>
  );
}

export default HomePage;
