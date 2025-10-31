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





// !2  Packege Details Page
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Bed, Car, Utensils, Camera, X } from 'lucide-react';

// const TravelBookingSystem = () => {
//   const [selectedPackage, setSelectedPackage] = useState(null);
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
//       description: 'Indulge in Tranquility by the Serene Blue Waters. Embrace tranquility and bliss at Canareef Resort, where crystalline waters meet endless skies, and white sandy beaches give way to the serene rhythm of the sun and sea. Offering a sanctuary of solace, tranquility and pure indulgence, Can...',
//       highlights: [
//         'FLIGHT DETAILS - SRILANKAN AIRLINES',
//         'BANGALORE TO COLOMBO IS ON - 0320 - 0450'
//       ],
//       inclusions: [
//         'Meet & greet services on arrival at the Male and Gan Airport',
//         'Welcome refreshments on arrival at Canareef Resort Maldives',
//         'Accommodation in selected room type',
//         'Meals as Mentioned - Breakfast+Lunch+Dinner',
//         'Buffet style meals as per the selected meal plan in the main restaurant Kilhi',
//         'FREE Wi-Fi in Villas, Reception, and all outlets',
//         'Drinking water in the Villa replenished daily',
//         'Housekeeping service twice a day',
//         'Free use of swimming pool, gym, tennis court, beach volleyball, billiards, table tennis',
//         'Service Charge, GST, Green Tax and Transfers',
//         'The tours mentioned - includes the entry tickets, and return transfers to from the hotel',
//         'Transfers Option : Speedboat from Gan Airport [10 mins]'
//       ],
//       exclusions: [
//         'Customers have to follow the Covid regulations/Protocol of each destinations. Please check with your tour consultant to for the latest Covid Regulation.',
//         'Any mandatory quarantine or isolation, if any, will be the responsibility of the travellers/Customers',
//         'Travel/Lessons will not be responsible for the consequences of a sudden government directives with respect to the new covid regulations.',
//         'TC$ 5% Extra Applicable',
//         'All personal expenses like tips, laundry, telephone calls/fax, alcoholic beverages, camera/video camera fees at monuments, medical expenses, airport departure tax etc.',
//         'Anything not mentioned under Package Inclusions.',
//         'Entrance fees at all monuments and sightseeing spots',
//         'Cost incidental to any change in the itinerary/stay on account of flight cancellation due to bad weather, ill health, and roadblocks and/or any factors beyond control',
//         'Airfare if not mentioned in the itinerary',
//         'Travel Insurance if not mentioned in the itinerary'
//       ],
//       similarPackages: [
//         { name: 'Medhufushi Island Resort Maldives', days: 4, nights: 3, price: 56500, destination: 'Maldives' },
//         { name: 'Fihalhohi Island Resort Maldives 3', days: 4, nights: 3, price: 60000, destination: 'Maldives' },
//         { name: 'Sandies Bathala Resort Maldives', days: 4, nights: 3, price: 62500, destination: 'Maldives' },
//         { name: 'Villa Park Resort Maldives - 4n 5', days: 5, nights: 4, price: 62800, destination: 'Maldives' }
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
//       description: 'Experience luxury at Tarisa Beach Resort, where pristine beaches meet world-class hospitality...',
//       highlights: ['FLIGHT DETAILS - AIR MAURITIUS', 'MUMBAI TO MAURITIUS'],
//       inclusions: ['Airport transfers', 'Hotel accommodation', 'Daily breakfast', 'All meals included'],
//       exclusions: ['Travel insurance', 'Personal expenses', 'Optional tours']
//     },
//     {
//       id: 3,
//       name: 'ANELIA BEACH RESORT MAURITIUS 4 N',
//       image: 'https://images.unsplash.com/photo-1589003600887-7336c6b00253?w=600&h=400&fit=crop',
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
//       description: 'Discover paradise at Anelia Beach Resort & Spa, your gateway to Mauritius luxury...',
//       highlights: ['FLIGHT DETAILS - AIR MAURITIUS', 'DELHI TO MAURITIUS'],
//       inclusions: ['Airport transfers', 'Luxury accommodation', 'All meals', 'Spa credits'],
//       exclusions: ['Travel insurance', 'Personal expenses', 'Premium drinks']
//     }
//   ];

