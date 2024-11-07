import React from 'react';

const LayoutVisual = () => {
  return (
    <div className="w-11/12 mx-auto my-5 md:my-12">
      <h1 className="md:text-4xl font-bold text-center text-[#21c45e]">
        Amar Thikana Project Layout
      </h1>
      <p className="text-center md:text-xl text-[10px] my-2 md:my-4 text-[#21c45e]">
        A thoughtfully planned community with organized plots, accessible roads, scenic lakes, and essential amenities for a balanced lifestyle.
      </p>
      <div className=' mt-5 md:mt-10  ' >
        <img 
          className="md:h-[100vh] h-[50vh] m w-full mx-auto transform transition duration-300 hover:scale-105" 
          src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730962206/WhatsApp_Image_2024-10-29_at_9.25.17_PM_1_yntgfh.jpg" 
          alt="Amar Thikana Project Layout" 
        />
      </div>
    </div>
  );
}

export default LayoutVisual;
