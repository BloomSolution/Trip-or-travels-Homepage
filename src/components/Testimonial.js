// import React, { useState } from 'react';
// import './Testimonial.css';
// import { FaQuoteLeft, FaStar } from 'react-icons/fa';

// const Testimonial = () => {
//   const testimonials = [
//     {
//       name: 'Rohit Sharma',
//       role: 'Backpacker, India',
//       rating: 4.8,
//       maxRating: 5,
//       text: `Exploring the mountains of Himachal with this agency was an unforgettable experience. The stay was cozy, the food delicious, and the guides were extremely helpful.`,
//       reviewDate: '04/2024',
//       totalReviews: 1520,
//     },
//     {
//       name: 'Aarav Patel',
//       role: 'Travel Blogger, Mumbai',
//       rating: 4.9,
//       maxRating: 5,
//       text: `From houseboats in Kashmir to the backwaters of Kerala, every moment was curated with perfection. Smooth bookings and excellent support throughout!`,
//       reviewDate: '12/2023',
//       totalReviews: 2100,
//     },
//     {
//       name: 'Meera Iyer',
//       role: 'Adventure Seeker, Bangalore',
//       rating: 4.7,
//       maxRating: 5,
//       text: `I booked a solo trip to Meghalaya and everything was just perfect — transport, safety, and accommodations. Highly recommended for women solo travelers.`,
//       reviewDate: '08/2023',
//       totalReviews: 1780,
//     },
//   ];

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const testimonial = testimonials[currentTestimonial];

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   const renderStars = (rating) => 
//     Array.from({ length: Math.floor(rating) }, (_, i) => <FaStar key={i} className="star-icon" />);

//   return (
//     <section className="testimonial-section">
//       <div className="testimonial-container">
//         <div className="testimonial-right">
//           <p className="testimonial-subtitle">Testimonials</p>
//           <h2 className="testimonial-title">What Our Travelers Say</h2>

//           <div className="testimonial-box">
//             <FaQuoteLeft className="quote-icon" />
//             <p className="testimonial-text">{testimonial.text}</p>

//             <div className="testimonial-footer">
//               <div className="testimonial-author">
//                 <strong>{testimonial.name}</strong>
//                 <span>{testimonial.role}</span>
//               </div>

//               <div className="testimonial-meta">
//                 <div className="stars">
//                   {renderStars(testimonial.rating)}
//                   <span className="rating-text">
//                     {testimonial.rating.toFixed(1)} / {testimonial.maxRating}
//                   </span>
//                 </div>
//                 <p className="review-count">
//                   Reviewed on {testimonial.reviewDate} • {testimonial.totalReviews.toLocaleString()} reviews
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="testimonial-indicators">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
//                 onClick={() => setCurrentTestimonial(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;







import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {

  const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Backpacker, India",
    rating: 4.8,
    maxRating: 5,
    text: `My Himachal trip was simply magical! The stay was warm and comfortable, food exceeded expectations, and the guides were not just helpful but also very knowledgeable about the region.`,
    reviewDate: "04/2024",
    totalReviews: 1520,
  },
  {
    name: "Aarav Patel",
    role: "Travel Blogger, Mumbai",
    rating: 4.9,
    maxRating: 5,
    text: `From the houseboats of Kashmir to the serene backwaters of Kerala, every detail was perfectly planned. The booking process was smooth, and the support team was always available whenever I needed help.`,
    reviewDate: "12/2023",
    totalReviews: 2100,
  },
  {
    name: "Meera Iyer",
    role: "Adventure Seeker, Bangalore",
    rating: 4.7,
    maxRating: 5,
    text: `I traveled solo to Meghalaya, and everything was beyond expectations — safe transport, well-chosen stays, and thoughtful arrangements. I’d highly recommend their services for solo women travelers!`,
    reviewDate: "08/2023",
    totalReviews: 1780,
  },
];


  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) =>
    Array.from({ length: Math.floor(rating) }, (_, i) => (
      <FaStar key={i} className="star-icon" />
    ));

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-right">
          <p className="testimonial-subtitle">Testimonials</p>
          <h2 className="testimonial-title">What Our Travelers Say</h2>

          <div className="testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-box"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">
                  {testimonials[currentTestimonial].text}
                </p>

                <div className="testimonial-footer">
                  <div className="testimonial-author">
                    <strong>{testimonials[currentTestimonial].name}</strong>
                    <span>{testimonials[currentTestimonial].role}</span>
                  </div>

                  <div className="testimonial-meta">
                    <div className="stars">
                      {renderStars(testimonials[currentTestimonial].rating)}
                      <span className="rating-text">
                        {testimonials[currentTestimonial].rating.toFixed(1)} /{" "}
                        {testimonials[currentTestimonial].maxRating}
                      </span>
                    </div>
                    <p className="review-count">
                      Reviewed on {testimonials[currentTestimonial].reviewDate} •{" "}
                      {testimonials[currentTestimonial].totalReviews.toLocaleString()} reviews
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentTestimonial ? "active" : ""
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