//   const filteredPackages = packages.filter(pkg => {
//     if (filters.nights.length > 0 && !filters.nights.includes(pkg.nights)) return false;
//     if (filters.destination.length > 0 && !filters.destination.includes(pkg.destination)) return false;
//     if (filters.category.length > 0 && !filters.category.includes(pkg.category)) return false;
//     if (filters.priceRange.length > 0) {
//       const inRange = filters.priceRange.some(range => {
//         const [min, max] = range.split('-').map(v => parseInt(v));
//         return pkg.price >= min && pkg.price <= max;
//       });
//       if (!inRange) return false;
//     }
//     return true;
//   });

//   const handleFilterChange = (category, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [category]: prev[category].includes(value)
//         ? prev[category].filter(v => v !== value)
//         : [...prev[category], value]
//     }));
//   };

//   const resetFilters = () => {
//     setFilters({
//       nights: [],
//       category: [],
//       destination: [],
//       priceRange: []
//     });
//   };

//   if (selectedPackage) {
//     return <PackageDetails package={selectedPackage} onBack={() => setSelectedPackage(null)} />;
//   }

//   return (
//     <div className="flex min-h-screen bg-gray-50 p-20">
//       {/* Sidebar Filters */}
//       <div className="w-72 bg-white border-r border-gray-200 p-6 overflow-y-auto">
//         <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-red-600">
//           <div>
//             <div className="text-lg font-semibold">{filteredPackages.length} out of {packages.length} packages</div>
//             <div className="text-gray-600 mt-1">Filter</div>
//           </div>
//           <button onClick={resetFilters} className="text-sm text-gray-600 hover:text-red-600">
//             ↻ Reset
//           </button>
//         </div>

//         {/* Number of Nights */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Number of Nights</h3>
//           {[3, 4, 5].map(night => (
//             <label key={night} className="flex items-center mb-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={filters.nights.includes(night)}
//                 onChange={() => handleFilterChange('nights', night)}
//                 className="mr-3 w-4 h-4"
//               />
//               <span className="text-gray-700">{night} Nights</span>
//             </label>
//           ))}
//         </div>

//         {/* Category */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Category</h3>
//           {['Honeymoon', 'Family', 'Adventure'].map(cat => (
//             <label key={cat} className="flex items-center mb-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={filters.category.includes(cat)}
//                 onChange={() => handleFilterChange('category', cat)}
//                 className="mr-3 w-4 h-4"
//               />
//               <span className="text-gray-700">{cat}</span>
//             </label>
//           ))}
//         </div>

//         {/* Destination */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Destination</h3>
//           {['Maldives', 'Mauritius', 'Male'].map(dest => (
//             <label key={dest} className="flex items-center mb-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={filters.destination.includes(dest)}
//                 onChange={() => handleFilterChange('destination', dest)}
//                 className="mr-3 w-4 h-4"
//               />
//               <span className="text-gray-700">{dest}</span>
//             </label>
//           ))}
//         </div>

//         {/* Price Range */}
//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Price</h3>
//           {[
//             'Rs 45001-50000',
//             'Rs 51000-55000',
//             'Rs 55001-60000',
//             'Rs 61001-65000',
//             'Rs 65001-70000',
//             'Rs 70001-75000',
//             'Rs 75001-80000',
//             'Rs 80001-85000'
//           ].map(range => (
//             <label key={range} className="flex items-center mb-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={filters.priceRange.includes(range.split(' ')[1])}
//                 onChange={() => handleFilterChange('priceRange', range.split(' ')[1])}
//                 className="mr-3 w-4 h-4"
//               />
//               <span className="text-gray-700">{range}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="max-w-7xl mx-auto space-y-6">
//           {filteredPackages.map(pkg => (
//             <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="flex">
//                 <div className="w-80 h-64">
//                   <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
//                 </div>
//                 <div className="flex-1 p-6">
//                   <div className="flex justify-between items-start">
//                     <div className="flex-1">
//                       <div className="flex items-center justify-between mb-2">
//                         <h2 className="text-xl font-bold text-gray-800">{pkg.name}</h2>
//                         <select className="border border-gray-300 rounded px-3 py-1 text-sm">
//                           <option>{pkg.category}</option>
//                         </select>
//                       </div>
//                       <div className="text-gray-600 mb-2">
//                         <span className="font-semibold">{pkg.days} Days, {pkg.nights} Nights</span>
//                       </div>
//                       <div className="text-gray-600 mb-4">
//                         <span className="font-semibold">Destinations - </span>{pkg.destination}
//                       </div>
                      
