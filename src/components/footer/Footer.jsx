import React from 'react';
import { FaFacebook, FaLinkedinIn, FaStaylinked, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#21c45e] py-5 md:py-10">
      <div className='w-11/12 mx-auto text-white'>
        <div className="flex flex-col gap-2 md:gap-5 md:flex-row md:justify-between md:items-center ">
          {/* About Company */}
          <div className="md:mb-4">
            <h2 className="md:text-2xl font-semibold md:mb-2 ">About Company</h2>
            <hr className="w-16 border-white border-t-2 mb-3 md:mb-4" />
            <p className="font-bold md:text-2xl  ">Amar Thikana Properties Ltd.</p>
            <p className="flex items-center mt-1 md:mt-3">
              
              <p className='text-[14px] md:text-lg '   >Place : ৪৮, বিজয় নগর (৪র্থ তলা), পল্টন, ঢাকা-১০০০।</p>
            </p>
            <p className="flex items-center md:mt-2">
              <span className=" text-[14px] md:text-lg mr-2">Phone : </span>
              +88 01747-516981
            </p>
            <p className="flex items-center md:mt-2">
              <span className="text-[14px] md:text-lg mr-2">Email :</span>
              amarthikana06@gmail.com
            </p>
          </div>

          {/* Useful Links */}
          <div className="md:mb-8 md:mt-0 mt-4 ">
            <h2 className="md:text-2xl font-semibold md:mb-2 ">Useful Links</h2>
            <hr className="w-16 border-white border-t-2 mb-2 md:mb-4" />
            <ul className="md:space-y-2">
              <li>
                <Link
                  to={""}
                  className="hover:text-black md:text-[16px] text-[12px] hover:underline hover:underline-offset-4 transform transition duration-300 hover:scale-105"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="hover:text-black  md:text-[16px] text-[12px] hover:underline hover:underline-offset-4 transform transition duration-300 hover:scale-105"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="hover:text-black md:text-[16px] text-[12px] hover:underline hover:underline-offset-4 transform transition duration-300 hover:scale-105"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="hover:text-black md:text-[16px] text-[12px] hover:underline hover:underline-offset-4 transform transition duration-300 hover:scale-105"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="hover:text-black md:text-[16px] text-[12px] hover:underline hover:underline-offset-4 transform transition duration-300 hover:scale-105"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div>
            <h2 className="md:text-2xl font-semibold md:mb-2 ">Email Subscription</h2>
            <hr className="w-16 border-white border-t-2 mb-2 md:mb-4" />
            <form className="flex  flex-row gap-2">
              <input
                type="email"
                placeholder="example@mail.com"
                className="md:p-2 p-1 border bo rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className=" bg-white text-[#21c45e] px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-green-600 transition"
              >
                Submit
              </button>
            </form>

            {/* Social Media Links */}
            <div className="mt-6">
              <h2 className="md:text-2xl font-semibold mb-1 md:mb-2 ">Connect With Us</h2>
              <div className="flex space-x-4 text-white">
              <Link to={""} className="">
                  <i className="p-1 md:p-2 border block rounded-full shadow-md md:text-xl">
                    <FaFacebook />
                  </i>
              </Link>
              <Link to={""} className="">
                  <i className="p-1 md:p-2 border block rounded-full shadow-md md:text-xl">
                    <FaTwitter />
                  </i>
              </Link>
              <Link to={""} className="">
                  <i className="p-1 md:p-2 border block rounded-full shadow-md md:text-xl">
                    <FaLinkedinIn />
                  </i>
              </Link>
              <Link to={""} className="">
                  <i className="p-1 md:p-2 border block rounded-full shadow-md md:text-xl">
                    <FaYoutube />
                  </i>
              </Link>
              </div>
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
