import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css'

// import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className='bg-green-100' >
    <div className="flex items-center justify-center  px-8">
      <div className="max-w-lg space-y-4">
        <h3 className="text-lg text-green-700 font-semibold mt-4 ">Go green.</h3>
        <div className='md:flex ' >
        <div>
        <h1 className="lg:text-5xl font-bold text-gray-800  ">
          The world of plants
        </h1>
        </div>
        <div>
        <p className="text-gray-600 max-w-sm  ">
          Discover everything you need to know about your plants; treat them with kindness and they will take care of you.
        </p>
        </div>
        </div>
      </div>
    </div>
    <div className="carousel-container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          stretch: 0,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000, // Delay in milliseconds for auto transition
          disableOnInteraction: false, // Keeps autoplay even after user interactions
        }}
        modules={[EffectCoverflow, Autoplay]} // Remove Pagination module
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Slide 7" />
        </SwiperSlide>
        
      </Swiper>
    </div>
    </div>
  );
}

export default Carousel;
