// import React from 'react';
// import './Footer.css';
// import { Link } from "react-router-dom";
// import logo from '../assets/logo.png';
// import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Left Column */}
//         <div className="footer-left">
//           <img src={logo} alt="Trip or Travel Holidays" className="footer-logo" />
//           <h2>Ready to Explore the World with Us?</h2>
//           <p>
//             Discover amazing destinations and unforgettable experiences. We offer fully customizable travel packages to make your journey truly yours.
//           </p>
//         </div>

//         {/* Middle Column */}
//         <div className="footer-middle">
//           <div className="footer-links">
//             <h3>Quick Links</h3>
//             <ul>
//               <li><Link to="/about">About Us</Link></li>
//               <li><Link to="/destinations">Destinations</Link></li>
//               <li><Link to="/tour-packages">Tour Packages</Link></li>
//               <li><Link to="/blog">Travel Blog</Link></li>
//               <li><Link to="/privacy">Privacy Policy</Link></li>
//               <li><Link to="/contact">Contact Us</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Contact Column */}
//         <div className="footer-contact">
//           <h3>Contact Us</h3>
//           <p><FaPhoneAlt /> <a href="tel:+917795183828">+91 7795183828 </a></p>
//           <h3>Email Us</h3>
//           <p><FaEnvelope /> <a href="mailto:triportravelsholiday@gmail.com">triportravelsholiday@gmail.com</a></p>
//           <h3>Our Office</h3>
//           <p>
//             4th Floor, Hosur Main Road, above Domino's Pizza, near Christ University,<br />
//             Krishna Nagar, Koramangala Industrial Layout, S.G. Palya,<br />
//             Bengaluru, Karnataka 560029
//           </p>
//         </div>

//         {/* Right Column */}
//         <div className="footer-right">
//           <h3>Plan Your Trip</h3>
//           <p>
//             Whether you're dreaming of a peaceful retreat or an adventurous escape,
//             our team will help you craft a travel experience you'll never forget.
//             Start your journey today!
//           </p>

//           <div className="footer-socials">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <a href="https://www.facebook.com/profile.php?id=61563871814448" className="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 <FaFacebookF />
//               </a>
//               <a href="https://www.youtube.com/" className="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 <FaInstagram />
//               </a>
//               <a href="https://www.youtube.com/@TriporTravel-w2w" className="youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
//                 <FaYoutube />
//               </a>
//               <a href="https://wa.me/+917795183828" className="whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
//                 <FaWhatsapp />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Trip or Travels Holidays. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import {  FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      alert("Please fill all fields before submitting!");
      return;
    }

    // WhatsApp Message Format
    const message = `Hello TripOrTravel 👋,%0A%0AHere are my details:%0A👤 Name: ${name}%0A📧 Email: ${email}%0A📞 Phone: ${phone}`;
    const phoneNumber = "+917795183828"; // your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <footer
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/60 px-6 py-10 md:px-16">
        {/* Contact Section */}

<div className="max-w-6xl mx-auto backdrop-blur-sm bg-black/30 rounded-xl p-8 mb-4 relative flex flex-col md:flex-row md:items-center md:justify-between shadow-lg">
  {/* Left Side */}
  <div className="md:w-1/3 mb-6 md:mb-0">
    <h2 className="text-3xl font-semibold border-l-8 border-orange-500 pl-3 mb-3 text-white">
      Get In Touch
    </h2>
    <p className="text-lg text-gray-200">
      Have questions or need assistance? Get in touch with us.
    </p>
  </div>

  {/* Right Side: Form */}
  <form
            onSubmit={handleSubmit}
            className="md:w-2/3 flex flex-col gap-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border border-gray-400 px-4 py-3 rounded-lg focus:outline-none w-full text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email ID"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border border-gray-400 px-4 py-3 rounded-lg focus:outline-none w-full text-white placeholder-gray-400"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone No"
                value={formData.phone}
                onChange={handleChange}
                className="bg-transparent border border-gray-400 px-4 py-3 rounded-lg focus:outline-none w-full text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg w-full text-xl transition duration-200"
              >
                Submit Now
              </button>
            </div>
          </form>
