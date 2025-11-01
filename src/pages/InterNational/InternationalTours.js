import React from "react";
import { internationalTours } from "../Tour/toursData";
import TourCard from "../Tour/TourCard";
import { useNavigate } from "react-router-dom";

const InternationalTours = () => {
  const navigate = useNavigate();
  const handleViewMore = (tour) => navigate(`/details/${tour.id}`);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
          International Tours
        </h2>
        {/* <button
          onClick={() => navigate("/national")}
          className="text-orange-500 border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-50"
        >
          National Tours ⊕
        </button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internationalTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} onViewMore={handleViewMore} />
        ))}
      </div>
    </div>
  );
};

export default InternationalTours;
