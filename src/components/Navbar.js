

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
            // to="/contact"
            to="/contact#form"
            className="backdrop-blur-3xl bg-white/20 border border-white/30 text-white font-semibold px-4 py-1 rounded-full hover:bg-[#1825E7] hover:text-white transition-all duration-300 shadow-md"
          >
            Enquery
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
                    ? "text-black/80 hover:text-[#1825E7]"
                    : "text-white/80 hover:text-[#1825E7]"
                }`}
              >
                Destinations
              </Link>

              <div className="absolute -right-20 top-full mt-6 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white rounded-2xl shadow-2xl p-4 grid grid-cols-4 gap-4 w-[800px] z-50">
                {[
                  { name: "Vietnam", img: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2023/06/thehoneycombers.com_.jpg" },
                  { name: "Malaysiya/Singapore", img: "https://wallpapercave.com/wp/wp1841860.jpg" },
                  { name: "Bali ", img: "https://wallpaperaccess.com/full/373636.jpg" },
                  { name: "Thailand", img: "https://wallpapercave.com/wp/wp4189624.jpg" },
                  { name: "Ayodhya ", img: "https://www.setmytrip.in/wp-content/uploads/2023/12/PSX_20231231_170054.jpg" },
                  { name: "Goa", img: "https://www.clubmahindra.com/blog/media/section_images/goa-travel-15f65aefe1582dc.jpg" },
                  { name: "Napal & Kashi", img: "https://www.travelandleisureindia.in/wp-content/uploads/2020/07/Feature-image-Varanasi-Temples.jpg" },
                  { name: "Andaman and Nicobar", img: "https://wallpapercave.com/wp/wp7333491.jpg" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    to={`/destination/${item.name.toLowerCase()}`}
                    className="relative rounded-xl overflow-hidden group/item hover:scale-105 transition duration-300"
                  >
                    <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{item.name}</span>
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
                    ? "text-black/80 hover:text-[#1825E7]"
                    : "text-white/80 hover:text-[#1825E7]"
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
                      <span className="text-white font-semibold text-sm">{item.name}</span>
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
                    ? "text-black/80 hover:text-[#1825E7]"
                    : "text-white/80 hover:text-[#1825E7]"
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
                <summary className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-[#1825E7] uppercase">
                  Destinations
                </summary>
                <ul className="ml-3 mt-2 space-y-3 text-gray-600 text-md font-semibold">
                  {["Dubai ", "Malaysiya/Singapore ", "Bali ", "Thailand", "Ayodhya ", "Goa", "Napal & Kashi ", "Andaman and Nicobar"].map((item) => (
                    <li key={item}>
                      <Link to={`/destination/${item.toLowerCase()}`} className="hover:text-[#1825E7] block">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              <details>
                <summary className="cursor-pointer text-lg font-semibold text-gray-800 hover:text-[#1825E7] uppercase">
                  Category
                </summary>
                <ul className="ml-3 mt-2 space-y-3 text-gray-600 text-md">
                  <li><Link to="/national" className="hover:text-[#1825E7] block font-semibold">National</Link></li>
                  <li><Link to="/international" className="hover:text-[#1825E7] block font-semibold">International</Link></li>
                </ul>
              </details>

              <Link to="/about" className="hover:text-[#1825E7] text-lg font-semibold text-gray-800">ABOUT</Link>
              {/* <Link to="/package" className="hover:text-[#1825E7] text-lg font-semibold text-gray-800">PACKAGE</Link> */}
              <Link to="/#" className="hover:text-[#1825E7] font-semibold text-lg text-gray-800">BLOG</Link>
              <Link to="/contact" className="hover:text-[#1825E7] font-semibold text-lg text-gray-800">CONTACT</Link>
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
