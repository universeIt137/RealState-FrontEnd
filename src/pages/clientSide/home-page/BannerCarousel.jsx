import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsBricks } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BannerCarousel = () => {
    const slides = [
        { url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731577621/amar1_xch9zp.jpg', title: 'Reviving You on Every Step' },
        { url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731577621/amar1_xch9zp.jpg', title: 'Reviving You on Every Step' },
        { url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731577621/amar1_xch9zp.jpg', title: 'Reviving You on Every Step' },{ url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731577621/amar1_xch9zp.jpg', title: 'Reviving You on Every Step' },
        // { url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731493217/Amer%20Thikana/ynjhagwufmak2cxk5gl7.jpg', title: 'Discover More' },
        // { url: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731493294/Amer%20Thikana/kel7ucjs1x7xt9e7k1zz.jpg', title: 'Experience Quality' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        AOS.refreshHard();
    }, [currentIndex]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative -mt-5  lg:mt-0    h-screen overflow-hidden">
            {/* Slides Container */}
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="lg:w-screen lg:h-screen w-screen h-screen flex-shrink-0 relative"
                        style={{
                            backgroundImage: `url(${slide.url})`,
                            backgroundSize: 'contain', // Ensures entire image fits without cropping
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center  ',
                            
                        }}
                    >
                        {/* Dark Overlay */}
                        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            {/* Bottom Text and Buttons */}
            {/* <div className="absolute bottom-44 left-0 right-0 py-6 text-white z-10">
                <div className="w-3/4 mx-auto text-center">
                    <h2
                        key={currentIndex}
                        className="  md:text-4xl lg:text-5xl font-bold mb-4"
                        data-aos="fade-up"
                    >
                        {slides[currentIndex].title}
                    </h2>
                </div>
            </div> */}

            {/* Bottom Buttons */}
            <div className="absolute lg:bottom-24 bottom-[110px]   left-0 right-0 bg-[#027f3d] bg-opacity-50  lg:py-3 text-white z-10 font-semibold">
                <div className="flex lg:space-x-10 lg:w-3/4 mx-auto w-full  lg:gap-3 px-1 lg:px-4">
                    <button className="px-2 py-1   text-[8px]  lg:text-xl text-center rounded-lg flex items-center gap-2 ">
                        <Link to="/project-details">PROJECT FEATURE</Link>
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
