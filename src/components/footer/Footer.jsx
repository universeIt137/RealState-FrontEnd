import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Footer = () => {

  const axiosPublic = useAxiosPublic();
  const { data: content = {} } = useQuery({
    queryKey: ['content'],
    queryFn: async () => {
      const res = await axiosPublic.get('/website-content');
      return res.data[0];
    }
  })

  return (
    <footer className="bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 lg:py-8 p-4">
      <div className="w-11/12 mx-auto text-white">

        {/* Top Section: About, Useful Links, Subscription */}
        <div className="flex flex-col lg:gap-8 lg:flex-row justify-center items-center lg:justify-between lg:items-start">

          {/* About Company */}
          <div className="lg:w-1/3 text-center lg:text-start">
            <h2 className="lg:text-2xl font-bold">About Company</h2>
            <hr className="w-16 border-white border-t-2 lg:mb-4 mb-2 hidden lg:block" />
            <p className="font-bold lg:text-lg">Amar Thikana Green City.</p>
            <p className="text-[9px] lg:text-lg mt-1 lg:mt-2">Place: ৪৮, বিজয় নগর (৪র্থ তলা), পল্টন, ঢাকা-১০০০।</p>
            <p className="text-[9px] lg:text-lg mt-1 lg:mt-2">Phone: +88 01747-516981</p>
            <p className="text-[9px] lg:text-lg mt-1 lg:mt-2">Email: amarthikana06@gmail.com</p>
          </div>

          {/* Useful Links */}
          <div className="lg:w-1/3">
            <h2 className="lg:text-2xl mt-2 lg:mt-0 font-bold">Useful Links</h2>
            <hr className="w-16 border-white border-t-2 lg:mb-4 mb-1 hidden lg:block" />
            <ul className="lg:space-y-2 -space-y-1 text-center lg:text-start">

              <li >
                <Link
                  to="/booking-form"
                  className="text-[10px] lg:text-lg hover:text-black hover:underline transform transition duration-300 hover:scale-105"
                >
                  Booking Form
                </Link>
              </li>

              <li >
                <Link
                  to="/contact-us"
                  className="text-[10px] lg:text-lg hover:text-black hover:underline transform transition duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </li>

              <li >
                <Link
                  to="/about-us"
                  className="text-[10px] lg:text-lg hover:text-black hover:underline transform transition duration-300 hover:scale-105"
                >
                  About Us
                </Link>
              </li>

              <li >
                <Link
                  to="/career"
                  className="text-[10px] lg:text-lg hover:text-black hover:underline transform transition duration-300 hover:scale-105"
                >
                  Career
                </Link>
              </li>

              <li >
                <Link
                  to="/mission"
                  className="text-[10px] lg:text-lg hover:text-black hover:underline transform transition duration-300 hover:scale-105"
                >
                  Mission
                </Link>
              </li>

            </ul>
          </div>

          {/* Email Subscription */}
          <div className="lg:w-1/3">
            <h2 className="lg:text-2xl mt-2 lg:mt-0 font-bold text-center lg:text-start">Email Subscription</h2>
            <hr className="w-16 border-white border-t-2 mb-2 lg:mb-4 hidden lg:block" />
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
            <div className="lg:mt-6 mt-2">
              <h2 className="lg:text-xl font-semibold mb-2 text-center lg:text-start">Connect With Us</h2>
              <div className="flex justify-center lg:justify-start space-x-2 lg:space-x-4">

                <Link to={content?.facebook_url} className="lg:p-2 p-1 border rounded-full shadow-lg">
                  <FaFacebook className="text-lg" />
                </Link>
                <Link to={content?.twitter_url} className="lg:p-2 p-1 border rounded-full shadow-lg">
                  <FaTwitter className="text-lg" />
                </Link>

                <Link to={content?.youtube_url} className="lg:p-2 p-1 border rounded-full shadow-lg">
                  <FaYoutube className="text-lg" />
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-green-500 text-white text-center lg:py-4 lg:mt-8 mt-3">
        <p className="lg:text-lg text-[12px]">
          All rights reserved © Amar Thikana Green City. Design & Developed by <Link target='_blank' to={`https://universesofttech.co/`}>Universe Soft Tech</Link>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
