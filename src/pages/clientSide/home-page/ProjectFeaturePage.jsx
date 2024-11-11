import React from 'react';
import ProjectFeatureImgGallery from './ProjectFeatureImgGallery';

const ProjectFeaturePage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 md:p-12 bg-gray-100 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl text-[#21c45e] font-bold text-green-600">Explore stunning properties, find your dream home, and invest wisely</h1>
        <p className=" text-[#21c45e] text-2xl mt-2">48, Bijoy Nagar (4th Floor), Paltan, Dhaka-1000.</p>
      </div>

      <div className='' >
        <ProjectFeatureImgGallery></ProjectFeatureImgGallery>
      </div>


      {/* Project Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-[#21c45e] mb-4">Project Feature</h2>
        <p className="text-gray-700 mb-6">
          Green Valley Apartments offers luxurious living spaces with modern amenities and eco-friendly features.
          Located in the heart of Dhaka, this project provides an ideal balance between urban living and serene
          surroundings.
        </p>

        {/* Project Info */}


        {/* Amenities Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-green-600 mb-4">Amenities</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <li className="flex items-center shadow-lg border border-gray-300 p-4 rounded-lg space-x-2">
              <span>✅</span>
              <span>Swimming Pool</span>
            </li>
            <li className="flex items-center shadow-lg border border-gray-300 p-4 rounded-lg space-x-2">
              <span>✅</span>
              <span>Gym & Fitness Center</span>
            </li>
            <li className="flex items-center shadow-lg border border-gray-300 p-4 rounded-lg space-x-2">
              <span>✅</span>
              <span>24/7 Security</span>
            </li>
            <li className="flex items-center shadow-lg border border-gray-300 p-4 rounded-lg space-x-2">
              <span>✅</span>
              <span>Parking Facility</span>
            </li>
            <li className="flex items-center shadow-lg border border-gray-300 p-4 rounded-lg space-x-2">
              <span>✅</span>
              <span>Playground</span>
            </li>
            <li className="flex items-center shadow-lg border border-gray-300 p-4 rounded-lg space-x-2">
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

export default ProjectFeaturePage;
