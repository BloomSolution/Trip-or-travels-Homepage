// import React, { useState } from 'react';
// import './GalleryImages.css';

// const GalleryImages = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     'gallery/img1.png',
//     'gallery/img2.jpeg',
//     'gallery/img3.jpeg',
//     'gallery/img4.jpg',
//     'gallery/img5.jpg',
//     'gallery/img6.jpg',
//     'gallery/img7.jpg',
//     'gallery/img8.webp',
//   ];

//   return (
//     <div className="gallery-wrapper">
//       {/* Heading */}
//       <h2 className="gallery-heading">My Gallery</h2>

//       {/* Gallery Grid */}
//       <div className="gallery-images">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className={`gallery-item effect-${(index % 4) + 1}`} // cycle through 4 effects
//             onClick={() => setSelectedImage(`${process.env.PUBLIC_URL}/${src}`)}
//           >
//             <img
//               src={`${process.env.PUBLIC_URL}/${src}`}
//               alt={`Gallery ${index + 1}`}
//             />
//             {/* ✨ Shine effect overlay */}
//             <span className="shine"></span>
//           </div>
//         ))}
//       </div>

//       {/* Modal View */}
//       {selectedImage && (
//         <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button
//               className="close-btn"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✖
//             </button>
//             <img src={selectedImage} alt="Selected" className="modal-image" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryImages;


import React, { useState, useEffect } from "react";

