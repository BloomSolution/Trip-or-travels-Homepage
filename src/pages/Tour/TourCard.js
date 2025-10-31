// // TourCard.js

// import React from "react";
// import { MapPin, Calendar, Phone } from "lucide-react";
// import { Link } from "react-router-dom";

// const TourCard = ({ tour, onViewMore }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//     <div className="relative">
//       <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
//       {tour.seatsLeft && tour.seatsLeft <= 10 && (
//         <div className="absolute top-3 right-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
//           {tour.seatsLeft} Seats Left
//         </div>
//       )}
//       {tour.soldOut && (
//         <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
//           Sold Out
//         </div>
//       )}
//     </div>

//     <div className="p-4">
//       <h3 className="font-bold text-lg text-gray-800 mb-2">{tour.title}</h3>
//       <div className="flex items-center text-sm text-gray-600 mb-2">
//         <MapPin className="w-4 h-4 mr-1" />
//         <span>{tour.location}</span>
//       </div>
//       <div className="flex items-center text-sm text-gray-600 mb-3">
//         <Calendar className="w-4 h-4 mr-1" />
//         <span>{tour.duration}</span>
//       </div>
//       <div className="mb-3">
//         {tour.price && (
//           <div className={`text-xl font-bold ${tour.soldOut ? "text-red-500" : "text-gray-800"}`}>
//             {tour.price}
//             {!tour.soldOut && <span className="text-sm font-normal">/PP</span>}
//           </div>
//         )}
//         {tour.originalPrice && !tour.soldOut && (
//           <div className="text-sm text-gray-400 line-through">{tour.originalPrice}</div>
//         )}
//         {tour.date && (
//           <div className="text-sm text-gray-600 mt-2 flex items-center">
//             <Calendar className="w-4 h-4 inline mr-1" />
//             {tour.date}
//           </div>
//         )}
//       </div>
//       <div className="text-sm text-gray-600 mb-4">
//         {tour.travelers}+ travelers can't be wrong – book your trip today!
//       </div>
//       <div className="flex gap-2">
//         <button className="flex items-center justify-center border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">
//           <Phone className="w-4 h-4 mr-1" /> Call
//         </button>
//         <Link to={`/tours/${tour.id}`} state={{ tour }}>
//         <button
//           onClick={() => onViewMore(tour)}
//           className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
//           View More
//         </button>
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// export default TourCard;



import React from "react";
import { MapPin, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const TourCard = ({ tour, onViewMore }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
    {/* Image */}
    <div className="relative">
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-56 object-cover rounded-t-2xl"
      />
      {tour.seatsLeft && (
        <div className="absolute top-3 right-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold shadow">
          {tour.seatsLeft} Seats Left
        </div>
      )}
    </div>

    {/* Details */}
    <div className="p-5">
      <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">
        {tour.title}
      </h3>

      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center text-gray-600 text-sm mb-1">
            <MapPin className="w-4 h-4 mr-1" />
            {tour.location}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {tour.duration}
          </div>
        </div>

        <div className="text-right">
          {tour.originalPrice && (
           <div className="text-sm text-gray-400">
            <span>Price </span>
            <span
                className="line-through"
                style={{ textDecorationColor: "orange" }}
            >
                {tour.originalPrice}
            </span>
            <span className="text-sm text-gray-500 font-normal"> /pp</span>
           </div>

          )}
          <div className="text-xl font-bold text-gray-900"> 
            {tour.price}
            <span className="text-sm text-gray-500 font-normal"> /pp</span>
          </div>

          <div className="mt-2 flex justify-start">
  {tour.seatsLeft && (
    <div className="bg-orange-50 border border-gray-300 text-green-700 px-4 py-1 rounded-md text-xs font-semibold shadow w-fit ml-0">
      {tour.seatsLeft} Seats Left
    </div>
  )}
</div>

        </div>
      </div>

      <div className="flex items-center text-sm text-gray-600 mb-3">
        <Calendar className="w-4 h-4 mr-1 text-orange-500" />
        <span>{tour.date}</span>
      </div>

      <div className="text-center text-gray-700 border text-xs bg-gray-50 py-1 rounded mb-4">
        {tour.travelers}+ travelers can’t be wrong — book your trip today!
      </div>

      <div className="flex gap-3">
        <button className="flex items-center justify-center w-1/3 border-2 border-orange-500 text-orange-500 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors">
          <Phone className="w-4 h-4 mr-1" /> Call
        </button>
        <Link to={`/tours/${tour.id}`} state={{ tour }} className="flex-1">
          <button
            onClick={() => onViewMore?.(tour)}
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            View More
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default TourCard;
