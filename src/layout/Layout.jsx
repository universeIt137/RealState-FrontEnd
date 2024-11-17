import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsModalOpen(true);
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      {isModalOpen && (
        <div className="fixed pt-16 inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:w-1/2 lg:w-1/3">
            {/* Cross Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <img
              src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731838514/Amer%20Thikana/yv3g7nenkgyabzju0x5a.jpg"
              alt="Welcome"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
