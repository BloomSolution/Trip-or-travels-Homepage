
// Package Includes Component
import { Bed, Car } from 'lucide-react';

const PackageIncludes = ({ package: pkg }) => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4">Package Includes</h2>
      <div className="flex gap-4 md:gap-8 flex-wrap justify-center md:justify-start">
        <div className="flex flex-col items-center">
          <Bed className="w-10 h-10 md:w-12 md:h-12 mb-2 text-gray-700" />
          <span className="text-sm">Hotels</span>
        </div>
        <div className="flex flex-col items-center">
          <Car className="w-10 h-10 md:w-12 md:h-12 mb-2 text-gray-700" />
          <span className="text-sm">Transfer</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 mb-2 flex items-center justify-center text-xl md:text-2xl">📋</div>
          <span className="text-sm text-center">Terms & conditions</span>
        </div>
      </div>

      {/* Location Details Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-teal-700 text-white">
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">LOCATION</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">HOTEL NAME</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">ROOM CATEGORY</th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm">MEAL PLAN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2 text-sm">{pkg.location}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm">{pkg.hotelName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm">{pkg.roomCategory}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm">{pkg.mealPlan}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PackageIncludes;