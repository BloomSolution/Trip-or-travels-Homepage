import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bus,
  Bed,
  Car,
  UserRoundCheck,
  UtensilsCrossed,
  Phone,
  MessageCircle,
  X,
  MapPin,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Sample images for each package – you can replace these with actual image paths
const packageImages = {
  "Rameshwaram - Dhanushkodi": [
    "/DhanushKodi.jpg",
    "/RD01.jpg",
    "/RD02.jpg",
  ],
  Varkala: [
    "/Varkala.jpg",
    "/VR01.jpg",
    "/VR02.jpg",
  ],
  Udupi: [
    "/Udupi.jpg",
    "/UD01.jpg",
    "/UD02.jpg",
  ],
  Valparai: [
    "/Valparai.jpg",
    "/VL01.jpg",
    "/VL02.jpg",
  ],
  Vagamon: [
    "/Vagamon.jpg",
    "/VG01.jpg",
    "/VG02.jpg",
  ],
  "Kochi - Alleppey": [
    "/Kochi.jpg",
    "/KC01.jpg",
    "/KC02.jpg",
  ],
  Coorg: [
    "/Coorg.jpg",
    "/CO01.jpg",
    "/CO02.jpg",
  ],
  "Ooty - Coonoor": [
    "/Ooty.jpg",
    "/OO01.jpg",
    "/OO02.jpg",
  ],
  Wayanad: [
    "/Wayanad.jpg",
    "/WA01.jpg",
    "/WA02.jpg",
  ],
  Kodaikanal: [
    "/Kodaikanal.jpg",
    "/KO01.jpg",
    "/KO02.jpg",
  ],
  Chikkamangalur: [
    "/Chikmangaluru.jpg",
    "/CH01.jpg",
    "/CH02.jpg",
   ],
  Gokarna: [
    "/Gokarna.jpg",
    "/GO01.jpg",
    "/GO02.jpg",
  ],
  Munnar: [
    "/Munnar.jpg",
    "/MU01.jpg",
    "/MU02.jpg",
  ],
  Pondicherry: [
    "/Pondicherry.jpg",
    "/PO01.jpg",
    "/PO02.jpg",
  ],
  Hampi: [
    "/Hampi.jpg",
    "/HA01.jpg",
    "/HA02.jpg",
  ],
};

// Default images if a package doesn't have its own array
const defaultImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
];

