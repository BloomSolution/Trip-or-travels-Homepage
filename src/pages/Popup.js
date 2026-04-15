// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";

// // Gallery carousel for trip images
// const Gallery = ({ images }) => {
//   const [index, setIndex] = useState(0);
//   const next = () => setIndex((i) => (i + 1) % images.length);
//   const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
//   return (
//     <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-4">
//       <img
//         src={images[index]}
//         alt={`Gallery ${index + 1}`}
//         className="object-cover w-full h-full transition-transform duration-700"
//       />
//       <button
//         onClick={prev}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-800 bg-opacity-50 text-white p-1 rounded-full"
//         aria-label="Previous"
//       >
//         &#8592;
//       </button>
//       <button
//         onClick={next}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-800 bg-opacity-50 text-white p-1 rounded-full"
//         aria-label="Next"
//       >
//         &#8594;
//       </button>
//     </div>
//   );
// };

// // Popup banner component
// const Popup = ({ onClose }) => {
//   const navigate = useNavigate();
//   const images = [
//     "https://a.cdn-hotels.com/gdcs/production15/d288/4474ed70-d272-41b6-9947-b76204f18fa1.jpg",
//     "https://www.itl.cat/pngfile/big/80-801682_abu-dhabi.jpg",
//     "https://www.tourpackagedubai.com/wp-content/uploads/2019/12/abu_dhabi_Sheikh_Zayed_Mosque-city-tour-deals_with_family_from_Dubai.jpg",
//     "https://media.istockphoto.com/photos/beautiful-high-angle-view-of-modern-skyscrapers-in-abu-dhabi-taken-a-picture-id1143221045?b=1&k=20&m=1143221045&s=170667a&w=0&h=_hnOm_elRroeOoA0d0OJcVWopiBm4ZRohGYodeE8_Hc=",
//     "https://visitabudhabi.ae/-/media/project/vad/plan-your-trip/article-hub/12-things-to-do-for-free-in-abu-dhabi/article-images/corniche-beach.jpg",
//   ];

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center transition-opacity animate-fadeIn">
//       <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-2xl border-4 border-blue-800 w-full max-w-xl px-6 py-2 md:py-6 mx-2 animate-slideUp">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute right-5 top-5 z-10 text-xl font-bold text-gray-500 
//              hover:text-white hover:bg-red-600 transition-all duration-300 
//              border border-gray-300 rounded-full px-1.5 py- 
//              shadow-sm hover:shadow-md hover:scale-110"
//           aria-label="Close"
//         >
//           &times;
//         </button>
//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <img src="/logo.png" alt="Trip or Travel Holidays Logo" className="h-14" />
//         </div>
//         {/* Main heading */}
//         <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-1 text-center">
//           Discover the Wonders of Abu Dhabi & Dubai
//         </h2>
//         {/* Subheading row */}
//         <div className="text-lg text-red-600 mb-2 text-center font-semibold">
//           6 Days / 5 Nights · Only ₹97,000*
//         </div>
//         <div className="text-sm text-gray-800 dark:text-gray-200 mb-2 text-center">
//           Dates: 28 Nov - 03 Dec 2025 · Abu Dhabi, UAE
//         </div>
//         <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2 text-center">
//           Seats Left: 20 &nbsp; | &nbsp; 250+ Happy Travelers &nbsp; | &nbsp; All Ages Welcome
//         </div>
//         {/* Gallery */}
//         <Gallery images={images} />
//         {/* Overview */}
//         <p className="text-gray-700 dark:text-gray-300 mb-2 text-center">
//           Experience luxury and adventure: guided city tours, desert safari, cruise dinner, Burj Khalifa, Corniche Beach, and more. All meals, flights, visa, hotel & transfers included!
//         </p>
//         {/* Highlights */}
//         {/* <ul className="list-disc list-inside text-blue-700 dark:text-blue-200 text-sm mb-3 pl-3">
//           <li>Sheikh Zayed Grand Mosque visit</li>
//           <li>Dubai Marina Dhow Cruise with Dinner</li>
//           <li>Desert Safari & Live Shows</li>
//           <li>Burj Khalifa & Dubai Mall</li>
//           <li>Corniche Beach & Heritage Village</li>
//           <li>Ferrari World & BAPS Temple</li>
//         </ul> */}
//         <div className="mb-3 text-xs italic text-gray-600 dark:text-gray-400 text-center">
//           Includes: 5 Nights 4★ Hotel · All Meals · Airfare & Visa · All Transfers & Entry Fees
//         </div>
//         {/* Buttons */}
//         <div className="flex gap-2 justify-center mb-1">
//           <button
//             className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded shadow animate-pulse"
//             onClick={() => {
//               onClose();           // Hide the popup
//               navigate('/tours/1'); // Navigate to the Tour Details page
//             }}
//           >
//             View Full Itinerary
//           </button>
//           <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow animate-bounce"
//             onClick={() => {
//               onClose();           // Hide the popup
//               navigate('/tours/1', { state: { scrollToForm: true } }); // Navigate to the Tour Details page
//             }}
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Parent component that displays the popup
// const TripPopup = () => {
//   const [showPopup, setShowPopup] = useState(true);

