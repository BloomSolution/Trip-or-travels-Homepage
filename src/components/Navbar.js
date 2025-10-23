
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
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector(".nav-header");
//       if (window.scrollY > 50) {
//         header.classList.add("bg-black/50", "shadow-xl", "backdrop-blur-md");
//       } else {
//         header.classList.remove("bg-black/50", "shadow-xl", "backdrop-blur-md");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="nav-header fixed top-0 w-full z-50 transition-all duration-300">
//       <div className="max-w-[1400px] w-[90%] mx-auto flex justify-between items-center py-3">

//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Trip or Travel"
//           className="w-[130px] lg:-ml-10 hover:scale-105 transition duration-300"
//         />

//         {/* Desktop Menu */}
//         <nav className="hidden lg:flex items-center gap-16">
//           {["/", "/about", "/gallery", "/contact"].map((path, index) => (
//             <Link
//               key={index}
//               to={path}
//               className="relative font-semibold text-[1.1rem] text-[#222] hover:text-[#ff6600] transition duration-300"
//             >
//               {["HOME", "ABOUT", "GALLERY", "CONTACT US"][index]}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff6600] transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </nav>

//         {/* Inquiry */}
//         <div className="hidden lg:flex items-center gap-2 bg-[#ffffff26] px-3 py-1 rounded-md cursor-pointer">
//           <FiPhoneCall className="text-[22px] text-[#ff6600]" />
//           <div className="text-[0.9rem] whitespace-nowrap">
//             <span className="text-gray-600 text-[13px] block">To More Inquiry</span>
//             <a href="tel:+917795183828" className="text-[#ff6600] font-bold">
//               +91 7795183828
//             </a>
//           </div>
//         </div>

//         {/* Menu Toggle */}
//         <button className="text-3xl lg:hidden p-2 rounded-md" onClick={toggleMenu}>
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <nav
//         className={`lg:hidden absolute left-0 w-full bg-white shadow-lg transition-all duration-500 ${
//           isOpen ? "top-[70px] opacity-100" : "-top-[400px] opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center gap-3 py-6">
//           {["/", "/about", "/gallery", "/contact"].map((path, index) => (
//             <li key={index}>
//               <Link
//                 to={path}
//                 onClick={() => setIsOpen(false)}
//                 className="block w-[90%] bg-[#f8f8ff] text-[#333] text-center font-semibold py-3 rounded-md hover:bg-[#ebebff] hover:text-[#3e35e0] transition"
//               >
//                 {["HOME", "ABOUT", "GALLERY", "CONTACT US"][index]}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`nav-header fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/60 shadow-xl backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] w-[90%] mx-auto flex justify-between items-center py-3">

        {/* Logo */}
        <img
          src={logo}
          alt="Trip or Travel"
          className="w-[130px] lg:-ml-10 hover:scale-105 transition duration-300"
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-16">
          {["/", "/about", "/gallery", "/contact"].map((path, index) => (
            <Link
              key={index}
              to={path}
              className={`relative font-bold text-[1.1rem] transition duration-300 ${
                isScrolled ? "text-white hover:text-[#ff6600]" : " text-gray-500 hover:text-[#ff6600]"
              }`}
            >
              {/* text-[#222] */}
              {["HOME", "ABOUT", "GALLERY", "CONTACT US"][index]}

              {/* Hover underline */}
              <span
                className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 ${
                  isScrolled ? "bg-[#ff6600]" : "bg-[#ff6600]"
                } group-hover:w-full`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Inquiry */}
        <div
          className={`hidden lg:flex items-center gap-2 px-3 py-1 rounded-md cursor-pointer ${
            isScrolled ? "bg-white/20 " : "bg-[#ffffff26] backdrop-blur-xl"
          }`}
        >
          <FiPhoneCall className="text-[22px] text-[#ff6600]" />
          <div className="text-[0.9rem] whitespace-nowrap">
            <span className="text-gray-200 text-[13px] block">
              To More Inquiry
            </span>
            <a href="tel:+917795183828" className="text-[#ff6600] font-bold">
              +91 7795183828
            </a>
          </div>
        </div>

        {/* Menu Toggle */}
        <button className={`text-3xl lg:hidden p-2 rounded-md ${isScrolled ? "text-white" : "text-black"}`} onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {/* <nav
        className={`lg:hidden absolute left-0 w-full bg-white shadow-lg transition-all duration-500 ${
          isOpen ? "top-[70px] opacity-100" : "-top-[400px] opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-3 py-6">
          {["/", "/about", "/gallery", "/contact"].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="block w-[90%] bg-[#f8f8ff] text-[#333] text-center font-semibold py-3 rounded-md hover:bg-[#ebebff] hover:text-[#3e35e0] transition"
              >
                {["HOME", "ABOUT", "GALLERY", "CONTACT US"][index]}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}
      {/* Mobile Menu */}
<nav
  className={`lg:hidden fixed left-0 w-full top-0 h-screen z-40 transition-all duration-500 ease-in-out ${
    isOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
>
  {/* Overlay background */}
  <div
    className={`absolute inset-0 bg-black/50 backdrop-blur-md transition-opacity duration-500 ${
      isOpen ? "opacity-100" : "opacity-0"
    }`}
    onClick={() => setIsOpen(false)}
  ></div>

  {/* Sliding Menu */}
  <div
    className={`absolute top-0 left-0 w-4/5 max-w-xs h-full bg-black/50 backdrop-blur-lg shadow-2xl transition-transform duration-500 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } flex flex-col items-center py-12 gap-6`}
  >
    {["/", "/about", "/gallery", "/contact"].map((path, index) => (
      <Link
        key={index}
        to={path}
        onClick={() => setIsOpen(false)}
        className="w-full text-center text-white font-semibold text-lg py-3 rounded-lg hover:bg-[#ff6600]/20 hover:text-[#ff6600] transition-all duration-300"
      >
        {["HOME", "ABOUT", "GALLERY", "CONTACT US"][index]}
      </Link>
    ))}
  </div>
</nav>

    </header>
  );
};

export default Navbar;
