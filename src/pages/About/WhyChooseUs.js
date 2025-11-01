import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyChooseUs.css';

const features = [
  {
    icon: 'passport.png',
    title: 'Hassle-Free Visas',
    description: 'We handle the paperwork so you can focus on planning your adventure. No more embassy queues or confusing processes.',
    color: 'linear-gradient(135deg, #6EE7B7 0%, #3B82F6 100%)',
    animation: 'fade-up',
  },
  {
    icon: 'map.png',
    title: 'Custom Itineraries',
    description: 'Every traveler is different. Our team builds travel plans that match your interests, budget, and pace.',
    color: 'linear-gradient(135deg, #FDE68A 0%, #F97316 100%)',
    animation: 'zoom-in',
  },
  {
    icon: 'plane.png',
    title: 'Seamless Flight Bookings',
    description: 'From economy to first-class, we ensure smooth flight bookings with the best routes and deals.',
    color: 'linear-gradient(135deg, #A5B4FC 0%, #6366F1 100%)',
    animation: 'fade-down',
  },
  {
    icon: 'hotel.jpeg',
    title: 'Top-Rated Stays',
    description: 'We partner with trusted hotels and resorts to ensure comfort, cleanliness, and service you can count on.',
    color: 'linear-gradient(135deg, #F9A8D4 0%, #EC4899 100%)',
    animation: 'flip-left',
  },
  {
    icon: 'support-agent.png',
    title: 'Real-Time Support',
    description: 'Need help during your trip? Our support team is available on chat and call — 24/7, no matter where you are.',
    color: 'linear-gradient(135deg, #FCA5A5 0%, #EF4444 100%)',
    animation: 'flip-up',
  },
  {
    icon: 'wallet.png',
    title: 'Value for Money',
    description: 'No hidden charges. Transparent pricing ensures you always know what you’re paying for — and why.',
    color: 'linear-gradient(135deg, #86EFAC 0%, #22C55E 100%)',
    animation: 'fade-right',
  },
  {
    icon: 'adventure.avif',
    title: 'Travel Insurance',
    description: 'Stay protected from unexpected events with our reliable and affordable travel insurance plans.',
    color: 'linear-gradient(135deg, #67E8F9 0%, #06B6D4 100%)',
    animation: 'fade-left',
  },
  {
    icon: 'custom.gif',
    title: 'Local Guides',
    description: 'Explore hidden gems with certified local guides for an authentic travel experience.',
    color: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
    animation: 'zoom-in-up',
  },
];

const WhyChooseUs = () => {
  useEffect(() => {  
    AOS.init({ duration: 900, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <section className="why-section">
      <div className="container">
        <p className="subtitle" data-aos="fade-down">Our Promise</p>
        <h2 className="title" data-aos="fade-up">Why Choose Globetrekker?</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
              style={{ background: feature.color }}
              data-aos={feature.animation}
              data-aos-delay={index * 100}
            >
              <div className="icon-wrapper">
                <img
                  src={`/about/${feature.icon}`}
                  alt={feature.title}
                  className="feature-icon"
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;




// WhyChooseUsSection.jsx

// import { FaRegMoneyBillAlt, FaShieldAlt, FaCalendarCheck, FaRegClock } from "react-icons/fa";
// import { FaPlay } from "react-icons/fa";


// const FEATURES = [
//   {
//     icon: <FaRegMoneyBillAlt className="text-2xl text-gray-600 group-hover:text-white transition" />,
//     title: "Affordable Pricing",
//     desc: "Enjoy top-tier travel experiences at unbeatable prices without compromising on quality or comfort.",
//   },
//   {
//     icon: <FaShieldAlt className="text-2xl text-gray-600 group-hover:text-white transition" />,
//     title: "High Security",
//     desc: "Travel with confidence knowing that your safety and privacy are our top priorities.",
//   },
//   {
//     icon: <FaCalendarCheck className="text-2xl text-gray-600 group-hover:text-white transition" />,
//     title: "Fast Booking",
//     desc: "Book your next adventure quickly and effortlessly with our seamless and user-friendly platform.",
//   },
//   {
//     icon: <FaRegClock className="text-2xl text-gray-600 group-hover:text-white transition" />,
//     title: "24 Hours Alert",
//     desc: "Stay informed and secure with round-the-clock assistance and real-time travel updates.",
//   }
// ];

// export default function WhyChooseUsSection() {
//   return (
//     <>

//     <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl mx-auto py-12 ">

//       {/* Left: Features Card */}
//       <div className="flex flex-col bg-white   ">
//         <div className=" flex">
//         <span className="block h-10 w-2 rounded bg-orange-500 mr-2 mb-4"></span>
//         <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
//         </div>
//         <p className="text-gray-600 mb-8 text-xl">
//           At Go Pravasa, we’re committed to providing stress-free travel experiences with a focus on comfort, safety, and convenience. Here’s what sets us apart:
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {FEATURES.map((feature, idx) => (
//             <div
//               key={feature.title}
//               className="group border-t border-gray-200 pt-4 pb-6 px-4 cursor-pointer transition duration-200 rounded-xl hover:bg-orange-500 hover:shadow-lg "
//             >
//               <div className="flex items-center gap-3 mb-2">
//                 {feature.icon}
//                 <h3 className="font-bold text-xl text-gray-800 group-hover:text-white transition"
//                  style={{ letterSpacing: "1.5px", fontFamily: "'Poppins', sans-serif", }}
//                 >{feature.title}</h3> 
//               </div>
//               <hr className="border-t-1 border-black mb-4" />
//               <p className="text-gray-500 group-hover:text-white text-md transition">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right: Video Section */}
//       <div className="flex-1 flex items-center justify-center">
//         <div className="relative w-[500px] h-[550px] bg-black rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
//           <video
//             className="object-cover w-full h-full"
//             poster="/gallery/gallery-image.jpg"
//             controls
//             // autoPlay loop muted (add if you want)
//           >
//             <source src="/gallery/video-1.mp4" type="video/mp4"/>
//             Your browser does not support the video tag.
//           </video>
//           {/* Play Icon Overlay (optional) */}
//           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//             {/* <div className="bg-white/80 hover:bg-orange-500 rounded-full w-14 h-14 flex items-center justify-center transition duration-300">
//               <FaPlay className="text-3xl text-orange-500 group-hover:text-white transition" />
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }
