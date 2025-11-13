// import React, { useState } from 'react';
// import './ContactUs.css';

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const whatsappNumber = "917795183828"; // WhatsApp number (with country code, no + sign)
//     const message = `Hello, I am ${formData.name}.
//   Email: ${formData.email}
//   Phone: ${formData.phone}
//   Message: ${formData.message}`;
  
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
//     window.open(whatsappURL, "_blank"); // opens WhatsApp chat in new tab/window
  
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };
  
//   return (
//     <section className="contact-us-section">
//       <div className="contact-container">
//         {/* Left side: Info cards */}
//         <div className="contact-info">
//           <h2>Contact Us</h2>
//           <div className="info-card">
//             <h4>Email</h4>
//             <p>For inquiries, please email us at:</p>
//             <strong>info@bloomitsolutions.com</strong>
//           </div>
//           <div className="info-card">
//   <h4>Phone</h4>
//   <p>Reach us by phone at:</p>
//   <strong>
//     <a href="tel:+917795183828"  style={{ textDecoration: 'none', color: '#007bff' }}>
//       +91 7795183828
//     </a>
//   </strong>
//   {/* 6363298478 */}
// </div>

//           <div className="info-card">
//             <h4>Address</h4>
//             <p>Visit us at:</p>
//             <strong>
//               4th Floor, Hosur Main Road, above Dominos Pizza, near Christ University, 
//               Krishna Nagar, Koramangala Industrial Layout, S.G. Palya, Bengaluru, Karnataka 560029
//             </strong>
//           </div>
//         </div>

//         {/* Right side: Form */}
//         <div className="contact-form-container">
//           <h2>Get in Touch</h2>
//           <form onSubmit={handleSubmit} className="contact-form">
//             <label>Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <label>Phone Number:</label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />

//             <label>Message:</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>

//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }



// ! 2
// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [focusedField, setFocusedField] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const whatsappNumber = "917795183828";
//     const message = `Hello, I am ${formData.name}.
// Email: ${formData.email}
// Phone: ${formData.phone}
// Message: ${formData.message}`;
  
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
//     window.open(whatsappURL, "_blank");
    
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setFormData({ name: '', email: '', phone: '', message: '' });
//       setIsSubmitted(false);
//     }, 3000);
//   };
  
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-16 animate-fadeIn">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Have a question or want to work together? We'd love to hear from you.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-8">
//           {/* Contact Info Cards - Left Side */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Email Card */}
//             <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <Mail className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
//                   <p className="text-sm text-gray-600 mb-2">Drop us a line anytime</p>
//                   <a href="mailto:info@bloomitsolutions.com" className="text-blue-600 hover:text-blue-700 font-medium text-sm break-all">
//                     info@bloomitsolutions.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Phone Card */}
//             <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <Phone className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
//                   <p className="text-sm text-gray-600 mb-2">Give us a call</p>
//                   <a href="tel:+917795183828" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
//                     +91 7795183828
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Address Card */}
//             <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
//               <div className="flex items-start space-x-4">
//                 <div className="flex-shrink-0">
//                   <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <MapPin className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
//                   <p className="text-sm text-gray-600 mb-2">Come visit us at</p>
//                   <p className="text-sm text-gray-700 leading-relaxed">
//                     4th Floor, Hosur Main Road, above Dominos Pizza, near Christ University, 
//                     Krishna Nagar, Koramangala, S.G. Palya, Bengaluru, Karnataka 560029
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form - Right Side */}
//           <div className="lg:col-span-3">
//             <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
//               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
//               <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

