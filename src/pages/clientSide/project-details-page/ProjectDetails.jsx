import React from 'react';
import ProjectFeatureImgGallery from '../home-page/ProjectFeatureImgGallery';
import ProjectFeatureVideoGallery from '../home-page/ProjectFeatureVideoGallery';
import ProjectLayout from '../project-layout-page/ProjectLayout';
import VideoGalleryPage from '../video-gallery-page/VideoGalleryPage';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const ProjectDetails = () => {
    window.scrollTo(0, 0);
    const property = {
        heading: "Luxurious Apartment in Downtown",
        location: "Dhaka-Mawa 300 Feet Road, Amar Thikana, Green City.",
        images: [
            "https://via.placeholder.com/800x400", // Replace with actual image URLs
            "https://via.placeholder.com/800x400",
        ],
        video: "https://www.youtube.com/embed/your_video_id", // Replace with actual video URL
        description: "This stunning downtown apartment offers breathtaking city views, modern amenities, and convenient access to shops and restaurants.",

    };

    const amenitiesList = [
        "Swimming Pool",
        "Gym & Fitness Center",
        "24/7 Security",
        "Parking Facility",
        "Playground",
        "Community Hall",
    ];



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
                <h1 className="lg:text-4xl text-[17px]  font-bold text-black">আমার ঠিকান গ্রিন সিটি</h1>

                <h1 className="lg:text-xl text-[15px] lg:text-center text-justify font-bold text-black">নিরাপদ জীবনযাপনের স্থান নিশ্চিত করুন – আজই জমির মালিক হোন!</h1>
                <p className="lg:text-[16px] text-justify lg:text-center  text-[10px] lg:mb-0 mb-3 text-black">প্রকল্পের অবস্থান: ঢাকা-মাওয়া ৩০০ ফুট রোড, আমার ঠিকানা, গ্রীন সিটি।</p>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-lg p-3 border-2 lg:mt-4 lg:p-6 ">
                <h2 className="lg:text-2xl text-[15px] font-semibold text-gray-800">Project Images</h2>
                <ProjectFeatureImgGallery />
            </div>

            {/* Video Section */}
            <div className="bg-white border-2 rounded-lg shadow-lg lg:px-6 p-3 my-4 lg:my-8 lg:space-y-4">
                <h2 className="lg:text-2xl text-[15px] font-semibold text-gray-800">Project Video</h2>
                <div className='block mt-1  lg:mt-0  ' >
                    <div className="">
                        <ProjectFeatureVideoGallery></ProjectFeatureVideoGallery>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-3 text-justify lg:p-6 space-y-1 lg:space-y-4">
                <h2 className="text-black lg:text-3xl text-[16px] font-bold ">Project Description</h2>
                <p className="text-black lg:text-[17px] text-[10px]  ">{feature?.description}</p>
            </div>

            {/* Features */}
            <div className=" rounded-lg shadow-lg my-6 border-2 p-3 lg:p-6 lg:space-y-4">
                <h2 className="text-black lg:text-3xl text-[16px] font-bold">Project Features</h2>
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
            {/* Project Layout  */}
            <h1 className='lg:text-4xl font-bold lg:mt-5 lg:mb-5 lg:py-2 ml-6 '  >Project Layout</h1>
            <div className='' >
                <ProjectLayout></ProjectLayout>
            </div>
        </div>
    );
};

export default ProjectDetails;
