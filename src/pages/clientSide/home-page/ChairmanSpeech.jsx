import React, { useState, useRef } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import ReactPlayer from 'react-player';

const ChairmanSpeech = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);    //Modal open/close state
  const [seeMore, setSeeMore] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState(null);

  // Function to open the modal and set video source
  const handlePlayButtonClick = (videoSrc) => {
    setModalVideoSrc(videoSrc);  // Set the clicked video URL
    setIsModalOpen(true);        // Open the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalVideoSrc(null);      // Clear video source
    setIsModalOpen(false);       // Close the modal
  };


  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:py-20 py-5 px-6 bg-white border rounded-lg">
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <div
            className="relative rounded-lg shadow-md cursor-pointer overflow-hidden">
            <div
              onClick={() => handlePlayButtonClick('https://www.youtube.com/watch?v=nWyi1fbSalo&t=1s')}
              className="h-[35.9vw] lg:h-[25.9vw] cursor-pointer border rounded-lg overflow-hidden"
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=nWyi1fbSalo&t=1s`}
                width="100%"
                height="100%"
                light={`https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731320619/Amer%20Thikana/ios2ysxylei3yemy0fgk.jpg`} // Display image thumbnail before the video plays
                playIcon={<IoPlayCircleSharp className="text-7xl text-red-600" />} // Custom play button
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2  md:pl-10">
          <p className="text-2xl font-thin text-green text-center lg:text-start mt-5">CHAIRMAN</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#267543] uppercase">
            Md. Aminur Rashid
          </h1>
          <p className="hidden lg:block">
            Edison Real Estate has the bold vision of making high-quality and nicely designed residences that are available within the purchasing power of a wider segment of the population. We clearly understand the need for more trusted and reliable companies in the real estate sector.

            Companies will fill up this vacuum in the market and there will be a continuous effort to delight customers. We are a competent and motivated group of people, suppliers, and partners who will work closely to ensure strict processes and policies are followed in order to provide complete and consistent customer values. We will listen to our customers to drive continuous improvement and serve them with premium service in every way possible.
          </p>

        </div>
      </div>


      {/* Modal to play video */}
      {isModalOpen && modalVideoSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl bg-black rounded-lg p-4">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            {/* ReactPlayer inside the modal */}
            <div className="w-full h-[60vh]">
              <ReactPlayer
                url={modalVideoSrc}
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default ChairmanSpeech;
