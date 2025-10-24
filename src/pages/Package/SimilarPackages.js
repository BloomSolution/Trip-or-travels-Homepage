// Similar Packages Component
const SimilarPackages = ({ packages, currentPackageId, mainImage }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="font-bold mb-4 text-base md:text-lg">Similar Packages</h3>
      <div className="space-y-4">
        {packages
          .filter(pkg => pkg.id !== currentPackageId)
          .slice(0, 4)
          .map((similar, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
            >
              <img 
                src={mainImage} 
                alt={similar.name} 
                className="w-full h-24 md:h-32 object-cover rounded mb-2" 
              />
              <h4 className="font-semibold text-xs md:text-sm mb-1 line-clamp-2">
                {similar.name}
              </h4>
              <p className="text-xs text-gray-600 mb-1">
                {similar.days} Days, {similar.nights} Nights
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Cities</p>
                  <p className="text-xs font-semibold">{similar.destination}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">STARTING FROM</p>
                  <p className="text-xs md:text-sm font-bold text-red-600">
                    INR {similar.price.toLocaleString()}
                  </p>
                </div>
              </div>
              <button className="w-full mt-2 bg-red-600 text-white text-xs md:text-sm py-1.5 rounded hover:bg-red-700 transition-colors">
                View Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default SimilarPackages;