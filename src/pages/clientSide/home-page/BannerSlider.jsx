import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='h-screen'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731393109/Amer%20Thikana/vibrqt1yddpswvjhowuh.png" className='w-full h-full' alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731395145/Amer%20Thikana/da2hb6svumkktgttbbbb.jpg" className='w-full h-full' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731395233/Amer%20Thikana/pjecmqqdazpei14l9bvo.jpg" className='w-full h-full' alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731395353/Amer%20Thikana/yq40rcefanavaynfn1pj.jpg" className='w-full h-full' alt="" />
                </SwiperSlide>
               
                
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
