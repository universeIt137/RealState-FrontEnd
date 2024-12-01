import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AboutUs = () => {
    const axiosPublic = useAxiosPublic();
    window.scrollTo(0, 0);

    // Fetch data using React Query
    const { data: content = {}, isLoading, isError } = useQuery({
        queryKey: ["aboutUsData"],
        queryFn: async () => {
            const res = await axiosPublic.get("/about-us");
            return res.data[0]; // Assuming you need the first item
        },
        staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
        retry: 2, // Retry twice if the request fails
    });

    // Handle Loading State
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-gray-500">Loading...</p>
            </div>
        );
    }

    // Handle Error State
    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-red-500">Failed to load content. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto bg-white mt-16 lg:mt-20">
            <Helmet>
                <title>Amar Thikana | About Us</title>
            </Helmet>
            {/* First Section */}
            <div className="lg:py-10 py-4">
                <div className="bg-white">
                    <div className="flex flex-col lg:items-center text-justify lg:flex-row lg:text-justify">
                        <div className="md:w-3/5">
                            <h1 className="lg:text-4xl font-bold text-black">
                                {content?.firstHeading}
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
                        </div>
                        <div>
                            <h2 className="lg:text-4xl lg:mt-3 text-center lg:text-start mt-3 font-bold text-black">
                                {content?.secondHeading}
                            </h2>
                            <p className="lg:mt-4 mt-1 text-[10px] lg:text-[20px] text-black">
                                {content?.secondDesc}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Third Section */}
                <div className="bg-white my-4 lg:my-10">
                    <div className="flex flex-col lg:flex-row-reverse lg:gap-8 items-center">
                        <div className="relative">
                            <img
                                src={content?.thirdLogoUrl}
                                alt="Building"
                                className="rounded-lg block lg:ml-0 shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="lg:text-4xl lg:mt-3 text-center lg:text-start mt-3 font-bold text-black">
                                {content?.thirdHeading}
                            </h2>
                            <p className="lg:mt-4 mt-1 text-[10px] lg:text-[20px] text-black">
                                {content?.thirdDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
