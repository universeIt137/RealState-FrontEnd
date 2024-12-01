import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { LuArrowUpRight } from 'react-icons/lu';

const initiatives = [
  {
    title: "Affordable Housing",
    description:
      "We are committed to making housing accessible to everyone. Our affordable housing projects aim to provide quality living spaces to underserved communities.",
    link: "#",
    id: 1,
  },
  {
    title: "Environmental Sustainability",
    description:
      "Our green building practices focus on reducing environmental impact, from energy-efficient designs to waste management.",
    link: "#",
    id: 2,
  },
  {
    title: "Community Development",
    description:
      "We partner with local organizations to support education, healthcare, and economic development in the communities we serve.",
    link: "#",
    id: 3,
  },
  // You can add more initiatives here
];

const CSRPage = () => {
  window.scrollTo(0, 0);

  const axiosPublic = useAxiosPublic();
  const { data: contents = [] } = useQuery({
    queryKey: ['all csr'],
    queryFn: async () => {
      const res = await axiosPublic.get('/csr');
      return res.data;
    }
  })

  return (
    <>
      <Helmet>
        <title>Amar Thikana | Corporate Social Responsibility</title>
      </Helmet>

      <div className="w-11/12 mx-auto  ">
        <div className='my-20 lg:mt-28  ' >

          {/* Header Section */}
          <header className="bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 text-white rounded-lg shadow-lg p-4 lg:p-8 text-center mb-2 lg:mb-10">
            <h1 className="lg:text-4xl font-bold lg:mb-2">Our Commitment to Corporate Social Responsibility</h1>
            <p className="lg:text-lg text-[9px] mt-1 lg:mt-2">
              At Amar Thikana, we believe in building not just homes, but also a better future for our communities and our planet.
            </p>
          </header>

          {/* CSR Initiatives Section */}
          <section className=" rounded-lg  p-4 mt-6 lg:p-8 mb-5 lg:mb-10">
            <h2 className="lg:text-4xl font-bold text-green-600 text-center mb-3 lg:mb-6">Our CSR Initiatives</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {
                contents?.map((data, index) =>
                  <Link key={index} to={`/blog-details/${data?._id}`}>
                    <div className={`card bg-gradient-to-r from-[#027F3D] to-[#034A26] text-white mx-auto sm:max-w-[300px] min-h-[280px] lg:min-h-[350px]  flex flex-col justify-between border`}>
                      <figure className="h-[100px] sm:h-[170px] relative">

                        <img
                          className="w-full h-full object-fill rounded-lg shadow-md my-auto "
                          src={data?.BannerImageUrl}
                          alt="Course Banner"
                        />
                      </figure>
                      <div className="card-body  flex flex-col justify-between px-3 sm:px-8 ">
                        <div className=" ">
                          <div className='lg:h-16' >
                            <h2 className="font-bold text-text_color  text-[12px] lg:text-lg text-center">
                              {data?.title.slice(0, 130)}
                            </h2>
                          </div>

                          <div className=' h-24 ' >
                            <p className="my-auto">
                              {/* <div className=''>
                                <p dangerouslySetInnerHTML={{ __html: data?.description.slice(0, 100) }} className='px-2'>
                                </p>
                              </div> */}
                              
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>)
              }
            </div>
          </section>
        </div>

      </div>
    </>
  );
};

export default CSRPage;