import React from 'react';
// import Header from '../../components/LandingPage/Header/Header';
import Footer from '../../components/AdminComponents/Footer';
// import Listings from '../../components/Listings/ListingsMain';
import './ListingPage.css';
import Hosted from '../../components/Hosted/Hosted';
import ThingsToKnowSection from '../../components/ThingsToKnowSection/ThingsToKnowSection';
import ExploreSection from '../../components/ExploreSection/ExploreSection';
import ReviewSection from '../../components/ReviewSection/ReviewSection';
import CalendarSection from '../../components/CalendarSection.js/CalendarSection';
import AmenitiesSection from '../../components/AmenitiesSection/AmenitiesSection';
import SleepSection from '../../components/SleepSection/SleepSection';


function ListingPage() {
  return (
    <div>
      {/* <Header /> */}
      <div className="listing-page">
        {/* <Listings /> */}
      </div>
     
      <SleepSection />
      <AmenitiesSection />
      <CalendarSection />
      <ReviewSection />
      <Hosted />
      <ThingsToKnowSection />
      <ExploreSection />
      <Footer />
    </div>
    
  );
}

export default ListingPage;