const packages = [
  {
    name: "Rameshwaram - Dhanushkodi",
    image: "/DhanushKodi.jpg",
    price: "5555",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Arrive at Rameshwaram at 9am, Ramanathaswamy Temple,Panchmukhi Hanuman Temple and Floating Stone, Olaikaadu Beach, Villoondi Theertham and Beach",
      day02: "Have a amazing breakfast and checkout the hotel to explore, Dhanushkodi Ghost town, Dhanushkodi Beach, Ram Setu, Dhanushkodi Lighthouse, Dr. Abdul Kalam Memorial, Pamban Bridge, Ariyaman beach for sunset ,Back to Banglore",
    },
  },
  {
    name: "Varkala",
    image: "/Varkala.jpg",
    price: "8499",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Quick FreshenUp and Breakfast, Janardhana Swamy Temple, Sivagiri Mutt, Varkala Cliff, Varkala Beach, Black Sand Beach",
      day02: "Checkout the stay and explore, Jatayu Earth's center, Mangrove Forest, Odayam Beach, Return to Banglore",
    },
  },
  {
    name: "Udupi",
    image: "/Udupi.jpg",
    price: "4666",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Arrive in Udupi, Maple Sea walk, St. Mary Islands, Padubidri beach",
      day02: "Have a amazing breakfast and checkout the hotel to explore, Kayaking in Back Waters, Hasta Shilpa Heritage Village, Sri Krishna Temple, Kapu Beach and Lighthouse, and head back to Banglore.",
    },
  },
  {
    name: "Valparai",
    image: "/Valparai.jpg",
    price: "4499",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Reach Valparai, visit Aliyar Dam, Monkey Falls, and enjoy the tea estate views.",
      day02: "Explore Sholayar Dam, Nirar Dam, and depart with serene memories.",
    },
  },
  {
    name: "Vagamon",
    image: "/Vagamon.jpg",
    price: "4499",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Arrive at Vagamon, visit the pine forests, meadows, and Kurisumala Ashram.",
      day02: "Enjoy paragliding, visit Vagamon Lake, and return home.",
    },
  },
  {
    name: "Kochi - Alleppey",
    image: "/Kochi.jpg",
    price: "5999",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Arrive in Kochi around 9am quick freshnup up in hotel, Kochi Fort, Chinese Fishing Net, Jew Street, Mattancherry Palace, National Shrine basilica of Our Lady of Ransom, Marine Drive, SUnset Cruise Tour",
      day02: "Having an amazing breakfast and checkout fo the hotel to explore, Marari Beach, Alleppey Beach and Lighthouse ,Alleppey Backwater Boating (2-3 hours)",
    },
  },
  {
    name: "Coorg",
    image: "/Coorg.jpg",
    price: "3999",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup, Mandalpatti Peak ,Raja's Tomb ,Abbey Waterfalls ,Sunset at Raja's Seat",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Harangi Elephant Camp ,Nisargadhama Forest ,Tibetian Monastery/Golden Temple ,Head towards Bangalore",
    },
  },
  {
    name: "Ooty - Coonoor",
    image: "/Ooty.jpg",
    price: "4999",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup,Doddabetta Peak, Tea Plantation, Boat House, Tea factory, Chocolate Factory, Botanical Garden",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Ooty Toy Train, Pine Forest, Shooting Point, Pykara Falls ,Head towards Bangalore",
    },
  },
  {
    name: "Wayanad",
    image: "/Wayanad.jpg",
    price: "4499",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup ,900 kandi Eco-park (ticket included) ,Glass Bridge ,Longest Zip Line ,Private Soochipara Waterfalls",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Banasura Sagar Dam ,Pookode Lake ,En Ooru ,Head towards Bangalore",
    },
  },
  {
    name: "Kodaikanal",
    image: "/Kodaikanal.jpg",
    price: "4999",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup, Dolphin Nose, Vattakanal Falls, Coaker's Walk for Beautiful viewpoint, Kodaikanal Lake",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Moir Point, Pine Forest, Guna Caves, Pillar Rocks, Green Valley View, City Viewpoint, Silver Cascade Waterfalls, Head towards Bangalore",
    },
  },
  {
    name: "Chikkamangalur",
    image: "/Chikmangaluru.jpg",
    price: "3999",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop off at the Hotel for a freshen up ,Kemmangundi Park an amazing viewpoint ,Hebbe Falls for a breeze of water ,Z Point Drop by to hotel to complete the yummy Dinner",
      day02: "Have an amazing breakfast and check out the hotel to explore ,Mullayangiri Peak ,Siri Cafe .Belur ,Head towards Bangalore",
    },
  },
  {
    name: "Gokarna",
    image: "/Gokarna.jpg",
    price: "3999",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup ,Gokarna Beach ,Kudla hilltop Trek ,Mirzan Fort ,Hippic Style Market",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Murudheshwara Temple ,Honnavara Backwater ,Sharavathi Backwafer Boat Ride ,Head towards Bangalore",
    },
  },
  {
    name: "Munnar",
    image: "/Munnar.jpg",
    price: "5999",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a freshenup, Elephant park, Mattupetty Dam, Echo Point, Kalaripayattu Culture Show.",
      day02: "Have a amazing breakfast and checkout the hotel to explore, Kollukkumalai Peak, Zipline, Periyankanal Waterfalls, Tea Estate, Head towards Banglore.",
    },
  },
  {
    name: "Pondicherry",
    image: "/Pondicherry.jpg",
    price: "4666",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "RDrop of to Hotel for a freshen up ,Sri Aurobindo Ashram, Pondicherry Museum, French Colony, French War Memorial, Notre Dame Des Anges Church, Pondicherry Lighthouse, Eco Beach",
      day02: "Having a amazing breakfast and checkout the hotel to explore, Auroville, Matri Mandir, Eden, Head towards Banglore",
    },
  },
  {
    name: "Hampi",
    image: "/Hampi.jpg",
    price: "4444",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a freshen up ,Vali Cave Temple, Sanapur Lake, Anjanadri Hills for sunset view.",
      day02: "Have a amazing breakfast and checkout the hotel to explore, Virupaksha temple, Kadlekalu Ganesha Temple, Ugra Narasimha Temple, Badavilinga, Lotus mahal, Watch Tower, Elephant table, Pushkarni, Queen bath, Vitthala Temple, Head towards Banglore",
    },
  },
];

const iconComponents = [Bus, Bed, Car, UserRoundCheck, UtensilsCrossed];

const INCLUSION_ITEMS = [
  "Pick up and drop off Entire Journey by Non A/C Tempo Traveller/Mini Bus/Bus",
  "Luxury Hotel Stay",
  "Food (1 breakfast 1 dinner) Included in Package",
  "Expert Trip Guide",
  "All toll gate charges",
  "Professional Drivers",
  "Sunset view with photographic opportunity",
  "100% safety for solo & female travellers",
];

