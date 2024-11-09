import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
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
    <li>
      <NavLink to="/" className="relative flex items-center space-x-1 hover:text-blue-300 group">
        <span>Home</span>
        {/* Underline effect */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/booking-form" className="relative flex items-center space-x-1 hover:text-blue-300 group">
        <span>Booking Form</span>
        {/* Underline effect */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </NavLink>
    </li>

    {/* Service Dropdown */}
    <li className="relative group">
      <button className="relative hover:text-blue-300">
        Corporate
        {/* Underline effect for main Service button */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </button>

      {/* Dropdown menu with zoom-in animation */}
      <div className="absolute left-0 mt-2 bg-white text-blue-600 rounded-md shadow-lg w-52 opacity-0 transform scale-95 translate-y-2 
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
          transition-all duration-300 ease-out">
        <NavLink
          to="/service1"
          className="block px-4 py-2 hover:bg-blue-100 relative group transform scale-95 hover:scale-105 transition-all duration-300 ease-out"
        >
          Service 1
          {/* Underline effect for Service 1 */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/service1"
          className="block px-4 py-2 hover:bg-blue-100 relative group transform scale-95 hover:scale-105 transition-all duration-300 ease-out"
        >
          Service 1
          {/* Underline effect for Service 1 */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </NavLink>
      </div>
    </li>
    <li>
      <NavLink to="/about-us" className="relative flex items-center space-x-1 hover:text-blue-300 group">
        <span>About Us</span>
        {/* Underline effect */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </NavLink>
    </li>    
    <li>
      <NavLink to="/contact-us" className="relative flex items-center space-x-1 hover:text-blue-300 group">
        <span>Contact</span>
        {/* Underline effect */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/career" className="relative flex items-center space-x-1 hover:text-blue-300 group">
        <span>Career</span>
        {/* Underline effect */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </NavLink>
    </li>

    {/* Gallery Dropdown */}
    <li className="relative group">
      <button className="relative hover:text-blue-300">
        Gallery
        {/* Underline effect for main Service button */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </button>

      {/* Dropdown menu with zoom-in animation */}
      <div className="absolute left-0 mt-2 bg-white text-blue-600 rounded-md shadow-lg w-52 opacity-0 transform scale-95 translate-y-2 
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
          transition-all duration-300 ease-out">
        <NavLink
          to="/service1"
          className="block px-4 py-2 hover:bg-blue-100 relative group transform scale-95 hover:scale-105 transition-all duration-300 ease-out"
        >
          Video Gallery
          {/* Underline effect for Service 1 */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </NavLink>
        <NavLink
          to="/service1"
          className="block px-4 py-2 hover:bg-blue-100 relative group transform scale-95 hover:scale-105 transition-all duration-300 ease-out"
        >
          Img Gallery
          {/* Underline effect for Service 1 */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </NavLink>
      </div>
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




