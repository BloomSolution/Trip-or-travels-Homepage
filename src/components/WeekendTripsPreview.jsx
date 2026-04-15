// components/WeekendTripsPreview.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

// Import the same package data used in WeekendTrip page
// (You can also move this array to a shared file like data/weekendPackages.js)
const packages = [
  {
    name: "Rameshwaram - Dhanushkodi",
    image: "/DhanushKodi.jpg",
    price: "5555",
  },
  {
    name: "Varkala",
    image: "/Varkala.jpg",
    price: "8499",
  },
  {
    name: "Udupi",
    image: "/Udupi.jpg",
    price: "4666",
  },
  {
    name: "Valparai",
    image: "/Valparai.jpg",
    price: "4499",
  },
  {
    name: "Vagamon",
    image: "/Vagamon.jpg",
    price: "4499",
  },
  {
    name: "Kochi - Alleppey",
    image: "/Kochi.jpg",
    price: "5999",
  },
  {
    name: "Coorg",
    image: "/Coorg.jpg",
    price: "3999",
  },
  {
    name: "Ooty - Coonoor",
    image: "/Ooty.jpg",
    price: "4999",
  },
  {
    name: "Wayanad",
    image: "/Wayanad.jpg",
    price: "4499",
  },
  {
    name: "Kodaikanal",
    image: "/Kodaikanal.jpg",
    price: "4999",
  },
  {
    name: "Chikkamangalur",
    image: "/Chikmangaluru.jpg",
    price: "3999",
  },
  {
    name: "Gokarna",
    image: "/Gokarna.jpg",
    price: "3999",
  },
  {
    name: "Munnar",
    image: "/Munnar.jpg",
    price: "5999",
  },
  {
    name: "Pondicherry",
    image: "/Pondicherry.jpg",
    price: "4666",
  },
  {
    name: "Hampi",
    image: "/Hampi.jpg",
    price: "4444",
  },
];

const WeekendTripsPreview = () => {
  // Show only first 3 packages
  const previewPackages = packages.slice(0, 3);

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
          >
            Weekend Trips
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escape the routine with our handpicked weekend getaways. Perfect for a quick refresh!
          </p>
        </div>

        {/* Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    2D/1N
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {pkg.name}
                  </h3>
                  <span className="text-xl font-bold text-blue-600">
                    ₹{pkg.price}
                    <span className="text-sm font-normal text-gray-500 ml-1">/person</span>
                  </span>
                </div>
                <Link
                  to="/weekend-trips"
                  className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  View Details <MapPin size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <Link
            to="/weekend-trips"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore More Packages <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WeekendTripsPreview;