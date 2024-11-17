import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#027F3D] bg-opacity-70  lg:py-8 p-4 ">
      <div className="w-11/12 mx-auto text-white">
        
        {/* Top Section: About, Useful Links, Subscription */}
        <div className="flex flex-col lg:gap-8 lg:flex-row lg:justify-between lg:items-start">
          
          {/* About Company */}
          <div className="lg:w-1/3">
            <h2 className=" lg:text-2xl  font-bold">About Company</h2>
            <hr className="w-16 border-white border-t-2 lg:mb-4 mb-2 " />
            <p className="font-bold lg:text-lg">Amar Thikana Properties Ltd.</p>
            <p className="text-[9px] lg:text-lg mt-1 lg:mt-2">Place: ৪৮, বিজয় নগর (৪র্থ তলা), পল্টন, ঢাকা-১০০০।</p>
            <p className="text-[9px] lg:text-lg mt-1 lg:mt-2">Phone: +88 01747-516981</p>
            <p className="text-[9px] lg:text-lg mt-1 lg:mt-2">Email: amarthikana06@gmail.com</p>
          </div>

          {/* Useful Links */}
          <div className="lg:w-1/3">
            <h2 className="lg:text-2xl mt-2 lg:mt-0  font-bold">Useful Links</h2>
            <hr className="w-16 border-white border-t-2 lg:mb-4 mb-1 " />
            <ul className="lg:space-y-2 -space-y-1 ">
              {['Help', 'FAQ', 'Contact', 'About Company', 'Blogs'].map((linkText, index) => (
                <li key={index}>
                  <Link
                    to=""
                    className="text-[10px] lg:text-lg hover:text-black hover:underline transform transition duration-300 hover:scale-105"
                  >
                    {linkText}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Subscription */}
          <div className="lg:w-1/3">
            <h2 className="lg:text-2xl mt-2 lg:mt-0  font-bold">Email Subscription</h2>
            <hr className="w-16 border-white border-t-2 mb-2 lg:mb-4" />
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="example@mail.com"
                className="lg:w-full p-1 lg:p-2 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-white text-[#21c45e] px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Submit
              </button>
            </form>

            {/* Social Media Links */}
            <div className="lg:mt-6 mt-2 ">
              <h2 className="lg:text-xl font-semibold mb-2">Connect With Us</h2>
              <div className="flex space-x-2 lg:space-x-4">
                {[FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                  <Link key={index} to="" className="lg:p-2 p-1 border rounded-full shadow-lg">
                    <Icon className="text-lg" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-green-500 text-white text-center lg:py-4 lg:mt-8 mt-3 ">
        <p className="lg:text-lg text-[12px] ">
          All rights reserved © Universe Soft Tech. | Design & Developed
        </p>
      </div>
    </footer>
  );
};

export default Footer;
