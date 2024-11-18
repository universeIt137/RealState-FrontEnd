import React, { useState } from 'react';
import { IoPlayCircleSharp } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import ExpandableCards from './ExpandableCards';
import { useQuery } from '@tanstack/react-query';

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
            <div className="w-11/12 mx-auto ">
                <div className="flex justify-center lg:py-0 py-5 px-6 bg-white  rounded-lg">
                   


                    
                    <div className="md:pr-10 text-black">
                        <h1 className=' text-[13px] md:text-xl font-bold  uppercase my-2 lg:my-4 text-center' >Project Overview</h1>
                        <h1 className="lg:text-3xl  font-bold  uppercase">
                            Amer Thikana Green City
                        </h1>

                    </div>
                </div>

                <ExpandableCards></ExpandableCards>


            </div>
        </div>
    );
};

export default ProjectOverview;
