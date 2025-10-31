import React, { useState } from 'react';

import Banner from '../components/Banner';
import Enquiry from '../components/Enquiry';
import AboutUs from '../components/AboutUs';
import Destinations from '../components/Destinations';
import TravelExperience from '../components/TravelExperience';
import FeaturedTour from '../components/FeaturedTour';
import Testimonial from '../components/Testimonial';
import Insta from '../components/Insta';
import Test from './Tour/Test';
import TourBookingSystem from './Tour/TourBookingSystem';
import UpcomingToursSection from './Tour/UpcomingToursSection';


function Home()
{

  const [currentView, setCurrentView] = useState("home");
    const [selectedTour, setSelectedTour] = useState(null);

  
    const handleViewMore = (tour) => {
      setSelectedTour(tour);
      setCurrentView("details");
      window.scrollTo(0, 0);
    };
  return(
    <>
    {/* <Preloader/> */}
   
    <Banner/>
    {/* <Test/> */}
    <UpcomingToursSection onViewMore={handleViewMore} />
   {/* <Enquiry/> */}
    <AboutUs/>
    <Destinations/>
    <TourBookingSystem/>
    <TravelExperience/>
    <FeaturedTour/>
    <Testimonial/>
    <Insta/>
    {/* <Footer/> */}
    </>
  );
}

export default Home;