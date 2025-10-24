// // Package Details Component
// import ImageGallery from "./ImageGallery";
// import PackageIncludes from "./PackageIncludes";
// import InclusionsExclusions from "./InclusionsExclusions";
// import SimilarPackages from "./SimilarPackages";

// const PackageDetails = ({ package: pkg, onBack, allPackages }) => {
//   const images = [pkg.image, pkg.image, pkg.image];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 sticky top-0 z-30">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//             <div className="flex items-start gap-2 md:gap-4">
//               <button
//                 onClick={onBack}
//                 className="mt-1 text-gray-600 hover:text-gray-800 flex-shrink-0"
//               >
//                 ← Back
//               </button>
//               <div className="flex-1">
//                 <h1 className="text-base md:text-xl font-bold leading-tight">
//                   {pkg.name}
//                 </h1>
//                 <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 mt-1 flex-wrap">
//                   <span>⭐ {pkg.rating}</span>
//                   <span>|</span>
//                   <span>{pkg.nights}N</span>
//                   <span>|</span>
//                   <span>📍 {pkg.destination}</span>
//                 </div>
//               </div>
//             </div>
//             <div className="text-left lg:text-right bg-gray-50 lg:bg-transparent p-3 lg:p-0 rounded">
//               <div className="text-xs text-gray-500">STARTING FROM</div>
//               <div className="text-xl md:text-2xl font-bold text-red-600">
//                 INR {pkg.price.toLocaleString()}
//               </div>
//               <div className="text-xs text-gray-500 mb-2">PER PERSON</div>
//               <div className="flex gap-2">
//                 <button className="border border-gray-300 px-3 md:px-4 py-1.5 md:py-2 rounded text-xs md:text-sm hover:bg-gray-50 transition-colors">
//                   Send Enquiry
//                 </button>
//                 <button className="bg-red-600 text-white px-3 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm hover:bg-red-700 transition-colors">
//                   Call Direct
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto p-4 md:p-6">
//         <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
//           {/* Main Content */}
//           <div className="flex-1 space-y-4 md:space-y-6">
//             {/* Image Gallery */}
//             <ImageGallery images={images} />

//             {/* Package Includes */}
//             <PackageIncludes package={pkg} />

//             {/* Description */}
//             <div className="bg-white rounded-lg p-4 md:p-6">
//               <h2 className="text-lg md:text-xl font-bold mb-4">
//                 Indulge in Tranquility by the Serene Blue Waters
//               </h2>
//               <p className="text-gray-700 mb-4 text-sm md:text-base">
//                 {pkg.description}
//               </p>
//               <button className="text-blue-600 hover:underline text-sm">
//                 read more
//               </button>
//             </div>

//             {/* Highlights */}
//             <div className="bg-white rounded-lg p-4 md:p-6">
//               <h2 className="text-lg md:text-xl font-bold mb-4">HIGHLIGHTS</h2>
//               {pkg.highlights.map((highlight, index) => (
//                 <p
//                   key={index}
//                   className="text-gray-700 mb-2 text-sm md:text-base"
//                 >
//                   {highlight}
//                 </p>
//               ))}
//               <button className="text-blue-600 hover:underline mt-2 text-sm">
//                 read more
//               </button>
//             </div>

//             {/* Inclusions & Exclusions */}
//             <InclusionsExclusions
//               inclusions={pkg.inclusions}
//               exclusions={pkg.exclusions}
//             />

