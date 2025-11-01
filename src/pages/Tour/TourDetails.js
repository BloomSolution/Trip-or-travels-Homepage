
//! TourDetails.js

import React, { useState } from "react";
import { Calendar, MapPin, Users, ChevronLeft, ChevronUp, ChevronDown, ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import { internationalTours, nationalTours } from "./toursData";

const TourDetails = ({
  selectedTour: propTour,
//   handleInputChange,
//   handleSubmit,
//   formData = {},
}) => {
  const { id } = useParams();

  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedPolicy, setExpandedPolicy] = useState(null);
  const [activeTab, setActiveTab] = useState("Inclusion");
  const [current, setCurrent] = useState(0);
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `🧳 *Tour Enquiry*\n\n
*Tour:* ${selectedTour.title}\n
*Location:* ${selectedTour.location}\n
*Name:* ${formData.name}\n
*Email:* ${formData.email}\n
*Phone:* ${formData.phone}\n
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "917795183828"; // ⚠️ apna WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };


  // Find the selected tour using the prop, param id, or fallback
  const selectedTour =
    propTour ||
    internationalTours.find((t) => t.id === parseInt(id)) ||
    nationalTours.find((t) => t.id === parseInt(id));

  // Return if not found
  if (!selectedTour || !selectedTour.fullDetails) {
    return (
      <div className="flex justify-center items-center h-[100vh] bg-black">
        <div className="text-center py-20 text-gray-500 font-extrabold text-4xl">
          Tour details not found 😕
        </div>
      </div>
    );
  }

  const details = selectedTour.fullDetails;
  const images = Array.isArray(details.images) ? details.images : [];
//   const dates = Array.isArray(details.dates) ? details.dates : []; // ✅ define dates here
// const dates = selectedTour.date
//   ? selectedTour.date.split(",").map((d) => ({ date: d.trim(), seatsLeft: selectedTour.seatsLeft }))
//   : [];
const dates = Array.isArray(selectedTour.date)
  ? selectedTour.date.map((d) =>
      typeof d === "object" && d.date
        ? { date: d.date.trim(), seatsLeft: d.seatsLeft || selectedTour.seatsLeft }
        : { date: d.trim(), seatsLeft: selectedTour.seatsLeft }
    )
  : typeof selectedTour.date === "string"
  ? selectedTour.date
      .split(",")
      .map((d) => ({ date: d.trim(), seatsLeft: selectedTour.seatsLeft }))
  : [];



  const toggleDay = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const togglePolicy = (policy) => {
    setExpandedPolicy(expandedPolicy === policy ? null : policy);
  };




    const nextSlide = () => {
    if (dates.length > 0) setCurrent((prev) => (prev + 1) % dates.length);
  };

  const prevSlide = () => {
    if (dates.length > 0) setCurrent((prev) => (prev - 1 + dates.length) % dates.length);
  };



  return (
    <div className="min-h-screen bg-gray-50 md:mt-10 ">
      {/* Banner Section */}
      <div
        className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${
            images.length > 0
              ? images[0]
              : "https://via.placeholder.com/1600x500?text=No+Image"
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 pt-9">{selectedTour.title}</h1>
          <p className="text-lg md:text-xl">{selectedTour.location}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
              <div className="grid grid-cols-2 gap-2 p-2">
                {images.length > 0 ? (
                  <>
                    <img
                      src={images[0]}
                      alt="Tour"
                      className="w-full h-64 object-cover rounded col-span-2"
                    />
                    {images.slice(1, 5).map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Tour ${idx + 2}`}
                        className="w-full h-32 object-cover rounded"
                      />
                    ))}
                  </>
                ) : (
                  <img
                    src="https://via.placeholder.com/600x300?text=No+Images"
                    alt="No Images"
                    className="w-full h-64 object-cover rounded col-span-2"
                  />
                )}
              </div>
            </div>

            {/* Tour Title & Info */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedTour.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {selectedTour.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {selectedTour.duration}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  All Ages
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {details.happyTravelers} Happy Travelers
                </div>
              </div>
            </div>

            {/* Trip Overview */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
                Trip Overview
              </h2>
              <p className="text-gray-600 leading-relaxed">{details.overview}</p>
            </div>

            {/* Trip Highlights */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
                Trip Highlights
              </h2>
              <ul className="space-y-2">
                {Array.isArray(details.highlights)
                  ? details.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))
                  : null}
              </ul>
            </div>

            {/* Inclusion & Exclusion */}
<div className="bg-white rounded-lg shadow-md p-6 mb-6">
  <div className="flex border-b mb-6">
    {["Inclusion", "Exclusion"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`relative px-6 py-2 text-lg font-semibold transition-all ${
          activeTab === tab ? "text-black" : "text-gray-500"
        }`}
      >
        {tab}
        {activeTab === tab && (
          <span className="absolute left-0 -bottom-[1px] w-full h-[4px] bg-orange-500 rounded-t-full"></span>
        )}
      </button>
    ))}
  </div>

  {activeTab === "Inclusion" && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.isArray(details.inclusions) &&
        details.inclusions.map((item, idx) => (
          <div key={idx} className="flex items-center text-gray-700">
            <span className="text-green-500 text-lg mr-2">✔</span>
            {item}
          </div>
        ))}
    </div>
  )}

  {activeTab === "Exclusion" && (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.isArray(details.exclusions) &&
        details.exclusions.map((item, idx) => (
          <div key={idx} className="flex items-center text-gray-700">
            <span className="text-red-500 text-lg mr-2">✘</span>
            {item}
          </div>
        ))}
    </div>
  )}
