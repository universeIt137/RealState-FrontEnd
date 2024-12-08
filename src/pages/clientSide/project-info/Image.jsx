import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import ProjectFeatureImgGallery from '../home-page/ProjectFeatureImgGallery';
import { Helmet } from 'react-helmet-async';

const Image = () => {
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
        <div className='w-11/12 mx-auto lg:my-24 my-24  ' >
            <Helmet>
                <title>Amer Thikana | Project Images </title>
            </Helmet>
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-lg p-3 border-2 lg:mt-4 lg:p-6 ">
                <h2 className="lg:text-2xl text-[15px] font-semibold text-gray-800">প্রকল্পের ছবি</h2>
                <ProjectFeatureImgGallery images={feature?.images} />
            </div>
        </div>
    )
}

export default Image
