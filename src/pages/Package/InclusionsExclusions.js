// Inclusions Exclusions Component
const InclusionsExclusions = ({ inclusions, exclusions }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <div className="bg-white rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-bold mb-4">Inclusions</h2>
        <ul className="space-y-2">
          {inclusions.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-600 mr-2 flex-shrink-0">•</span>
              <span className="text-gray-700 text-xs md:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-bold mb-4">Exclusions</h2>
        <ul className="space-y-2">
          {exclusions.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-red-600 mr-2 flex-shrink-0">•</span>
              <span className="text-gray-700 text-xs md:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default InclusionsExclusions;