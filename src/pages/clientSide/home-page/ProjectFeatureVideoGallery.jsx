import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { IoCloseCircleOutline, IoPlayCircleSharp } from "react-icons/io5";
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Marquee from 'react-fast-marquee';

// Sample video data


const ProjectFeatureVideoGallery = ({ videosData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState({ played: 0, duration: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);






  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videosData?.length);
    }, 3000); // Slide every 3 seconds

    const handleResize = () => setWindowWidth(window.innerWidth); // Resize handler
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleProgress = (progress) => {
    setVideoProgress(progress);
  };

  const handleDuration = (duration) => {
    setVideoProgress((prevState) => ({ ...prevState, duration }));
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
  };


  return (
    <div className="w-11/12 mx-auto  mb-9 ">
      <div className="mx-auto relative w-full overflow-hidden ">
        {/* <h1 className="lg:text-4xl my-2 font-bold text-center text-black lg:mb-8">Video Gallery</h1> */}

        {/* Container for images with horizontal scroll */}
        <Marquee speed={35} pauseOnHover={true}>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 lg:mb-7"
              
            >
              {videosData?.map((video, index) => (
                <div key={index} className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-1">
                  <div
                    onClick={() => openModal(video)}
                    className="h-[35.9vw] lg:h-[12.9vw] cursor-pointer border shadow-lg rounded-lg overflow-hidden"
                  >


                    <ReactPlayer
                      url={`${video?.videoUrl}`}
                      width="100%"
                      height="100%"
                      playing={false} // Ensure the video doesn't autoplay
                      controls={false} // Disable controls
                      light={false} // Ensure no light mode is active
                      className="pointer-events-none" // Disable player interaction
                      playIcon={<IoPlayCircleSharp className="text-7xl text-red-600" />} // Custom play button
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Marquee>


        {isModalOpen && currentVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl text-gray-300 z-10"
            >
              <IoCloseCircleOutline size={50} />
            </button>

            {/* Modal for Video Player */}
            <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center bg-gray-900 rounded-lg">
              <ReactPlayer
                url={currentVideo?.videoUrl}
                playing={isPlaying}
                width="100%"
                height="100%"
                style={{ borderRadius: '8px' }}
                onProgress={handleProgress}
                onDuration={handleDuration}
              />

              {/* Play/Pause Button */}
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <AiOutlinePauseCircle size={80} className="text-white" />
                ) : (
                  <AiOutlinePlayCircle size={80} className="text-white" />
                )}
              </div>

              {/* Video Duration and Current Time */}
              {isPlaying && videoProgress.duration > 0 && (
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <span>{formatTime(videoProgress.played * videoProgress.duration)} / {formatTime(videoProgress.duration)}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFeatureVideoGallery;
