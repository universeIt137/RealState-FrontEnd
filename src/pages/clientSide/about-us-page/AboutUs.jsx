import React from "react";
import InfoCard from "./InfoCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

// Content Data
const aboutUsContent = {
    header: {
        title: "Creating a Better",
        highlight: "Residence Solutions",
        description:
            "Amar Thikana is a Bangladesh-based Real Estate Company. Amar Thikana specializes in offering top-notch real estate solutions, maintaining a high standard of property development and management. The main objective is to provide customers with the best possible living and investment opportunities.",
        imageUrl:
            "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731389139/Amer%20Thikana/uptnnqpi80uojvcs7bzh.png",
    },
    milestones: {
        imageUrl:
            "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731500291/Amer%20Thikana/ynqygmetpfbezjjofbez.jpg",
        badgeText: "Celebrating 23 Years of Success",
        about: {
            title: "ABOUT",
            highlight: "AMAR THIKANA",
            description: [
                "Amar Thikana's commitment to providing quality real estate solutions has earned the trust of customers and partners worldwide.",
                "Amar Thikana has been serving the real estate industry in Bangladesh since 2020. We provide exceptional property management and development services. At present, we are expanding our presence in India, Canada, South Africa, Singapore, and Mexico.",
            ],
            points: [
                "Successfully developed and sold over 500 properties.",
                "10,000+ satisfied homeowners and investors.",
                "Over 20 years of experience in the real estate market.",
                "100% commitment to quality and customer satisfaction.",
            ],
        },
    },
    aboutUs: {
        title: "WHO WE ARE",
        description: [
            "Amar Thikana is one of the leading real estate companies in Bangladesh.",
            "Amar Thikana is dedicated to helping individuals and businesses find their ideal properties. Our approach begins with a thorough understanding of every client's unique needs and preferences.",
            "With years of experience, our leadership team brings unparalleled expertise, enabling us to deliver tailored solutions for diverse property requirements.",
        ],
        imageUrl:
            "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731500291/Amer%20Thikana/ynqygmetpfbezjjofbez.jpg",
    },
};



const AboutUs = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    const { data: content = {} } = useQuery({
        queryKey: ['all data'],
        queryFn: async () => {
            const res = await axiosPublic.get('/about-us');
            return res.data[0];
        }
    })

    console.log(content);

    return (
        <div className="w-11/12 mx-auto  bg-white mt-16 lg:mt-20">
            <Helmet>
                <title>Amar Thikana | About Us </title>
            </Helmet>
            {/* First Section */}
            <div className="lg:py-10 py-4">
                <div className="bg-white">
                    <div className="flex flex-col lg:items-center text-justify lg:flex-row lg:text-justify">
                        <div className="md:w-3/5">
                            <h1 className="lg:text-4xl font-bold  text-black">
                                {content?.firstHeading}
                                <span className="text-[#027f3d] bg-opacity-70">

                                </span>
                            </h1>
                            <p className="lg:mt-4 mt-1 text-[10px] lg:text-[20px] text-black">
                                {content?.firstDes}
                            </p>
                        </div>
                        <div className="lg:mt-4 mt-2 lg:w-2/5 flex justify-center lg:justify-end">
                            <img
                                src={content?.firstLogoUrl}
                                alt="Real Estate Solutions"
                                className="w-40 md:w-48"
                            />
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className="bg-white my-4 lg:my-10">
                    <div className="flex flex-col lg:flex-row lg:gap-8 items-center">
                        <div className="relative">
                            <img
                                src={content?.secondLogoUrl}
                                alt="Building"
                                className="rounded-lg block lg:ml-0 shadow-lg"
                            />
                            <div className="absolute bottom-4 left-8 bg-[#027f3d] bg-opacity-70 text-white px-3 py-1 rounded-full shadow-md">
                                <span className="lg:text-sm text-[10px]">
                                    {aboutUsContent.milestones.badgeText}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h2 className="lg:text-4xl lg:mt-3 text-center lg:text-start mt-3 font-bold text-black">
                                {content?.secondHeading}
                                <span className="text-[#027f3d] bg-opacity-70">
                                    
                                </span>
                            </h2>
                            {aboutUsContent.milestones.about.description.map(
                                (text, index) => (
                                    <p
                                        key={index}
                                        className="lg:mt-4 mt-1 lg:text-[20px] text-[10px] text-justify text-black"
                                    >
                                        {content?.secondDesc}
                                    </p>
                                )
                            )}
                            <ul className="lg:mt-6 mt-2 lg:text-lg text-[10px] space-y-1 lg:space-y-3">
                                {aboutUsContent.milestones.about.points.map((point, index) => (
                                    <li key={index} className="flex items-center">
                                       
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Third Section */}
                <div className="bg-white">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
                        <div>
                            <h2 className="lg:text-4xl text-center font-bold text-black lg:text-justify">
                                {content?.thirdHeading}
                                <span className="text-black underline">
                                    
                                </span>{" "}
                                
                            </h2>
                            {aboutUsContent.aboutUs.description.map((text, index) => (
                                <p
                                    key={index}
                                    className="lg:mt-4 lg:text-justify text-justify mt-1 text-[10px] lg:text-lg text-black"
                                >
                                    {content?.thirdDesc}
                                </p>
                            ))}
                        </div>
                        <div className="relative">
                            <div className="w-[50vh] aspect-square overflow-hidden rounded-full shadow-lg">
                                <img
                                    src={content?.thirdLogoUrl}
                                    alt="Team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <InfoCard></InfoCard> */}
            </div>
        </div>
    );
};

export default AboutUs;
