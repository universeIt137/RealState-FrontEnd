import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { RiMenuUnfold4Fill } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false); // State for Corporate dropdown in the drawer
  const [isGalleryOpen, setIsGalleryOpen] = useState(false); // State for Gallery dropdown in the drawer
  const timeoutRef = useRef(null); // For managing the timeout in mouse leave

  const navLinks = [
    { title: 'Home', path: '/', isDropdown: false },
    {
      title: 'Corporate',
      path: '/corporate',
      isDropdown: true,
      dropdownLinks: [
        { title: 'Company Profile', path: '/company-profile' },
        { title: 'Mission & Vision', path: '/mission' },
        { title: 'Corporate Structure', path: '/corporate-structure' },
        { title: 'Corporate Social Responsibility', path: '/corporate-social-responsibility' },
        { title: 'Client Review', path: '/client-review' },
        { title: 'Certification', path: '/certification' },
      ],
    },
    {
      title: 'Gallery',
      path: '/gallery',
      isDropdown: true,
      dropdownLinks: [
        { title: 'Video Gallery', path: '/video-gallery' },
        { title: 'Image Gallery', path: '/image-gallery' },
      ],
    },
    { title: 'Project Details', path: '/project-details', isDropdown: false },
    { title: 'Career', path: '/career', isDropdown: false },
    { title: 'Booking Form', path: '/booking-form', isDropdown: false },
    { title: 'About Us', path: '/about-us', isDropdown: false },
    { title: 'Contact', path: '/contact-us', isDropdown: false },
  ];

  const handleMouseEnterCorporate = () => {
    clearTimeout(timeoutRef.current); // Clear any previous timeout before setting a new one
    timeoutRef.current = setTimeout(() => {
      setIsCorporateOpen(true); // Open the corporate dropdown after 10 seconds
    }, 100); // 10 seconds delay
  };

  const handleMouseLeaveCorporate = () => {
    clearTimeout(timeoutRef.current); // Clear the timeout if the mouse leaves early
    timeoutRef.current = setTimeout(() => {
      setIsCorporateOpen(false); // Close the corporate dropdown after 10 seconds
    }, 100); // 10 seconds delay
  };

  const handleMouseEnterGallery = () => {
    clearTimeout(timeoutRef.current); // Clear any previous timeout before setting a new one
    timeoutRef.current = setTimeout(() => {
      setIsGalleryOpen(true); // Open the gallery dropdown after 10 seconds
    }, 100); // 10 seconds delay
  };

  const handleMouseLeaveGallery = () => {
    clearTimeout(timeoutRef.current); // Clear the timeout if the mouse leaves early
    timeoutRef.current = setTimeout(() => {
      setIsGalleryOpen(false); // Close the gallery dropdown after 10 seconds
    }, 100); // 10 seconds delay
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleCorporateDropdown = () => {
    setIsCorporateOpen(!isCorporateOpen); // Toggle Corporate dropdown
  };

  const toggleGalleryDropdown = () => {
    setIsGalleryOpen(!isGalleryOpen); // Toggle Gallery dropdown
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black text-white shadow-md opacity-70 ' : 'bg-black text-white shadow-xl bg-opacity-70 '}`}>
      <div className='w-11/12 mx-auto'>
        <div className='flex items-center justify-between p-4'>
          {/* Logo */}
          <div className='bg-white lg:w-[10%] rounded-md p-1'>
            <NavLink to="/">
              <img className='w-full md:w-32 md:rounded-full' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731399400/Artboard_2300_zteplb.png" alt="Logo" />
            </NavLink>
          </div>

          {/* Toggle Button for Mobile Devices */}
          <button onClick={toggleDrawer} className='lg:hidden text-white'>
            {!isDrawerOpen ? <RiMenuUnfold4Fill size={30} className='font-bold block ml-40 ' /> : <span></span>}
          </button>

          {/* Desktop Navigation Links */}
          <div className='lg:w-50% lg:mx-auto'>
            <nav className='hidden lg:block'>
              <ul className='flex lg:flex-row lg:space-x-1'>
                {navLinks.map((link, idx) => (
                  <li
                    key={idx}
                    className="relative group"
                    onMouseEnter={link.title === 'Corporate' ? handleMouseEnterCorporate : link.title === 'Gallery' ? handleMouseEnterGallery : null}
                    onMouseLeave={link.title === 'Corporate' ? handleMouseLeaveCorporate : link.title === 'Gallery' ? handleMouseLeaveGallery : null}
                  >
                    {!link.isDropdown ? (
                      <NavLink to={link.path} className="relative flex items-center space-x-1 hover:text-black group">
                        <span className='lg:text-[18px] mx-2 '>{link.title}</span>
                        <span className="absolute bottom-0 block left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                      </NavLink>
                    ) : (
                      <>
                        <button className="relative lg:text-[18px] block  hover:text-black z-20">
                          <span className=' block mx-1 ' >{link.title}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                        </button>
                        {link.title === 'Corporate' && isCorporateOpen && (
                          <div
                            className="absolute z-50 left-0 mt-2 bg-white text-black rounded-md shadow-lg w-64 opacity-100 transform scale-100 translate-y-0 transition-all duration-300 ease-out"
                            onMouseEnter={handleMouseEnterCorporate}
                            onMouseLeave={handleMouseLeaveCorporate}
                          >
                            {link.dropdownLinks.map((dropdownLink, idx) => (
                              <NavLink
                                to={dropdownLink.path}
                                key={idx}
                                className="block px-4 py-2 hover:bg-blue-100 relative group transform scale-95 hover:scale-105 transition-all duration-300 ease-out"
                              >
                                {dropdownLink.title}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21c45e] transition-all duration-300 ease-out group-hover:w-full"></span>
                              </NavLink>
                            ))}
                          </div>
                        )}
                        {link.title === 'Gallery' && isGalleryOpen && (
                          <div
                            className="absolute left-0 mt-2 z-50  bg-white text-black rounded-md shadow-lg w-64 opacity-100 transform scale-100 translate-y-0 transition-all duration-300 ease-out"
                            onMouseEnter={handleMouseEnterGallery}
                            onMouseLeave={handleMouseLeaveGallery}
                          >
                            {link.dropdownLinks.map((dropdownLink, idx) => (
                              <NavLink
                                to={dropdownLink.path}
                                key={idx}
                                className="block px-4 py-2 hover:bg-blue-100 relative group transform scale-95 hover:scale-105 transition-all duration-300 ease-out"
                              >
                                {dropdownLink.title}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#21c45e] transition-all duration-300 ease-out group-hover:w-full"></span>
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className=' hidden lg:block ' >
            <div className='flex items-center gap-4 ' >
              <div className="flex items-center border border-white px-3  ">
                <FaPhoneAlt />
                <span>(+880) 1751586230</span>
              </div>

              {/* Social icons section */}
              <div className="flex space-x-3  ">
                <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
                <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
                <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
                <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="bg-green w-3/4 p-5 h-full">
              <button onClick={toggleDrawer} className="text-xl mb-4"><ImCross /></button>
              <ul>
                {navLinks.map((link, idx) => (
                  <li key={idx} className="mb-3">
                    {!link.isDropdown ? (
                      <NavLink to={link.path} className="block">{link.title}</NavLink>
                    ) : (
                      <div>
                        <button
                          onClick={link.title === 'Corporate' ? toggleCorporateDropdown : link.title === 'Gallery' ? toggleGalleryDropdown : null}
                          className="block"
                        >
                          {link.title}
                        </button>
                        {link.title === 'Corporate' && isCorporateOpen && (
                          <div className="pl-4">
                            {link.dropdownLinks.map((dropdownLink, idx) => (
                              <NavLink key={idx} to={dropdownLink.path} className="block">{dropdownLink.title}</NavLink>
                            ))}
                          </div>
                        )}
                        {link.title === 'Gallery' && isGalleryOpen && (
                          <div className="pl-4">
                            {link.dropdownLinks.map((dropdownLink, idx) => (
                              <NavLink key={idx} to={dropdownLink.path} className="block">{dropdownLink.title}</NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;