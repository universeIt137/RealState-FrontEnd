import React from 'react';
import ProjectFeatureImgGallery from '../home-page/ProjectFeatureImgGallery';
import ProjectFeatureVideoGallery from '../home-page/ProjectFeatureVideoGallery';
import ProjectLayout from '../project-layout-page/ProjectLayout';
import VideoGalleryPage from '../video-gallery-page/VideoGalleryPage';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import ProjectLayout2 from '../project-layout-page/ProjectLayout2';
import Characteristics from '../mission-and-vission/Characteristics';
import ProjectPage from '../home-page/ProjectPage';
import Characteristics2 from '../mission-and-vission/Characteristics2';
import CurrentImageSlider from './components/CurrentImageSlider';
import CustomMarquee from '../../../components/clientSide/CustomMarquee';
import PrivacyPolicy from '../../../components/clientSide/PrivacyPolicy';

const ProjectDetails = () => {
    window.scrollTo(0, 0);



    const axiosPublic = useAxiosPublic();
    const { data: feature = {} } = useQuery({
        queryKey: ['features'],
        queryFn: async () => {
            const res = await axiosPublic.get('/feature');
            return res.data[0];
        }
    })




    return (
        <div className="w-11/12  mx-auto px-4 py-20 lg:py-20 ">
            <Helmet>
                <title>Amar Thikana | Project Details</title>
            </Helmet>
            {/* Heading and Location */}
            <div className=" text-center lg:space-y-2">
                <h1 className="lg:text-4xl text-[17px]  font-bold text-black">আমার ঠিকানা গ্রীন সিটি</h1>

                <h1 className="lg:text-xl text-[15px] lg:text-center text-justify font-bold text-black">নিরাপদ জীবনযাপনের স্থান নিশ্চিত করুন – আজই জমির মালিক হোন!</h1>
                <p className="lg:text-[16px] text-justify lg:text-center  text-[10px] lg:mb-0 mb-3 text-black"><span className='font-bold'>প্রকল্পের অবস্থান:</span> ঢাকা গুলিস্থান জিরো পয়েন্ট থেকে মাত্র ২০ মিনিট দূরত্ব, বাবুবাজার ব্রীজ থেকে ১০ মিনিটের দূরত্বে ঢাকা-মাওয়া ৪০০ ফিট এক্সপ্রেস হাইওয়ের সন্নিকটে হাসাড়ায় গড়ে উঠছে "আমার ঠিকানা গ্রীন সিটি" সম্পূর্ন সবুজে ঘেরা ও আন্তর্জাতিক মানের সকল নাগরিক সুবিধা সম্বলিত আবাসন প্রকল্প "আমার ঠিকানা গ্রীন সিটি"</p>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-lg p-3 border-2 lg:mt-4 lg:p-6 ">
                <h2 className="lg:text-2xl text-[15px] font-semibold text-gray-800">প্রকল্পের ছবি</h2>
                <ProjectFeatureImgGallery images={feature?.images} />
            </div>

            {/* Video Section */}
            <div className="bg-white border-2 rounded-lg shadow-lg lg:px-6 p-3 my-4 lg:my-8 lg:space-y-4">
                <h2 className="lg:text-2xl text-[15px] font-semibold text-gray-800">প্রকল্প ভিডিও</h2>
                <div className='block mt-1  lg:mt-0  ' >
                    <div className="">
                        <ProjectFeatureVideoGallery videosData={feature?.videos}></ProjectFeatureVideoGallery>
                        {/* <CustomMarquee></CustomMarquee> */}
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-3 text-justify lg:p-6 space-y-1 lg:space-y-4">
                <h2 className="text-black lg:text-3xl text-[16px] font-bold ">প্রকল্পের বিবরণ</h2>
                <p className="text-black lg:text-[17px] text-[10px]  ">{feature?.description}</p>
            </div>

            {/* Features */}
            <div className=" rounded-lg shadow-lg my-6 border-2 p-3 lg:p-6 lg:space-y-4">
                <h2 className="text-black lg:text-3xl text-[16px] font-bold">নাগরিক সুবিধা</h2>
                <div className="md:mb-8">
                    <ul className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 text-black gap-2 mt-2 lg:mt-0 lg:gap-4">
                        {feature.contents?.map((amenity, index) => (
                            <li
                                key={index}
                                className="flex items-center shadow-lg border border-gray-300 p-2 md:p-4 rounded-lg space-x-1 md:space-x-2"
                            >
                                <span className="md:ml-0 ml-2 text-[10px] md:text-[16px]">✅</span>
                                <span className="text-[10px] md:text-[16px]">{amenity.content_name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Characteristics2></Characteristics2>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-lg p-3 border-2 lg:mt-4 lg:p-6 ">
                <h2 className="lg:text-2xl text-[15px] font-semibold text-gray-800">বর্তমান প্রকল্পের অবস্থা</h2>
                {/* <ProjectFeatureImgGallery images={feature?.images} /> */}
                <CurrentImageSlider></CurrentImageSlider>
            </div>
            {/* Project Layout  */}
            <h1 className='lg:text-4xl font-bold lg:mt-5 lg:mb-5 lg:py-2 ml-6 '  >প্রজেক্ট লেআউট</h1>
            <div className='my-5' >
                {/* <ProjectLayout></ProjectLayout> */}
                <ProjectLayout2></ProjectLayout2>
            </div>
            <div className="mt-20 ">
                <ProjectPage></ProjectPage>
            </div>

           

            {/* Google Map */}
            <div className=" hover:scale-105 transition-transform duration-300 ease-out w-full flex items-center justify-center ">
                <iframe
                    className="w-full h-[250px] lg:h-[320px] rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.259359142789!2d90.27558088302615!3d23.593039068087254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375597000f30fc05%3A0xd0f86bbf6893c0d9!2sAmar%20Thikana%20Green%20City!5e0!3m2!1sen!2sbd!4v1732966778105!5m2!1sen!2sbd"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <div className="">
                <PrivacyPolicy></PrivacyPolicy>
            </div>
        </div>
    );
};

export default ProjectDetails;
