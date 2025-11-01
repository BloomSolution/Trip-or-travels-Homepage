
// // src/components/Navbar.js  Simple css
// import React, { useState, useEffect } from 'react';
// import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';
// import logo from '../assets/logo.png';
// import './Navbar.css'; // Create this CSS file for styles
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector('.header');
//       if (window.scrollY > 50) {
//         header.classList.add('sticky');
//       } else {
//         header.classList.remove('sticky');
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className="header">
//     <div className="header-container">
//       <div className="logo-section">
//         <img src={logo} alt="Trip or Travel" className="logo" />
//       </div>

//       <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
//   <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
//   <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link>
//   {/* <Link to="/service" onClick={() => setIsOpen(false)}>SERVICE</Link> */}
//   {/* <Link to="#packages" onClick={() => setIsOpen(false)}>PACKAGES +</Link> */}
//   <Link to="/gallery" onClick={() => setIsOpen(false)}>GALLERY</Link>
//   <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
//   {/* <Link to="/login" onClick={() => setIsOpen(false)}>LOGIN</Link> */}
// </nav>


//       <div className="inquiry">
//         <FiPhoneCall className="phone-icon" />
//         <div className="inquiry-text">
//           <span>To More Inquiry </span>
//           <a href="tel:+917795183828"><strong> +91 7795183828</strong></a>
//         </div>
//       </div>

//       <div className="menu-toggle" onClick={toggleMenu}>
//         {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//       </div>
//     </div>
//   </header>

//   );
// };

// export default Navbar;


// ! Tailwind 

// import React, { useState, useEffect } from "react";
// import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
// import { Mail, Phone } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="fixed top-0 w-full z-50">
//         {/* ✅ Top Bar */}
//         <div className="bg-gradient-to-r from-[#1111a9] via-[#4c00ff] to-[#d11d23]
//  text-white py-2 hidden md:block">
//           <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-2">
//                 <Phone size={14} />
//                 <span>+91 7795183828</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail size={14} />
//                 <span>triportravelsholiday@gmail.com</span>
//               </div>
//             </div>
//             {/* ✅ Contact Button */}
//             <Link
//               to="/contact"
//               className=" backdrop-blur-3xl bg-white/20 border border-white/30 text-white font-semibold px-4 py-1 rounded-full hover:bg-[#ff6600] hover:text-white transition-all duration-300 shadow-md"
//             >
//               Contact Us
//             </Link>

//           </div>
//         </div>

//         {/* ✅ Navbar Section */}
//         <header
//           className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-xl backdrop-blur-md" : "bg-transparent"
//             }`}
//         >
//           <div className="max-w-[1400px] w-[90%] mx-auto flex justify-between items-center py-3">

//             <Link to="/" className="flex items-center">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="w-[150px] lg:w-[120px] hover:scale-105 transition duration-300 cursor-pointer"
//               />
//             </Link>

//             {/* Desktop Menu */}
//             <nav className="hidden lg:flex items-center gap-16">
//               <div className="relative group">
//                 <Link
//                   to="/destinations"
//                   className={`relative font-semibold text-[1.1rem] transition duration-300 ${isScrolled ? "text-black/80 hover:text-[#ff6600]" : "text-white/80 hover:text-[#ff6600]"
//                     }`}
//                 >
//                   Destinations
//                 </Link>

//                 {/* 🏝️ Dropdown Grid */}
//                 <div className="absolute left-0 top-full mt-4 hidden group-hover:grid grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl p-4 w-[800px] z-50">
//                   {[
//                     { name: "Vietnam", img: "https://images.unsplash.com/photo-1548786817-47c6c7c0a6f7" },
//                     { name: "Bali", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
//                     { name: "Dubai", img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a" },
//                     { name: "Thailand", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" },
//                     { name: "Bhutan", img: "https://images.unsplash.com/photo-1577946152908-67f6e4b95f7a" },
//                     { name: "Kashmir", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb" },
//                     { name: "Japan", img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
//                     { name: "South Africa", img: "https://images.unsplash.com/photo-1549893079-842e6e89d22a" },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="relative rounded-xl overflow-hidden cursor-pointer group/item hover:scale-105 transition duration-300"
//                     >
//                       <img
//                         src={item.img}
//                         alt={item.name}
//                         className="w-full h-32 object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                         <span className="text-white font-semibold text-lg">{item.name}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Category Dropdown */}
//               <div className="relative group">
//                 <Link
//                   to="#"
//                   className={`relative font-semibold text-[1.1rem] transition duration-300 ${isScrolled ? "text-black/80 hover:text-[#ff6600]" : "text-white/80 hover:text-[#ff6600]"
//                     }`}
//                 >
//                   Category
//                 </Link>

