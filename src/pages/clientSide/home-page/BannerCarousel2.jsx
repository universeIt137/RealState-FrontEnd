import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsBricks } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const BannerCarousel2 = () => {
    const slides = [
        { url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731492939/Amer%20Thikana/hvsqkx9fabxfqdukitrm.jpg', title: 'Reviving You on Every Step' },
        { url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731493217/Amer%20Thikana/ynjhagwufmak2cxk5gl7.jpg', title: 'Discover More' },
        { url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731493294/Amer%20Thikana/kel7ucjs1x7xt9e7k1zz.jpg', title: 'Experience Quality' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [slides.length]);

    // Trigger re-initialization of AOS animations on slide change
    useEffect(() => {
        AOS.refreshHard();
    }, [currentIndex]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const axiosPublic = useAxiosPublic();

    const { data: bannerDataList = [] } = useQuery({
        queryKey: ['banner content'],
        queryFn: async () => {
            const res = await axiosPublic.get('/banner');
            return res.data;
        },
    });

    // Filter out banners with missing or invalid `img` URLs
    const filteredBanners = bannerDataList.filter(
        (slide) => slide?.img && slide.img.trim() !== ''
    );

    return (
        <div className="relative w-full overflow-hidden">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {filteredBanners.map((slide, index) => (
                    <div
                        key={index}
                        className="min-w-full h-screen relative"
                        style={{
                            backgroundImage: `url(${slide?.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
                {filteredBanners.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            {/* Bottom Text and Buttons */}
            <div className="absolute bottom-44 left-0 right-0 py-6 text-white z-10">
                <div className="w-3/4 mx-auto">
                    {/* Title */}
                    <h2
                        key={currentIndex} // Unique key to re-render and trigger animation
                        className="text-5xl font-bold mb-4"
                        data-aos="fade-up" // AOS fade-up effect
                    >
                        {filteredBanners[currentIndex]?.banner_text || 'No Banner Text'}
                    </h2>
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="absolute bottom-24 left-0 right-0 bg-black bg-opacity-90 py-3 text-white z-10">
                <div className="flex space-x-10 w-3/4 mx-auto">
                    <button className="px-4 py-2 rounded-lg flex items-center gap-4">
                        <BsBricks /> EXPLORE PROJECTS
                    </button>
                    <button className="px-4 py-2 rounded-lg flex items-center gap-4">
                        <FaPlay /> ONGOING
                    </button>
                    <button className="px-4 py-2 rounded-lg">COMPLETED</button>
                    <button className="px-4 py-2 rounded-lg">UPCOMING</button>
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel2;
