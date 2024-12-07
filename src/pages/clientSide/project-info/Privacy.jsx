import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import PrivacyPolicy from '../../../components/clientSide/PrivacyPolicy';

const Privacy = () => {
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
                <title>Amar Thikana | Privacy Policy </title>
            </Helmet>
            <div className="">
                <PrivacyPolicy></PrivacyPolicy>
            </div>
        </div>
    )
}

export default Privacy
