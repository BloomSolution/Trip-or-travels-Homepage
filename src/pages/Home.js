import React from 'react';

import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Destinations from '../components/Destinations';
import TravelExperience from '../components/TravelExperience';
import FeaturedTour from '../components/FeaturedTour';
import Testimonial from '../components/Testimonial';
import Insta from '../components/Insta';

import TourBookingSystem from './Tour/TourBookingSystem';
import UpcomingToursSection from './Tour/UpcomingToursSection';
import Tracks from './Tracks';

function Home() {

  const handleViewMore = (tour) => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Banner />
      <Tracks />
      <UpcomingToursSection onViewMore={handleViewMore} />
      <AboutUs />
      <TourBookingSystem />
      <Destinations />
      <TravelExperience />
      <FeaturedTour />
      <Testimonial />
      <Insta />
    </>
  );
}

export default Home;