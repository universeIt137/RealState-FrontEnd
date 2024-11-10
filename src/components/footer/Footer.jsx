import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#21c45e] py-8">
      <div className="w-11/12 mx-auto text-white">
        
        {/* Top Section: About, Useful Links, Subscription */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
          
          {/* About Company */}
          <div className="md:w-1/3">
            <h2 className="text-xl md:text-2xl font-semibold">About Company</h2>
            <hr className="w-16 border-white border-t-2 mb-4" />
            <p className="font-bold text-lg">Amar Thikana Properties Ltd.</p>
            <p className="text-sm md:text-lg mt-2">Place: ৪৮, বিজয় নগর (৪র্থ তলা), পল্টন, ঢাকা-১০০০।</p>
            <p className="text-sm md:text-lg mt-2">Phone: +88 01747-516981</p>
            <p className="text-sm md:text-lg mt-2">Email: amarthikana06@gmail.com</p>
          </div>

          {/* Useful Links */}
          <div className="md:w-1/3">
            <h2 className="text-xl md:text-2xl font-semibold">Useful Links</h2>
            <hr className="w-16 border-white border-t-2 mb-4" />
            <ul className="space-y-2">
              {['Help', 'FAQ', 'Contact', 'About Company', 'Blogs'].map((linkText, index) => (
                <li key={index}>
                  <Link
                    to=""
                    className="text-sm md:text-lg hover:text-black hover:underline transform transition duration-300 hover:scale-105"
                  >
                    {linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Subscription */}
          <div className="md:w-1/3">
            <h2 className="text-xl md:text-2xl font-semibold">Email Subscription</h2>
            <hr className="w-16 border-white border-t-2 mb-4" />
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full p-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-white text-[#21c45e] px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Submit
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Connect With Us</h2>
              <div className="flex space-x-4">
                {[FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                  <Link key={index} to="" className="p-2 border rounded-full shadow-md">
                    <Icon className="text-lg" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-green-500 text-white text-center py-4 mt-8">
        <p className="text-sm">
          All rights reserved © Universe Soft Tech. | Design & Developed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
