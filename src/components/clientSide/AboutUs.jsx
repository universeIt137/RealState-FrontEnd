import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white p-5 md:p-10">
      <div className="text-center mb-3 md:mb-6">
        <button className="bg-[#21c45e] text-gray-700 px-2 md:px-4 md:py-2 py-1 rounded-full mb-2 md:mb-4">ABOUT US</button>
        <h2 className=" text-[16px] md:text-3xl text-[#199347] font-bold">
          <span className="">Introduction</span> To Best Real State Company!
        </h2>
        <p className="text-[10px] md:text-xl mt-2 md:mt-4 max-w-2xl mx-auto">
          Harum quisquam amet debitis pariatur quas? Nemo excepturi duis minim nostrum officiis dolorem fugiat itaque.
          Fugiat excepturi modi, porta.
        </p>
        <p className="text-gray-600 text-[10px] md:text-xl mt-1 md:mt-2 max-w-2xl mx-auto">
          Odio velit, odit, est, euismod aliquip luctus pharetra vero, condimentum, nostrum mi venenatis, mollit odio mi,
          unde semper adipiscing aut.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 text-center flex-1 transform transition duration-300 hover:scale-105">
          <div className="bg-[#199347] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white mb-2 md:mb-4">
            <i className="fas fa-dollar-sign"></i> {/* Replace with an actual icon if using a library */}
          </div>
          <h3 className="font-bold text-[15px] md:text-lg text-[#199347] ">Best Price Guaranteed</h3>
          <p className="text-[#199347] text-[10px] md:text-sm  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 text-center flex-1 transform transition duration-300 hover:scale-105">
          <div className="bg-[#199347] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white mb-2 md:mb-4">
            <i className="fas fa-tools"></i> {/* Replace with an actual icon if using a library */}
          </div>
          <h3 className="font-bold text-[15px] md:text-lg text-[#199347] ">Finance Analysis</h3>
          <p className="text-[#199347] text-[10px] md:text-sm  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 transform transition duration-300 hover:scale-105">
          <div className="bg-[#199347] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white mb-4">
            <i className="fas fa-users"></i> {/* Replace with an actual icon if using a library */}
          </div>
          <h3 className="font-bold text-[15px] md:text-lg text-[#199347] ">Professional Team</h3>
          <p className="text-[#199347] text-[10px] md:text-sm  ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;