//                 {/* 🧭 Dropdown */}
//                 <div className="absolute left-0 top-full mt-3 hidden group-hover:grid grid-cols-2 gap-4 bg-white rounded-2xl shadow-xl p-4 w-[400px] z-50">
//                   {[
//                     { name: "National", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", link: "/national" },
//                     { name: "International", img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff", link: "/international" },
//                   ].map((item, index) => (
//                     <div
//                       key={index}
//                       className="relative rounded-xl overflow-hidden cursor-pointer group/item hover:scale-105 transition duration-300"
//                     >
//                       <img
//                         src={item.img}
//                         alt={item.name}
//                         className="w-full h-32 object-cover"
//                       />
//                       <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                         <span className="text-white font-semibold text-lg">{item.name}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>



//               {["/about", "/package", "/gallery", "/contact", "/test"].map(
//                 (path, index) => (
//                   <Link
//                     key={index}
//                     to={path}
//                     className={`relative font-semibold text-[1.1rem] transition duration-300 ${isScrolled
//                         ? "text-black/80 hover:text-[#ff6600]"
//                         : "text-white/80 hover:text-[#ff6600]"
//                       }`}
//                   >
//                     {["ABOUT", "PACKAGE", "BLOG"][index]}
//                   </Link>
//                 )
//               )}

//             </nav>

//             {/* Inquiry Button */}
//             {/* <div
//               className={`hidden lg:flex items-center gap-2 px-3 py-1 rounded-md cursor-pointer ${
//                 isScrolled ? "bg-white/20" : "bg-[#ffffff26] backdrop-blur-xl"
//               }`}
//             >
//               <FiPhoneCall className="text-[22px] text-[#ff6600]" />
//               <div className="text-[0.9rem] whitespace-nowrap">
//                 <span className="text-gray-200 text-[13px] block">To More Inquiry</span>
//                 <a href="tel:+917795183828" className="text-[#ff6600] font-bold">
//                   +91 7795183828
//                 </a>
//               </div>
//             </div> */}

//             {/* Mobile Menu Toggle */}
//             <button
//               className={`text-3xl lg:hidden p-2 rounded-md ${isScrolled ? "text-black" : "text-black"
//                 }`}
//               onClick={toggleMenu}
//             >
//               {isOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>

//           {/* ✅ Mobile Menu */}
//           <nav
//             className={`lg:hidden fixed left-0 w-full top-0 h-screen z-40 transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//               }`}
//           >
//             <div
//               className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
//                 }`}
//               onClick={() => setIsOpen(false)}
//             ></div>

//             <div
//               className={`absolute top-0 left-0 w-4/5 max-w-xs h-full bg-black/70 backdrop-blur-lg shadow-2xl transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
//                 } flex flex-col items-center py-12 gap-6`}
//             >
//               {["/about", "/gallery", "/contact"].map((path, index) => (
//                 <Link
//                   key={index}
//                   to={path}
//                   onClick={() => setIsOpen(false)}
//                   className="w-full text-center text-white font-semibold text-lg py-3 rounded-lg hover:bg-[#ff6600]/20 hover:text-[#ff6600] transition-all duration-300"
//                 >
//                   {["ABOUT", "GALLERY", "CONTACT US"][index]}
//                 </Link>
//               ))}
//             </div>
//           </nav>
//         </header>
//       </div>

//     </>
//   );
// };

// export default Navbar;


// ! 
// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Mail, Phone } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="fixed top-0 w-full z-50">
//       {/* ✅ Top Bar */}
//       <div className="bg-gradient-to-r from-[#1111a9] via-[#4c00ff] to-[#d11d23] text-white py-2 hidden md:block">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2">
//               <Phone size={14} />
//               <span>+91 7795183828</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Mail size={14} />
//               <span>triportravelsholiday@gmail.com</span>
//             </div>
//           </div>
//           <Link
//             to="/contact"
//             className="backdrop-blur-3xl bg-white/20 border border-white/30 text-white font-semibold px-4 py-1 rounded-full hover:bg-[#ff6600] hover:text-white transition-all duration-300 shadow-md"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>

