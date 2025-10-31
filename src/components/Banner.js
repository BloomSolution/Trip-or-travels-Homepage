// import React, { useEffect, useState } from 'react';
// import './Banner.css';
// import banner1 from '../assets/banner3.jpg';
// import banner2 from '../assets/banner2.jpeg';

// const fallbackImage = 'https://via.placeholder.com/1920x1080?text=Travel+Banner';

// const banners = [
//   {
//     image: banner1 || fallbackImage,
//     tagline: 'Embark on Epic Adventures',
//     headline: 'Curated Trips Spark Your Sense of Wonder',
//   },
//   {
//     image: banner2 || fallbackImage,
//     tagline: 'Chase Your Wanderlust',
//     headline: 'Dream Destinations Await Your Next Journey',
//   },
// ];

// const Banner = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % banners.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const { image, tagline, headline } = banners[currentImageIndex];

//   return (
//     <section
//       className="hero-banner"
//       style={{ backgroundImage: `url(${image || fallbackImage})` }}
//     >
//       <div className="overlay" />
//       <div
//         className={`hero-text ${
//           currentImageIndex === 1 ? 'align-right' : 'align-left'
//         }`}
//       >
//         <p className="tagline">{tagline}</p>
//         <h1 className="headline">{headline}</h1>
//         <button className="explore-btn">Explore Now</button>
//       </div>
//     </section>
//   );
// };

// export default Banner;





// ! Keyboard changes
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  {
    img: "/banner3.jpg",
    tagline: 'Embark on Epic Adventures',
    text: "Curated Trips Spark Your Sense of Wonder",
  },
  {
    img: "/banner2.jpeg",
    tagline: 'Chase Your Wanderlust',
    text: "Dream Destinations Await Your Next Journey",
  },
  
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowRight") {
      setIndex((prev) => (prev + 1) % banners.length);
    } else if (e.key === "ArrowLeft") {
      setIndex((prev) => (prev - 1 + banners.length) % banners.length);
    }
  }, []);

  // Attach keydown listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full"
        >
          <img
            src={banners[index].img}
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 flex flex-col justify-center items-center text-center px-4">
          <p 
          className="text-2xl md:text-3xl font-semibold text-amber-400 drop-shadow-lg"
          > {banners[index].tagline}</p>
            <h1
             className="mt-3 text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-2xl"
             >
              {banners[index].text}
            </h1>
            <a
              href="/contact"
              
              className="mt-6 px-8 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              Book Your Trip
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
