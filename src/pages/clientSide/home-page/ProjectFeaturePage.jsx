import React from 'react';
import ProjectFeatureImgGallery from './ProjectFeatureImgGallery';
import { Link } from 'react-router-dom';
import ProjectFeatureVideoGallery from './ProjectFeatureVideoGallery';

const ProjectFeaturePage = () => {
  return (
    <div className='w-11/12 mx-auto ' >
      <div className="p-4 md:p-12 bg-gray-100 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="text-center mb-4 md:mb-8">
          <h1 className="md:text-4xl text-[#21c45e] font-bold ">Explore stunning properties, find your dream home, and invest wisely</h1>
          <p className=" text-[#21c45e] text-[12px] md:text-2xl mt-2">48, Bijoy Nagar (4th Floor), Paltan, Dhaka-1000.</p>
        </div>

        <div className='' >
          <ProjectFeatureImgGallery></ProjectFeatureImgGallery>
        </div>


        {/* Project Details */}
        <div className="bg-white p-2 md:p-6 rounded-lg shadow-md md:mb-8">
          <h2 className="md:text-2xl text-[15px] font-bold text-[#21c45e] md:mb-4">Project Feature</h2>
          <p className="text-[#21c45e] md:text-lg text-[10px] mb-2 md:mb-6">
            Green Valley Apartments offers luxurious living spaces with modern amenities and eco-friendly features.
            Located in the heart of Dhaka, this project provides an ideal balance between urban living and serene
            surroundings.
          </p>

          {/* Project Info */}


          {/* Amenities Section */}
          <div className="md:mb-8">
            <h3 className="md:text-3xl font-bold text-[#21c45e] text-[15px] mb-4">Amenities</h3>
            <ul className=" flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 text-[#21c45e] gap-4 ">
              <li className="flex items-center shadow-lg border border-gray-300 p-2 md:p-4 rounded-lg space-x-1 md:space-x-2">
                <span className='md:ml-0 ml-2 text-[10px] md:text-[16px] ' >✅</span>
                <span className='text-[10px] md:text-[16px] ' >Swimming Pool</span>
              </li>
              <li className="flex items-center shadow-lg border border-gray-300 p-2 md:p-4 rounded-lg space-x-2">
                <span className='text-[10px] md:text-[16px] md:ml-0 ml-2 ' >✅</span>
                <span className='text-[10px] md:text-[16px] ' >Gym & Fitness Center</span>
              </li>
              <li className="flex items-center shadow-lg border border-gray-300 p-2 md:p-4 rounded-lg space-x-2">
                <span className='text-[10px] md:text-[16px] md:ml-0 ml-2 ' >✅</span>
                <span className='text-[10px] md:text-[16px]' >24/7 Security</span>
              </li>
              <li className="flex items-center shadow-lg border border-gray-300 p-2 md:p-4 rounded-lg space-x-2">
                <span className='text-[10px] md:text-[16px] md:ml-0 ml-2 ' >✅</span>
                <span className='text-[10px] md:text-[16px]' >Parking Facility</span>
              </li>
              <li className="flex items-center shadow-lg border border-gray-300 p-2 md:p-4 rounded-lg space-x-2">
                <span className='text-[10px] md:text-[16px] md:ml-0 ml-2 ' >✅</span>
                <span className='text-[10px] md:text-[16px]' >Playground</span>
              </li>
              <li className="flex items-center shadow-lg border border-gray-300 p-2 md:p-4 rounded-lg space-x-2">
                <span className='text-[10px] md:text-[16px] md:ml-0 ml-2 ' >✅</span>
                <span className='text-[10px] md:text-[16px]' >Community Hall</span>
              </li>
            </ul>
          </div>
        </div>
        {/* video gallery */}
        <ProjectFeatureVideoGallery></ProjectFeatureVideoGallery>
        {/* CTA Button */}
        <div className="text-center">
          <button className="md:px-6 px-3 py-2 text-[10px] md:text-[16px] md:py-3 bg-[#21c45e] text-white my-3 font-bold rounded-lg hover:bg-green-600 transition-colors duration-300">
            <Link to={"/booking-form"}>Schedule a Visit</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFeaturePage;
