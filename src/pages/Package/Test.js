// // File: src/App.jsx
// import React from "react";

// const packages = [
//   {
//     img: "URL_TO_IMAGE_1",
//     name: "CANAREEF RESORT MALDIVES WITH ALL MEALS PACKAGE",
//     nights: "4 Days, 3 Nights",
//     destination: "Maldives",
//     category: "Deluxe",
//     price: 46500,
//     amenities: ["Hotels", "Transfer", "Meals"],
//   },
//   {
//     img: "URL_TO_IMAGE_2",
//     name: "TARISA BEACH RESORT MAURITIUS 4N 5DAYS",
//     nights: "5 Days, 4 Nights",
//     destination: "Mauritius",
//     category: "Deluxe",
//     price: 52800,
//     amenities: ["Hotels", "Sightseeing", "Transfer", "Meals"],
//   },
//   // Add the rest as needed...
// ];

// export default function Test() {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar Filter */}
//       <aside className="w-72 bg-white p-6 border-r">
//         <div className="font-bold mb-4">12 out of 52 packages</div>
//         <button className="text-red-500">Reset</button>
//         {/* Filters */}
//         <div className="mt-6">
//           <div className="font-semibold mb-2">Number of Nights</div>
//           <div>
//             <label className="block"><input type="checkbox" /> 3 Nights</label>
//             <label className="block"><input type="checkbox" /> 4 Nights</label>
//             <label className="block"><input type="checkbox" /> 5 Nights</label>
//           </div>
//         </div>
//         <div className="mt-6">
//           <div className="font-semibold mb-2">Category</div>
//           <label className="block"><input type="checkbox" /> Honeymoon</label>
//           <label className="block"><input type="checkbox" /> Family</label>
//           <label className="block"><input type="checkbox" /> Adventure</label>
//         </div>
//         <div className="mt-6">
//           <div className="font-semibold mb-2">Destination</div>
//           <label className="block"><input type="checkbox" /> Maldives</label>
//           <label className="block"><input type="checkbox" /> Mauritius</label>
//           <label className="block"><input type="checkbox" /> Male</label>
//         </div>
//         <div className="mt-6">
//           <div className="font-semibold mb-2">Price</div>
//           {/* Example price range */}
//           <label className="block"><input type="checkbox" /> Rs 45001-50000</label>
//           <label className="block"><input type="checkbox" /> Rs 51000-55000</label>
//           {/* Add other price ranges */}
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         <div className="space-y-6">
//           {packages.map((pkg, idx) => (
//             <div key={idx} className="bg-white rounded-lg shadow flex overflow-hidden">
//               <img
//                 src={pkg.img}
//                 alt={pkg.name}
//                 className="w-56 h-40 object-cover"
//               />
//               <div className="flex-1 px-6 py-4">
//                 <div className="flex justify-between items-center">
//                   <h2 className="font-bold text-lg">{pkg.name}</h2>
//                   <span className="text-sm text-gray-500">CATEGORY : <b>{pkg.category}</b></span>
//                 </div>
//                 <div className="text-sm mt-2 mb-4">
//                   <b>{pkg.nights}</b>
//                   <span className="ml-4">Destinations - <b>{pkg.destination}</b></span>
//                 </div>
//                 <div className="flex space-x-5 mb-4">
//                   {pkg.amenities.map((am, i) => (
//                     <span key={i} className="flex items-center text-gray-700">{am}</span>
//                   ))}
//                 </div>
//                 <div className="flex justify-between items-end">
//                   <div className="text-red-600 font-bold text-xl">INR {pkg.price.toLocaleString()}</div>
//                   <div className="flex space-x-3">
//                     <button className="bg-white border px-4 py-1 rounded text-red-600 font-semibold">View Details</button>
//                     <button className="bg-red-600 text-white px-4 py-1 rounded font-semibold">Get Offer</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }





// !2 
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bed, Car, Utensils, Camera, X } from 'lucide-react';

