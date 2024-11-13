import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Sample images
const images = [
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731389139/Amer%20Thikana/uptnnqpi80uojvcs7bzh.png',
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731320619/Amer%20Thikana/ios2ysxylei3yemy0fgk.jpg',
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889998/offer-3_zr81a8.png',
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889949/offer-2_s0dp1u.png',
    'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889904/offer-1_bajmsf.png',
];

const ImageGallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Close modal on outside click
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    // Close modal with Escape key
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
        <div className="bg-[#fefaee]">
            <Helmet>
                <title>Universe IT | photoGallery</title>
            </Helmet>
            <div className="gallery-container flex flex-col lg:grid grid-cols-2 lg:grid-cols-3  gap-4 p-4  w-10/12 mx-auto ">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery Image ${index + 1}`}
                        className="cursor-pointer w-[400px]  h-[300px] rounded-lg shadow-md transition-transform transform hover:scale-105"
                        onClick={() => openModal(index)}
                    />
                ))}

                {/* Modal */}
                {isOpen && (
                    <div
                        className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                        onClick={handleOutsideClick}
                    >
                        <div className="relative max-w-3xl w-full p-4">
                            {/* <button
                            className="absolute top-2 right-2 text-white text-2xl font-bold"
                            onClick={closeModal}
                        >
                            &times;
                        </button> */}
                            <img
                                src={images[currentIndex]}
                                alt={`Zoomed Image ${currentIndex + 1}`}
                                className="w-full h-auto rounded-lg"
                            />
                            {/* Navigation buttons */}
                            <div className="absolute inset-y-0 left-2 flex items-center">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        goToPrevious();
                                    }}
                                    className="text-white text-3xl p-2 mx-4 bg-opacity-75 rounded-full"
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
                                    className="text-white text-3xl p-2 mx-4 bg-opacity-75 rounded-full"
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

export default ImageGallery;