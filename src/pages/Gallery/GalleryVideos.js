// import React, { useState, useRef, useEffect } from "react";
// import "./GalleryVideos.css";

// const GalleryVideos = () => {
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [thumbnails, setThumbnails] = useState({});

//   const videos = [
//     { src: "gallery/video-1.mp4" },
//     { src: "gallery/video-2.mp4" },
//   ];

//   // Generate thumbnail from video
//   const generateThumbnail = (videoSrc, index) => {
//     const video = document.createElement("video");
//     video.src = `${process.env.PUBLIC_URL}/${videoSrc}`;
//     video.crossOrigin = "anonymous";
//     video.currentTime = 2; // capture at 2s mark

//     video.addEventListener("loadeddata", () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = 320;
//       canvas.height = 180;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//       const thumbnail = canvas.toDataURL("image/png");

//       setThumbnails((prev) => ({
//         ...prev,
//         [index]: thumbnail,
//       }));
//     });
//   };

//   useEffect(() => {
//     videos.forEach((v, i) => generateThumbnail(v.src, i));
//   }, []);

//   return (
//     <div className="gallery-wrapper">
//       {/* Heading */}
//       <h2 className="gallery-heading">My Videos</h2>

//       {/* Video Grid */}
//       <div className="gallery-videos">
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             className={`gallery-item effect-${(index % 4) + 1}`}
//             onClick={() =>
//               setSelectedVideo(`${process.env.PUBLIC_URL}/${video.src}`)
//             }
//           >
//             <img
//               src={thumbnails[index] || "https://via.placeholder.com/320x180?text=Loading..."}
//               alt={`Video ${index + 1}`}
//               className="video-thumbnail"
//             />
//             <span className="play-icon">▶</span>
//             <span className="shine"></span>
//           </div>
//         ))}
//       </div>

//       {/* Modal Video Player */}
//       {selectedVideo && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button
//               className="close-btn"
//               onClick={() => setSelectedVideo(null)}
//             >
//               ✖
//             </button>
//             <video
//               src={selectedVideo}
//               className="modal-video"
//               controls
//               autoPlay
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryVideos;


import React, { useState, useEffect } from "react";

const GalleryVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbnails, setThumbnails] = useState({});

  const videos = [
    { src: "gallery/video-1.mp4" },
    { src: "gallery/video-2.mp4" },
  ];

  // Generate thumbnail from video
  const generateThumbnail = (videoSrc, index) => {
    const video = document.createElement("video");
    video.src = `${process.env.PUBLIC_URL}/${videoSrc}`;
    video.crossOrigin = "anonymous";
    video.currentTime = 2;

    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = 320;
      canvas.height = 180;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const thumbnail = canvas.toDataURL("image/png");
      setThumbnails((prev) => ({ ...prev, [index]: thumbnail }));
    });
  };

  useEffect(() => {
    videos.forEach((v, i) => generateThumbnail(v.src, i));
  }, []);

  return (
    <div className="text-center py-10 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-10 text-gray-800 uppercase tracking-wide">
        My <span className="text-sky-600">Videos</span>
      </h2>

      {/* Video Grid */}
      <div
       className="flex flex-wrap justify-center gap-8"
       >
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            onClick={() =>
              setSelectedVideo(`${process.env.PUBLIC_URL}/${video.src}`)
            }
          >
            {/* Thumbnail */}
            <img
              src={
                thumbnails[index] ||
                "https://via.placeholder.com/320x180?text=Loading..."
              }
              alt={`Video ${index + 1}`}
              className="w-full h-52 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl flex items-center justify-center">
              <span className="text-white text-5xl drop-shadow-lg animate-pulse">
                ▶
              </span>
            </div>

            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-sky-400 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Modal Video Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white text-xl rounded-full px-3 py-1 shadow-md transition"
              onClick={() => setSelectedVideo(null)}
            >
              ✖
            </button>

            {/* Video */}
            <video
              src={selectedVideo}
              className="w-full max-h-[80vh] rounded-xl shadow-lg"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryVideos;
