import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// Import required modules
import { EffectCoverflow, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className="bg-green-100">
      <div className="grid grid-cols-2  items-center gap-20 justify-evenly w-11/12 mx-auto h-[50vh]">
        <div className="">
          <div className="">
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730796119/Other%20data/kpgcs1vgyxe18ggitltu.png" alt="" className='size-11' />
          </div>
          <div className='space-y-2'>
            <div className="">
              <h3 className="text-lg text-green-700 font-semibold">আমার ঠিকানা </h3>
            </div>
            <div className="">
              <h1 className="lg:text-3xl font-bold text-gray-800">
                আপনি কি নিরাপদ আবাসন গড়ে তোলার জন্য জমি খুঁজছেন?
              </h1>
            </div>

            <div>
              <p className="text-gray-600 ">
                ঢাকা মেট্রো রেল প্রকল্পের যাত্রাবাড়ী স্টেশন থেকে মাত্র ২০ মিনিট দূরত্বে, কাঁচপুর ব্রিজ থেকে ১০ মিনিট দূরত্বে ঢাকা-নারায়ণগঞ্জ লিংক রোডের পাশে আমার ঠিকানা গ্রীন সিটি প্রকল্পটি অবস্থিত। অত্যাধুনিক সবুজ পরিবেশে ৪০০ বিঘা জমির উপর, আধুনিক সুযোগ সুবিধা সম্বলিত পরিকল্পিত আবাসিক প্রকল্পটি তৈরি করা হচ্ছে। এটি আদর্শ গ্রীন সিটি হবে ইনশাআল্লাহ।
              </p>
            </div>
          </div>

        </div>

        <div className="">
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730802684/Other%20data/p2jhrkjq8ytl5ajulfvx.png" alt="" />
        </div>
      </div>

      <div className="carousel-container ">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={3}            // Show three slides at a time
          centeredSlides={false}        // Disable centered slides so the focus is on the left
          spaceBetween={60}             // Set gap between slides
          coverflowEffect={{
            rotate: 0,                // No rotation
            stretch: 0,
            depth: 500,               // Slight zoom for the focused slide
            modifier: 1,
            slideShadows: false,      // Remove shadows for cleaner look
          }}
          autoplay={{
            delay: 1000,              // Delay for autoplay
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >


          <SwiperSlide>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799883/Amer%20Thikana/xq2hxasye6juq4e5pzti.jpg" alt="Slide 3" className="w-full h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799878/Amer%20Thikana/m0zytoaeovvwdx5pkcqa.jpg" alt="Slide 4" className="w-full h-auto rounded-lg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799883/Amer%20Thikana/xq2hxasye6juq4e5pzti.jpg" alt="Slide 3" className="w-full h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799878/Amer%20Thikana/m0zytoaeovvwdx5pkcqa.jpg" alt="Slide 4" className="w-full h-auto rounded-lg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799883/Amer%20Thikana/xq2hxasye6juq4e5pzti.jpg" alt="Slide 3" className="w-full h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799878/Amer%20Thikana/m0zytoaeovvwdx5pkcqa.jpg" alt="Slide 4" className="w-full h-auto rounded-lg" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799883/Amer%20Thikana/xq2hxasye6juq4e5pzti.jpg" alt="Slide 3" className="w-full h-auto rounded-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799878/Amer%20Thikana/m0zytoaeovvwdx5pkcqa.jpg" alt="Slide 4" className="w-full h-auto rounded-lg" />
          </SwiperSlide>

        </Swiper>
      </div>

    </div>
  );
}

export default Carousel;
