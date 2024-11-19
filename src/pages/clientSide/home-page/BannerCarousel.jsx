import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsBricks } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BannerCarousel = ({banner_images}) => {
    

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banner_images?.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [banner_images?.length]);

    useEffect(() => {
        AOS.refreshHard();
    }, [currentIndex]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative   lg:mt-0  overflow-hidden">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
            >
                {banner_images?.map((slide, index) => (
                    <div
                        key={index}
                        className="lg:w-screen lg:h-screen w-screen h-[42vh] flex-shrink-0 relative"
                        style={{
                            backgroundImage: `url(${slide})`,
                            backgroundSize: 'contain', // Ensures entire image fits without cropping
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center  ',
                            
                        }}
                    >
                       
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
                {banner_images?.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white'}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            

            {/* Bottom Buttons */}
            <div className="absolute lg:bottom-24 bottom-[90px]   left-0 right-0 bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 lg:py-3 text-white z-10 font-semibold">
                <div className="flex lg:space-x-10 lg:w-3/4 mx-auto w-full  lg:gap-3 px-1 lg:px-4">
                    <button className="px-2 py-1   text-[8px]  lg:text-xl text-center rounded-lg flex items-center gap-2 ">
                        <Link to="/project-details">PROJECT DETAILS</Link>
                    </button>
                    <button className="px-2 py-1   text-[8px]  lg:text-xl text-center rounded-lg flex items-center gap-2 ">
                        <Link to={"/booking-form"}>BOOKING FORM</Link>
                    </button>
                    <button className="px-2 py-1   text-[8px]  lg:text-xl text-center rounded-lg">
                        <Link to="/contact-us">CONTACT US</Link>
                    </button>
                    <button className="px-2 py-1   text-[8px]  lg:text-xl text-center rounded-lg">
                        <Link to="/about-us">ABOUT US</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;
