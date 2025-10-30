// import { Menu } from "lucide-react";
// import { useState } from "react";
// import FilterSidebar from './FilterSidebar';
// import PackageList from './PackageList';
// import PackageDetails from './PackageDetails';

// // Main App Component
// const TravelBookingSystem = () => {
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [filters, setFilters] = useState({
//     nights: [],
//     category: [],
//     destination: [],
//     priceRange: []
//   });

//   const packages = [
//     {
//       id: 1,
//       name: 'CANAREEF RESORT MALDIVES WITH ALL MEALS PACKAGE',
//       image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop',
//       days: 4,
//       nights: 3,
//       destination: 'Maldives',
//       category: 'Deluxe',
//       price: 46500,
//       rating: 5,
//       includes: ['Hotels', 'Transfer', 'Meals'],
//       location: 'Maldives (3 Nights)',
//       hotelName: 'Canareef Resort Maldives',
//       roomCategory: 'SUNRISE VILLA',
//       mealPlan: 'All Inclusive (AI)',
//       description: 'Indulge in Tranquility by the Serene Blue Waters. Embrace tranquility and bliss at Canareef Resort, where crystalline waters meet endless skies, and white sandy beaches give way to the serene rhythm of the sun and sea.',
//       highlights: [
//         'FLIGHT DETAILS - SRILANKAN AIRLINES',
//         'BANGALORE TO COLOMBO IS ON - 0320 - 0450'
//       ],
//       inclusions: [
//         'Meet & greet services on arrival at the Male and Gan Airport',
//         'Welcome refreshments on arrival at Canareef Resort Maldives',
//         'Accommodation in selected room type',
//         'Meals as Mentioned - Breakfast+Lunch+Dinner',
//         'Buffet style meals as per the selected meal plan',
//         'FREE Wi-Fi in Villas, Reception, and all outlets',
//         'Drinking water in the Villa replenished daily',
//         'Housekeeping service twice a day',
//         'Free use of swimming pool, gym, tennis court',
//         'Service Charge, GST, Green Tax and Transfers'
//       ],
//       exclusions: [
//         'Customers have to follow the Covid regulations',
//         'Any mandatory quarantine or isolation',
//         'TC$ 5% Extra Applicable',
//         'All personal expenses like tips, laundry',
//         'Anything not mentioned under Package Inclusions',
//         'Entrance fees at monuments',
//         'Cost incidental to any change in itinerary',
//         'Airfare if not mentioned',
//         'Travel Insurance if not mentioned'
//       ]
//     },
//     {
//       id: 2,
//       name: 'TARISA BEACH RESORT MAURITIUS 4N 5DAYS',
//       image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&h=400&fit=crop',
//       days: 5,
//       nights: 4,
//       destination: 'Mauritius',
//       category: 'Deluxe',
//       price: 52800,
//       rating: 5,
//       includes: ['Hotels', 'Sightseeing', 'Transfer', 'Meals'],
//       location: 'Mauritius (4 Nights)',
//       hotelName: 'Tarisa Beach Resort',
//       roomCategory: 'DELUXE ROOM',
//       mealPlan: 'All Inclusive (AI)',
//       description: 'Experience luxury at Tarisa Beach Resort, where pristine beaches meet world-class hospitality.',
//       highlights: ['FLIGHT DETAILS - AIR MAURITIUS', 'MUMBAI TO MAURITIUS'],
//       inclusions: ['Airport transfers', 'Hotel accommodation', 'Daily breakfast', 'All meals included'],
//       exclusions: ['Travel insurance', 'Personal expenses', 'Optional tours']
//     },
//     {
//       id: 3,
//       name: 'ANELIA BEACH RESORT MAURITIUS 4 N',
//       image: '/images/img1.png',
//       days: 5,
//       nights: 4,
//       destination: 'Mauritius',
//       category: 'Luxury',
//       price: 53000,
//       rating: 5,
//       includes: ['Hotels', 'Sightseeing', 'Transfer', 'Meals'],
//       location: 'Mauritius (4 Nights)',
//       hotelName: 'Anelia Beach Resort & Spa',
//       roomCategory: 'LUXURY VILLA',
//       mealPlan: 'All Inclusive (AI)',
//       description: 'Discover paradise at Anelia Beach Resort & Spa, your gateway to Mauritius luxury.',
//       highlights: ['FLIGHT DETAILS - AIR MAURITIUS', 'DELHI TO MAURITIUS'],
//       inclusions: ['Airport transfers', 'Luxury accommodation', 'All meals', 'Spa credits'],
//       exclusions: ['Travel insurance', 'Personal expenses', 'Premium drinks']
//     }
//   ];

//     const filteredPackages = packages.filter(pkg => {
//     if (filters.nights.length > 0 && !filters.nights.includes(pkg.nights)) return false;
//     if (filters.destination.length > 0 && !filters.destination.includes(pkg.destination)) return false;
//     if (filters.category.length > 0 && !filters.category.includes(pkg.category)) return false;
//     if (filters.priceRange.length > 0) {
//       // Extract and compare price ranges (example: "45001-50000")
//       const priceMatch = filters.priceRange.some(range => {
//         const [minStr, maxStr] = range.split('-');
//         const min = parseInt(minStr, 10);
//         const max = parseInt(maxStr, 10);
//         return pkg.price >= min && pkg.price <= max;
//       });
//       if (!priceMatch) return false;
//     }
//     return true;
//   });

//   const handleFilterChange = (category, value) => {
//     setFilters(prevFilters => {
//       const isSelected = prevFilters[category].includes(value);
//       const updatedValues = isSelected
//         ? prevFilters[category].filter(v => v !== value)
//         : [...prevFilters[category], value];
//       return { ...prevFilters, [category]: updatedValues };
//     });
//   };

//   const handleResetFilters = () => {
//     setFilters({ nights: [], category: [], destination: [], priceRange: [] });
//   };

//   const handleViewDetails = (pkg) => setSelectedPackage(pkg);
//   const handleGetOffer = (pkg) => alert(`Get offer clicked for ${pkg.name}`);

//   return (
//     <div className="min-h-screen bg-gray-50" style={{paddingTop:"80px"}}>
//       <div className="lg:hidden flex justify-between items-center p-4 border-b shadow-sm bg-white sticky top-0 z-40">
//         <h1 className="text-lg font-bold text-gray-800">Travel Packages</h1>
//         <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//           <Menu className="w-6 h-6" />
//         </button>
//       </div>

//       <div className="max-w-7xl mx-auto flex">
//         <FilterSidebar 
//           filters={filters}
//           onFilterChange={handleFilterChange}
//           onReset={handleResetFilters}
//           isOpen={isSidebarOpen}
//           onClose={() => setIsSidebarOpen(false)}
//         />

//         <div className="flex-1 p-4 md:p-6">
//           {selectedPackage ? (
//             <PackageDetails 
//               package={selectedPackage}
//               onBack={() => setSelectedPackage(null)}
//               allPackages={packages}
//             />
//           ) : (
//             <PackageList 
//               packages={filteredPackages}
//               onViewDetails={handleViewDetails}
//               onGetOffer={handleGetOffer}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelBookingSystem;




import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import packagesData from "./packagesData";
import FilterSidebar from "./FilterSidebar";
import PackageList from "./PackageList";

const PackageListPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filters, setFilters] = useState({
    nights: [],
    category: [],
    destination: [],
    priceRange: []
  });

  const navigate = useNavigate();
  const packages = packagesData;

  // Apply filters
  const filteredPackages = packages.filter(pkg => {
    if (filters.nights.length > 0 && !filters.nights.includes(pkg.nights)) return false;
    if (filters.destination.length > 0 && !filters.destination.includes(pkg.destination)) return false;
    if (filters.category.length > 0 && !filters.category.includes(pkg.category)) return false;
    return true;
  });

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const selected = prev[category].includes(value);
      return {
        ...prev,
        [category]: selected
          ? prev[category].filter(v => v !== value)
          : [...prev[category], value]
      };
    });
  };

  const handleReset = () => setFilters({ nights: [], category: [], destination: [], priceRange: [] });

  const handleViewDetails = (pkg) => navigate(`/package/${pkg.id}`, { state: pkg });
  const handleGetOffer = (pkg) => alert(`Get offer for ${pkg.name}`);

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: "80px" }}>
      {/* Mobile header */}
      <div className="lg:hidden flex justify-between items-center p-4 border-b shadow-sm bg-white sticky top-0 z-40">
        <h1 className="text-lg font-bold">Travel Packages</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex">
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 p-4 md:p-6">
          <PackageList
            packages={filteredPackages}
            onViewDetails={handleViewDetails}
            onGetOffer={handleGetOffer}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageListPage;
