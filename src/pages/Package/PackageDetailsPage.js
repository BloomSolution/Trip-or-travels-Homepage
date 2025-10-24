import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PackageDetails from "./PackageDetails";

const PackageDetailsPage = () => {
  const navigate = useNavigate();
  const { state: pkg } = useLocation();

  if (!pkg) return <p className="text-center py-10">Package not found.</p>;

  return (
    <div className="min-h-screen bg-gray-50" style={{ paddingTop: "80px" }}>
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <PackageDetails
          packageData={pkg}
          onBack={() => navigate("/package")}
        />
      </div>
    </div>
  );
};

export default PackageDetailsPage;
