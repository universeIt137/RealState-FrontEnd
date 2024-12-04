import React from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const ViewPrivacy = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();

    // Fetch content data
    const { data: singlePrivacy = {}, isSuccess,isLoading, refetch } = useQuery({
        queryKey: ['singlePrivacy'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/privacy/${id}`);
            return res.data;
        }
        
    });
    refetch()
    
    if (isLoading) return <h1 className='text-center' >Loading...</h1>;

    return (
        <div className='w-11/12 mx-auto ' >
            <h1 className='lg:text-4xl text-center font-bold ' >View Privacy</h1>
            <div>

                <h1>
                {
                    <p className='my-10 text-lg py-1 '
                        dangerouslySetInnerHTML={{
                            __html: singlePrivacy?.description
                        }}
                    ></p>

                }
                </h1>

            </div>
        </div>
    )
}

export default ViewPrivacy
