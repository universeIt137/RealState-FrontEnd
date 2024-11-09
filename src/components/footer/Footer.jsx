import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-5  md:py-10">
      <div className="container mx-auto px-5 md:flex md:justify-between">
        {/* About Company */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">About Company</h2>
          <hr className="w-16 border-green-500 border-t-2 mb-4" />
          <p className="font-bold">Amar Thikana Properties Ltd.</p>
          <p className="flex items-center text-gray-600 mt-3">
            <span className="material-icons text-lg mr-2">Place : </span>
            ৪৮, বিজয় নগর (৪র্থ তলা), পল্টন, ঢাকা-১০০০।
          </p>
          <p className="flex items-center text-gray-600 mt-2">
            <span className="material-icons text-lg mr-2">Phone : </span>
            +88 01747-516981
          </p>
          <p className="flex  items-center text-gray-600 mt-2">
            <span className="material-icons text-lg mr-2">Email :</span>
            amarthikana06@gmail.com
          </p>
        </div>

        {/* Useful Links */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Useful Links</h2>
          <hr className="w-16 border-green-500 border-t-2 mb-4" />
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-green-600">Help</a></li>
            <li><a href="#" className="hover:text-green-600">FAQ</a></li>
            <li><a href="#" className="hover:text-green-600">Contact</a></li>
            <li><a href="#" className="hover:text-green-600">About Company</a></li>
            <li><a href="#" className="hover:text-green-600">Blogs</a></li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Email Subscription</h2>
          <hr className="w-16 border-green-500 border-t-2 mb-4" />
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="example@mail.com"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
          </form>

          {/* Social Media Links */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Connect With Us</h2>
            <div className="flex space-x-4 text-green-500">
              <a href="#" className="text-2xl hover:text-green-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-2xl hover:text-green-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-2xl hover:text-green-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-green-500 text-white text-center py-4 mt-10">
        <p className="text-sm">
          All rights reserved © Universe Soft Tech. | Design & Developed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
