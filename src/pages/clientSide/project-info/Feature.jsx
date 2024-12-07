import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Characteristics2 from '../mission-and-vission/Characteristics2';
import { Helmet } from 'react-helmet-async';

const Feature = () => {
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
    <div className='my-24' >
        <Helmet>
            <title>Amar Thikana | Project Feature </title>
        </Helmet>
        <Characteristics2></Characteristics2>
    </div>
  )
}

export default Feature
