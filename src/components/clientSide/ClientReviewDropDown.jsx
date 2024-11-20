import React, { useState, useEffect } from 'react';
import { FaPlay, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';

function ClientReviewDropDown() {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoChange, setAutoChange] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const { data: reviewData = [] } = useQuery({
        queryKey: ['reviewDataItem'],
        queryFn: async () => {
            let res = await axiosPublic.get(`/client-review`);
            return res.data;
        }
    });

    useEffect(() => {
        if (!autoChange) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoChange, reviewData.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewData.length) % reviewData.length);
        setAutoChange(false);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
        setAutoChange(false);
    };

    const handlePlay = (videoUrl) => {
        setCurrentVideo(videoUrl);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentVideo(null);
    };

    const currentTestimonial = reviewData[currentIndex];

    return (
        <div className="w-11/12 lg:mt-28 mt-28 mx-auto">
            <div className="lg:ml-[60px] -mt-10 lg:-mt-6 text-black font-bold">
                <h1 className="lg:text-4xl uppercase">What customers</h1>
                <h1 className="lg:text-4xl uppercase">say about us</h1>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:space-x-44 py-1 lg:py-8 px-2 lg:px-16 bg-white">
                {/* Video Section */}
                <div className="relative w-full h-72 lg:h-80">
                    <ReactPlayer
                        url={currentTestimonial?.youtubeVideo}
                        className="w-full h-full object-cover hover:scale-105 transform transition duration-300 ease-in-out"
                        playing={false}
                        light
                        width="100%"
                        height="100%"
                    />
                    <button
                        onClick={() => handlePlay(currentTestimonial.youtubeVideo)}
                        className="absolute inset-0 flex justify-center items-center text-white text-3xl rounded-full"
                    >
                        <FaPlay className="bg-white text-red-600 p-2 rounded-full w-12 h-12" />
                    </button>
                </div>

                {/* Text Section */}
                <div className="lg:-mt-2 mt-2 flex-1">
                    <h2 className="lg:text-2xl font-semibold text-black">{currentTestimonial?.heading}</h2>
                    <div className="lg:h-16 my-auto overflow-hidden">
                        <p className="text-black lg:text-lg text-[9px] mt-1 lg:mt-4">{currentTestimonial?.description}</p>
                    </div>
                    <div className="my-auto">
                        <p className="md:mt-6 mt-1 font-semibold text-black lg:text-lg text-[10px]">
                            {currentTestimonial?.name}
                        </p>
                    </div>
                    <div>
                        <p className="text-black text-[10px] lg:text-xl">{currentTestimonial?.role}</p>
                    </div>

                    {/* Arrows for navigation */}
                    <div className="flex space-x-4 -ml-[8px] lg:mt-[100px] text-gray-500">
                        <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-100">
                            <FaArrowLeft />
                        </button>
                        <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Video */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center w-full items-center z-50">
                    <div className="relative w-full h-full lg:w-3/4 lg:h-3/4 max-w-screen-xl max-h-screen-xl">
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute z-50 top-4 text-green right-4 bg-green-500 text-2xl md:text-3xl"
                        >
                            <FaTimes />
                        </button>
                        <div className="relative w-full h-full">
                            <ReactPlayer
                                width="100%"
                                height="100%"
                                url={currentVideo}
                                className="w-full h-full object-cover"
                                controls
                                playing
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ClientReviewDropDown;
