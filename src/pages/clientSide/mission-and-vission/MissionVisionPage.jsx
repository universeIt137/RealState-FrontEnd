import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import CoreValue from './CoreValue';
import Characteristics from './Characteristics';
const coreValues = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all our dealings.",
  },
  {
    title: "Sustainability",
    description:
      "We focus on eco-friendly development, respecting the planet in every project we undertake.",
  },
  {
    title: "Community",
    description:
      "We build communities, not just structures, and foster relationships that last a lifetime.",
  },
];
const MissionVision = () => {
  window.scrollTo(0, 0);

  const axiosPublic = useAxiosPublic();

  const { data: webContent = {} } = useQuery({
    queryKey: ['website content'],
    queryFn: async () => {
      const res = await axiosPublic.get('website-content');
      return res.data[0];
    }
  })

  return (
    <>
      <Helmet>
        <title>Amar Thikana | Mission & Vision</title>
      </Helmet>

      <div className='w-11/12 mx-auto'>
        {/* Header */}
        <header className="text-center py-4 mt-20 md:mt-28 md:py-16 bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 text-white rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
          <h1 className="md:text-4xl  font-bold">Our Mission & Vision</h1>
          <p className="text-[10px] md:text-lg md:mt-2 opacity-75">
            Leading the way in sustainable and community-focused real estate.
          </p>
        </header>

        {/* Mission Section */}
        <section className="bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 p-3 md:p-12 rounded-lg shadow-lg my-4 md:my-12 transform transition duration-300 hover:scale-105">
          <div>
            <h2 className=" md:text-4xl font-bold text-white text-center  md:mb-4">Our Mission</h2>
          </div>
          <div>
            <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
              {webContent?.mission_desc}
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 p-3 md:p-12 rounded-lg shadow-lg my-4 md:my-12 transform transition duration-300 hover:scale-105">
          <div className='md:h-24 my-auto ' >
            <h2 className=" md:text-4xl font-bold text-white text-center md:mb-4">Our Vision</h2>
          </div>
          <div className='' >
            <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
              {webContent?.vision_desc}
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        {/* <section className="p-3 md:p-12 rounded-lg shadow-lg my-4 md:my-12">
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
                  <h3 className="md:text-4xl font-bold text-white md:mb-4">
                    {value?.heading}
                  </h3>
                  <p className="text-white text-[10px] md:text-lg text-center leading-relaxed">
                    {value?.short_des}
                  </p>
                </div>
              ))}
          </div>
        </section> */}
        <Characteristics></Characteristics>


      </div>
    </>
  );
};

export default MissionVision;
