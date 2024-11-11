import React from 'react';

const AboutUs = () => {
  window.scrollTo(0, 0);
  return (
    <div className='w-11/12 mx-auto my-14 md:my-20 '>
      <div>
        <h1 className='md:text-4xl text-center font-bold pt-5 text-[#21c45e]'>About Us</h1>
      </div>
      <div className="mt-2 md:mt-5 flex justify-center">
        <div className="max-w-5xl flex flex-col md:flex-row bg-white rounded-lg shadow-lg gap-10 overflow-hidden">
          {/* Left Section - Image */}
          <div className="md:w-1/2 transform transition duration-300 ease-in-out hover:scale-110">
            <img
              src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731232455/amar_b5sll5.jpg"
              alt="Modern Green City"
              className="w-full object-cover"
            />
          </div>

          {/* Right Section - Text */}
          <div className="md:w-1/2 bg-[#21c45e] text-white p-8 relative">
            <h1 className="md:text-4xl font-bold md:mb-2">Amar Thikana</h1>
            <p className="text-[10px] md:text-lg text-white mb-6">
              We offer the best Plot in a friendly and calm atmosphere.
            </p>
            <p className="text-[10px] md:text-lg text-white mb-2 md:mb-6">
              Amar Thikana Property Development (Pvt) Ltd. - the concern of Selim Asia Group which was founded in 2017 with
              the broader objective of addressing the ever-increasing housing needs of the citizens of Dhaka city, a
              housing project called Modern Green City.
            </p>
            <p className="mb-4 text-[10px] md:text-lg">
              Amar Thikana, a well-planned residential project with all modern amenities surrounded by greenery. We
              have 100% ready plots which are always ready to get registered and take over all documents after the plot as
              soon as the price is paid.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 md:py-10 md:px-4 flex justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="md:text-4xl text-[#21c45e] font-bold md:mb-8">Why People Choose Us</h2>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-110">
              <svg
                className="w-12 h-12 md:mb-4 text-[#21c45e]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.9 18l1.4-2h10.4l1.4 2H5.9zm12.9-4H5.2c-1.3 0-2.3-1-2.3-2.3V7.5C2.9 6 4 5 5.4 5h13.2c1.5 0 2.5 1 2.5 2.5v4.3c0 1.2-1 2.2-2.3 2.2z"/>
              </svg>
              <p className="md:text-lg text-[#21c45e] text-[9px] font-medium">Just 15 minutes from Motijheel</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-110">
              <svg
                className="w-12 h-12 md:mb-4 text-[#21c45e]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 5.5L12 2l10 3.5v13L12 22 2 18.5v-13zm10 10c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
              </svg>
              <p className="md:text-lg text-[10px] text-[#21c45e] font-medium">400 feet adjacent to Dhaka-Mawa highway</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-110">
              <svg
                className="w-12 h-12 mb-4 text-[#21c45e]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L1 21h22L12 2z"/>
              </svg>
              <p className="md:text-lg text-[10px] text-[#21c45e] font-medium">Fully developed for living</p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-110">
              <svg
                className="w-12 h-12 mb-4 text-[#21c45e]"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM7 12a5 5 0 119 3 5 5 0 01-9-3z"/>
              </svg>
              <p className="md:text-lg text-[10px] text-[#21c45e] font-medium">Immaculate plot ownership with 20% down payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
