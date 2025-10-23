// import React from 'react';

// export default function Map() {
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'flex-start',
//       padding: '40px 0 20px 0',
//       backgroundColor: '#f9f9f9',
//       minHeight: '100vh',
//       boxSizing: 'border-box',
//       width: '100%'
//     }}>
//       <h2 style={{
//         marginBottom: '30px',
//         color: '#2c3e50',
//         fontSize: '2rem',
//         textAlign: 'center',
//         fontFamily: 'Segoe UI, sans-serif',
//         width: '100%'
//       }}>
//         Our Location
//       </h2>

//       <div style={{
//         width: '100%',
//         height: '500px',  
        
//         borderRadius: '0',
//         overflow: 'hidden',
//         boxShadow: 'none'  
//       }}>
//         <iframe
//           title="Bloom IT Solutions Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.418271657919!2d77.6072023152732!3d12.93607189136273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d37d33c9d5%3A0xb9a2637d73bf6095!2sBloom%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1694061200000!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// }





// import React from "react";

// export default function LocationSection() {
//   return (
//     <section className="relative w-full h-[80vh] md:h-[100vh]">
//       {/* Fullscreen Google Map */}
//       <iframe
//         title="Bloom IT Solutions Location"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.418271657919!2d77.6072023152732!3d12.93607189136273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d37d33c9d5%3A0xb9a2637d73bf6095!2sBloom%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1694061200000!5m2!1sen!2sin"
//         className="absolute inset-0 w-full h-full border-none"
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"
//       ></iframe>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Info Card Overlay */}
//       {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 max-w-md w-[90%] text-center shadow-2xl">
//         <h2 className="text-3xl font-bold text-white mb-3">Bloom IT Solutions</h2>
//         <p className="text-gray-200 text-sm leading-relaxed mb-4">
//           4th Floor, Hosur Main Road, above Dominos Pizza, near Christ University, <br />
//           Krishna Nagar, Koramangala, Bengaluru, Karnataka 560029
//         </p>
//         <div className="flex flex-col gap-2 text-gray-100 text-sm mb-4">
//           <p>
//             📧 <a href="mailto:info@bloomitsolutions.com" className="hover:underline">info@bloomitsolutions.com</a>
//           </p>
//           <p>
//             📞 <a href="tel:+917795183828" className="hover:underline">+91 77951 83828</a>
//           </p>
//         </div>
//         <a
//           href="https://goo.gl/maps/knEhQ7TnTAb3qYv17"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           View on Google Maps
//         </a>
//       </div> */}
//     </section>
//   );
// }





import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Map() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-gradient-to-br  via-white to-slate-100 py-10 px-4 overflow-hidden">
      
      {/* Decorative background elements */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div> */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            <span>Visit Us</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Our Location
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Come visit us at our office. We'd love to meet you in person and discuss how we can help your business grow.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className=" gap-8 items-start">
          {/* Contact Info Cards */}
          {/* <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">Address</h3>
              <p className="text-slate-600 leading-relaxed">
                Bloom IT Solutions<br />
                Bangalore, Karnataka<br />
                India
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">Phone</h3>
              <p className="text-slate-600">+91 XXXX XXXXXX</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2">Email</h3>
              <p className="text-slate-600">info@bloomit.com</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-lg shadow-slate-900/20 text-white">
              <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <div className="space-y-1 text-slate-300 text-sm">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div> */}

          {/* Map Container */}
          <div className="lg:col-span-2">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border border-slate-200/50 transition-all duration-500"
              style={{
                height: '600px',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)'
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Map overlay gradient for premium effect */}
              <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent"></div>
              </div>
              
              <iframe
                title="Bloom IT Solutions Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.418271657919!2d77.6072023152732!3d12.93607189136273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d37d33c9d5%3A0xb9a2637d73bf6095!2sBloom%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1694061200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating action button */}
              <a
                href="https://www.google.com/maps/dir//Bloom+IT+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-12 z-20 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Additional info below map */}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <p className="text-slate-700 text-center">
                <span className="font-semibold text-slate-900">Need parking?</span> Free parking is available for visitors. 
                Our office is easily accessible via public transport and major highways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}