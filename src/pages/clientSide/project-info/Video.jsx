import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ProjectFeatureVideoGallery from '../home-page/ProjectFeatureVideoGallery';
import { Helmet } from 'react-helmet-async';

const Video = () => {
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
        <div className=' w-11/12 mx-auto my-24 ' >
            <Helmet>
                <title>Amer Thikana | Project Video </title>
            </Helmet>
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
        </div>
    )
}

export default Video
