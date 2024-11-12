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
    <div className="bg-green-100 lg:mt-24 mt-16 ">
      <div className="">
        <div className="flex flex-col justify-center items-center py-3 lg:w-1/2 mx-2 lg:mx-auto gap-4">
          <div className="">
            <img
              className="md:block md:mx-auto border-2 size-20  rounded-full border-white shadow-2xl"
              src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731389139/Amer%20Thikana/uptnnqpi80uojvcs7bzh.png"
              alt=""
            />

          </div>
          <div className="text-center">
            <p className="font-bold text-4xl">সুখের ঠিকানা, সুরক্ষার প্রতিশ্রুতি - <span className="text-green">আমার ঠিকানা</span></p>
            <p>
              ঢাকা মেট্রো রেলের কাছাকাছি আধুনিক সুযোগ-সুবিধাসম্পন্ন এবং নিরাপদ পরিবেশে নির্মিত আমার ঠিকানা আপনার জন্য নিয়ে এসেছে স্বপ্নের একটি ঠিকানা।
            </p>
          </div>
        </div>
        
      </div>

      <div className="py-5">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
         
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          spaceBetween={100} // This should create space between slides
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // Track the active slide index
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
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
            <SwiperSlide key={index} className="transition-transform duration-300 mx-2">
              <img
                src={
                  index % 2 === 0
                    ? "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731384929/Amer%20Thikana/t6riufzkqe6mpckn2edp.avif"
                    : "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731384929/Amer%20Thikana/t6riufzkqe6mpckn2edp.avif"
                }
                alt={`Slide ${index + 1}`}
                className={`w-full h-auto transition-transform duration-300 ${index === activeSlide ? 'scale-110 rounded-2xl' : 'scale-100 rounded-lg'
                  }`} // Apply scale transform and rounded corners on active slide
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
        সুরক্ষিত পরিবেশ এবং সর্বাধুনিক সুবিধাসম্পন্ন আবাসনের জন্য আমার ঠিকানা - আপনার জন্য একটি নির্ভরযোগ্য এবং স্থায়ী সমাধান।
        </p>
      </div>
    </div>
  );
};

export default Carousel;
