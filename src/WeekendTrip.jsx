import React, { useState } from "react";
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
} from "lucide-react";

const packages = [
  {
    name: "Rameshwaram - Dhanushkodi",
    image: "/Dhanushkodi.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Arrive at Rameshwaram at 9am, Ramanathaswamy Temple,Panchmukhi Hanuman Temple and Floating Stone, Olaikaadu Beach, Villoondi Theertham and Beach",
      day02: "Have a amazing breakfast and checkout the hotel to explore, Dhanushkodi Ghost town, Dhanushkodi Beach, Ram Setu, Dhanushkodi Lighthouse, Dr. Abdul Kalam Memorial, Pamban Bridge, Ariyaman beach for sunset ,Back to Banglore",
    },
  },
  {
    name: "Varkala",
    image: "/Varkala.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Quick FreshenUp and Breakfast, Janardhana Swamy Temple, Sivagiri Mutt, Varkala Cliff, Varkala Beach, Black Sand Beach",
      day02: "Checkout the stay and explore, Jatayu Earth's center, Mangrove Forest, Odayam Beach, Return to Banglore",
    },
  },
  {
    name: "Udupi",
    image: "/Udupi.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Arrive in Udupi, Maple Sea walk, St. Mary Islands, Padubidri beach",
      day02: "Have a amazing breakfast and checkout the hotel to explore, Kayaking in Back Waters, Hasta Shilpa Heritage Village, Sri Krishna Temple, Kapu Beach and Lighthouse, and head back to Banglore.",
    },
  },
  {
    name: "Valparai",
    image: "/Valparai.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Reach Valparai, visit Aliyar Dam, Monkey Falls, and enjoy the tea estate views.",
      day02: "Explore Sholayar Dam, Nirar Dam, and depart with serene memories.",
    },
  },
  {
    name: "Vagamon",
    image: "/Vagamon.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Arrive at Vagamon, visit the pine forests, meadows, and Kurisumala Ashram.",
      day02: "Enjoy paragliding, visit Vagamon Lake, and return home.",
    },
  },
  {
    name: "Kochi - Alleppey",
    image: "/Kochi.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Arrive in Kochi around 9am quick freshnup up in hotel, Kochi Fort, Chinese Fishing Net, Jew Street, Mattancherry Palace, National Shrine basilica of Our Lady of Ransom, Marine Drive, SUnset Cruise Tour",
      day02: "Having an amazing breakfast and checkout fo the hotel to explore, Marari Beach, Alleppey Beach and Lighthouse ,Alleppey Backwater Boating (2-3 hours)",
    },
  },
  {
    name: "Coorg",
    image: "/Coorg.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup, Mandalpatti Peak ,Raja’s Tomb ,Abbey Waterfalls ,Sunset at Raja’s Seat",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Harangi Elephant Camp ,Nisargadhama Forest ,Tibetian Monastery/Golden Temple ,Head towards Bangalore",
    },
  },
  {
    name: "Ooty - Coonoor",
    image: "/Ooty.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup,Doddabetta Peak, Tea Plantation, Boat House, Tea factory, Chocolate Factory, Botanical Garden",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Ooty Toy Train, Pine Forest, Shooting Point, Pykara Falls ,Head towards Bangalore",
    },
  },
  {
    name: "Wayanad",
    image: "/Wayanad.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup ,900 kandi Eco-park (ticket included) ,Glass Bridge ,Longest Zip Line ,Private Soochipara Waterfalls",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Banasura Sagar Dam ,Pookode Lake ,En Ooru ,Head towards Bangalore",
    },
  },
  {
    name: "Kodaikanal",
    image: "/Kodaikanal.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup, Dolphin Nose, Vattakanal Falls, Coaker's Walk for Beautiful viewpoint, Kodaikanal Lake",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Moir Point, Pine Forest, Guna Caves, Pillar Rocks, Green Valley View, City Viewpoint, Silver Cascade Waterfalls, Head towards Bangalore",
    },
  },
  {
    name: "Chikkamangalur",
    image: "/Chikmangaluru.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop off at the Hotel for a freshen up ,Kemmangundi Park an amazing viewpoint ,Hebbe Falls for a breeze of water ,Z Point Drop by to hotel to complete the yummy Dinner",
      day02: "Have an amazing breakfast and check out the hotel to explore ,Mullayangiri Peak ,Siri Cafe .Belur ,Head towards Bangalore",
    },
  },
  {
    name: "Gokarna",
    image: "/Gokarna.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a frenshenup ,Gokarna Beach ,Kudla hilltop Trek ,Mirzan Fort ,Hippic Style Market",
      day02: "Have a amazing breakfast and check out the hotel to explore ,Murudheshwara Temple ,Honnavara Backwater ,Sharavathi Backwafer Boat Ride ,Head towards Bangalore",
    },
  },
  {
    name: "Munnar",
    image: "/Munnar.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "Drop of to Hotel for a freshenup, Elephant park, Mattupetty Dam, Echo Point, Kalaripayattu Culture Show.",
      day02: "Have a amazing breakfast and checkout the hotel to explore, Kollukkumalai Peak, Zipline, Periyankanal Waterfalls, Tea Estate, Head towards Banglore.",
    },
  },
  {
    name: "Pondicherry",
    image: "/Pondicherry.jpg",
    itinerary: {
      day00: "The road trip from Bangalore starts at 10:00 P.M painted with the thrill of the journey. With every passing hour, the adventure deepens, fueled by the music and the cool breeze.",
      day01: "RDrop of to Hotel for a freshen up ,Sri Aurobindo Ashram, Pondicherry Museum, French Colony, French War Memorial, Notre Dame Des Anges Church, Pondicherry Lighthouse, Eco Beach",
      day02: "Having a amazing breakfast and checkout the hotel to explore, Auroville, Matri Mandir, Eden, Head towards Banglore",
    },
  },
  {
    name: "Hampi",
    image: "/Hampi.jpg",
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

const EXCLUSION_ITEMS = [
  "Jeep Safari Charges",
  "Any Paid Activities",
  "Self-sponsored Food",
  "Anything not mentioned under inclusion itinerary",
];

const WeekendTrip = () => {
  const phoneNumber = "8884598859";
  const [selectedPackage, setSelectedPackage] = useState(null);

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
  };

  const closeItinerary = () => {
    setSelectedPackage(null);
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
            2 days and 3 night packages to enjoy the weekend
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
                    2 Days & 3 Nights
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {pkg.name}
                </h3>

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

      {/* Itinerary Modal */}
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
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
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
              <div className="p-6 space-y-6">
                {/* Day 00 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Day 00</h3>
                  <p className="text-gray-700">{selectedPackage.itinerary.day00}</p>
                </div>

                {/* Day 01 */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Day 01</h3>
                  <p className="text-gray-700">{selectedPackage.itinerary.day01}</p>
                </div>

                {/* Day 02 */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Day 02</h3>
                  <p className="text-gray-700">{selectedPackage.itinerary.day02}</p>
                </div>

                {/* Inclusion & Exclusion */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Inclusion */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <CheckCircle className="text-green-600" size={20} />
                        Inclusion
                      </h3>
                      <ul className="space-y-2">
                        {INCLUSION_ITEMS.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
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
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <XCircle className="text-red-500 mt-1 flex-shrink-0" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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