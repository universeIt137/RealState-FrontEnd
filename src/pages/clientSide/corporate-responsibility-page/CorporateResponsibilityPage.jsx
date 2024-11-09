import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CSRPage = () => {
  return (
    <>
      <Helmet>
        <title>Amar Thikana | Corporate Social Responsibility</title>
      </Helmet>

      <div className="w-11/12 mx-auto my-20 md:my-28">
        
        {/* Header Section */}
        <header className="bg-[#21c45e] text-white rounded-lg shadow-lg p-4 md:p-8 text-center mb-2 md:mb-10">
          <h1 className="md:text-4xl font-bold md:mb-2">Our Commitment to Corporate Social Responsibility</h1>
          <p className="md:text-lg text-[9px] mt-1 md:mt-2">
            At Amar Thikana, we believe in building not just homes, but also a better future for our communities and our planet.
          </p>
        </header>
        
        {/* CSR Initiatives Section */}
        <section className="bg-gray-100 rounded-lg shadow-lg p-4 mt-6 md:p-8 mb-5 md:mb-10">
          <h2 className="md:text-4xl font-bold text-green-600 text-center mb-3 md:mb-6">Our CSR Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Initiative 1 */}
            <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <p className="text-white text-center text-[9px] md:text-[16px] md:mb-4">
                <div className='h-24 my-auto ' >
                    <h3 className="md:text-xl lg:text-2xl text-center font-bold text-white md:mb-4">Affordable Housing</h3>
                </div>
                We are committed to making housing accessible to everyone. Our affordable housing projects aim to provide quality living spaces to underserved communities.
              </p>
              <Link to={""} className=" text-[9px] md:text-[16px] text-white text-center block font-semibold hover:underline">Learn More</Link>
            </div>

            {/* Initiative 2 */}
            <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
                <div className='h-24 my-auto ' >
                    <h3 className="md:text-xl lg:text-2xl text-center font-bold text-white md:mb-4">Environmental Sustainability</h3>
                </div>
              <p className="text-white text-center text-[9px] md:text-[16px] md:mb-4">
                Our green building practices focus on reducing environmental impact, from energy-efficient designs to waste management.
              </p>
              <Link to={""} className=" text-[9px] md:text-[16px] text-white text-center block font-semibold hover:underline">Learn More</Link>
            </div>

            {/* Initiative 3 */}
            <div className="bg-[#21c45e] p-3 md:p-6  rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="md:text-xl lg:text-2xl text-center font-bold text-white md:mb-4">Community Development</h3>
              <p className="text-white text-center text-[9px] md:text-[16px] md:mb-4">
                We partner with local organizations to support education, healthcare, and economic development in the communities we serve.
              </p>
              <Link to={""} className=" text-[9px] md:text-[16px] text-white text-center block font-semibold hover:underline">Learn More</Link>
            </div>

            {/* Additional Initiatives */}
          </div>
        </section>

        {/* Sustainability Practices Section */}
        <section className="bg-white rounded-lg shadow-lg p-4 md:p-8 mb-5 md:mb-10">
          <h2 className="md:text-4xl font-bold text-[#21c45e] text-center md:mb-6">Sustainability Practices</h2>
          <p className="text-[#21c45e] text-[10px] md:text-[16px] text-center mb-4 md:mb-8">
            At Amar Thikana, sustainability is at the core of our operations. From construction materials to energy use, we strive to minimize our carbon footprint.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Practice 1 */}
            <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="md:text-2xl text-center font-bold text-white md:mb-4">Eco-Friendly Materials</h3>
              <p className="text-white md:text-[16px] text-[10px] text-center ">
                We use recycled and eco-friendly materials in our projects, reducing waste and promoting sustainable construction.
              </p>
            </div>

            {/* Practice 2 */}
            <div className="bg-[#21c45e] p-3 md:p-6 text-center rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="md:text-2xl text-center font-bold text-white md:mb-4">Renewable Energy</h3>
              <p className="text-white md:text-[16px] text-[10px] text-center ">
                Our buildings are designed to incorporate renewable energy sources, reducing reliance on non-renewable resources.
              </p>
            </div>

            {/* Practice 3 */}
            <div className="bg-[#21c45e] p-3 md:p-6 text-center rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="md:text-2xl text-center font-bold text-white md:mb-4">Water Conservation</h3>
              <p className="text-white md:text-[16px] text-[10px] text-center ">
                We employ water-saving technologies to conserve water in our projects, helping to address local water scarcity.
              </p>
            </div>
          </div>
        </section>

        {/* Community Engagement Section */}
        <section className="bg-gray-100 rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Community Engagement</h2>
          <p className="text-gray-700 text-center mb-8">
            We believe in giving back to our communities. Our engagement programs focus on supporting local businesses and fostering economic growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-80 transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-green-600 mb-4">Volunteering Programs</h3>
              <p className="text-gray-700">
                Our team regularly volunteers in community projects, working alongside residents to improve neighborhoods and build strong connections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-80 transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-green-600 mb-4">Local Partnerships</h3>
              <p className="text-gray-700">
                By partnering with local businesses, we aim to support economic development and provide resources for community growth.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-green-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
          <p className="text-lg mb-6">
            Join us in our mission to create sustainable and positive change. Discover more ways to support our CSR initiatives or partner with us to make a difference.
          </p>
          <button className="bg-white text-green-600 font-bold py-2 px-6 rounded-md hover:bg-gray-100 transition duration-300">
            Learn More
          </button>
        </section>
      </div>
    </>
  );
};

export default CSRPage;
