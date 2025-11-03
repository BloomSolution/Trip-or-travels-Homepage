import React from "react";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  { title: "Trips", img: "https://wallpapercave.com/wp/wp4069441.jpg" },
  { title: "Treks", img: "https://intrekking.com/wp-content/uploads/2024/06/Monsoon-Season-Trekking-in-Nepal-768x384.jpg" },
  { title: "Visas", img: "https://cdn.pixabay.com/photo/2022/06/02/02/32/visa-7236927_1280.jpg" },
  { title: "Passports", img: "https://tse4.mm.bing.net/th/id/OIP.PvUYYzg70D2Z_a6mpDqFTAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { title: "Flights", img: "https://wallpaperbat.com/img/695643-wallpaper-sky-airplane-airline-airbus-aviation-wallpaper-for-you-hd-wallpaper-for-desktop-mobile.jpg" },
  { title: "hotel", img: "https://wallpapercave.com/wp/wp38040.jpg" },
  { title: "Trains", img: "https://img.freepik.com/premium-photo/classic-steam-locomotive-train-engine-track-generative-ai_386815-2853.jpg" },
  { title: "Cabs", img: "https://img.freepik.com/premium-photo/bustling-downtown-new-york-city-street-scene-with-yellow-cabs-motion-blur-16k-super-quality_174533-5623.jpg?w=2000" },
  { title: "Buses", img: "https://www.mercedes-benz-bus.com/content/dam/mbo/markets/common/models/tourismo-rhd/comfort-and-design/images/teaser/tourismo-rhd-teaser-comfort-and-design-01-EB43700.jpg" },
];

export default function Tracks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-10 border border-red-200 rounded-2xl max-w-7xl mx-auto">
      {categories.map((item, i) => (
        <div
          key={i}
          className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-md"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
          <h2 className="absolute inset-0 flex justify-center items-center text-white text-3xl font-semibold gap-2">
            {item.title} <FaArrowRight className="text-white text-xl group-hover:translate-x-1 transition-transform pt-1" />
          </h2>
        </div>
      ))}
    </div>
  );
}
