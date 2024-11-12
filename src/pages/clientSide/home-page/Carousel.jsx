import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track active slide index

  return (
    <div className="bg-green-100 my-20">
      <div className="border">
        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730802684/Other%20data/p2jhrkjq8ytl5ajulfvx.png" alt="" className='size-40' />
      </div>

      <div className="">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={0}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // Track the active slide index
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {/* Sample slides */}
          {[...Array(14)].map((_, index) => (
            <SwiperSlide key={index} className="transition-transform duration-300">
              <img
                src={
                  index % 2 === 0
                    ? "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731384929/Amer%20Thikana/t6riufzkqe6mpckn2edp.avif"
                    : "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731384929/Amer%20Thikana/t6riufzkqe6mpckn2edp.avif"
                }
                alt={`Slide ${index + 1}`}
                className={`w-full h-auto rounded-lg ${index === activeSlide ? 'scale-110' : 'scale-100'
                  }`} // Apply scale transform on active slide
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <h1 className="lg:text-3xl text-center font-bold text-gray-800">
          আপনি কি নিরাপদ আবাসন গড়ে তোলার জন্য জমি খুঁজছেন?
        </h1>
        <p className="text-gray-600 text-center">
          ঢাকা মেট্রো রেল প্রকল্পের যাত্রাবাড়ী স্টেশন থেকে মাত্র ২০ মিনিট দূরত্বে...
        </p>
      </div>
    </div>
  );
};

export default Carousel;