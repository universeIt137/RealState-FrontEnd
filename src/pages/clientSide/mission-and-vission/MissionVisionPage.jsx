import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MissionVision = () => {
  return (
    <>
      <Helmet>
        <title>Amar Thikana | Mission & Vision</title>
      </Helmet>
    
    <div className='w-11/12 mx-auto ' >
    <div className="w-full my-20 md:my-28 bg-gray-50">
        {/* Header */}
        <header className="text-center py-4 md:py-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-lg">
          <h1 className="md:text-4xl font-bold">Our Mission & Vision</h1>
          <p className="md:text-lg text-[11px] mt-1 md:mt-2">Leading the way in sustainable and community-focused real estate.</p>
        </header>

        {/* Mission Section */}
        <section className="bg-white p-4 md:p-8 rounded-lg shadow-md my-4 md:my-8">
          <h2 className="md:text-4xl font-bold text-green-600 text-center mb-2 md:mb-6">Our Mission</h2>
          <p className="text-green-600 text-[10px]  md:text-lg text-center">
            At Amar Thikana, our mission is to provide reliable, sustainable, and community-centered real estate solutions.
            We are dedicated to creating spaces where families thrive and businesses grow, building a foundation for future generations.
          </p>
        </section>

        {/* Vision Section */}
        <section className="bg-white p-4 md:p-8 rounded-lg shadow-md my-4 md:my-8">
          <h2 className="md:text-4xl font-bold text-green-600 mb-2 text-center md:mb-6">Our Vision</h2>
          <p className="text-green-600 text-[9px] md:text-lg text-center">
            Our vision is to lead the industry in sustainable and innovative real estate development. We aim to transform
            communities by building high-quality, energy-efficient spaces that reflect modern needs and respect our environment.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="bg-gray-100 p-4 md:p-8 rounded-lg shadow-md my-4 md:my-8">
          <h2 className="md:text-4xl font-bold text-green-600 text-center mb-3 md:mb-6">Our Core Values</h2>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 text-center">
              <h3 className="md:text-4xl font-bold text-green-600 mb-2 md:mb-4">Integrity</h3>
              <p className="text-green-600 md:text-[16px] text-[9px] ">
                We uphold the highest standards of honesty and transparency in all our dealings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 text-center">
              <h3 className="md:text-4xl font-bold text-green-600 mb-2 md:mb-4">Sustainability</h3>
              <p className="text-green-600 md:text-[16px] text-[9px] ">
                We focus on eco-friendly development, respecting the planet in every project we undertake.
              </p>
            </div>
            <div className="bg-white p-3 md:p-6 rounded-lg shadow-lg flex-1 text-center">
              <h3 className="md:text-4xl font-bold text-green-600 mb-2 md:mb-4">Community</h3>
              <p className="text-green-600 md:text-[16px] text-[9px]">
                We build communities, not just structures, and foster relationships that last a lifetime.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white p-4 md:p-8 rounded-lg shadow-md my-4 md:my-8 text-center">
          <h2 className="md:text-4xl font-bold text-green-600 mb-3 md:mb-6">Get in Touch</h2>
          <p className="text-green-600 mb-2 md:text-[16px] text-[9px] md:mb-4">
            Want to learn more about our mission and vision? Reach out to us!
          </p>
          <button className="bg-green-500 text-white font-bold py-1 md:py-2 px-3 text-[12px] md:text-xl md:px-6 rounded-md hover:bg-green-600">
            <Link to="/contact-us">Contact Us</Link>
          </button>
        </section>
      </div>
    </div>
      
    </>
  );
};

export default MissionVision;
