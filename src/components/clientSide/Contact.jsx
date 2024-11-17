import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import InfoCard from "../../pages/clientSide/about-us-page/InfoCard";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <>
      <Helmet>
        <title>Amar Thikana | Contact Page</title>
      </Helmet>
      <div className="w-11/12 mx-auto">
        <div>
          <h1 className="text-center lg:text-4xl mt-20 lg:mt-24 lg:mb-8 text-black font-bold">
            Visit Our Office
          </h1>
          <div className=" flex flex-col lg:flex-row items-center justify-center gap-9">

            

            <div className="lg:w-1/2">
              <InfoCard></InfoCard>
            </div>


            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center">
                <div className="w-full p-4 lg:p-6 bg-white rounded-lg shadow-lg">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2 lg:mb-6">
                      <label
                        htmlFor="name"
                        className="block text-black text-sm font-bold mb-2"
                      >
                        Name
                      </label>
                      <input
                        aria-label="Name"
                        id="name"
                        type="text"
                        placeholder="ex: Rahman Kabir"
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-2 lg:mb-6">
                      <label
                        htmlFor="email"
                        className="block text-black text-sm font-bold mb-2"
                      >
                        Email
                      </label>
                      <input
                        aria-label="Email"
                        id="email"
                        type="email"
                        placeholder="ex: example@gmail.com"
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-2 lg:mb-6">
                      <label
                        htmlFor="message"
                        className="block text-black text-sm font-bold mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        aria-label="Message"
                        id="message"
                        rows="4"
                        placeholder="Write your message here..."
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 focus:outline-none focus:shadow-outline"
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="bg-[#027F3D] text-black bg-opacity-70 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mb-8 hover:scale-105 transition-transform duration-300 ease-out w-full flex items-center justify-center mt-10">
          <iframe
            className="w-full h-[250px] lg:h-[320px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.710984205232!2d90.41311227466215!3d23.747391186395585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b897c80d156d%3A0x2fbaade374fa61ed!2sMatrichaya%20Properties%20Ltd.!5e0!3m2!1sen!2sbd!4v1699971081492!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
