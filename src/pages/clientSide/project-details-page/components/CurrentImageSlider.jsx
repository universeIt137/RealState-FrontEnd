import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Marquee from 'react-fast-marquee';

const CurrentImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const axiosPublic = useAxiosPublic();
    const { data: images = [] } = useQuery({
        queryKey: ['images'],
        queryFn: async () => {
            const res = await axiosPublic.get('/current-image');
            return res.data;
        }
    });

    // Auto-sliding images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Open modal with the clicked image
    const openModal = (src) => {
        setModalImage(src);
        setIsModalOpen(true);
    };

    // Close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Image Slider */}

            <Marquee speed={35} pauseOnHover={true}>
                <div
                    className="flex transition-transform duration-500 md:mb-7"

                >
                    {images?.map((image) => (
                        <div
                            key={image._id}
                            className={`flex-shrink-0 px-2 w-96`}
                        >
                            <img
                                src={image?.imgUrl}
                                className="w-full h-56 object-cover rounded-lg shadow-md cursor-pointer"
                                onClick={() => openModal(image?.imgUrl)} // Open modal on image click
                            />
                        </div>
                    ))}
                </div>
            </Marquee>



            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                    <div className="relative max-w-3xl max-h-[80vh]  bg-white p-4 rounded-lg shadow-lg">
                        <button
                            className="absolute top-2 right-2 p-2 text-white bg-black rounded-full"
                            onClick={closeModal} // Close modal
                        >
                            <IoCloseSharp size={24} />
                        </button>
                        <img
                            src={modalImage}
                            alt="Modal Image"
                            className="w-full h-auto max-h-[80vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CurrentImageSlider;
