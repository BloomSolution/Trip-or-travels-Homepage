// UpcomingToursSection.js
import React from "react";
import { internationalTours, nationalTours } from "./toursData";
import TourCard from "./TourCard";

const UpcomingToursSection = ({ onViewMore }) => {
  // Filter all tours having upcomingDates
  const upcomingTours = [
    ...internationalTours.filter((tour) => tour.fullDetails?.upcomingDates),
    ...nationalTours.filter((tour) => tour.fullDetails?.upcomingDates),
  ];

  if (upcomingTours.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
          Upcoming Tours
        </h2>
        {/* <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-50 transition-colors">
          Show All ⊕
        </button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} onViewMore={onViewMore} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingToursSection;
