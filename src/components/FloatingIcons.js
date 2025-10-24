import React from "react";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const FloatingIcons = () => {
  return (
    <div className="fixed top-1/2 right-5 -translate-y-1/2 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/7795183828"
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 text-white p-3 rounded-full text-2xl hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-green-400/50"
      >
        
        <FaWhatsapp />
      </a>
      <a
        href="https://www.instagram.com/trip_or_travel_holiday/ "
        target="_blank"
        rel="noreferrer"
        className="bg-pink-600 text-white p-3 rounded-full text-2xl hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-400/50"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.youtube.com/@TriporTravel-w2w"
        target="_blank"
        rel="noreferrer"
        className="bg-red-600 text-white p-3 rounded-full text-2xl hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-red-400/50"
      >
        <FaYoutube />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61563871814448"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-600 text-white p-3 rounded-full text-2xl hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-400/50"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default FloatingIcons;