</div>


            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
                Itinerary
              </h2>
              <div className="space-y-3">
                {Array.isArray(details.itinerary)
                  ? details.itinerary.map((day) => (
                      <div key={day.day} className="border rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleDay(day.day)}
                          className="w-full flex items-center justify-between p-4 bg-orange-50 hover:bg-orange-100 transition-colors"
                        >
                          <span className="font-semibold text-gray-800">
                            Day {day.day} - {day.title}
                          </span>
                          {expandedDay === day.day ? (
                            <ChevronUp className="w-5 h-5 text-orange-500" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-orange-500" />
                          )}
                        </button>
                        {expandedDay === day.day && (
                          <div className="p-4 bg-white border-t">
                            <p className="text-gray-600 mb-3">{day.description}</p>
                            <div className="text-sm text-gray-500">
                              <p className="mb-1">
                                <strong>Meals:</strong> {day.meals}
                              </p>
                              <p>
                                <strong>Accommodation:</strong> {day.accommodation}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  : null}
              </div>
            </div>

{/* Upcoming Dates */}
<div className="bg-white rounded-lg shadow-md p-6 mb-6 relative">
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-l-4 border-orange-500 pl-3">
        Upcoming Dates
      </h2>

      <div className="flex items-center justify-between">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5 text-orange-500" />
        </button>

        {/* Current Date Card */}
        <div className="flex flex-col items-center bg-orange-50 p-6 rounded-2xl shadow-inner min-w-[250px] text-center">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="w-5 h-5 text-orange-500 mr-2" />
            <span className="text-gray-700 font-semibold">
              {dates[current]?.date || "NO date available"}
            </span>
          </div>
          <span className="bg-black text-green-400 px-4 py-1 rounded-full text-sm font-bold mt-2">
            {/* {dates[current].seatsLeft} Seats Left / 30 */}
            {dates?.[current]?.seatsLeft ?? 0} Seats Left / 30
          </span>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5 text-orange-500" />
        </button>
      </div>
    </div>


            {/* Policies */}
<div className="bg-white rounded-lg shadow-md p-6 mb-6">
  {/* Refund Policy */}
  <div className="border-b pb-4 mb-4">
    <button
      onClick={() => togglePolicy("refund")}
      className="w-full flex items-center justify-between"
    >
      <h3 className="text-lg font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
        Refund Policy
      </h3>
      {expandedPolicy === "refund" ? (
        <ChevronUp className="w-5 h-5 text-orange-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-orange-500" />
      )}
    </button>
    {expandedPolicy === "refund" && (
      <ul className="mt-4 space-y-2 pl-4 text-sm text-gray-600">
        <li>• If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.</li>
        <li>• If cancellations are made 15–30 days before the start date of the trip, 75% of the trip cost will be charged as cancellation fees.</li>
        <li>• If cancellations are made within 0–15 days before the start date of the trip, 100% of the trip cost will be charged as cancellation fees.</li>
        <li>• In case of unforeseen weather or government restrictions, some activities may be cancelled, and the operator will try to offer an alternative. No refund will be provided.</li>
      </ul>
    )}
  </div>

  {/* Cancellation Policy */}
  <div className="border-b pb-4 mb-4">
    <button
      onClick={() => togglePolicy("cancellation")}
      className="w-full flex items-center justify-between"
    >
      <h3 className="text-lg font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
        Cancellation Policy
      </h3>
      {expandedPolicy === "cancellation" ? (
        <ChevronUp className="w-5 h-5 text-orange-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-orange-500" />
      )}
    </button>
    {expandedPolicy === "cancellation" && (
      <ul className="mt-4 space-y-2 pl-4 text-sm text-gray-600">
        <li>• Cancellations must be made in writing via email.</li>
        <li>• Refunds will be processed within 10–15 working days.</li>
        <li>• Bank charges, if any, will be borne by the customer.</li>
      </ul>
    )}
  </div>

  {/* Payment Terms */}
  <div>
    <button
      onClick={() => togglePolicy("payment")}
      className="w-full flex items-center justify-between"
    >
      <h3 className="text-lg font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
        Payment Term Policy
      </h3>
      {expandedPolicy === "payment" ? (
        <ChevronUp className="w-5 h-5 text-orange-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-orange-500" />
      )}
    </button>
    {expandedPolicy === "payment" && (
      <ul className="mt-4 space-y-2 pl-4 text-sm text-gray-600">
        <li>• 25% advance payment at the time of booking.</li>
        <li>• Balance payment 15 days before departure.</li>
        <li>• Payment modes: Bank Transfer, UPI, Credit/Debit Card.</li>
      </ul>
    )}
  </div>
</div>

          </div>

          {/* Right Column - Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-40">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-800">
                  {selectedTour.price}
                  {details.perPerson && (
                    <span className="text-lg font-normal text-gray-600">
                      /person
                    </span>
                  )}
                </div>
              </div>

              <button className="w-full bg-orange-100 text-orange-600 py-3 rounded-lg font-semibold mb-6">
                Fill the form below
              </button>

              <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
                For Enquiry
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Embark on a journey through India’s spiritual heartland.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div className="flex">
                  <select className="px-3 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-orange-500">
                    <option>🇮🇳 +91</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone No."
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="flex-1 px-4 py-3 border-t border-r border-b border-gray-300 rounded-r-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder={`I am Interested in ${selectedTour.title}...`}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;