import React from 'react';
import { Helmet } from 'react-helmet-async';

const CompanyProfile = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Amar Thikana | Company Profile</title>
      </Helmet>

      <div className="w-full mx-auto p-4 md:p-12 bg-gray-50">
        {/* Header Section */}
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold text-green-600">Amar Thikana Properties Ltd.</h1>
          <p className="text-lg mt-4 text-gray-700">
            Leading the way in real estate with over 20 years of experience.
          </p>
        </header>

        {/* Company Info Section */}
        <section className="bg-white p-8 rounded-lg shadow-md my-8">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">About Us</h2>
          <p className="text-gray-700 text-center mb-4">
            At Amar Thikana, we provide high-quality real estate services, from property sales and rentals
            to property management. Our mission is to help you find the perfect place to call home, whether
            you’re looking to buy, rent, or invest.
          </p>
        </section>

        {/* Featured Properties Section */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Static Property Card */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-300 rounded-md mb-4">
                <img
                  src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889998/offer-3_zr81a8.png"
                  alt="Property"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold text-green-600 mb-2">Luxurious Apartment</h3>
              <p className="text-gray-600 mb-4">Location: Dhaka, Bangladesh</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-300 rounded-md mb-4">
                <img
                  src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889949/offer-2_s0dp1u.png"
                  alt="Property"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold text-green-600 mb-2">Modern Office Space</h3>
              <p className="text-gray-600 mb-4">Location: Chittagong, Bangladesh</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                View Details
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-300 rounded-md mb-4">
                <img
                  src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889904/offer-1_bajmsf.png"
                  alt="Property"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-bold text-green-600 mb-2">Cozy Family Home</h3>
              <p className="text-gray-600 mb-4">Location: Sylhet, Bangladesh</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white p-8 rounded-lg shadow-md my-12">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Our Services</h2>
          <ul className="text-gray-700">
            <li className="mb-4">🏡 Property Sales and Acquisitions</li>
            <li className="mb-4">🏢 Commercial Leasing</li>
            <li className="mb-4">🛠 Property Management</li>
            <li className="mb-4">📈 Investment Consulting</li>
          </ul>
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-md my-12">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Contact Us</h2>
          <div className="w-full max-w-md mx-auto">
            <form>
              <div className="mb-4">
                <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-green-600 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompanyProfile;
