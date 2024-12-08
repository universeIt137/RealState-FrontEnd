import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Characteristics2 from '../mission-and-vission/Characteristics2';
import { Helmet } from 'react-helmet-async';

const Citizen = () => {
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
        <div className='w-11/12 mx-auto my-24 ' >
            <Helmet>
                <title>Amer Thikana | নাগরিক সুবিধা</title>
            </Helmet>
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
            
        </div>
    )
}

export default Citizen
