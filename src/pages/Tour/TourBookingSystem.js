// TourBookingSystem.js

import React, { useState } from "react";
import { internationalTours, nationalTours } from "./toursData";
import TourCard from "./TourCard";
import TourDetails from "./TourDetails";

const TourBookingSystem = () => {
  const [currentView, setCurrentView] = useState("home");
  const [selectedTour, setSelectedTour] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [expandedDay, setExpandedDay] = useState(1);
//   const [expandedPolicy, setExpandedPolicy] = useState(null);

  const handleViewMore = (tour) => {
    setSelectedTour(tour);
    setCurrentView("details");
    window.scrollTo(0, 0);
  };

//   const handleBack = () => {
//     setCurrentView("home");
//     setSelectedTour(null);
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const message = `*Tour Enquiry*%0A%0A*Tour:* ${selectedTour.title}%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message || "I am interested in " + selectedTour.title}`;
//     const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
//     window.open(whatsappUrl, "_blank");
//     alert("Redirecting to WhatsApp...");
//   };

//   const toggleDay = (day) => {
//     setExpandedDay(expandedDay === day ? null : day);
//   };

//   const togglePolicy = (policy) => {
//     setExpandedPolicy(expandedPolicy === policy ? null : policy);
//   };

  if (currentView === "details" && selectedTour?.fullDetails) {
    return (
      <TourDetails
        // selectedTour={selectedTour}
        // expandedDay={expandedDay}
        // expandedPolicy={expandedPolicy}
        // toggleDay={toggleDay}
        // togglePolicy={togglePolicy}
        // handleBack={handleBack}
        // handleInputChange={handleInputChange}
        // handleSubmit={handleSubmit}
        // formData={formData}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Tour Packages</h1>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* International Tours */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">International Tours</h2>
            <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-50 transition-colors">Show All ⊕</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} onViewMore={handleViewMore} />
            ))}
          </div>
        </div>

        {/* Domestic Tours */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">National Tours</h2>
            <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-50 transition-colors">Show All ⊕</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nationalTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} onViewMore={handleViewMore} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookingSystem;