const GalleryImages = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const images = [
    "gallery/img1.png",
    "gallery/img2.jpeg",
    "gallery/img3.jpeg",
    "gallery/img4.jpg",
    "gallery/img5.jpg",
    "gallery/img6.jpg",
    "gallery/img7.jpg",
    "gallery/img8.webp",
  ];

  const handleNext = () => setSelectedIdx((p) => (p + 1) % images.length);
  const handlePrev = () => setSelectedIdx((p) => (p - 1 + images.length) % images.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIdx !== null) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "Escape") setSelectedIdx(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIdx]);

  return (
    <div className="text-center mx-auto my-10 px-4 max-w-6xl">
      {/* <h2 className="text-3xl font-bold mb-8 text-gray-800 uppercase tracking-wide">
        My Gallery
      </h2> */}
       {/* Heading */}
      <h2 className="text-3xl font-bold mb-10 text-gray-800 uppercase tracking-wide">
        My <span className="text-sky-600">Gallery</span>
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full max-w-xs overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => setSelectedIdx(index)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/${src}`}
              alt={`Gallery ${index + 1}`}
              className="w-full h-56 object-cover rounded-xl transition-transform duration-500 hover:scale-110"
            />
            {/* Shine effect */}
            <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] hover:animate-[shine_1s_forwards]"></span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-4 -right-4 bg-white text-gray-800 text-2xl rounded-full px-3 py-1 shadow-md hover:bg-gray-200"
              onClick={() => setSelectedIdx(null)}
            >
              ✖
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 bg-white/80 text-gray-800 text-3xl px-3 py-1 rounded-full shadow-md hover:bg-sky-500 hover:text-white transition"
            >
              ❮
            </button>

            {/* Image */}
            <img
              src={`${process.env.PUBLIC_URL}/${images[selectedIdx]}`}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-xl shadow-lg transition-all duration-500"
            />

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 bg-white/80 text-gray-800 text-3xl px-3 py-1 rounded-full shadow-md hover:bg-sky-500 hover:text-white transition"
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;



// import React, { useState, useEffect } from "react";

// const images = [
//   "gallery/img1.png",
//   "gallery/img2.jpeg",
//   "gallery/img3.jpeg",
//   "gallery/img4.jpg",
//   "gallery/img5.jpg",
//   "gallery/img6.jpg",
//   "gallery/img7.jpg",
//   "gallery/img8.webp",
// ];

// export default function PremiumGallery() {
//   const [selectedIdx, setSelectedIdx] = useState(null);

//   useEffect(() => {
//     if (selectedIdx === null) return;
//     const handleKey = (e) => {
//       if (e.key === "Escape") setSelectedIdx(null);
//       if (e.key === "ArrowRight")
//         setSelectedIdx((i) => (i === images.length - 1 ? 0 : i + 1));
//       if (e.key === "ArrowLeft")
//         setSelectedIdx((i) => (i === 0 ? images.length - 1 : i - 1));
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [selectedIdx]);

//   return (
//     <div className="text-center mx-auto max-w-7xl px-5 py-12 ">
//       <h2 className="text-4xl font-bold text-white uppercase mb-10 tracking-wide drop-shadow-[0_2px_8px_rgba(0,8,89,0.3)]">
//         My Gallery
//       </h2>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {images.map((src, idx) => (
//           <div
//             key={idx}
//             className="relative group cursor-pointer rounded-xl overflow-hidden bg-[#00085999] shadow-[0_4px_18px_rgba(0,8,89,0.08),0_2px_32px_#00085977] transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
//             onClick={() => setSelectedIdx(idx)}
//           >
//             <img
//               src={`${process.env.PUBLIC_URL}/${src}`}
//               alt={`Gallery ${idx + 1}`}
//               className="w-full h-60 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-1.5deg] brightness-[0.98] contrast-[1.18]"
//             />
//             <div className="absolute inset-0 bg-gradient-to-tr from-[#00c3ff36] to-[#000859aa] opacity-80 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
//             <div className="absolute left-[-80%] top-0 w-1/2 h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.1s_forwards]"></div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedIdx !== null && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-8 animate-fadeIn"
//           onClick={() => setSelectedIdx(null)}
//         >
//           <div
//             className="relative flex items-center justify-center max-w-[95vw] max-h-[90vh]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedIdx(null)}
//               className="absolute -top-8 -right-6 bg-white text-[#000859] rounded-full w-11 h-11 shadow-lg hover:bg-[#00c3ff] hover:text-white text-2xl font-bold transition"
//             >
//               ✖
//             </button>

//             <button
//               onClick={() =>
//                 setSelectedIdx(selectedIdx === 0 ? images.length - 1 : selectedIdx - 1)
//               }
//               className="absolute left-[-60px] bg-white text-[#000859] rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-md opacity-80 hover:bg-[#00c3ff] hover:text-white transition"
//             >
//               ⟨
//             </button>

//             <img
//               src={`${process.env.PUBLIC_URL}/${images[selectedIdx]}`}
//               alt="Selected"
//               className="max-w-[80vw] max-h-[80vh] rounded-2xl shadow-[0_8px_36px_#000859dd,0_2px_38px_#00c3ff99] bg-white"
//             />

//             <button
//               onClick={() =>
//                 setSelectedIdx(selectedIdx === images.length - 1 ? 0 : selectedIdx + 1)
//               }
//               className="absolute right-[-60px] bg-white text-[#000859] rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-md opacity-80 hover:bg-[#00c3ff] hover:text-white transition"
//             >
//               ⟩
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";

// const images = [
//   "gallery/img1.png",
//   "gallery/img2.jpeg",
//   "gallery/img3.jpeg",
//   "gallery/img4.jpg",
//   "gallery/img5.jpg",
//   "gallery/img6.jpg",
//   "gallery/img7.jpg",
//   "gallery/img8.webp",
// ];

// export default function PremiumGallery() {
//   const [selectedIdx, setSelectedIdx] = useState(null);

//   useEffect(() => {
//     if (selectedIdx === null) return;
//     const handleKey = (e) => {
//       if (e.key === "Escape") setSelectedIdx(null);
//       if (e.key === "ArrowRight")
//         setSelectedIdx((i) => (i === images.length - 1 ? 0 : i + 1));
//       if (e.key === "ArrowLeft")
//         setSelectedIdx((i) => (i === 0 ? images.length - 1 : i - 1));
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [selectedIdx]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] via-white to-[#eaf6ff] py-16 px-6 text-center">
//       <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 mb-12 drop-shadow-[0_0_12px_rgba(0,180,255,0.2)]">
//         Premium Gallery
//       </h2>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {images.map((src, idx) => (
//           <div
//             key={idx}
//             onClick={() => setSelectedIdx(idx)}
//             className="relative cursor-pointer rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-sky-100 shadow-[0_6px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_35px_rgba(0,180,255,0.25)] hover:border-sky-300 transition-all duration-500 group"
//           >
//             <img
//               src={`${process.env.PUBLIC_URL}/${src}`}
//               alt={`Gallery ${idx + 1}`}
//               className="w-full h-64 object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-[-1.5deg]"
//             />
//             {/* Shine Line */}
//             <div className="absolute left-[-80%] top-0 w-2/4 h-full bg-gradient-to-tr from-transparent via-white/60 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.2s_ease-in-out_forwards]"></div>
//             {/* Overlay Gradient */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#ffffffbb] via-transparent to-[#e0f6ff44] opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedIdx !== null && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md p-6 animate-fadeIn"
//           onClick={() => setSelectedIdx(null)}
//         >
//           <div
//             onClick={(e) => e.stopPropagation()}
//             className="relative flex items-center justify-center max-w-[95vw] max-h-[90vh]"
//           >
//             {/* Close */}
//             <button
//               onClick={() => setSelectedIdx(null)}
//               className="absolute -top-8 -right-6 bg-white text-sky-700 rounded-full w-11 h-11 shadow-lg hover:bg-sky-500 hover:text-white text-2xl font-bold transition"
//             >
//               ✖
//             </button>

//             {/* Prev */}
//             <button
//               onClick={() =>
//                 setSelectedIdx(selectedIdx === 0 ? images.length - 1 : selectedIdx - 1)
//               }
//               className="absolute left-[-60px] bg-white text-sky-700 rounded-full w-11 h-11 flex items-center justify-center text-xl shadow-md opacity-80 hover:bg-sky-500 hover:text-white transition"
//             >
//               ⟨
//             </button>

//             {/* Image */}
//             <img
//               src={`${process.env.PUBLIC_URL}/${images[selectedIdx]}`}
//               alt="Selected"
//               className="max-w-[80vw] max-h-[80vh] rounded-2xl shadow-[0_8px_40px_rgba(0,180,255,0.3)] border border-sky-100 transition-transform duration-500 hover:scale-[1.02] bg-white"
//             />

//             {/* Next */}
//             <button
//               onClick={() =>
//                 setSelectedIdx(selectedIdx === images.length - 1 ? 0 : selectedIdx + 1)
//               }
//               className="absolute right-[-60px] bg-white text-sky-700 rounded-full w-11 h-11 flex items-center justify-center text-xl shadow-md opacity-80 hover:bg-sky-500 hover:text-white transition"
//             >
//               ⟩
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



