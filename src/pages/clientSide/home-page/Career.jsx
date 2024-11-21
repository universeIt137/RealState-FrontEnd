import React from 'react';
import { BsWordpress } from 'react-icons/bs';
import { FaBookReader } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import { RiHomeOfficeFill } from 'react-icons/ri';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Career = () => {

  const axiosPublic = useAxiosPublic();
  const { data: contents = [] } = useQuery({
    queryKey: ['all jobs'],
    queryFn: async () => {
      const res = await axiosPublic.get('/career');
      return res.data;
    }
  })

  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Amer Thikana | Career</title>
      </Helmet>
      <div className="my-20 container mx-auto">
        <div className="grid lg:grid-cols-3 gap-4">
          {
            contents?.map(content =>
              <div key={content?._id} className=" ">
                <Link to={`/career-details/${content?._id}`}>
                  <div className="p-4 bg-gradient-to-r from-[#027F3D] to-[#034A26] border rounded-lg shadow-md">
                    <h2 className="md:text-3xl text-center font-bold text-white">{content?.job_title}</h2>
                    <div className="mt-2 md:text-[17px] text-white  flex flex-col  items-center">
                      <div className="flex md:text-[16px] text-sm items-center ">
                        <span className="mr-1"><RiHomeOfficeFill /></span>
                        <span className='ml-1' >Workplace: {content?.job_location}</span>
                      </div>

                      <div className="flex md:mt-0 mt-1 md:text-[16px] text-sm items-center">
                        <span className="mr-2"> <img className='w-4' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731240463/salary_ytecw8.png" alt="" /> </span>
                        <span>Salary: {content?.salary}</span>
                      </div>
                      <p className="flex md:mt-0   mt-1 gap-1 md:text-[16px] text-sm items-center ">
                        <span className='' ><GiOpenBook className="mr-[3px]" /></span>
                        <span>{content?.education}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>)
          }

        </div>
      </div>
    </>

  );
};

export default Career;
