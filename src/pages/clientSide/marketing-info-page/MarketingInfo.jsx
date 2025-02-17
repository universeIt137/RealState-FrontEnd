import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Top3Members from './Top3Members';

const MarketingInfo = () => {
    const axiosPublic = useAxiosPublic();
    const { data: managementData = [] } = useQuery({
        queryKey: ['managementData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/marketing');
            return res.data;
        },
    });

    return (
        <div className="w-11/12 mx-auto lg:my-20 mt-20">
            <Helmet>
                <title>Management Information</title>
            </Helmet>
            <p className="lg:text-5xl text-3xl font-bold text-green mb-3 text-center lg:py-14">Our Marketing Team</p>

            <div className="lg:w-10/12 mx-auto">
            <Top3Members></Top3Members>
            </div>
            {/* Responsive Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {managementData?.map(({ _id, name, jobPost, phone, email, experience, ImgUrl }) => (
                    <div
                        key={_id}
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
                                            src={ImgUrl}
                                            alt={name}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h2 className="text-sm lg:text-base font-bold capitalize">{name}</h2>
                                    <h2 className="text-xs lg:text-sm">{jobPost}</h2>
                                    <h2 className="text-xs lg:text-sm pt-1">{phone}</h2>
                                    <h2 className="text-xs lg:text-sm break-words">{email}</h2>
                                </div>
                                <div className="pb-5 lg:pb-7">
                                    <div className="bg-gradient-to-r from-[#30ac6a] to-[#068b48] w-[50%] text-white font-semibold mt-5 ml-auto py-1 text-xs lg:text-sm pl-5">
                                        <p>Experience:</p>
                                        <p>{experience} Years +</p>
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

export default MarketingInfo;
