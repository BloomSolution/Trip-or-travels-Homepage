
// Package Card Component
import { Bed, Car, Camera, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const PackageCard = ({ package: pkg, onViewDetails, onGetOffer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="w-full lg:w-80 h-64 flex-shrink-0">
          <img 
            src={pkg.image} 
            alt={pkg.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4 md:p-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className="flex-1 mb-4 lg:mb-0">
              {/* Title and Category */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                  {pkg.name}
                </h2>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm w-full sm:w-auto">
                  <option>{pkg.category}</option>
                </select>
              </div>
              
              {/* Details */}
              <div className="text-gray-600 mb-2 text-sm md:text-base">
                <span className="font-semibold">{pkg.days} Days, {pkg.nights} Nights</span>
              </div>
              <div className="text-gray-600 mb-4 text-sm md:text-base">
                <span className="font-semibold">Destinations - </span>{pkg.destination}
              </div>
              
              {/* Icons */}
              <div className="flex items-center gap-4 md:gap-8 mt-4 flex-wrap">
                {pkg.includes.includes('Hotels') && (
                  <div className="flex flex-col items-center">
                    <Bed className="w-6 h-6 md:w-8 md:h-8 mb-1" />
                    <span className="text-xs md:text-sm">Hotels</span>
                  </div>
                )}
                {pkg.includes.includes('Sightseeing') && (
                  <div className="flex flex-col items-center">
                    <Camera className="w-6 h-6 md:w-8 md:h-8 mb-1" />
                    <span className="text-xs md:text-sm">Sightseeing</span>
                  </div>
                )}
                {pkg.includes.includes('Transfer') && (
                  <div className="flex flex-col items-center">
                    <Car className="w-6 h-6 md:w-8 md:h-8 mb-1" />
                    <span className="text-xs md:text-sm">Transfer</span>
                  </div>
                )}
                {pkg.includes.includes('Meals') && (
                  <div className="flex flex-col items-center">
                    <Utensils className="w-6 h-6 md:w-8 md:h-8 mb-1" />
                    <span className="text-xs md:text-sm">Meals</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Price and Buttons */}
            <div className="text-left lg:text-right lg:ml-6 border-t lg:border-t-0 pt-4 lg:pt-0">
              <div className="text-sm text-gray-500 mb-1">Starting from</div>
              <div className="text-2xl md:text-4xl font-bold mb-1">
                INR {pkg.price.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mb-4">Per Person Twin Sharing</div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                {/* <Link to={`/package/${pkg.id}`}> */}
                <button
                //   onClick={() => onViewDetails(pkg)}
                  className="border-2 border-red-600 text-red-600 px-4 md:px-6 py-2 rounded hover:bg-red-50 transition-colors text-sm md:text-base"
                >
                  View Details
                </button>
                {/* </Link> */}
                
                <button 
                  onClick={() => onGetOffer(pkg)}
                  className="bg-red-600  text-white px-4 md:px-6 py-2 rounded hover:bg-red-700 transition-colors text-sm md:text-base"
                >
                  Get Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PackageCard;