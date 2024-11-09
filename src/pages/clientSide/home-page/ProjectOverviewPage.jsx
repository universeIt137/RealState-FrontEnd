import React from 'react';

const ProjectOverviewPage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-gray-100 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-600">Amar Thikana Apartments</h1>
        <p className="text-lg text-gray-700 mt-2">Prime Location in Dhaka, Bangladesh</p>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Property"
          className="w-full h-48 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
        />
        <img
          src="https://via.placeholder.com/300x200"
          alt="Property"
          className="w-full h-48 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
        />
        <img
          src="https://via.placeholder.com/300x200"
          alt="Property"
          className="w-full h-48 object-cover rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-6">
          Green Valley Apartments offers luxurious living spaces with modern amenities and eco-friendly features.
          Located in the heart of Dhaka, this project provides an ideal balance between urban living and serene
          surroundings.
        </p>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md">
            <span className="text-gray-600 font-semibold">Price Range</span>
            <span className="text-green-600 font-bold">$50,000 - $200,000</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md">
            <span className="text-gray-600 font-semibold">Area</span>
            <span className="text-green-600 font-bold">1,200 - 3,500 sq. ft.</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md">
            <span className="text-gray-600 font-semibold">Bedrooms</span>
            <span className="text-green-600 font-bold">2 - 4</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-md">
            <span className="text-gray-600 font-semibold">Bathrooms</span>
            <span className="text-green-600 font-bold">2 - 3</span>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-600 mb-4">Amenities</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Swimming Pool</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Gym & Fitness Center</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>24/7 Security</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Parking Facility</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Playground</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Community Hall</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors duration-300">
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverviewPage;