//               <div className="space-y-6">
//                 {/* Name Field */}
//                 <div className="relative">
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Full Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField('name')}
//                     onBlur={() => setFocusedField('')}
//                     required
//                     className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
//                       focusedField === 'name' 
//                         ? 'border-blue-500 shadow-lg shadow-blue-100' 
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 {/* Email and Phone Row */}
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="relative">
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Email Address <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('email')}
//                       onBlur={() => setFocusedField('')}
//                       required
//                       className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
//                         focusedField === 'email' 
//                           ? 'border-blue-500 shadow-lg shadow-blue-100' 
//                           : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   <div className="relative">
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Phone Number <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       onFocus={() => setFocusedField('phone')}
//                       onBlur={() => setFocusedField('')}
//                       required
//                       className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none ${
//                         focusedField === 'phone' 
//                           ? 'border-blue-500 shadow-lg shadow-blue-100' 
//                           : 'border-gray-200 hover:border-gray-300'
//                       }`}
//                       placeholder="+91 XXXXXXXXXX"
//                     />
//                   </div>
//                 </div>

//                 {/* Message Field */}
//                 <div className="relative">
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Your Message <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     onFocus={() => setFocusedField('message')}
//                     onBlur={() => setFocusedField('')}
//                     required
//                     rows="5"
//                     className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none resize-none ${
//                       focusedField === 'message' 
//                         ? 'border-blue-500 shadow-lg shadow-blue-100' 
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                     placeholder="Tell us about your project or inquiry..."
//                   ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   onClick={handleSubmit}
//                   disabled={isSubmitted}
//                   className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 ${
//                     isSubmitted
//                       ? 'bg-green-500 shadow-lg shadow-green-200'
//                       : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-200 hover:shadow-2xl'
//                   }`}
//                 >
//                   {isSubmitted ? (
//                     <>
//                       <CheckCircle className="w-5 h-5" />
//                       <span>Message Sent!</span>
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="mt-8 pt-6 border-t border-gray-100">
//                 <p className="text-xs text-gray-500 text-center">
//                   🔒 Your information is secure and will never be shared with third parties
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-fadeIn {
//           animation: fadeIn 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }


// ! 3 
// import React, { useState } from 'react';
import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Plane, Palmtree, Mountain } from 'lucide-react';

