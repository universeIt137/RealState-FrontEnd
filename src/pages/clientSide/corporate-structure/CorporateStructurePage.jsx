import React from 'react';
import { Helmet } from 'react-helmet-async';

const CorporateStructurePage = () => {
  return (
    <>
      <Helmet>
        <title>Amar Thikana | Corporate Structure</title>
      </Helmet>

      <div className="w-full p-6 md:p-12 bg-gray-50">
        {/* Header */}
        <header className="text-center py-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold">Corporate Structure</h1>
          <p className="text-lg mt-2">Meet the Team Leading Amar Thikana Properties Ltd.</p>
        </header>

        {/* Organizational Chart Section */}
        <section className="bg-white p-8 rounded-lg shadow-md my-8">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Our Leadership</h2>
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center">
            
            {/* CEO */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex-1 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">CEO</h3>
              <p className="text-gray-700 mb-4">John Doe</p>
              <p className="text-gray-600">
                The CEO oversees company strategy and growth, leading Amar Thikana towards innovative real estate solutions.
              </p>
            </div>

            {/* COO */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex-1 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">COO</h3>
              <p className="text-gray-700 mb-4">Jane Smith</p>
              <p className="text-gray-600">
                Responsible for managing day-to-day operations, ensuring our projects are completed efficiently and to high standards.
              </p>
            </div>

            {/* CFO */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex-1 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">CFO</h3>
              <p className="text-gray-700 mb-4">Robert Wilson</p>
              <p className="text-gray-600">
                The CFO manages financial planning, ensuring sustainable growth and solid investments in future developments.
              </p>
            </div>
          </div>
        </section>

        {/* Department Heads Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-md my-8">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Department Heads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Head of Sales */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">Head of Sales</h3>
              <p className="text-gray-700 mb-4">Linda Roberts</p>
              <p className="text-gray-600">
                Leads our sales team, focusing on customer relationships and achieving sales targets.
              </p>
            </div>

            {/* Head of Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">Head of Marketing</h3>
              <p className="text-gray-700 mb-4">Michael Chen</p>
              <p className="text-gray-600">
                Manages marketing strategies, promoting our projects and enhancing brand visibility.
              </p>
            </div>

            {/* Head of HR */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">Head of HR</h3>
              <p className="text-gray-700 mb-4">Sara Kim</p>
              <p className="text-gray-600">
                Ensures a positive workplace culture and oversees talent recruitment and employee wellbeing.
              </p>
            </div>

            {/* Head of Legal */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">Head of Legal</h3>
              <p className="text-gray-700 mb-4">David Lopez</p>
              <p className="text-gray-600">
                Oversees legal compliance, contract negotiations, and regulatory matters.
              </p>
            </div>

            {/* Head of Development */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">Head of Development</h3>
              <p className="text-gray-700 mb-4">Emily Clark</p>
              <p className="text-gray-600">
                Leads property development projects, from initial planning to completion.
              </p>
            </div>

            {/* Head of Customer Service */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">Head of Customer Service</h3>
              <p className="text-gray-700 mb-4">Thomas Nguyen</p>
              <p className="text-gray-600">
                Focuses on client satisfaction, addressing customer inquiries and ensuring a positive experience.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white p-8 rounded-lg shadow-md my-8 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Join Our Team</h2>
          <p className="text-gray-700 mb-4">
            Interested in joining a leading real estate company? Check out our current job openings and apply today!
          </p>
          <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-md hover:bg-green-600">
            Careers
          </button>
        </section>
      </div>
    </>
  );
};

export default CorporateStructurePage;