//       {/* ✅ Navbar */}
//       <header
//         className={`transition-all duration-300 ${isScrolled ? "bg-white shadow-xl" : "bg-transparent"
//           }`}
//       >
//         <div className="max-w-[1400px] w-[90%] mx-auto flex justify-between items-center py-3">
//           <Link to="/">
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-[150px] lg:w-[120px] hover:scale-105 transition duration-300"
//             />
//           </Link>

//           {/* ✅ Desktop Menu */}
//           <nav className="hidden lg:flex items-center gap-14 relative">
//             {/* === Destinations === */}
//             <div className="relative group">
//               <Link
//                 to="#"
//                 className={`font-semibold text-[1.1rem] ${isScrolled
//                   ? "text-black/80 hover:text-[#ff6600]"
//                   : "text-white/80 hover:text-[#ff6600]"
//                   }`}
//               >
//                 Destinations
//               </Link>

//               <div className="absolute -right-20 top-full mt-6 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-2xl shadow-2xl p-4 grid grid-cols-4 gap-4 w-[800px] z-50"
//               >
//                 {[
//                   { name: "Vietnam", img: "https://images.unsplash.com/photo-1548786817-47c6c7c0a6f7" },
//                   { name: "Bali", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
//                   { name: "Dubai", img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a" },
//                   { name: "Thailand", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" },
//                   { name: "Bhutan", img: "https://images.unsplash.com/photo-1577946152908-67f6e4b95f7a" },
//                   { name: "Kashmir", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb" },
//                   { name: "Japan", img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
//                   { name: "South Africa", img: "https://images.unsplash.com/photo-1549893079-842e6e89d22a" },
//                 ].map((item, i) => (
//                   <Link
//                     key={i}
//                     to={`/destination/${item.name.toLowerCase()}`}
//                     className="relative rounded-xl overflow-hidden group/item hover:scale-105 transition duration-300"
//                   >
//                     <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
//                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                       <span className="text-white font-semibold text-lg">{item.name}</span>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* === Category === */}
//             <div className="relative group">
//               <Link
//                 to="#"
//                 className={`font-semibold text-[1.1rem] ${isScrolled
//                   ? "text-black/80 hover:text-[#ff6600]"
//                   : "text-white/80 hover:text-[#ff6600]"
//                   }`}
//               >
//                 Category
//               </Link>

//               <div className="absolute -left-20 top-full mt-6 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-4 w-[400px] z-50"
//               >
//                 {[
//                   { name: "National", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", link: "/national" },
//                   { name: "International", img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff", link: "/international" },
//                 ].map((item, i) => (
//                   <Link
//                     key={i}
//                     to={item.link}
//                     className="relative rounded-xl overflow-hidden group/item hover:scale-105 transition duration-300"
//                   >
//                     <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
//                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                       <span className="text-white font-semibold text-lg">{item.name}</span>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* === Other Links === */}
//             {[
//               { path: "/about", label: "ABOUT" },
//               { path: "/package", label: "PACKAGE" },
//               // { path: "/gallery", label: "GALLERY" },
//               // { path: "/contact", label: "CONTACT" },
//               { path: "/test", label: "BLOG" },
//             ].map((item, i) => (
//               <Link
//                 key={i}
//                 to={item.path}
//                 className={`font-semibold text-[1.1rem] ${isScrolled
//                   ? "text-black/80 hover:text-[#ff6600]"
//                   : "text-white/80 hover:text-[#ff6600]"
//                   }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>

