import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Top3Members = () => {
    const axiosPublic = useAxiosPublic();
    const { data: top3members = [] } = useQuery({
        queryKey: ['top3members'],
        queryFn: async () => {
            const res = await axiosPublic.get('/top3');
            return res.data;
        },
    });

    return (
        <div className="lg:w-11/12 mx-auto lg:mb-14 lg:border  lg:py-5 lg:px-14 lg:shadow-lg rounded-lg">
            <Helmet>
                <title>Management Information</title>
            </Helmet>
            <p className="lg:text-3xl font-bold text-green text-center lg:my-5 ">Top 3 of the  { top3members[0]?.month } month</p>
            {/* Responsive Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {top3members?.map((data) => (
                    <div
                        key={data?._id}
                        className="bg-gradient-to-r from-[#30ac6a] to-[#068b48] bg-opacity-90 p-4 rounded-lg text-black"
                    >
                        <div className="relative bg-gray-100 rounded-md shadow-md">
                            <div className="relative">
                                <div className="flex gap-1 justify-end p-5 items-center">
                                    <img
                                        className="lg:h-12 object-cover"
                                        src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731399400/Artboard_2300_zteplb.png"
                                        alt="Logo"
                                    />
                                </div>
                                <div className=" h-[50px] lg:h-[150px] relative flex flex-col justify-center items-center gap-3">
                                    <div className="bg-gradient-to-r from-[#30ac6a] to-[#068b48] size-12 lg:size-28 rounded-full relative overflow-hidden">
                                        <img
                                            className="w-full h-full rounded-full object-cover p-1"
                                            src={data?.member?.ImgUrl}
                                           
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h2 className="text-sm lg:text-base font-bold capitalize">{data?.member?.name}</h2>
                                    <h2 className="text-xs lg:text-sm">{data?.member?.jobPost}</h2>
                                    <h2 className="text-xs lg:text-sm pt-1">{data?.memver?.phone}</h2>
                                    <h2 className="text-xs lg:text-sm break-words">{data?.member?.email}</h2>
                                </div>
                                <div className="pb-5 lg:pb-7">
                                    <div className="bg-gradient-to-r from-[#30ac6a] to-[#068b48] w-[80%] text-white font-semibold mt-5 ml-auto py-1 text-xs lg:text-sm pl-5">
                                        <p>Month: {data?.month}</p>
                                        <p>Position: {data?.position}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Top3Members;
