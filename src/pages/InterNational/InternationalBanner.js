import React from "react";
import { motion } from "framer-motion";

const InternationalBanner = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <img
        // src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        src="https://wallpaperaccess.com/full/407997.jpg"
        alt="International Tours"
        className="absolute inset-0 w-full h-full object-cover"
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
          Explore the World with Us 🌎
        </h1>
        <p className="text-lg text-gray-200 mb-6">
          From Paris to Bali — experience the best international destinations with comfort and style.
        </p>
        {/* <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-all">
          Discover Tours
        </button> */}
      </motion.div>
    </section>
  );
};

export default InternationalBanner;