export default function ContactUs() {

  const formRef = useRef(null);

  useEffect(() => {
    // Scroll kare jab URL me #form ho
    if (window.location.hash === "#form") {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  const [formData, setFormData] = useState({
     name: '',
  email: '',
  phone: '',
  message: '',
  fromDate: '',
  toDate: '',
  destination: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const whatsappNumber = "917795183828";

  const message = `Hello, I am ${formData.name}.
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📍 Destination: ${formData.destination}
🗓️ Journey From: ${formData.fromDate}
🗓️ Journey To: ${formData.toDate}
💬 Message: ${formData.message}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  setIsSubmitted(true);
  setTimeout(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      fromDate: '',
      toDate: '',
      destination: ''
    });
    setIsSubmitted(false);
  }, 3000);
};

  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Clouds */}
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        
        {/* Decorative Travel Icons */}
        <div className="floating-icon icon-1">
          <Plane className="w-8 h-8 text-sky-300 opacity-40" />
        </div>
        <div className="floating-icon icon-2">
          <Palmtree className="w-10 h-10 text-emerald-300 opacity-40" />
        </div>
        <div className="floating-icon icon-3">
          <Mountain className="w-9 h-9 text-slate-300 opacity-40" />
        </div>
        <div className="floating-icon icon-4">
          <Plane className="w-7 h-7 text-blue-300 opacity-40" />
        </div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div ref={formRef} className="text-center mb-16 fade-in-up">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-400 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Plane className="w-4 h-4" />
                <span>Plan Your Perfect Journey</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Let's Create Your{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Dream Trip
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0EA5E9" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to embark on an unforgettable adventure? Get in touch with us and let's start planning your next holiday destination.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Contact Info Cards - Left Side */}
            <div className="lg:col-span-2 space-y-5 fade-in-left">
              {/* Email Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-sky-100 hover:border-sky-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-400/20 to-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-sm text-gray-600 mb-3">Drop us a message anytime</p>
                    <a href="mailto:info@bloomitsolutions.com" className="text-sky-600 hover:text-sky-700 font-semibold text-sm break-all inline-flex items-center group-hover:underline">
                      info@bloomitsolutions.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-emerald-100 hover:border-emerald-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-sm text-gray-600 mb-3">Available 24/7 for you</p>
                    <a href="tel:+917795183828" className="text-emerald-600 hover:text-emerald-700 font-semibold text-lg group-hover:underline">
                      +91 7795183828
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-sm text-gray-600 mb-3">Come say hello!</p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      4th Floor, Hosur Main Road, above Dominos Pizza, near Christ University, 
                      Krishna Nagar, Koramangala, S.G. Palya, Bengaluru, Karnataka 560029
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div  className="lg:col-span-3 fade-in-right">
              <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-100 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-200/30 to-blue-300/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/30 to-purple-300/30 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Start Your Journey</h2>
                  <p className="text-gray-600 mb-8 text-lg">Tell us about your travel plans and we'll craft the perfect itinerary for you.</p>

                  <div className="space-y-6">
                    {/* Name Field */}
                    <div className="relative form-field">
                      <label className="block text-sm font-bold text-gray-800 mb-2">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none bg-white/70 backdrop-blur-sm text-gray-900 placeholder-gray-400 ${
                          focusedField === 'name' 
                            ? 'border-sky-500 shadow-xl shadow-sky-100 scale-[1.02]' 
                            : 'border-gray-200 hover:border-sky-300 shadow-md'
                        }`}
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Email and Phone Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative form-field">
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          required
                          className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none bg-white/70 backdrop-blur-sm text-gray-900 placeholder-gray-400 ${
                            focusedField === 'email' 
                              ? 'border-sky-500 shadow-xl shadow-sky-100 scale-[1.02]' 
                              : 'border-gray-200 hover:border-sky-300 shadow-md'
                          }`}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="relative form-field">
                        <label className="block text-sm font-bold text-gray-800 mb-2">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField('')}
                          required
                          className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none bg-white/70 backdrop-blur-sm text-gray-900 placeholder-gray-400 ${
                            focusedField === 'phone' 
                              ? 'border-sky-500 shadow-xl shadow-sky-100 scale-[1.02]' 
                              : 'border-gray-200 hover:border-sky-300 shadow-md'
                          }`}
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                    </div>

                    {/* Journey Dates and Destination */}
<div className="grid md:grid-cols-3 gap-6">
  {/* From Date */}
  <div className="relative form-field">
    <label className="block text-sm font-bold text-gray-800 mb-2">
      Journey From <span className="text-rose-500">*</span>
    </label>
    <input
      type="date"
      name="fromDate"
      value={formData.fromDate || ''}
      onChange={handleChange}
      onFocus={() => setFocusedField('fromDate')}
      onBlur={() => setFocusedField('')}
      required
      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none bg-white/70 backdrop-blur-sm text-gray-900 ${
        focusedField === 'fromDate'
          ? 'border-sky-500 shadow-xl shadow-sky-100 scale-[1.02]'
          : 'border-gray-200 hover:border-sky-300 shadow-md'
      }`}
    />
  </div>

  {/* To Date */}
  <div className="relative form-field">
    <label className="block text-sm font-bold text-gray-800 mb-2">
      Journey To <span className="text-rose-500">*</span>
    </label>
    <input
      type="date"
      name="toDate"
      value={formData.toDate || ''}
      onChange={handleChange}
      onFocus={() => setFocusedField('toDate')}
      onBlur={() => setFocusedField('')}
      required
      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none bg-white/70 backdrop-blur-sm text-gray-900 ${
        focusedField === 'toDate'
          ? 'border-sky-500 shadow-xl shadow-sky-100 scale-[1.02]'
          : 'border-gray-200 hover:border-sky-300 shadow-md'
      }`}
    />
  </div>

  {/* Destination Dropdown */}
  <div className="relative form-field">
    <label className="block text-sm font-bold text-gray-800 mb-2">
      Destination <span className="text-rose-500">*</span>
    </label>
    <select
      name="destination"
      value={formData.destination || ''}
      onChange={handleChange}
      onFocus={() => setFocusedField('destination')}
      onBlur={() => setFocusedField('')}
      required
      className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none bg-white/70 backdrop-blur-sm text-gray-900 ${
        focusedField === 'destination'
          ? 'border-sky-500 shadow-xl shadow-sky-100 scale-[1.02]'
          : 'border-gray-200 hover:border-sky-300 shadow-md'
      }`}
    >
      <option value="">Select Destination</option>
      <option value="Bali">Bali</option>
      <option value="Maldives">Maldives</option>
      <option value="Goa">Goa</option>
      <option value="Dubai">Dubai</option>
      <option value="Singapore">Singapore</option>
      <option value="Thailand">Thailand</option>
    </select>
  </div>
</div>


                    {/* Message Field */}
                    <div className="relative form-field">
                      <label className="block text-sm font-bold text-gray-800 mb-2">
                        Your Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        required
                        rows="5"
                        className={`w-full px-5 py-4 rounded-2xl border-2 transition-all duration-300 outline-none resize-none bg-white/70 backdrop-blur-sm text-gray-900 placeholder-gray-400 ${
                          focusedField === 'message' 
                            ? 'border-sky-500 shadow-xl shadow-sky-100 scale-[1.02]' 
                            : 'border-gray-200 hover:border-sky-300 shadow-md'
                        }`}
                        placeholder="Tell us about your dream destination, travel dates, number of travelers, or any special requirements..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitted}
                      className={`w-full py-5 px-8 rounded-2xl font-bold text-lg text-white transition-all duration-500 transform hover:scale-[1.03] active:scale-[0.98] flex items-center justify-center space-x-3 shadow-2xl relative overflow-hidden group ${
                        isSubmitted
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 shadow-emerald-300'
                          : 'bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-600 hover:via-blue-700 hover:to-indigo-700 shadow-blue-300'
                      }`}
                    >
                      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-6 h-6 animate-bounce" />
                          <span>Message Sent Successfully!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-10 pt-8 border-t-2 border-gray-100">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Secure & Confidential - We respect your privacy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatCloud {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(30px) translateY(-10px);
          }
        }

        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .fade-in-left {
          animation: fadeInLeft 0.8s ease-out 0.2s backwards;
        }

        .fade-in-right {
          animation: fadeInRight 0.8s ease-out 0.2s backwards;
        }

        .form-field {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .form-field:nth-child(1) { animation-delay: 0.1s; }
        .form-field:nth-child(2) { animation-delay: 0.2s; }
        .form-field:nth-child(3) { animation-delay: 0.3s; }

        .cloud {
          position: absolute;
          background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(240,248,255,0.3) 100%);
          border-radius: 100px;
          animation: floatCloud 20s ease-in-out infinite;
        }

        .cloud-1 {
          width: 300px;
          height: 120px;
          top: 10%;
          left: -5%;
          animation-duration: 25s;
        }

        .cloud-2 {
          width: 250px;
          height: 100px;
          top: 40%;
          right: -3%;
          animation-duration: 30s;
          animation-delay: -5s;
        }

        .cloud-3 {
          width: 200px;
          height: 80px;
          bottom: 20%;
          left: 10%;
          animation-duration: 35s;
          animation-delay: -10s;
        }

        .floating-icon {
          position: absolute;
          animation: floatIcon 8s ease-in-out infinite;
        }

        .icon-1 {
          top: 15%;
          right: 15%;
          animation-duration: 6s;
        }

        .icon-2 {
          bottom: 25%;
          right: 8%;
          animation-duration: 8s;
          animation-delay: -2s;
        }

        .icon-3 {
          top: 50%;
          left: 5%;
          animation-duration: 7s;
          animation-delay: -4s;
        }

        .icon-4 {
          bottom: 15%;
          left: 20%;
          animation-duration: 9s;
          animation-delay: -6s;
        }

        @media (max-width: 768px) {
          .cloud {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}