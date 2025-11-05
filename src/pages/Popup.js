import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Gallery carousel for trip images
const Gallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  return (
    <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-4">
      <img
        src={images[index]}
        alt={`Gallery ${index + 1}`}
        className="object-cover w-full h-full transition-transform duration-700"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-800 bg-opacity-50 text-white p-1 rounded-full"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-800 bg-opacity-50 text-white p-1 rounded-full"
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
  );
};

// Popup banner component
const Popup = ({ onClose }) => {
    const navigate = useNavigate();
  const images = [
    "https://a.cdn-hotels.com/gdcs/production15/d288/4474ed70-d272-41b6-9947-b76204f18fa1.jpg",
    "https://www.itl.cat/pngfile/big/80-801682_abu-dhabi.jpg",
    "https://www.tourpackagedubai.com/wp-content/uploads/2019/12/abu_dhabi_Sheikh_Zayed_Mosque-city-tour-deals_with_family_from_Dubai.jpg",
    "https://media.istockphoto.com/photos/beautiful-high-angle-view-of-modern-skyscrapers-in-abu-dhabi-taken-a-picture-id1143221045?b=1&k=20&m=1143221045&s=170667a&w=0&h=_hnOm_elRroeOoA0d0OJcVWopiBm4ZRohGYodeE8_Hc=",
    "https://visitabudhabi.ae/-/media/project/vad/plan-your-trip/article-hub/12-things-to-do-for-free-in-abu-dhabi/article-images/corniche-beach.jpg",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center transition-opacity animate-fadeIn">
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl border-4 border-blue-800 w-full max-w-xl p-6 mx-2 animate-slideUp">
        {/* Close button */}
         <button
  onClick={onClose}
  className="absolute right-5 top-5 z-10 text-xl font-bold text-gray-500 
             hover:text-white hover:bg-red-600 transition-all duration-300 
             border border-gray-300 rounded-full px-1.5 py- 
             shadow-sm hover:shadow-md hover:scale-110"
  aria-label="Close"
>
  &times;
</button>
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Trip or Travel Holidays Logo" className="h-14" />
        </div>
        {/* Main heading */}
        <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-1 text-center">
          Discover the Wonders of Abu Dhabi & Dubai
        </h2>
        {/* Subheading row */}
        <div className="text-lg text-red-600 mb-2 text-center font-semibold">
          6 Days / 5 Nights · Only ₹97,000*
        </div>
        <div className="text-sm text-gray-800 dark:text-gray-200 mb-2 text-center">
          Dates: 28 Nov - 03 Dec 2025 · Abu Dhabi, UAE
        </div>
        <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2 text-center">
          Seats Left: 20 &nbsp; | &nbsp; 250+ Happy Travelers &nbsp; | &nbsp; All Ages Welcome
        </div>
        {/* Gallery */}
        <Gallery images={images} />
        {/* Overview */}
        <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
          Experience luxury and adventure: guided city tours, desert safari, cruise dinner, Burj Khalifa, Corniche Beach, and more. All meals, flights, visa, hotel & transfers included!
        </p>
        {/* Highlights */}
        {/* <ul className="list-disc list-inside text-blue-700 dark:text-blue-200 text-sm mb-3 pl-3">
          <li>Sheikh Zayed Grand Mosque visit</li>
          <li>Dubai Marina Dhow Cruise with Dinner</li>
          <li>Desert Safari & Live Shows</li>
          <li>Burj Khalifa & Dubai Mall</li>
          <li>Corniche Beach & Heritage Village</li>
          <li>Ferrari World & BAPS Temple</li>
        </ul> */}
        <div className="mb-3 text-xs italic text-gray-600 dark:text-gray-400 text-center">
          Includes: 5 Nights 4★ Hotel · All Meals · Airfare & Visa · All Transfers & Entry Fees
        </div>
        {/* Buttons */}
        <div className="flex gap-2 justify-center mb-1">
          <button
  className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded shadow animate-pulse"
  onClick={() => {
    onClose();           // Hide the popup
    navigate('/tours/1'); // Navigate to the Tour Details page
  }}
>
  View Full Itinerary
</button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow animate-bounce"
          onClick={() => {
    onClose();           // Hide the popup
    navigate('/tours/1'); // Navigate to the Tour Details page
  }}
  >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Parent component that displays the popup
const TripPopup = () => {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div>
      {/* Main site content can go here */}
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      {/* Other site content goes here */}
    </div>
  );
};

export default TripPopup;

// Animations (add these to your Tailwind config if not already enabled):
// .animate-fadeIn { animation: fadeIn 0.4s; }
// .animate-slideUp { animation: slideUp 0.5s; }
//
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { transform: translateY(60px); opacity: 0; } to { transform: none; opacity: 1; } }
