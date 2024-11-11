import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Amar Thikana | Contact Page</title>
      </Helmet>
      <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-center md:text-4xl mt-20 md:mt-28 md:mb-8 text-[#21c45e] mb-2 font-bold">
            Visit Our Office
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 p-6 md:p-12">
            {/* Office Card with Zoom Effect */}
            <div className="hover:scale-105 transition-transform duration-300 ease-out flex flex-col border border-green-500 items-start bg-white shadow-lg p-6 rounded-lg w-full md:w-1/2 mb-6 md:mb-0">
              <div className="flex items-center justify-center bg-green-500 h-12 md:h-20 w-full rounded-t-lg">
                <h2 className="text-[14px] md:text-2xl font-semibold text-white">
                  Amar Thikana Properties Ltd.
                </h2>
              </div>
              <div className="text-left mt-4">
                <p className="text-[14px] md:text-lg text-[#21c45e] font-semibold">Address:</p>
                <p className="text-[#21c45e] text-[10px] md:text-[16px]">
                  48, Bijoy Nagar (4th Floor), Paltan, Dhaka-1000.
                </p>
                <p className="text-[14px] md:text-lg text-[#21c45e] font-semibold md:mt-3">Phone:</p>
                <p className="text-[#21c45e] text-[10px] md:text-[16px]">+88 01747-516981</p>
                <p className="text-[14px] md:text-lg text-[#21c45e] font-semibold md:mt-3">Email:</p>
                <p className="text-[#21c45e] text-[10px] md:text-[16px]">amarthikana06@gmail.com</p>
              </div>
            </div>

            {/* Google Map with Zoom Effect */}
            <div className="hover:scale-105 transition-transform duration-300 ease-out w-full md:w-1/2 flex items-center justify-center">
              <iframe
                className="w-full h-[250px] md:h-[320px] rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.710984205232!2d90.41311227466215!3d23.747391186395585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897c80d156d%3A0x2fbaade374fa61ed!2sMatrichaya%20Properties%20Ltd.!5e0!3m2!1sen!2sbd!4v1699971081492!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center py-6 md:py-12 bg-gray-50">
          <h1 className="md:text-4xl text-[#21c45e] font-semibold mb-3 md:mb-8">Contact Us</h1>
          <div className="w-full max-w-md p-4 md:p-8 bg-white rounded-lg shadow-md">
            <form>
              <div className="mb-2 md:mb-6">
                <label className="block text-[#21c45e] text-[10px] md:text-sm font-bold mb-1 md:mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="ex: Rahman Kabir"
                />
              </div>

              <div className="mb-2 md:mb-6">
                <label className="block text-[#21c45e] text-[10px] md:text-sm font-bold mb-1 md:mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="ex: example@gmail.com"
                />
              </div>

              <div className="mb-2 md:mb-6">
                <label className="block text-[#21c45e] text-[10px] md:text-sm font-bold mb-1 md:mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-2 md:px-4 text-[#21c45e] leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  placeholder="017********"
                />
              </div>

              <div className="mb-2 md:mb-6">
                <label className="block text-[#21c45e] text-[10px] md:text-sm font-bold mb-1 md:mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-1 md:py-3 px-4 text-[#21c45e] leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 md:py-2 px-3 md:px-6 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
