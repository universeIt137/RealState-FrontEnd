import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { IoCloseSharp } from 'react-icons/io5';

// Sample video data
const videosData = [
    {
        id: 1,
        title: "Cloudinary Video 1",
        thumbnail: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889998/offer-3_zr81a8.png",
        url: "https://res.cloudinary.com/dj2edy2rg/video/upload/v1731341221/wquwm1xejbwpzmvlyrnz.mp4"
    }, {
        id: 1,
        title: "Cloudinary Video 1",
        thumbnail: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889998/offer-3_zr81a8.png",
        url: "https://res.cloudinary.com/dj2edy2rg/video/upload/v1731341221/wquwm1xejbwpzmvlyrnz.mp4"
    },
    {
        id: 1,
        title: "Cloudinary Video 1",
        thumbnail: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889998/offer-3_zr81a8.png",
        url: "https://res.cloudinary.com/dj2edy2rg/video/upload/v1731341221/wquwm1xejbwpzmvlyrnz.mp4"
    },
];

const ProjectFeatureVideoGallery = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoProgress, setVideoProgress] = useState({ played: 0, duration: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videosData.length);
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval);
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
        <div className="mx-auto relative w-full overflow-hidden">
            <h1 className="md:text-3xl  font-bold text-center text-black "></h1>

            {/* Container for images with horizontal scroll */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500 md:mb-7"
                    style={{
                        transform: `translateX(-${currentIndex * (window.innerWidth < 640 ? 100 : 33.33)}%)`,
                    }}
                >
                    {videosData.map((video, index) => (
                        <div key={index} className="relative  flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-1 ">
                            <img
                                src={video.thumbnail}
                                alt={video.title}
                                onClick={() => openModal(video)}
                                className="w-full h-52 object-cover rounded-lg shadow-md cursor-pointer"
                            />
                            <div className="absolute inset-0 hidden group-hover:flex items-center justify-center">
                                <AiOutlinePlayCircle
                                    size={50}
                                    className="text-[#21c45e] opacity-80 hover:opacity-100 cursor-pointer"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && currentVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-2xl bg-green p-2 rounded-full text-gray-300 z-10"
                    >
                        <IoCloseSharp size={30} />
                    </button>

                    {/* Modal for Video Player */}
                    <div className="relative w-full max-w-4xl h-[70vh] flex items-center justify-center bg-gray-900 rounded-lg">
                        <ReactPlayer
                            url={currentVideo.url}
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
    );
};

export default ProjectFeatureVideoGallery;