//           {/* ✅ Mobile Menu Toggle */}
//           <button
//             className={`text-3xl lg:hidden p-2 rounded-md ${isScrolled ? "text-black" : "text-black"
//               }`}
//             onClick={toggleMenu}
//           >
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50">
      {/* ✅ Top Bar */}
      <div className="bg-gradient-to-r from-[#1111a9] via-[#4c00ff] to-[#d11d23] text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 7795183828</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>triportravelsholiday@gmail.com</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="backdrop-blur-3xl bg-white/20 border border-white/30 text-white font-semibold px-4 py-1 rounded-full hover:bg-[#ff6600] hover:text-white transition-all duration-300 shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* ✅ Navbar */}
      <header
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] w-[90%] mx-auto flex justify-between items-center py-3 md:px-20">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[150px] lg:w-[120px] hover:scale-105 transition duration-300"
            />
          </Link>

          {/* ✅ Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10 relative">
            <div className="relative group uppercase">
              <Link
                to="#"
                className={`font-semibold text-[1.1rem] ${
                  isScrolled
                    ? "text-black/80 hover:text-[#ff6600]"
                    : "text-white/80 hover:text-[#ff6600]"
                }`}
              >
                Destinations
              </Link>

              <div className="absolute -right-20 top-full mt-6 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-2xl shadow-2xl p-4 grid grid-cols-4 gap-4 w-[800px] z-50">
                {[
                  { name: "Vietnam", img: "https://images.unsplash.com/photo-1548786817-47c6c7c0a6f7" },
                  { name: "Bali", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
                  { name: "Dubai", img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a" },
                  { name: "Thailand", img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1" },
                  { name: "Bhutan", img: "https://images.unsplash.com/photo-1577946152908-67f6e4b95f7a" },
                  { name: "Kashmir", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb" },
                  { name: "Japan", img: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c" },
                  { name: "South Africa", img: "https://images.unsplash.com/photo-1549893079-842e6e89d22a" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={`/destination/${item.name.toLowerCase()}`}
                    className="relative rounded-xl overflow-hidden group/item hover:scale-105 transition duration-300"
                  >
                    <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* === Category === */}
            <div className="relative group uppercase">
              <Link
                to="#"
                className={`font-semibold text-[1.1rem] ${
                  isScrolled
                    ? "text-black/80 hover:text-[#ff6600]"
                    : "text-white/80 hover:text-[#ff6600]"
                }`}
              >
                Category
              </Link>

              <div className="absolute -left-20 top-full mt-6 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-4 w-[400px] z-50">
                {[
                  { name: "National", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", link: "/national" },
                  { name: "International", img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff", link: "/international" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={item.link}
                    className="relative rounded-xl overflow-hidden group/item hover:scale-105 transition duration-300"
                  >
                    <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {[{ path: "/about", label: "ABOUT" },
              // { path: "/package", label: "PACKAGE" },
              { path: "/#", label: "BLOG" },
            ].map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`font-semibold text-[1.1rem] ${
                  isScrolled
                    ? "text-black/80 hover:text-[#ff6600]"
                    : "text-white/80 hover:text-[#ff6600]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ✅ Mobile Menu Toggle */}
          <button
            className={`text-3xl lg:hidden p-2 rounded-md ${
              isScrolled ? "text-black" : "text-black"
            }`}
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* ✅ Sidebar Menu */}
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            ></div>

            {/* Sidebar */}
            <div className="fixed top-0 left-0 w-72 h-full bg-white shadow-2xl z-50 p-6 flex flex-col space-y-6 animate-slideIn">
              <button className="self-end mb-4 text-2xl" onClick={toggleMenu}>
                <FiX />
              </button>
              <details>
                <summary className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-[#ff6600] uppercase">
                  Destinations
                </summary>
                <ul className="ml-3 mt-2 space-y-3 text-gray-600 text-md font-semibold">
                  {["Vietnam", "Bali", "Dubai", "Thailand", "Bhutan", "Kashmir", "Japan", "South Africa"].map((item) => (
                    <li key={item}>
                      <Link to={`/destination/${item.toLowerCase()}`} className="hover:text-[#ff6600] block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              <details>
                <summary className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-[#ff6600] uppercase">
                  Category
                </summary>
                <ul className="ml-3 mt-2 space-y-3 text-gray-600 text-md">
                  <li><Link to="/national" className="hover:text-[#ff6600] block font-semibold">National</Link></li>
                  <li><Link to="/international" className="hover:text-[#ff6600] block font-semibold">International</Link></li>
                </ul>
              </details>

              <Link to="/about" className="hover:text-[#ff6600] text-lg font-semibold text-gray-800">ABOUT</Link>
              {/* <Link to="/package" className="hover:text-[#ff6600] text-lg font-semibold text-gray-800">PACKAGE</Link> */}
              <Link to="/#" className="hover:text-[#ff6600] font-semibold text-lg text-gray-800">BLOG</Link>
              <Link to="/contact" className="hover:text-[#ff6600] font-semibold text-lg text-gray-800">CONTACT</Link>
            </div>
          </>
        )}
      </header>

      {/* ✅ Animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
