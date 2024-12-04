import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import AnimatedPage from '../components/clientSide/AnimatedPage/AnimatedPage';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showImage, setShowImage] = useState(true); // New state to control image visibility

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsModalOpen(true);
      sessionStorage.setItem('hasVisited', 'true');

      // Hide the image after 4 seconds
      const fetchData = () => {
        setTimeout(() => {
          setShowImage(false)
        }, [4000])
      }

      // Cleanup the ti
      fetchData()
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { data: offerData = {} } = useQuery({
    queryKey: ['all data'],
    queryFn: async () => {
      const res = await axios.get('https://amer-thikana-server.vercel.app/offer');
      return res.data[0];
    },
  });


  return (
    <div className="bg-white">
      {isModalOpen && (
        <div className="">
          {
            showImage && (
              <div className='' >
                <AnimatedPage></AnimatedPage>
              </div>
            )
          }
        </div>
      )}

      <Navbar />
      <div className='z-50' >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