const TravelBookingSystem = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [filters, setFilters] = useState({
    nights: [],
    category: [],
    destination: [],
    priceRange: []
  });

  const packages = [
    {
      id: 1,
      name: 'CANAREEF RESORT MALDIVES WITH ALL MEALS PACKAGE',
      image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop',
      days: 4,
      nights: 3,
      destination: 'Maldives',
      category: 'Deluxe',
      price: 46500,
      rating: 5,
      includes: ['Hotels', 'Transfer', 'Meals'],
      location: 'Maldives (3 Nights)',
      hotelName: 'Canareef Resort Maldives',
      roomCategory: 'SUNRISE VILLA',
      mealPlan: 'All Inclusive (AI)',
      description: 'Indulge in Tranquility by the Serene Blue Waters. Embrace tranquility and bliss at Canareef Resort, where crystalline waters meet endless skies, and white sandy beaches give way to the serene rhythm of the sun and sea. Offering a sanctuary of solace, tranquility and pure indulgence, Can...',
      highlights: [
        'FLIGHT DETAILS - SRILANKAN AIRLINES',
        'BANGALORE TO COLOMBO IS ON - 0320 - 0450'
      ],
      inclusions: [
        'Meet & greet services on arrival at the Male and Gan Airport',
        'Welcome refreshments on arrival at Canareef Resort Maldives',
        'Accommodation in selected room type',
        'Meals as Mentioned - Breakfast+Lunch+Dinner',
        'Buffet style meals as per the selected meal plan in the main restaurant Kilhi',
        'FREE Wi-Fi in Villas, Reception, and all outlets',
        'Drinking water in the Villa replenished daily',
        'Housekeeping service twice a day',
        'Free use of swimming pool, gym, tennis court, beach volleyball, billiards, table tennis',
        'Service Charge, GST, Green Tax and Transfers',
        'The tours mentioned - includes the entry tickets, and return transfers to from the hotel',
        'Transfers Option : Speedboat from Gan Airport [10 mins]'
      ],
      exclusions: [
        'Customers have to follow the Covid regulations/Protocol of each destinations. Please check with your tour consultant to for the latest Covid Regulation.',
        'Any mandatory quarantine or isolation, if any, will be the responsibility of the travellers/Customers',
        'Travel/Lessons will not be responsible for the consequences of a sudden government directives with respect to the new covid regulations.',
        'TC$ 5% Extra Applicable',
        'All personal expenses like tips, laundry, telephone calls/fax, alcoholic beverages, camera/video camera fees at monuments, medical expenses, airport departure tax etc.',
        'Anything not mentioned under Package Inclusions.',
        'Entrance fees at all monuments and sightseeing spots',
        'Cost incidental to any change in the itinerary/stay on account of flight cancellation due to bad weather, ill health, and roadblocks and/or any factors beyond control',
        'Airfare if not mentioned in the itinerary',
        'Travel Insurance if not mentioned in the itinerary'
      ],
      similarPackages: [
        { name: 'Medhufushi Island Resort Maldives', days: 4, nights: 3, price: 56500, destination: 'Maldives' },
        { name: 'Fihalhohi Island Resort Maldives 3', days: 4, nights: 3, price: 60000, destination: 'Maldives' },
        { name: 'Sandies Bathala Resort Maldives', days: 4, nights: 3, price: 62500, destination: 'Maldives' },
        { name: 'Villa Park Resort Maldives - 4n 5', days: 5, nights: 4, price: 62800, destination: 'Maldives' }
      ]
    },
    {
      id: 2,
      name: 'TARISA BEACH RESORT MAURITIUS 4N 5DAYS',
      image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&h=400&fit=crop',
      days: 5,
      nights: 4,
      destination: 'Mauritius',
      category: 'Deluxe',
      price: 52800,
      rating: 5,
      includes: ['Hotels', 'Sightseeing', 'Transfer', 'Meals'],
      location: 'Mauritius (4 Nights)',
      hotelName: 'Tarisa Beach Resort',
      roomCategory: 'DELUXE ROOM',
      mealPlan: 'All Inclusive (AI)',
      description: 'Experience luxury at Tarisa Beach Resort, where pristine beaches meet world-class hospitality...',
      highlights: ['FLIGHT DETAILS - AIR MAURITIUS', 'MUMBAI TO MAURITIUS'],
      inclusions: ['Airport transfers', 'Hotel accommodation', 'Daily breakfast', 'All meals included'],
      exclusions: ['Travel insurance', 'Personal expenses', 'Optional tours']
    },
    {
      id: 3,
      name: 'ANELIA BEACH RESORT MAURITIUS 4 N',
      image: 'https://images.unsplash.com/photo-1589003600887-7336c6b00253?w=600&h=400&fit=crop',
      days: 5,
      nights: 4,
      destination: 'Mauritius',
      category: 'Luxury',
      price: 53000,
      rating: 5,
      includes: ['Hotels', 'Sightseeing', 'Transfer', 'Meals'],
      location: 'Mauritius (4 Nights)',
      hotelName: 'Anelia Beach Resort & Spa',
      roomCategory: 'LUXURY VILLA',
      mealPlan: 'All Inclusive (AI)',
      description: 'Discover paradise at Anelia Beach Resort & Spa, your gateway to Mauritius luxury...',
      highlights: ['FLIGHT DETAILS - AIR MAURITIUS', 'DELHI TO MAURITIUS'],
      inclusions: ['Airport transfers', 'Luxury accommodation', 'All meals', 'Spa credits'],
      exclusions: ['Travel insurance', 'Personal expenses', 'Premium drinks']
    }
  ];

  const filteredPackages = packages.filter(pkg => {
    if (filters.nights.length > 0 && !filters.nights.includes(pkg.nights)) return false;
    if (filters.destination.length > 0 && !filters.destination.includes(pkg.destination)) return false;
    if (filters.category.length > 0 && !filters.category.includes(pkg.category)) return false;
    if (filters.priceRange.length > 0) {
      const inRange = filters.priceRange.some(range => {
        const [min, max] = range.split('-').map(v => parseInt(v));
        return pkg.price >= min && pkg.price <= max;
      });
      if (!inRange) return false;
    }
    return true;
  });

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const resetFilters = () => {
    setFilters({
      nights: [],
      category: [],
      destination: [],
      priceRange: []
    });
  };

  if (selectedPackage) {
    return <PackageDetails package={selectedPackage} onBack={() => setSelectedPackage(null)} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 p-20">
      {/* Sidebar Filters */}
      <div className="w-72 bg-white border-r border-gray-200 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-red-600">
          <div>
            <div className="text-lg font-semibold">{filteredPackages.length} out of {packages.length} packages</div>
            <div className="text-gray-600 mt-1">Filter</div>
          </div>
          <button onClick={resetFilters} className="text-sm text-gray-600 hover:text-red-600">
            ↻ Reset
          </button>
        </div>

        {/* Number of Nights */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Number of Nights</h3>
          {[3, 4, 5].map(night => (
            <label key={night} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.nights.includes(night)}
                onChange={() => handleFilterChange('nights', night)}
                className="mr-3 w-4 h-4"
              />
              <span className="text-gray-700">{night} Nights</span>
            </label>
          ))}
        </div>

        {/* Category */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Category</h3>
          {['Honeymoon', 'Family', 'Adventure'].map(cat => (
            <label key={cat} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={() => handleFilterChange('category', cat)}
                className="mr-3 w-4 h-4"
              />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>

        {/* Destination */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Destination</h3>
          {['Maldives', 'Mauritius', 'Male'].map(dest => (
            <label key={dest} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.destination.includes(dest)}
                onChange={() => handleFilterChange('destination', dest)}
                className="mr-3 w-4 h-4"
              />
              <span className="text-gray-700">{dest}</span>
            </label>
          ))}
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Price</h3>
          {[
            'Rs 45001-50000',
            'Rs 51000-55000',
            'Rs 55001-60000',
            'Rs 61001-65000',
            'Rs 65001-70000',
            'Rs 70001-75000',
            'Rs 75001-80000',
            'Rs 80001-85000'
          ].map(range => (
            <label key={range} className="flex items-center mb-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.priceRange.includes(range.split(' ')[1])}
                onChange={() => handleFilterChange('priceRange', range.split(' ')[1])}
                className="mr-3 w-4 h-4"
              />
              <span className="text-gray-700">{range}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {filteredPackages.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex">
                <div className="w-80 h-64">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-gray-800">{pkg.name}</h2>
                        <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                          <option>{pkg.category}</option>
                        </select>
                      </div>
                      <div className="text-gray-600 mb-2">
                        <span className="font-semibold">{pkg.days} Days, {pkg.nights} Nights</span>
                      </div>
                      <div className="text-gray-600 mb-4">
                        <span className="font-semibold">Destinations - </span>{pkg.destination}
                      </div>
                      
                      <div className="flex items-center gap-8 mt-6">
                        {pkg.includes.includes('Hotels') && (
                          <div className="flex flex-col items-center">
                            <Bed className="w-8 h-8 mb-1" />
                            <span className="text-sm">Hotels</span>
                          </div>
                        )}
                        {pkg.includes.includes('Sightseeing') && (
                          <div className="flex flex-col items-center">
                            <Camera className="w-8 h-8 mb-1" />
                            <span className="text-sm">Sightseeing</span>
                          </div>
                        )}
                        {pkg.includes.includes('Transfer') && (
                          <div className="flex flex-col items-center">
                            <Car className="w-8 h-8 mb-1" />
                            <span className="text-sm">Transfer</span>
                          </div>
                        )}
                        {pkg.includes.includes('Meals') && (
                          <div className="flex flex-col items-center">
                            <Utensils className="w-8 h-8 mb-1" />
                            <span className="text-sm">Meals</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right ml-6">
                      <div className="text-sm text-gray-500 mb-1">Starting from</div>
                      <div className="text-4xl font-bold mb-1">INR {pkg.price.toLocaleString()}</div>
                      <div className="text-xs text-gray-500 mb-4">Per Person Twin Sharing</div>
                      <button
                        onClick={() => setSelectedPackage(pkg)}
                        className="border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-50 mb-2 w-full"
                      >
                        View Details
                      </button>
                      <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 w-full">
                        Get Offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PackageDetails = ({ package: pkg, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [pkg.image, pkg.image, pkg.image]; // In real app, would have multiple images

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={onBack} className="mr-4 text-gray-600 hover:text-gray-800">
              ← Back
            </button>
            <div>
              <h1 className="text-xl font-bold">{pkg.name}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <span>⭐ {pkg.rating}</span>
                <span>|</span>
                <span>{pkg.nights}N</span>
                <span>|</span>
                <span>📍 {pkg.destination}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">STARTING FROM</div>
            <div className="text-2xl font-bold text-red-600">INR {pkg.price.toLocaleString()}</div>
            <div className="text-xs text-gray-500">PER PERSON</div>
            <div className="flex gap-2 mt-2">
              <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
                Send Enquiry
              </button>
              <button className="bg-red-600 text-white px-6 py-2 rounded text-sm hover:bg-red-700">
                Call Direct
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg overflow-hidden mb-6 relative">
              <img src={images[currentImageIndex]} alt="Resort" className="w-full h-96 object-cover" />
              <button
                onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Package Includes */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Package Includes</h2>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <Bed className="w-12 h-12 mb-2 text-gray-700" />
                  <span>Hotels</span>
                </div>
                <div className="flex flex-col items-center">
                  <Car className="w-12 h-12 mb-2 text-gray-700" />
                  <span>Transfer</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-2 flex items-center justify-center text-2xl">📋</div>
                  <span>Terms & conditions</span>
                </div>
              </div>

              {/* Location Details Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal-700 text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">LOCATION</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">HOTEL NAME</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">ROOM CATEGORY</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">MEAL PLAN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">{pkg.location}</td>
                      <td className="border border-gray-300 px-4 py-2">{pkg.hotelName}</td>
                      <td className="border border-gray-300 px-4 py-2">{pkg.roomCategory}</td>
                      <td className="border border-gray-300 px-4 py-2">{pkg.mealPlan}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Indulge in Tranquility by the Serene Blue Waters</h2>
              <p className="text-gray-700 mb-4">{pkg.description}</p>
              <button className="text-blue-600 hover:underline">read more</button>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">HIGHLIGHTS</h2>
              {pkg.highlights.map((highlight, index) => (
                <p key={index} className="text-gray-700 mb-2">{highlight}</p>
              ))}
              <button className="text-blue-600 hover:underline mt-2">read more</button>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Inclusions</h2>
                <ul className="space-y-2">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Exclusions</h2>
                <ul className="space-y-2">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Booking Terms</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• The rates and availability is subject to availability at the time of booking.</li>
                    <li>• Customers are requested to please go through the inclusions and exclusions clearly.</li>
                    <li>• In case client wishes to prepone /postpone his or her travel dates, we request you to kindly reach us 15 days prior to Journey date for any changes.</li>
                    <li>• Visa approval is solely at the descretion of the embassy.Travel4seasons will not take the guarantee of the Visa Approval</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• International all tours and transfers happens on point to point basis. Customers are requested to adhere to timings very strictly.</li>
                    <li>• Tips for drivers and coordinators are not included.</li>
                    <li>• Please recheck the - Covid Travel regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Packages Sidebar */}
          <div className="w-80">
            <div className="bg-white rounded-lg p-4 sticky top-6">
              <h3 className="font-bold mb-4">Similar Packages</h3>
              <div className="space-y-4">
                {pkg.similarPackages?.map((similar, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
                    <img src={pkg.image} alt={similar.name} className="w-full h-32 object-cover rounded mb-2" />
                    <h4 className="font-semibold text-sm mb-1">{similar.name}</h4>
                    <p className="text-xs text-gray-600 mb-1">{similar.days} Days, {similar.nights} Nights</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Cities</p>
                        <p className="text-xs font-semibold">{similar.destination}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">STARTING FROM</p>
                        <p className="text-sm font-bold text-red-600">INR {similar.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <button className="w-full mt-2 bg-red-600 text-white text-sm py-1 rounded hover:bg-red-700">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelBookingSystem;