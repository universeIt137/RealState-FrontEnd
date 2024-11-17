import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoCloseCircleOutline } from "react-icons/io5";

const images = [
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731389139/Amer%20Thikana/uptnnqpi80uojvcs7bzh.png',
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731320619/Amer%20Thikana/ios2ysxylei3yemy0fgk.jpg',
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889998/offer-3_zr81a8.png',
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889949/offer-2_s0dp1u.png',
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889904/offer-1_bajmsf.png',
];

const ProjectLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false); // Close the modal
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrevious();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="bg-white">
            <Helmet>
                <title>Amar Thikana | Project Layout</title>
            </Helmet>
            <div className="w-11/12 mx-auto">
                {/* Show Only the First Image */}
                <div className="flex justify-center mt-4">
                    <img
                        src={images[0]}
                        alt="Gallery Thumbnail"
                        className="cursor-pointer w-[400px] h-[300px] rounded-lg  transition-transform transform hover:scale-105"
                        onClick={() => openModal(0)}
                    />
                </div>

                {/* Modal */}
                {isOpen && (
                    <div
                        className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                        onClick={(e) => {
                            // Close modal if the overlay (background) is clicked
                            if (e.target.classList.contains('modal-overlay')) {
                                closeModal();
                            }
                        }}
                    >
                        <div className="relative max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 text-black bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent event propagation to modal overlay
                                    closeModal();
                                }}
                                aria-label="Close Modal"
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 text-2xl text-black bg-[#027F3D] opacity-70 p-1 rounded-full shadow-2xl"
                                >
                                    <IoCloseCircleOutline size={40} />
                                </button>

                            </button>

                            {/* Image Display */}
                            <img
                                src={images[currentIndex]}
                                alt={`Zoomed Image ${currentIndex + 1}`}
                                className="w-full h-auto rounded-lg"
                            />

                            {/* Navigation Buttons */}
                            <div className="absolute inset-y-0 left-2 flex items-center">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToPrevious();
                                    }}
                                    className="text-white bg-black p-3 rounded-full shadow-2xl"
                                >
                                    &#10094;
                                </button>
                            </div>
                            <div className="absolute inset-y-0 right-2 flex items-center">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToNext();
                                    }}
                                    className="text-white bg-black p-3 rounded-full shadow-2xl "
                                >
                                    &#10095;
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectLayout;
