import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const CoreValue = () => {
    const axiosPublic = useAxiosPublic();

    const { data: webContent = {} } = useQuery({
        queryKey: ['website content'],
        queryFn: async () => {
            const res = await axiosPublic.get('website-content');
            return res.data[0];
        }
    })
    return (
        <div>
            {/* Core Values Section */}
            <section className="p-3 md:p-12 rounded-lg shadow-lg my-4 md:my-12">
                <div>
                    <h2 className="md:text-4xl font-bold text-green-600 text-center md:mb-6">
                        আমাদের বৈশিষ্ট্য
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {webContent.core_values
                        ?.map((value, index) => (
                            <div
                                key={index}
                                className=" bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 p-3 md:p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
                            >
                                <h3 className="md:text-2xl font-bold text-white md:mb-4">
                                    {value?.heading}
                                </h3>
                                <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
                                    {value?.short_des}
                                </p>
                            </div>
                        ))}
                </div>
            </section>
        </div>
    )
}

export default CoreValue