</div>




        <hr className="border-gray-400 mb-10 md:max-w-6xl md:ml-36" />

        {/* Footer Columns */}
        <div className="md:max-w-6xl mx-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <img
              src="logo.png"
              alt="Logo"
              className="w-36 mb-3"
            />
            <p className="text-gray-300 text-sm mb-4">
              Go Pravasa, a brand of Pushpaka Vimana Travels and Tours Pvt Ltd,
              is a Bengaluru-based tour operator specializing in International
              and Domestic Group Tours, Customized Tours, and Adventure Treks!
            </p>

            <p className="flex items-center gap-2 text-orange-400">
              <FaPhoneAlt /> <a href="tel:+917795183828">+91 7795183828 </a>
            </p>
            <p className="flex items-center gap-2 mt-2 text-gray-300">
              <FaEnvelope /> <a href="mailto:triportravelsholiday@gmail.com">triportravelsholiday@gmail.com</a>
            </p>
            <p className="flex items-start gap-2 mt-2 text-gray-300 text-sm">
              <FaMapMarkerAlt className="mt-1 md:text-3xl text-xl" /> 4th Floor, Hosur Main Road, above Domino's Pizza, near Christ University,<br />
            Krishna Nagar, Koramangala Industrial Layout, S.G. Palya,<br />
             Bengaluru, Karnataka 560029
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {/* <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Payment Policy</li>
              <li>Cancellation Policy</li> */}
              <li><Link to="/about">About Us</Link></li>
               <li><Link to="#">Cancellation Policy</Link></li>
               <li><Link to="/#">Terms & Conditions</Link></li>
               <li><Link to="/#">Travel Blog</Link></li>
               <li><Link to="/privacy">Privacy Policy</Link></li>
               <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Categories</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>National Tours</li>
              <li>International Tours</li>
              {/* <li>#Domestic Tours</li> */}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Destinations</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Dubai ", img: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2023/06/thehoneycombers.com_.jpg" },
                { name: "Malaysiya/Singapore", img: "https://wallpapercave.com/wp/wp1841860.jpg" },
                { name: "Bali ", img: "https://wallpaperaccess.com/full/373636.jpg" },
                { name: "Thailand", img: "https://wallpapercave.com/wp/wp4189624.jpg" },
                { name: "Ayodhya ", img: "https://www.setmytrip.in/wp-content/uploads/2023/12/PSX_20231231_170054.jpg" },
                { name: "Goa", img: "https://www.clubmahindra.com/blog/media/section_images/goa-travel-15f65aefe1582dc.jpg" },
                { name: "Napal & Kashi", img: "https://www.travelandleisureindia.in/wp-content/uploads/2020/07/Feature-image-Varanasi-Temples.jpg" },
                { name: "Andaman and Nicobar", img: "https://wallpapercave.com/wp/wp7333491.jpg" },
              ].map((item, i) => (
                <div key={i} className="text-center text-xs">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 mx-auto rounded-full object-cover border border-gray-400"
                  />
                  <p className="mt-1">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
</div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-400 pt-4 text-gray-400 text-sm md:max-w-6xl md:ml-36">
          <div className="flex gap-4 text-2xl mb-3 md:mb-0">
  <a
    href="https://www.facebook.com/profile.php?id=61563871814448"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="hover:text-orange-500 cursor-pointer transition duration-200"
  >
    <FaFacebook />
  </a>

  <a
    href="https://www.youtube.com/@TriporTravel-w2w"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="hover:text-orange-500 cursor-pointer transition duration-200"
  >
    <FaYoutube />
  </a>

  <a
    href="https://www.instagram.com/trip_or_travel_holiday/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:text-orange-500 cursor-pointer transition duration-200"
  >
    <FaInstagram />
  </a>

  <a
    href="https://wa.me/+917795183828"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="hover:text-orange-500 cursor-pointer transition duration-200"
  >
    <FaWhatsapp />
  </a>
</div>

          
          <p>All Rights Reserved © Bloom It Solutions.com</p>
        </div>
        
      </div>
    </footer>
  );
}
