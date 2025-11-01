import { FaRegMoneyBillAlt, FaShieldAlt, FaCalendarCheck, FaRegClock } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";


const FEATURES = [
  {
    icon: <FaRegMoneyBillAlt className="text-2xl text-gray-600 group-hover:text-white transition" />,
    title: "Affordable Pricing",
    desc: "Enjoy top-tier travel experiences at unbeatable prices without compromising on quality or comfort.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-gray-600 group-hover:text-white transition" />,
    title: "High Security",
    desc: "Travel with confidence knowing that your safety and privacy are our top priorities.",
  },
  {
    icon: <FaCalendarCheck className="text-2xl text-gray-600 group-hover:text-white transition" />,
    title: "Fast Booking",
    desc: "Book your next adventure quickly and effortlessly with our seamless and user-friendly platform.",
  },
  {
    icon: <FaRegClock className="text-2xl text-gray-600 group-hover:text-white transition" />,
    title: "24 Hours Alert",
    desc: "Stay informed and secure with round-the-clock assistance and real-time travel updates.",
  }
];

export default function Why() {
  return (
    <>

    <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl mx-auto py-12 ">

      {/* Left: Features Card */}
      <div className="flex flex-col bg-white   ">
        <div className=" flex">
        <span className="block h-10 w-2 rounded bg-orange-500 mr-2 mb-4"></span>
        <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
        </div>
        <p className="text-gray-600 mb-8 text-xl">
          At Go Pravasa, we’re committed to providing stress-free travel experiences with a focus on comfort, safety, and convenience. Here’s what sets us apart:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className="group border-t border-gray-200 pt-4 pb-6 px-4 cursor-pointer transition duration-200 rounded-xl hover:bg-orange-500 hover:shadow-lg "
            >
              <div className="flex items-center gap-3 mb-2">
                {feature.icon}
                <h3 className="font-bold text-xl text-gray-800 group-hover:text-white transition"
                 style={{ letterSpacing: "1.5px", fontFamily: "'Poppins', sans-serif", }}
                >{feature.title}</h3> 
              </div>
              <hr className="border-t-1 border-black mb-4" />
              <p className="text-gray-500 group-hover:text-white text-md transition">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Video Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[500px] h-[550px] bg-black rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
          <video
            className="object-cover w-full h-full"
            poster="/gallery/gallery-image.jpg"
            controls
            // autoPlay loop muted (add if you want)
          >
            <source src="/gallery/video-1.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          {/* Play Icon Overlay (optional) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* <div className="bg-white/80 hover:bg-orange-500 rounded-full w-14 h-14 flex items-center justify-center transition duration-300">
              <FaPlay className="text-3xl text-orange-500 group-hover:text-white transition" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}