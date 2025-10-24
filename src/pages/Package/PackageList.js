// Package List Component
import PackageCard from './PackageCard';

const PackageList = ({ packages, onViewDetails, onGetOffer }) => {
  return (
    <div className="space-y-6">
      {packages.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 text-lg">No packages found matching your filters.</p>
          <p className="text-gray-500 text-sm mt-2">Try adjusting your search criteria.</p>
        </div>
      ) : (
        packages.map(pkg => (
          <PackageCard 
            key={pkg.id} 
            package={pkg} 
            onViewDetails={onViewDetails}
            onGetOffer={onGetOffer}
          />
        ))
      )}
    </div>
  );
};
export default PackageList;