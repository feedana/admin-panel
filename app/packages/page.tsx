import React from "react";

const PackagesPage = () => {
  return (
    <div className="p-8">
      
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Packages & Licensing</h1>
          <p className="text-sm text-gray-500">
            Manage tenant subscription plans.
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-md text-sm font-medium">
          + Create Package
        </button>
      </div>

      
      <div className="flex gap-6">
        
        <div className="bg-white rounded-xl p-6 w-72 border shadow-sm 
          transition-all duration-300 ease-in-out 
          hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              Starter
            </span>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Active
            </span>
          </div>

          <div className="text-3xl font-bold mb-2">₼49</div>

          <p className="text-sm text-gray-500">
            Yearly: ₼490 • Users: 5
          </p>
        </div>

      
        <div className="bg-white rounded-xl p-6 w-72 border shadow-sm 
          transition-all duration-300 ease-in-out 
          hover:-translate-y-2 hover:shadow-lg cursor-pointer">
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              Enterprise
            </span>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Active
            </span>
          </div>

          <div className="text-3xl font-bold mb-2">₼199</div>

          <p className="text-sm text-gray-500">
            Yearly: ₼1990 • Users: 50
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;
