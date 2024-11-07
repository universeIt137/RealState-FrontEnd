import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';
import { RiMenuUnfold4Fill } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false); // Dropdown state for Gallery in drawer
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleGalleryDropdown = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#21c45e] text-white shadow-md' : 'bg-gradient-to-r from-green-500 to-blue-500 text-white'}`}>
      <div className='flex items-center justify-between p-4'>
        {/* Logo */}
        <div className='bg-white rounded-full p-1 shadow-2xl'>
          <NavLink to="/">
            <img
              className=' w-20 md:w-32 rounded-full'
              src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730874150/Artboard_2300_ttfuqe.png"
              alt="Logo"
            />
          </NavLink>
        </div>

        {/* Toggle Button for Mobile Devices */}
        <button onClick={toggleDrawer} className='md:hidden text-white  ' aria-label="Toggle Drawer">
          {
            !isDrawerOpen ? <RiMenuUnfold4Fill size={30} className='font-bold block ml-40 ' /> : <span></span>
          }
        </button>

        {/* Desktop Navigation Links */}
        <nav className='hidden md:block'>
          <ul className='flex space-x-6'>
            {['/', '/booking-form', '/offer', '/about-us', '/contact-us', '/career'].map((route, idx) => (
              <li key={idx}>
                <NavLink
                  to={route}
                  className={`${pathname === route ? 'text-black bg-[#c2f2d5] p-2 rounded-xl' : ''}  text-md`}
                >
                  {route.replace('/', '').replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase()) || 'Home'}
                </NavLink>
              </li>
            ))}
            {/* Gallery Dropdown */}
            <li className='relative group'>
              <button className={`${pathname.includes('/gallery') ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
                Gallery
              </button>
              <ul className='absolute hidden group-hover:block bg-[#111111] text-white p-2 space-y-2 mt-2 rounded shadow-lg'>
                <li>
                  <NavLink to="/gallery/images" className={`${pathname === "/gallery/images" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
                    Img Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/gallery/videos" className={`${pathname === "/gallery/videos" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
                    Video Gallery
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div>
          
        </div>
      </div>

      {/* Drawer for Small Devices */}
      {isDrawerOpen && (
        <div className='md:hidden top-[65px] fixed inset-0 bg-opacity-50 z-50 flex'>
          <div className='absolute left-0 w-64 h-screen bg-green-400 text-white p-4 transition-transform transform translate-x-0'>
            <button onClick={toggleDrawer} className='text-white' aria-label="Close Drawer">
              <span>
              <ImCross className='block ml-44 ' />
              </span>
            </button>
            <ul className='mt-4 space-y-4'>
              {['/', '/booking-form', '/offer', '/about-us', '/contact-us', '/career'].map((route, idx) => (
                <li key={idx}>
                  <NavLink  to={route} onClick={toggleDrawer} className={`text-lg  `}>
                    {route.replace('/', '').replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase()) || 'Home'}
                  </NavLink>
                </li>
              ))}
              {/* Gallery Dropdown in Drawer */}
              <li>
                <button onClick={toggleGalleryDropdown} className='text-lg w-full text-left'>
                  Gallery
                </button>
                {isGalleryOpen && (
                  <ul className='ml-4 mt-2 space-y-2'>
                    <li>
                      <NavLink to="/gallery/images" onClick={toggleDrawer} className='text-lg'>
                        Img Gallery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery/videos" onClick={toggleDrawer} className='text-lg'>
                        Video Gallery
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className='flex-grow' onClick={toggleDrawer} aria-hidden="true" />
        </div>
      )}
    </div>
  );
};

export default Navbar;



// import React, { useState, useEffect } from 'react';

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 w-full z-10 p-4 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="text-lg font-bold">Logo</div>
//         <div className="space-x-4">
//           <a href="#home" className="hover:text-gray-700">Home</a>
//           <a href="#categories" className="hover:text-gray-700">Categories</a>
//           <a href="#cart" className="hover:text-gray-700">Cart</a>
//           <a href="#profile" className="hover:text-gray-700">Profile</a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
