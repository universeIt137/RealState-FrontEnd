import { useQuery } from '@tanstack/react-query';
import React, { useState, useRef, useEffect } from 'react';

import { IoPlayCircleSharp } from 'react-icons/io5';

import ReactPlayer from 'react-player';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ChairmanSpeech = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);    //Modal open/close state
  const [seeMore, setSeeMore] = useState(false);
  const [modalVideoSrc, setModalVideoSrc] = useState(null);

  const [chairmanData, setChairmanData] = useState({});

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


  const axiosPublic = useAxiosPublic();
  const { data: content = {} } = useQuery({
    queryKey: ['chairman speech'],
    queryFn: async () => {
      const res = await axiosPublic.get('/chairman');
      return res.data[0];
    }
  })



  return (
    <div className="w-11/12 mx-auto  ">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-24 -mt-4   bg-white  rounded-lg">
        <div className="lg:w-1/2  relative -mt-40 lg:mt-0">
          <div
            className="relative   rounded-lg shadow-md cursor-pointer overflow-hidden">
            {
              (content?.youtubeVideos || content?.videoUrl ) ?
              <div
              onClick={() => handlePlayButtonClick(`${content?.youtubeVideos ? content?.youtubeVideos : content?.videoUrl }`)}
              className="h-[35.9vw] lg:h-[25.9vw] cursor-pointer  rounded-lg overflow-hidden"
            >
              <ReactPlayer
                url={`${content?.youtubeVideos ? content?.youtubeVideos : content?.videoUrl }`}
                width="100%"
                height="100%"
                light={content?.chairmanImageUrl} // Display image thumbnail before the video plays
                playIcon={<IoPlayCircleSharp className="text-7xl text-red-600" />} // Custom play button
              />
            </div>
            :
            <div className="">
              <img src={content?.chairmanImageUrl} className='bg-cover' alt="" />
            </div>
            }
          </div>
        </div>

        <div className="lg:w-1/2 mt-5 lg:mt-0 p-1 lg:pl-10">
          <h1 className=" text-center lg:text-4xl lg:text-start font-extra-light text-black uppercase">
            Chairman Speech
          </h1>

          <p className=" lg:text-lg text-10px text-justify overflow-hidden lg:mt-2 lg:block">
            {content?.chairmanSpeech}
          </p>
          <p className="lg:text-2xl  text-black font-extralight mt-2 text-center lg:text-start ">CHAIRMAN</p>
          <h1 className=" text-center lg:text-4xl lg:text-start font-bold text-black uppercase">
            {content?.chairman_name}
          </h1>
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
