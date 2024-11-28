import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import ImageGallery from '../image-gallery-page/ImageGallery';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';



const Characteristics = () => {
    // console.log(images);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const axiosPublic = useAxiosPublic();
    const { data: contents = [] } = useQuery({
        queryKey: ['contents'],
        queryFn: async () => {
            const res = await axiosPublic.get('/character');
            return res.data;
        }
    })

    // Auto-sliding images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex < contents?.length - 1 ? prevIndex + 1 : 0
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [contents?.length]);



    return (
        <div className="relative w-full overflow-hidden">
            <h2 className="md:text-4xl font-bold text-green-600 text-center my-5 md:mb-6">
                আমাদের বৈশিষ্ট্য
            </h2>
            {/* Image Slider */}
            <div
                className="flex gap-10 transition-transform duration-500 md:mb-7"
                style={{
                    transform: `translateX(-${currentIndex * (window.innerWidth < 640 ? 100 : 33.33)}%)`,
                }}
            >
                {contents?.map((value, index) => (
                    

                    <div
                        key={index}
                        className={`bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 p-3 md:p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 `}
                    >
                        <h3 className="md:text-2xl font-bold text-white md:mb-4">
                            {value?.title}
                        </h3>
                        <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
                            {value?.description}
                        </p>
                    </div>
                ))}
            </div>


        </div>

    );
};

export default Characteristics;
