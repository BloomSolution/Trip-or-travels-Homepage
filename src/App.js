import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop"; // 👈 import
import Home from "./pages/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Privacy from "./pages/Privacy/Privacy";
import Services from "./pages/Service/Service";
import FloatingIcons from "./components/FloatingIcons";
import Test from "./pages/Tour/Test";
import TravelBookingSystem from "./pages/Package/TravelBookingSystem";
import PackageDetailsPage from "./pages/Package/PackageDetailsPage";
import PackageDetails from "./pages/Package/PackageDetails";
import TourDetails from "./pages/Tour/TourDetails";
import TourBookingSystem from "./pages/Tour/TourBookingSystem";
import NationalTours from "./pages/National/NationalTours";
import InternationalTours from "./pages/InterNational/InternationalTours";
import National from "./pages/National/National";
import InterNational from "./pages/InterNational/InterNational";

function AppWrapper() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Navbar />

      {/* 👇 ensures each navigation scrolls to top */}
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Test/>} />
          <Route path="/package" element={<TravelBookingSystem/>} />
          {/* <Route path="/package/:id" element={<PackageDetailsPage />} /> */}
          <Route path="/package/:id" element={<PackageDetails />} />

           {/* <Route path="/international" element={<InternationalTours />} />
          <Route path="/national" element={<NationalTours />} /> */}

          <Route path="/international" element={<InterNational/>} />
          <Route path="/national" element={<National/>} />
          <Route path="/tours/:id" element={<TourDetails />} />


          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <FloatingIcons />
      </AnimatePresence>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
