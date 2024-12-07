import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import CurrentImageSlider from '../project-details-page/components/CurrentImageSlider';

const CurrentProjectStatus = () => {
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
                <title>Amar Thikana | Current project status </title>
            </Helmet>
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-lg p-3 border-2 lg:mt-4 lg:p-6 ">
                <h2 className="lg:text-2xl text-[15px] font-semibold text-gray-800">বর্তমান প্রকল্পের অবস্থা</h2>
                {/* <ProjectFeatureImgGallery images={feature?.images} /> */}
                <CurrentImageSlider></CurrentImageSlider>
            </div>
        </div>
    )
}

export default CurrentProjectStatus
