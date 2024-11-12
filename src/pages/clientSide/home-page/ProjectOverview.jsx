import React, { useState } from 'react';
import { IoPlayCircleSharp } from 'react-icons/io5';
import ReactPlayer from 'react-player';

const ProjectOverview = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);    // Modal open/close state
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
        <div>
            <div className="w-11/12 mx-auto  ">
                <div>
                    <h1 className='text-center md:text-4xl font-bold text-[#267543] ' >Project Overview</h1>
                </div>
                <div className="flex flex-col md:flex-row md:flex-row-reverse md:items-center md:justify-between lg:py-20 py-5 px-6 bg-white  rounded-lg">


                    {/* Image/Video Section */}
                    <div className="md:w-1/2 relative mt-8 md:mt-0">
                        <div className="relative rounded-lg shadow-md cursor-pointer overflow-hidden">
                            <div
                                onClick={() => handlePlayButtonClick('https://www.youtube.com/watch?v=nWyi1fbSalo&t=1s')}
                                className="h-[35.9vw] lg:h-[25.9vw] cursor-pointer border rounded-lg overflow-hidden"
                            >
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=nWyi1fbSalo&t=1s"
                                    width="100%"
                                    height="100%"
                                    light="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731320619/Amer%20Thikana/ios2ysxylei3yemy0fgk.jpg" // Display image thumbnail before the video plays
                                    playIcon={<IoPlayCircleSharp className="text-7xl text-red-600" />} // Custom play button
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 md:pr-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#267543] uppercase">
                            Redefining your standard of living
                        </h1>
                        <p className="hidden lg:block">
                            Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services. It ventured into the real estate sector in 2015 with its “dream team” dedicated to merge value and innovation in the evolving real estate sector of Bangladesh. Through considerable focus on design, structural dimension, and feasibility in the sense of space and resource conservation; as well as environmental soundness; we deliver you optimum support in residential and commercial accommodation.

                            Conjoining the expertise of different fields to develop and bring in the quintessence of contemporary lifestyle, we provide distinguished services and strictly maintain project handover deadlines. We assure you to be your most reliable developer in Dhaka in terms of integrity and credibility.

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
        </div>
    );
};

export default ProjectOverview;