// Updated exclusion list (removed Jeep Safari Charges and Any Paid Activities)
const EXCLUSION_ITEMS = [
  "Self-sponsored Food",
  "Anything not mentioned under inclusion itinerary",
];

const WeekendTrip = () => {
  const phoneNumber = "8884598859";
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoScrollTimer = useRef(null);

  const images = selectedPackage
    ? packageImages[selectedPackage.name] || defaultImages
    : [];

  // Auto-scroll effect
  useEffect(() => {
    if (!selectedPackage) return;

    const startAutoScroll = () => {
      autoScrollTimer.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    };
  }, [selectedPackage, images.length]);

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = (packageName) => {
    const message = `Hi, I'm interested in the *${packageName}* weekend trip package. Could you please share more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const openItinerary = (pkg) => {
    setSelectedPackage(pkg);
    setCurrentImageIndex(0);
  };

  const closeItinerary = () => {
    setSelectedPackage(null);
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600"
          alt="Weekend hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center drop-shadow-2xl"
          >
            Weekend Trips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl text-white/90 mt-4 font-medium"
          >
            2 days and 1 night packages to enjoy the weekend
          </motion.p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-9xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 flex flex-col border border-slate-200 hover:border-cyan-400"
            >
              <div className="relative h-64 w-full">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {iconComponents.map((Icon, i) => (
                    <div
                      key={i}
                      className="bg-black/50 backdrop-blur-sm p-2 rounded-full text-white shadow-md"
                    >
                      <Icon size={20} />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="bg-blue-600/90 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                    2 Days & 1 Night
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {pkg.name}
                  </h3>
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{pkg.price}
                    <span className="text-sm font-normal text-gray-500 ml-1">
                      /person
                    </span>
                  </span>
                </div>

                <button
                  onClick={() => openItinerary(pkg)}
                  className="mb-4 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <MapPin size={18} /> View Itinerary
                </button>

                <div className="mt-auto flex gap-3 pt-2">
                  <button
                    onClick={handleCall}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-lg"
                  >
                    <Phone size={20} /> Call
                  </button>
                  <button
                    onClick={() => handleWhatsApp(pkg.name)}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-lg"
                  >
                    <MessageCircle size={20} /> WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Itinerary Modal with Horizontal Carousel */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeItinerary}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center z-10">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <MapPin className="text-blue-600" />
                  {selectedPackage.name} Itinerary
                </h2>
                <button
                  onClick={closeItinerary}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body with two columns */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Itinerary Details */}
                  <div className="space-y-6 order-2 md:order-1">
                    {/* Day 00 */}
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Day 00
                      </h3>
                      <p className="text-gray-700">
                        {selectedPackage.itinerary.day00}
                      </p>
                    </div>

                    {/* Day 01 */}
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Day 01
                      </h3>
                      <p className="text-gray-700">
                        {selectedPackage.itinerary.day01}
                      </p>
                    </div>

                    {/* Day 02 */}
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        Day 02
                      </h3>
                      <p className="text-gray-700">
                        {selectedPackage.itinerary.day02}
                      </p>
                    </div>

                    {/* Inclusion & Exclusion */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Inclusion */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <CheckCircle className="text-green-600" size={20} />
                            Inclusion
                          </h3>
                          <ul className="space-y-2">
                            {INCLUSION_ITEMS.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-700"
                              >
                                <CheckCircle
                                  className="text-green-500 mt-1 flex-shrink-0"
                                  size={16}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Exclusion */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <XCircle className="text-red-600" size={20} />
                            Exclusion
                          </h3>
                          <ul className="space-y-2">
                            {EXCLUSION_ITEMS.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-gray-700"
                              >
                                <XCircle
                                  className="text-red-500 mt-1 flex-shrink-0"
                                  size={16}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Horizontal Image Carousel */}
                  <div className="order-1 md:order-2">
                    <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gray-100">
                      {/* Main Image */}
                      <img
                        src={images[currentImageIndex] || selectedPackage.image}
                        alt={`${selectedPackage.name} view ${currentImageIndex + 1}`}
                        className="w-full h-64 md:h-80 object-cover"
                      />

                      {/* Navigation Arrows - Horizontal */}
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex gap-1 mt-3 flex-wrap justify-center">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "bg-blue-600 w-4"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-4 flex justify-end">
                <button
                  onClick={closeItinerary}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WeekendTrip;