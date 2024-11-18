import React from 'react';
import ProjectFeatureImgGallery from './ProjectFeatureImgGallery';
import { Link } from 'react-router-dom';
import ProjectFeatureVideoGallery from './ProjectFeatureVideoGallery';

const ProjectFeaturePage = () => {
  return (
    <div className='w-11/12   mx-auto ' >
      <div className=" rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="text-center -mt-10 lg:-mt-0 p-1   mb-4 lg:mb-8">
          <h1 className="md:text-4xl lg:text-center  text-black font-bold text-justify ">Project Feature</h1>
          <p className=" text-black text-[12px] md:text-2xl mt-1 -mb-5 ">Dhaka-Mawa 300 Feet Road, Amar Thikana, Green City.
          </p>
        </div>
        <h1 className='lg:text-4xl font-bold text-center mb-6 ' >Image Gallery</h1>
        <div className='' >

          <ProjectFeatureImgGallery></ProjectFeatureImgGallery>
        </div>


        {/* Project Details */}
        <div className="bg-white p-2 md:p-6  rounded-lg shadow-md md:mb-8">
          <p className="text-black md:text-lg text-justify text-[10px] mb-1 md:mb-6">
            Green Valley Apartments offers luxurious living spaces with modern amenities and eco-friendly features.
            Located in the heart of Dhaka, this project provides an ideal balance between urban living and serene
            surroundings.
          </p>

          {/* Project Info */}

          {/* Amenities Section */}
          <div className="  md:mb-8">
            <h3 className="md:text-3xl font-bold text-black text-[15px] mb-1 lg:mb-4">Amenities</h3>
            <ul className=" flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 text-black gap-4 ">
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
        <div className="text-center  bg-[url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731834102/jlkm_wjkhfh.jpg')] bg-cover bg-center">
          <button className="md:px-6 px-3 py-2 text-[10px] md:text-[16px] md:py-3 bg-[#027f3d] bg-opacity-70 text-white my-3 font-bold rounded-lg hover:bg-green-600 transition-colors duration-300">
            <Link to={"/booking-form"}>Schedule a Visit</Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProjectFeaturePage;