//   const location = useLocation();

// useEffect(() => {
//   if (location.state?.scrollToForm) {
//     setTimeout(() => {
//       const form = document.getElementById("booking-form");
//       if (form) form.scrollIntoView({ behavior: "smooth" });
//     }, 500);
//   }
// }, [location]);


//   return (
//     <div>
//       {/* Main site content can go here */}
//       {showPopup && <Popup onClose={() => setShowPopup(false)} />}
//       {/* Other site content goes here */}
//     </div>
//   );
// };

// export default TripPopup;

// // Animations (add these to your Tailwind config if not already enabled):
// // .animate-fadeIn { animation: fadeIn 0.4s; }
// // .animate-slideUp { animation: slideUp 0.5s; }
// //
// // @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// // @keyframes slideUp { from { transform: translateY(60px); opacity: 0; } to { transform: none; opacity: 1; } }
// components/Popup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, X, Calendar, Users, Star } from "lucide-react";

// Featured weekend packages shown in popup
const featuredPackages = [
  {
    name: "Coorg",
    image: "/Coorg.jpg",
    price: "3999",
    tagline: "Scotland of India",
  },
  {
    name: "Wayanad",
    image: "/Wayanad.jpg",
    price: "4499",
    tagline: "Green Paradise",
  },
  {
    name: "Gokarna",
    image: "/Gokarna.jpg",
    price: "3999",
    tagline: "Beach & Temples",
  },
];

const WeekendPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    onClose();
    navigate("/weekend-trips");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-amber-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 bg-gray-100 hover:bg-red-500 text-gray-600 hover:text-white rounded-full transition-all duration-300 shadow-md"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
          <div className="flex items-center justify-center gap-3">
            <MapPin size={32} className="text-white" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-center">
              Weekend Escapes
            </h2>
          </div>
          <p className="text-center text-white/90 mt-2 text-lg">
            2 Days & 1 Night · Starting from ₹3,999 per person
          </p>
          <div className="flex justify-center gap-6 mt-3 text-sm">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> Every Weekend
            </span>
            <span className="flex items-center gap-1">
              <Users size={16} /> Group Tours
            </span>
            <span className="flex items-center gap-1">
              <Star size={16} /> 4.8 ★ (500+ reviews)
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Featured Packages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {featuredPackages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="relative h-36">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <p className="font-bold text-lg">{pkg.name}</p>
                    <p className="text-xs opacity-90">{pkg.tagline}</p>
                  </div>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{pkg.price}
                  </span>
                  <span className="text-sm text-gray-500">/person</span>
                </div>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="bg-amber-50 rounded-xl p-4 mb-6 border border-amber-200">
            <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-amber-600">✨</span> What's Included?
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-1">🚌 Comfortable Travel</li>
              <li className="flex items-center gap-1">🏨 Luxury Stay</li>
              <li className="flex items-center gap-1">🍽️ 1 Breakfast & 1 Dinner</li>
              <li className="flex items-center gap-1">🗺️ Expert Trip Guide</li>
              <li className="flex items-center gap-1">📸 Photographic Stops</li>
              <li className="flex items-center gap-1">🛡️ 100% Safety</li>
            </ul>
          </div>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <button
              onClick={handleExplore}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Explore All Weekend Trips <ArrowRight size={18} />
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-center text-gray-500 mt-4">
            15+ handpicked destinations · 500+ happy travelers · 24/7 support
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main component that controls popup visibility
const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <AnimatePresence>
      {showPopup && <WeekendPopup onClose={() => setShowPopup(false)} />}
    </AnimatePresence>
  );
};

export default Popup;