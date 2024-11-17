import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

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
  return (
    <>
      <Helmet>
        <title>Amar Thikana | Corporate Social Responsibility</title>
      </Helmet>

      <div className="w-11/12 mx-auto  ">
        <div className='my-20 lg:mt-28  ' >

          {/* Header Section */}
          <header className="bg-[#027F3D] opacity-70 text-white rounded-lg shadow-lg p-4 lg:p-8 text-center mb-2 lg:mb-10">
            <h1 className="lg:text-4xl font-bold lg:mb-2">Our Commitment to Corporate Social Responsibility</h1>
            <p className="lg:text-lg text-[9px] mt-1 lg:mt-2">
              At Amar Thikana, we believe in building not just homes, but also a better future for our communities and our planet.
            </p>
          </header>

          {/* CSR Initiatives Section */}
          <section className=" rounded-lg  p-4 mt-6 lg:p-8 mb-5 lg:mb-10">
            <h2 className="lg:text-4xl font-bold text-green-600 text-center mb-3 lg:mb-6">Our CSR Initiatives</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="p-3 border-2 lg:p-6 lg:text-start  text-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <Link to={`/blog-details/${initiative.id}`}>
                    <div className=" lg:my-auto overflow-hidden">
                      <h3 className="lg:text-2xl font-bold text-center text-black opacity-70 lg:mb-4">{initiative.title}</h3>
                    </div>
                    <figure className="px-10 ">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                    </figure>
                    <div className=" lg:h-32 lg:my-auto overflow-hidden">
                      <p className="text-black opacity-70 text-justify my-4 text-[9px] lg:text-[16px] lg:mb-4">{initiative.description}</p>
                    </div>
                    <div className=" ">
                      <Link
                        to={`/blog-details/${initiative.id}`}
                        className="text-[9px] lg:text-[16px] text-black opacity-70 text-center block font-semibold hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </>
  );
};

export default CSRPage;