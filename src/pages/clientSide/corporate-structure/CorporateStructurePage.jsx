import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CorporateStructurePage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Helmet>
        <title>Amar Thikana | Corporate Structure</title>
      </Helmet>

      <div className='w-11/12 mx-auto'>
        <div className="bg-gray-50 my-20 md:my-24">
          {/* Header */}
          <header className="text-center py-5 md:py-10 bg-[#21c45e] text-white rounded-lg shadow-lg">
            <h1 className="md:text-4xl font-bold">Corporate Structure</h1>
            <p className="md:text-lg text-[10px] md:mt-2">Meet the Team Leading Amar Thikana Properties Ltd.</p>
          </header>

          {/* Organizational Chart Section */}
          <section className="p-4 md:p-8 rounded-lg shadow-md my-4 md:my-8">
            <h1 className="md:text-4xl font-bold text-green-600 text-center mb-3 md:mb-6">Our Leadership</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* CEO */}
              <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h3 className="md:text-2xl text-[14px] font-bold text-white md:mb-4">CEO</h3>
                <p className="text-white md:text-xl text-[12px] md:mb-4">John Doe</p>
                <p className="text-white md:text-xl text-[12px]">
                  The CEO oversees company strategy and growth, leading Amar Thikana towards innovative real estate solutions.
                </p>
              </div>

              {/* COO */}
              <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h3 className="md:text-2xl text-[14px] font-bold  text-white md:mb-4">COO</h3>
                <p className="text-white md:text-xl text-[12px] md:mb-4">Jane Smith</p>
                <p className="text-white md:text-xl text-[12px]">
                  Responsible for managing day-to-day operations, ensuring our projects are completed efficiently and to high standards.
                </p>
              </div>

              {/* CFO */}
              <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h3 className="md:text-2xl text-[14px] font-bold  text-white md:mb-4">CFO</h3>
                <p className="text-white md:text-xl text-[12px] md:mb-4">Robert Wilson</p>
                <p className="text-white md:text-xl text-[12px]">
                  The CFO manages financial planning, ensuring sustainable growth and solid investments in future developments.
                </p>
              </div>
            </div>
          </section>

          {/* Department Heads Section */}
          <section className=" p-4 md:p-8 rounded-lg shadow-md md:my-8">
            <h1 className="md:text-4xl font-bold text-[#21c45e] text-center mb-3 md:mb-6">Department Heads</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Head of Sales */}
              <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h3 className="md:text-2xl text-[14px] font-bold  text-white md:mb-4">Head of Sales</h3>
                <p className="text-white md:text-xl text-[12px] md:mb-4">Linda Roberts</p>
                <p className="text-white md:text-xl text-[12px]">
                  Leads our sales team, focusing on customer relationships and achieving sales targets.
                </p>
              </div>

              {/* Head of Marketing */}
              <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h3 className="md:text-2xl text-[14px] font-bold  text-white md:mb-4">Head of Marketing</h3>
                <p className="text-white md:text-xl text-[12px] md:mb-4">Michael Chen</p>
                <p className="text-white md:text-xl text-[12px]">
                  Manages marketing strategies, promoting our projects and enhancing brand visibility.
                </p>
              </div>

              {/* Head of HR */}
              <div className="bg-[#21c45e] p-3 md:p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
                <h3 className="md:text-2xl text-[14px] font-bold  text-white md:mb-4">Head of HR</h3>
                <p className="text-white md:text-xl text-[12px] md:mb-4">Sara Kim</p>
                <p className="text-white md:text-xl text-[12px]">
                  Ensures a positive workplace culture and oversees talent recruitment and employee wellbeing.
                </p>
              </div>

              {/* Additional Department Heads... */}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white p-4 md:p-8 rounded-lg shadow-md my-4 md:my-8 text-center">
            <h2 className="md:text-4xl font-bold text-[#21c45e] mb-1 md:mb-6">Join Our Team</h2>
            <p className="text-[#21c45e] text-[10px] md:text-[16px] mb-2 md:mb-4">
              Interested in joining a leading real estate company? Check out our current job openings and apply today!
            </p>
            <button className="bg-green-500 text-white font-bold py-1 md:py-2 px-3 text-[10px] md:text-[16px] md:px-6 rounded-md hover:bg-green-600">
              <Link to="/career">Careers</Link>
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default CorporateStructurePage;
