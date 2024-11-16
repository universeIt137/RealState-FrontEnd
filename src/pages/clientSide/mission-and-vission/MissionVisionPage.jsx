import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MissionVision = () => {
  // window.scrollTo(0, 0);

  return (
    <>
      <Helmet>
        <title>Amar Thikana | Mission & Vision</title>
      </Helmet>

      <div className='w-11/12 mx-auto'>
        {/* Header */}
        <header className="text-center py-4 mt-20 md:mt-28 md:py-16 bg-[#027F3D] opacity-70 text-white rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
          <h1 className="md:text-4xl  font-bold">Our Mission & Vision</h1>
          <p className="text-[10px] md:text-lg md:mt-2 opacity-75">
            Leading the way in sustainable and community-focused real estate.
          </p>
        </header>

        {/* Mission Section */}
        <section className="bg-[#027F3D] opacity-70 p-3 md:p-12 rounded-lg shadow-lg my-4 md:my-12 transform transition duration-300 hover:scale-105">
          <div>
            <h2 className=" md:text-4xl font-bold text-white text-center  md:mb-4">Our Mission</h2>
          </div>
          <div>
          <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
            At Amar Thikana, our mission is to provide reliable, sustainable, and community-centered real estate solutions.
            We are dedicated to creating spaces where families thrive and businesses grow, building a foundation for future generations.
          </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-[#027F3D] opacity-70 p-3 md:p-12 rounded-lg shadow-lg my-4 md:my-12 transform transition duration-300 hover:scale-105">
          <div className='md:h-24 my-auto ' >
            <h2 className=" md:text-4xl font-bold text-white text-center md:mb-4">Our Vision</h2>
          </div>
          <div className='' >
          <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
            Our vision is to lead the industry in sustainable and innovative real estate development. We aim to transform
            communities by building high-quality, energy-efficient spaces that reflect modern needs and respect our environment.
          </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className=" p-3 md:p-12 rounded-lg shadow-lg my-4 md:my-12">
          <div>
            <h2 className=" md:text-4xl font-bold text-green-600 text-center md:mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#027F3D] opacity-70 p-3 md:p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
              <h3 className="md:text-4xl font-bold text-white md:mb-4">Integrity</h3>
              <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
                We uphold the highest standards of honesty and transparency in all our dealings.
              </p>
            </div>
            <div className="bg-[#027F3D] opacity-70  p-3 md:p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
              <h3 className="md:text-4xl font-bold text-white md:mb-4">Sustainability</h3>
              <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
                We focus on eco-friendly development, respecting the planet in every project we undertake.
              </p>
            </div>
            <div className="bg-[#027F3D] opacity-70 p-3 md:p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
              <h3 className="md:text-4xl font-bold text-white md:mb-4">Community</h3>
              <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
                We build communities, not just structures, and foster relationships that last a lifetime.
              </p>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default MissionVision;