//             {/* Terms & Conditions */}
//             <div className="bg-white rounded-lg p-4 md:p-6">
//               <h2 className="text-lg md:text-xl font-bold mb-4">
//                 Terms & Conditions
//               </h2>
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-semibold mb-2 text-sm md:text-base">
//                     Booking Terms
//                   </h3>
//                   <ul className="space-y-2 text-xs md:text-sm text-gray-700">
//                     <li>
//                       • The rates and availability is subject to availability at
//                       the time of booking.
//                     </li>
//                     <li>
//                       • Customers are requested to please go through the
//                       inclusions and exclusions clearly.
//                     </li>
//                     <li>
//                       • In case client wishes to prepone/postpone travel dates,
//                       reach us 15 days prior.
//                     </li>
//                     <li>
//                       • Visa approval is solely at the discretion of the
//                       embassy.
//                     </li>
//                   </ul>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2 text-sm md:text-base">
//                     Cancellation Policy
//                   </h3>
//                   <ul className="space-y-2 text-xs md:text-sm text-gray-700">
//                     <li>
//                       • International tours happen on point to point basis.
//                       Adhere to timings strictly.
//                     </li>
//                     <li>
//                       • Tips for drivers and coordinators are not included.
//                     </li>
//                     <li>• Please recheck the Covid Travel regulations.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Similar Packages Sidebar */}
//           <div className="w-full lg:w-80 flex-shrink-0">
//             <div className="lg:sticky lg:top-24">
//               <SimilarPackages
//                 packages={allPackages}
//                 currentPackageId={pkg.id}
//                 mainImage={pkg.image}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PackageDetails;







import { useParams, useNavigate, Links } from "react-router-dom";
import packagesData from "./packagesData";
import ImageGallery from "./ImageGallery";
import PackageIncludes from "./PackageIncludes";
import InclusionsExclusions from "./InclusionsExclusions";
import SimilarPackages from "./SimilarPackages";
import {MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pkg = packagesData.find(p => p.id === Number(id));

  if (!pkg) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Package not found!</p>
      </div>
    );
  }

  const images = [pkg.image, pkg.image, pkg.image];

  return (
    <div className="min-h-screen bg-gray-50" style={{paddingTop:"80px"}}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-start gap-2 md:gap-4">
                <Link to="/package">
              <button
                // onClick={onBack}
                className="mt-1 text-gray-600 hover:text-gray-800 flex-shrink-0"
              >
                ← Back
              </button>
                </Link>
              <div className="flex-1">
                <h1 className="text-base md:text-xl font-bold leading-tight">
                  {pkg.name}
                </h1>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 mt-1 flex-wrap">
                  <span>⭐ {pkg.rating}</span>
                  <span>|</span>
                  <span>{pkg.nights}N</span>
                  <span>|</span>
                  {/* <span>📍 {pkg.destination}</span> */}
                  <span className="flex items-center gap-1 text-gray-700">
                     <MapPinIcon className="text-red-800 w-4 h-4" /> {pkg.destination}
                  </span>

                </div>
              </div>
            </div>
            
            <div className="text-left lg:text-right bg-gray-50 lg:bg-transparent p-3 lg:p-0 rounded flex flex-wrap items-center justify-between gap-6">

                <div>
              <div className="text-xs text-gray-500">STARTING FROM</div>
              <div className="text-xl md:text-2xl font-bold text-red-600">
                INR {pkg.price.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500 mb-2">PER PERSON</div>
              </div>

              <div className="flex gap-2">
                <button className="border border-gray-300 px-3 md:px-4 py-1.5 md:py-2 rounded text-xs md:text-sm hover:bg-gray-50 transition-colors">
                  Send Enquiry
                </button>
                <button className="bg-red-600 text-white px-3 md:px-6 py-1.5 md:py-2 rounded text-xs md:text-sm hover:bg-red-700 transition-colors">
                  Call Direct
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-6 flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="flex-1 space-y-6">
          <ImageGallery images={images} />
          <PackageIncludes package={pkg} />

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Highlights</h2>
            {pkg.highlights?.map((item, i) => (
              <p key={i} className="text-gray-700 mb-2">{item}</p>
            ))}
          </div>

          <InclusionsExclusions
            inclusions={pkg.inclusions}
            exclusions={pkg.exclusions}
          />
        </div>

        {/* Similar Packages Sidebar */}
        {/* <div className="w-full lg:w-80 flex-shrink-0">
          <div className="lg:sticky lg:top-24">
            <SimilarPackages 
              packages={packagesData}
              currentPackageId={pkg.id}
              mainImage={pkg.image}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PackageDetails;