//                       <div className="flex items-center gap-8 mt-6">
//                         {pkg.includes.includes('Hotels') && (
//                           <div className="flex flex-col items-center">
//                             <Bed className="w-8 h-8 mb-1" />
//                             <span className="text-sm">Hotels</span>
//                           </div>
//                         )}
//                         {pkg.includes.includes('Sightseeing') && (
//                           <div className="flex flex-col items-center">
//                             <Camera className="w-8 h-8 mb-1" />
//                             <span className="text-sm">Sightseeing</span>
//                           </div>
//                         )}
//                         {pkg.includes.includes('Transfer') && (
//                           <div className="flex flex-col items-center">
//                             <Car className="w-8 h-8 mb-1" />
//                             <span className="text-sm">Transfer</span>
//                           </div>
//                         )}
//                         {pkg.includes.includes('Meals') && (
//                           <div className="flex flex-col items-center">
//                             <Utensils className="w-8 h-8 mb-1" />
//                             <span className="text-sm">Meals</span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
                    
//                     <div className="text-right ml-6">
//                       <div className="text-sm text-gray-500 mb-1">Starting from</div>
//                       <div className="text-4xl font-bold mb-1">INR {pkg.price.toLocaleString()}</div>
//                       <div className="text-xs text-gray-500 mb-4">Per Person Twin Sharing</div>
//                       <button
//                         onClick={() => setSelectedPackage(pkg)}
//                         className="border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-50 mb-2 w-full"
//                       >
//                         View Details
//                       </button>
//                       <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 w-full">
//                         Get Offer
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const PackageDetails = ({ package: pkg, onBack }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [pkg.image, pkg.image, pkg.image]; // In real app, would have multiple images

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200 px-6 py-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center">
//             <button onClick={onBack} className="mr-4 text-gray-600 hover:text-gray-800">
//               ← Back
//             </button>
//             <div>
//               <h1 className="text-xl font-bold">{pkg.name}</h1>
//               <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
//                 <span>⭐ {pkg.rating}</span>
//                 <span>|</span>
//                 <span>{pkg.nights}N</span>
//                 <span>|</span>
//                 <span>📍 {pkg.destination}</span>
//               </div>
//             </div>
//           </div>
//           <div className="text-right">
//             <div className="text-sm text-gray-500">STARTING FROM</div>
//             <div className="text-2xl font-bold text-red-600">INR {pkg.price.toLocaleString()}</div>
//             <div className="text-xs text-gray-500">PER PERSON</div>
//             <div className="flex gap-2 mt-2">
//               <button className="border border-gray-300 px-4 py-2 rounded text-sm hover:bg-gray-50">
//                 Send Enquiry
//               </button>
//               <button className="bg-red-600 text-white px-6 py-2 rounded text-sm hover:bg-red-700">
//                 Call Direct
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto p-6">
//         <div className="flex gap-6">
//           {/* Main Content */}
//           <div className="flex-1">
//             {/* Image Gallery */}
//             <div className="bg-white rounded-lg overflow-hidden mb-6 relative">
//               <img src={images[currentImageIndex]} alt="Resort" className="w-full h-96 object-cover" />
//               <button
//                 onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>
//               <button
//                 onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>

//             {/* Package Includes */}
//             <div className="bg-white rounded-lg p-6 mb-6">
//               <h2 className="text-xl font-bold mb-4">Package Includes</h2>
//               <div className="flex gap-8">
//                 <div className="flex flex-col items-center">
//                   <Bed className="w-12 h-12 mb-2 text-gray-700" />
//                   <span>Hotels</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <Car className="w-12 h-12 mb-2 text-gray-700" />
//                   <span>Transfer</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="w-12 h-12 mb-2 flex items-center justify-center text-2xl">📋</div>
//                   <span>Terms & conditions</span>
//                 </div>
//               </div>

//               {/* Location Details Table */}
//               <div className="mt-6 overflow-x-auto">
//                 <table className="w-full border-collapse">
//                   <thead>
//                     <tr className="bg-teal-700 text-white">
//                       <th className="border border-gray-300 px-4 py-2 text-left">LOCATION</th>
//                       <th className="border border-gray-300 px-4 py-2 text-left">HOTEL NAME</th>
//                       <th className="border border-gray-300 px-4 py-2 text-left">ROOM CATEGORY</th>
//                       <th className="border border-gray-300 px-4 py-2 text-left">MEAL PLAN</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td className="border border-gray-300 px-4 py-2">{pkg.location}</td>
//                       <td className="border border-gray-300 px-4 py-2">{pkg.hotelName}</td>
//                       <td className="border border-gray-300 px-4 py-2">{pkg.roomCategory}</td>
//                       <td className="border border-gray-300 px-4 py-2">{pkg.mealPlan}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="bg-white rounded-lg p-6 mb-6">
//               <h2 className="text-xl font-bold mb-4">Indulge in Tranquility by the Serene Blue Waters</h2>
//               <p className="text-gray-700 mb-4">{pkg.description}</p>
//               <button className="text-blue-600 hover:underline">read more</button>
//             </div>

//             {/* Highlights */}
//             <div className="bg-white rounded-lg p-6 mb-6">
//               <h2 className="text-xl font-bold mb-4">HIGHLIGHTS</h2>
//               {pkg.highlights.map((highlight, index) => (
//                 <p key={index} className="text-gray-700 mb-2">{highlight}</p>
//               ))}
//               <button className="text-blue-600 hover:underline mt-2">read more</button>
//             </div>

//             {/* Inclusions & Exclusions */}
//             <div className="grid grid-cols-2 gap-6 mb-6">
//               <div className="bg-white rounded-lg p-6">
//                 <h2 className="text-xl font-bold mb-4">Inclusions</h2>
//                 <ul className="space-y-2">
//                   {pkg.inclusions.map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="text-green-600 mr-2">•</span>
//                       <span className="text-gray-700 text-sm">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="bg-white rounded-lg p-6">
//                 <h2 className="text-xl font-bold mb-4">Exclusions</h2>
//                 <ul className="space-y-2">
//                   {pkg.exclusions.map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <span className="text-red-600 mr-2">•</span>
//                       <span className="text-gray-700 text-sm">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* Terms & Conditions */}
//             <div className="bg-white rounded-lg p-6">
//               <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-semibold mb-2">Booking Terms</h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     <li>• The rates and availability is subject to availability at the time of booking.</li>
//                     <li>• Customers are requested to please go through the inclusions and exclusions clearly.</li>
//                     <li>• In case client wishes to prepone /postpone his or her travel dates, we request you to kindly reach us 15 days prior to Journey date for any changes.</li>
//                     <li>• Visa approval is solely at the descretion of the embassy.Travel4seasons will not take the guarantee of the Visa Approval</li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">Cancellation Policy</h3>
//                   <ul className="space-y-2 text-sm text-gray-700">
//                     <li>• International all tours and transfers happens on point to point basis. Customers are requested to adhere to timings very strictly.</li>
//                     <li>• Tips for drivers and coordinators are not included.</li>
//                     <li>• Please recheck the - Covid Travel regulations</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Similar Packages Sidebar */}
//           <div className="w-80">
//             <div className="bg-white rounded-lg p-4 sticky top-6">
//               <h3 className="font-bold mb-4">Similar Packages</h3>
//               <div className="space-y-4">
//                 {pkg.similarPackages?.map((similar, index) => (
//                   <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                     <img src={pkg.image} alt={similar.name} className="w-full h-32 object-cover rounded mb-2" />
//                     <h4 className="font-semibold text-sm mb-1">{similar.name}</h4>
//                     <p className="text-xs text-gray-600 mb-1">{similar.days} Days, {similar.nights} Nights</p>
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-xs text-gray-500">Cities</p>
//                         <p className="text-xs font-semibold">{similar.destination}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-xs text-gray-500">STARTING FROM</p>
//                         <p className="text-sm font-bold text-red-600">INR {similar.price.toLocaleString()}</p>
//                       </div>
//                     </div>
//                     <button className="w-full mt-2 bg-red-600 text-white text-sm py-1 rounded hover:bg-red-700">
//                       View Details
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelBookingSystem;





import React, { useState } from 'react';
import { Calendar, MapPin, Users, Phone, Mail, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const TourBookingSystem = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedTour, setSelectedTour] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [expandedDay, setExpandedDay] = useState(1);
  const [expandedPolicy, setExpandedPolicy] = useState(null);

  const internationalTours = [
    {
      id: 1,
      title: 'Japan Bloomscape',
      location: 'Japan',
      duration: '8 Days / 7 Nights',
      price: '₹324,999.00',
      originalPrice: null,
      seatsLeft: 10,
      date: '01 Apr',
      travelers: 4,
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Majestic South Africa: Safari, Cape Town',
      location: 'South Africa',
      duration: '8 Days / 7 Nights',
      price: '₹219,999.00',
      originalPrice: '₹229,999.00',
      seatsLeft: 5,
      date: '01 Dec',
      travelers: 20,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Delightful Malaysia & Singapore',
      location: 'Malaysia & Singapore',
      duration: '7 Days / 6 Nights',
      price: '₹134,999.00',
      originalPrice: '₹149,999.00',
      seatsLeft: 25,
      date: '24 Jan',
      travelers: 150,
      image: 'https://images.unsplash.com/photo-1555217851-6141535bd771?w=400&h=300&fit=crop'
    }
  ];

  const domesticTours = [
    {
      id: 4,
      title: 'Blue Paradise: Andaman Adventure',
      location: 'Andaman Islands',
      duration: '5 Days / 4 Nights',
      price: 'Sold Out',
      soldOut: true,
      travelers: 20,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Gokarna Beach',
      location: 'Bangalore - Gokarna',
      duration: '4 Days / 3 Nights',
      price: 'Sold Out',
      soldOut: true,
      travelers: 1,
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'The Sacred Spiritual Triangle: Ayodhya - Varanasi - Prayagraj',
      location: 'Ayodhya',
      duration: '3 Days / 2 Nights',
      price: '₹35,999.00',
      soldOut: true,
      date: '19 Nov, 20 Feb',
      travelers: 4,
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400&h=300&fit=crop',
      fullDetails: {
        perPerson: true,
        age: 'All',
        happyTravelers: '4+',
        overview: "Embark on a spiritual pilgrimage through the cradle of Hinduism with our meticulously crafted 2 Night 3 Day Varanasi & Ayodhya Tour Package. Immerse yourself in the vibrant culture, rich history, and profound spiritual significance of these ancient cities, experiencing the essence of India's spiritual heartland.",
        highlights: [
          'Visit the sacred Ram Janmabhoomi Temple in Ayodhya',
          'Experience evening Ganga Aarti at Varanasi Ghats',
          'Explore ancient temples and spiritual sites',
          'Witness the confluence at Prayagraj Sangam'
        ],
        inclusions: [
          'Flights',
          'Transport',
          'Meals',
          'Accommodation',
          'Boat Charges',
          'Kannada Tour Manager',
          'VIP Tickets',
          'Driver Charges'
        ],
        exclusions: [
          'Personal expenses',
          'Travel insurance',
          'Any meals not mentioned',
          'Monument entrance fees not mentioned'
        ],
        itinerary: [
          {
            day: 1,
            title: 'Bangalore → Ayodhya',
            description: 'Your spiritual journey begins with an early morning flight from Bangalore to Ayodhya (via Lucknow). It is a star hotel. After check-in and a brief refresh, the sacred city of Ayodhya awaits. The day is filled with divine experiences as you visit important religious sites.',
            meals: 'Breakfast, Lunch, Dinner',
            accommodation: 'Overnight Stay at Neelkanth or similar'
          },
          {
            day: 2,
            title: 'Ayodhya → Prayagraj → Varanasi',
            description: 'After breakfast, proceed to Prayagraj to witness the holy confluence of three rivers. Continue your journey to the spiritual capital of India, Varanasi. Evening Ganga Aarti at the ghats.',
            meals: 'Breakfast, Lunch, Dinner',
            accommodation: 'Overnight Stay in Varanasi'
          },
          {
            day: 3,
            title: 'Varanasi → Bangalore',
            description: 'Early morning boat ride on the Ganges. Visit Kashi Vishwanath Temple and explore the ancient lanes of Varanasi. Return flight to Bangalore with blessed memories.',
            meals: 'Breakfast',
            accommodation: 'None'
          }
        ],
        refundPolicy: [
          'If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.',
          'If cancellations are made 15-30 days before the start date of the trip, 75% of the trip cost will be charged as cancellation fees.',
          'If cancellations are made within 0-15 days before the start date of trip, 100% of the trip cost will be charged as cancellation fees.',
          'In the case of unforeseen weather conditions or government restrictions, certain activities may be cancelled and in such cases, the operator will try its best to provide an alternate feasible activity. However, no refund will be provided for the same.'
        ],
        cancellationPolicy: [
          'Cancellations must be made in writing via email',
          'Refunds will be processed within 10-15 working days',
          'Bank charges if any will be borne by the customer'
        ],
        paymentTerms: [
          '25% advance payment at the time of booking',
          'Balance payment 15 days before departure',
          'Payment modes: Bank Transfer, UPI, Credit/Debit Card'
        ],
        images: [
          'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1548013146-72479768bada?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=300&h=200&fit=crop',
          'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=300&h=200&fit=crop'
        ],
        upcomingDates: [
          { date: '19 Nov - 21 Nov', seatsLeft: 5 }
        ]
      }
    }
  ];

  const handleViewMore = (tour) => {
    setSelectedTour(tour);
    setCurrentView('details');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentView('home');
    setSelectedTour(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `*Tour Enquiry*%0A%0A*Tour:* ${selectedTour.title}%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message || 'I am interested in ' + selectedTour.title}`;
    
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    alert('Redirecting to WhatsApp...');
  };

  const toggleDay = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const togglePolicy = (policy) => {
    setExpandedPolicy(expandedPolicy === policy ? null : policy);
  };

  if (currentView === 'details' && selectedTour?.fullDetails) {
    const details = selectedTour.fullDetails;
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <button 
              onClick={handleBack}
              className="flex items-center text-orange-500 hover:text-orange-600 font-semibold"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Tours
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src={details.images[0]} alt="Tour" className="w-full h-64 object-cover rounded col-span-2" />
                  {details.images.slice(1, 5).map((img, idx) => (
                    <img key={idx} src={img} alt={`Tour ${idx + 2}`} className="w-full h-32 object-cover rounded" />
                  ))}
                </div>
              </div>

              {/* Tour Title */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedTour.title}</h1>
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
                  {details.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inclusion & Exclusion */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex border-b mb-4">
                  <button className="px-4 py-2 font-semibold text-gray-800 border-b-2 border-orange-500">
                    Inclusion
                  </button>
                  <button className="px-4 py-2 font-semibold text-gray-600">
                    Exclusion
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {details.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
                  Itinerary
                </h2>
                <div className="space-y-3">
                  {details.itinerary.map((day) => (
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
                            <p className="mb-1"><strong>Meals:</strong> {day.meals}</p>
                            <p><strong>Accommodation:</strong> {day.accommodation}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Dates */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
                  Upcoming Dates
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <ChevronLeft className="w-6 h-6 text-gray-400" />
                  <span className="font-semibold text-gray-800">November 2025</span>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
                {details.upcomingDates.map((date, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">{date.date}</span>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {date.seatsLeft} Seats Left / 30
                    </span>
                  </div>
                ))}
              </div>

              {/* Policies */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                {/* Refund Policy */}
                <div className="border-b pb-4 mb-4">
                  <button
                    onClick={() => togglePolicy('refund')}
                    className="w-full flex items-center justify-between"
                  >
                    <h3 className="text-lg font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
                      Refund Policy
                    </h3>
                    {expandedPolicy === 'refund' ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    )}
                  </button>
                  {expandedPolicy === 'refund' && (
                    <ul className="mt-4 space-y-2 pl-4">
                      {details.refundPolicy.map((policy, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="mr-2">•</span>
                          <span>{policy}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Cancellation Policy */}
                <div className="border-b pb-4 mb-4">
                  <button
                    onClick={() => togglePolicy('cancellation')}
                    className="w-full flex items-center justify-between"
                  >
                    <h3 className="text-lg font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
                      Cancellation Policy
                    </h3>
                    {expandedPolicy === 'cancellation' ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    )}
                  </button>
                  {expandedPolicy === 'cancellation' && (
                    <ul className="mt-4 space-y-2 pl-4">
                      {details.cancellationPolicy.map((policy, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="mr-2">•</span>
                          <span>{policy}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Payment Terms */}
                <div>
                  <button
                    onClick={() => togglePolicy('payment')}
                    className="w-full flex items-center justify-between"
                  >
                    <h3 className="text-lg font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
                      Payment Term Policy
                    </h3>
                    {expandedPolicy === 'payment' ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    )}
                  </button>
                  {expandedPolicy === 'payment' && (
                    <ul className="mt-4 space-y-2 pl-4">
                      {details.paymentTerms.map((term, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="mr-2">•</span>
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Enquiry Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-800">
                    {selectedTour.price}
                    {details.perPerson && <span className="text-lg font-normal text-gray-600">/person</span>}
                  </div>
                </div>

                <button className="w-full bg-orange-100 text-orange-600 py-3 rounded-lg font-semibold mb-6">
                  Fill the form below
                </button>

                <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-4 border-orange-500 pl-3">
                  For Enquiry
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Embark on a journey through Dubai's stunning landscapes and vibrant cityscapes.
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
                      placeholder="I am Interested in The Sacred Spiritual Triangle..."
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
  }

  // Home View
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Tour Packages</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* International Tours */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
              International Tours
            </h2>
            <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-50 transition-colors">
              Show All ⊕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                  {tour.seatsLeft <= 10 && (
                    <div className="absolute top-3 right-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.seatsLeft} Seats Left
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{tour.title}</h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{tour.location}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{tour.duration}</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-gray-500">Price ₹</div>
                      {tour.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">{tour.originalPrice}</div>
                      )}
                      <div className="text-xl font-bold text-gray-800">{tour.price}<span className="text-sm font-normal">/PP</span></div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {tour.date}
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    {tour.travelers}+ travelers can't be wrong – book your trip today!
                  </div>

                  <div className="flex gap-2">
                    <button className="flex items-center justify-center border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </button>
                    <button 
                      onClick={() => handleViewMore(tour)}
                      className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <div className="w-16 h-1 bg-gray-800 rounded"></div>
            <div className="w-16 h-1 bg-gray-300 rounded"></div>
            <div className="w-16 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Domestic Tours */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-orange-500 pl-3">
              Domestic Tours
            </h2>
            <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-full hover:bg-orange-50 transition-colors">
              Show All ⊕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domesticTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
                  {tour.soldOut && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                      Sold Out
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{tour.title}</h3>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{tour.location}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{tour.duration}</span>
                  </div>

                  {!tour.soldOut ? (
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-sm text-gray-500">Price ₹</div>
                        <div className="text-xl font-bold text-gray-800">{tour.price}<span className="text-sm font-normal">/PP</span></div>
                      </div>
                      {tour.date && (
                        <div className="text-sm text-gray-600">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {tour.date}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="mb-3">
                      <div className="text-xl font-bold text-red-500">{tour.price}</div>
                      {tour.date && (
                        <div className="text-sm text-gray-600 mt-2">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {tour.date}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-sm text-gray-600 mb-4">
                    {tour.travelers}+ travelers can't be wrong – book your trip today!
                  </div>

                  <div className="flex gap-2">
                    <button className="flex items-center justify-center border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </button>
                    <button 
                      onClick={() => handleViewMore(tour)}
                      className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <div className="w-16 h-1 bg-gray-800 rounded"></div>
            <div className="w-16 h-1 bg-gray-300 rounded"></div>
            <div className="w-16 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookingSystem;