import React from "react";
import { motion } from "framer-motion";

const NationalBanner = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <img
        src="https://wallpapercave.com/wp/wp10918600.jpg"
        alt="National Tours"
        className="absolute inset-0 w-full h-full  object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Incredible India 🇮🇳
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          Discover breathtaking destinations, rich culture, and heritage across India.
        </p>
        {/* <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-all">
          Book Your Tour Now
        </button> */}
      </motion.div>
    </section>
  );
};

export default NationalBanner;
