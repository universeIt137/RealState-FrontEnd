import React, { useState, useRef } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const ChairmanSpeech = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsPlaying(false);
  };

  const playVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between py-10 px-6 bg-white">
        <div className="md:w-1/2 relative mt-8 md:mt-0">
          <div
            className="relative rounded-lg shadow-md cursor-pointer overflow-hidden"
            onClick={toggleModal}
          >
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-full"
              muted
              loop
            />
            {/* Play Button Icon with Pulsing Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPlayCircle className="text-red-500 text-6xl cursor-pointer animate-pulse-custom" />
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-4 md:pl-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#21c45e]">
            REDEFINING YOUR STANDARD OF LIVING
          </h1>
          <p className="text-[#21c45e]">
            Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products, and a wide range of services. It ventured into the real estate sector in 2015 with its “dream team” dedicated to merge value and innovation in the evolving real estate sector of Bangladesh.
          </p>
          <p className="text-[#21c45e]">
            Conjoining the expertise of different fields to develop and bring in the quintessence of contemporary lifestyle, we provide distinguished services and strictly maintain project handover deadlines. We assure you to be your most reliable developer in Dhaka in terms of integrity and credibility.
          </p>
          <button className="mt-4 px-6 py-2 border-2 border-green-500 text-green-500 font-semibold rounded-md hover:bg-green-500 hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-4xl">
            <video
              ref={videoRef}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              className="w-full h-full"
              controls={isPlaying}
              onClick={(e) => e.stopPropagation()}
            />
            {/* Play Button with Animation */}
            {!isPlaying && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={playVideo}
              >
                <FaPlayCircle className="text-white text-6xl animate-pulse-custom" />
              </div>
            )}
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={toggleModal}
            >
              <MdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChairmanSpeech;
