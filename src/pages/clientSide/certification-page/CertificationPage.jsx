import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const awards = [
  {
    id: 1,
    title: "REHAB CERTIFICATIONS  FAIR 2019",
    category: "Awards",
    image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731217393/certificate_rizubv.jpg",
  },
  {
    id: 2,
    title: "REHAB FAIR 2016",
    category: "Awards",
    image: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731217466/img-2-certificate_y39ngn.png",
  },
  // Additional award objects...
];

const CertificationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Amar Thikana | Certification Page</title>
      </Helmet>
      <div className='w-11/12 mx-auto my-10 md:my-20 ' >
      <div className="bg-gray-100 shadow-lg py-10 md:py-12">
        <h2 className="md:text-4xl  font-bold text-center text-[#21c45e] mb-4 md:mb-10">
          Awards of AmarThikana Properties Limited
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-3 md:px-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-[#21c45e] border border-transparent rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:border-yellow-400"
            >
              <div className='md:h-56 overflow-hidden my-auto ' >
                <img
                    src={award.image}
                    alt={award.title}
                    className="md:w-full w-full md:h-auto h-auto object-cover"
                />
              </div>
              <div className="md:p-4 p-2 ">
                <div className="md:min-h-16 md:overflow-hidden md:my-auto ">
                  <h3 className="md:text-lg text-[10px] font-semibold text-white">
                    {award.title}
                  </h3>
                </div>
                <p className=" text-[9px] md:text-sm text-white">Category: {award.category}</p>
               <div className='md:my-auto' >
               <Link
                  to={""}
                  className="text-white md:text-lg text-[10px] -mt-2 md:mt-4 inline-block font-semibold hover:underline"
                  aria-label={`Read more about ${award.title}`}
                >
                  Read More
                </Link>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default CertificationPage;
