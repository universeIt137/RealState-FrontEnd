import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { RiMenuUnfold4Fill } from 'react-icons/ri';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const timeoutRef = useRef(null); // For managing the timeout in hover behavior

  const axiosPublic = useAxiosPublic();
  const { data: webContent = {} } = useQuery({
    queryKey: ['website content'],
    queryFn: async () => {
      const res = await axiosPublic.get('/website-content');
      return res.data[0];
    }
  })

  const navLinks = [
    { title: 'Home', path: '/', isDropdown: false },
    {
      title: 'Corporate',
      path: '/corporate',
      isDropdown: true,
      dropdownLinks: [
        { title: 'About Us', path: '/about-us' },
        { title: 'Chairman Speech', path: '/chairman-speech' },
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
    { title: 'Contact', path: '/contact-us', isDropdown: false },
  ];

  // Handle hover for Corporate
  const handleMouseEnterCorporate = () => {
    clearTimeout(timeoutRef.current);
    setIsGalleryOpen(false); // Close Gallery if Corporate is hovered
    timeoutRef.current = setTimeout(() => {
      setIsCorporateOpen(true);
    }, 100);
  };

  const handleMouseLeaveCorporate = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsCorporateOpen(false);
    }, 100);
  };

  // Handle hover for Gallery
  const handleMouseEnterGallery = () => {
    clearTimeout(timeoutRef.current);
    setIsCorporateOpen(false); // Close Corporate if Gallery is hovered
    timeoutRef.current = setTimeout(() => {
      setIsGalleryOpen(true);
    }, 100);
  };

  const handleMouseLeaveGallery = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsGalleryOpen(false);
    }, 100);
  };

  // Toggle drawer for mobile
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all  duration-300 ${scrolled ? 'bg-[#027F3D]  text-white shadow-md opacity-70' : 'bg-[#027F3D] text-white shadow-xl bg-opacity-70'
        }`}
    >
      <div className="w-11/12 mx-auto">
        {/* Top Section: Phone Number and Social Icons */}


        <div className='flex flex-row justify-between items-center py-4 ' >
          {/* Navbar Section */}

          {/* Logo */}
          <div className="bg-white lg:w-[10%] rounded-md p-1">
            <NavLink to="/">
              <img
                className="w-full md:w-32 md:rounded-full"
                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731399400/Artboard_2300_zteplb.png"
                alt="Logo"
              />
            </NavLink>
          </div>

          {/* Toggle Button for Mobile */}
          <button onClick={toggleDrawer} className="lg:hidden  text-white">
            {!isDrawerOpen ? <RiMenuUnfold4Fill size={30} className="font-bold block ml-40" /> : <span></span>}
          </button>

          {/* Desktop Navigation */}
          <div>
            <nav className="hidden lg:block">
              <ul className="flex lg:flex-row lg:space-x-1">
                {navLinks.map((link, idx) => (
                  <li
                    key={idx}
                    className="relative group"
                    onMouseEnter={
                      link.title === 'Corporate'
                        ? handleMouseEnterCorporate
                        : link.title === 'Gallery'
                          ? handleMouseEnterGallery
                          : null
                    }
                    onMouseLeave={
                      link.title === 'Corporate'
                        ? handleMouseLeaveCorporate
                        : link.title === 'Gallery'
                          ? handleMouseLeaveGallery
                          : null
                    }
                  >
                    {!link.isDropdown ? (
                      <NavLink to={link.path} className="relative flex items-center space-x-1 hover:text-white hover:font-bold group">
                        <span className="lg:text-[18px] mx-2">{link.title}</span>
                        <span className="absolute bottom-0 block left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                      </NavLink>
                    ) : (
                      <>
                        <button className="relative lg:text-[18px] block hover:text-white hover:font-bold z-20">
                          <span className="block mx-1">{link.title}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                        </button>
                        {link.title === 'Corporate' && isCorporateOpen && (
                          <div
                            className="absolute z-50 left-0 mt-5 bg-white text-black rounded-md shadow-lg w-64"
                            onMouseEnter={handleMouseEnterCorporate}
                            onMouseLeave={handleMouseLeaveCorporate}
                          >
                            {link.dropdownLinks.map((dropdownLink, idx) => (
                              <NavLink
                                to={dropdownLink.path}
                                key={idx}
                                className="relative block px-4 py-2 text-black hover:bg-blue-100 font-bold transform scale-95 hover:scale-105 transition-all duration-300 ease-out group"
                              >
                                {dropdownLink.title}
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green transition-all duration-300 ease-in-out group-hover:w-full"></span>
                              </NavLink>
                            ))}
                          </div>
                        )}
                        {link.title === 'Gallery' && isGalleryOpen && (
                          <div
                            className="absolute left-0 mt-5 z-50    text-black font-bold rounded-md shadow-lg w-64"
                            onMouseEnter={handleMouseEnterGallery}
                            onMouseLeave={handleMouseLeaveGallery}
                          >
                            {link.dropdownLinks.map((dropdownLink, idx) => (
                              <NavLink
                                to={dropdownLink.path}
                                key={idx}
                                className="block px-4 py-2 bg-white hover:bg-blue-100 transform scale-95 hover:scale-105 transition-all duration-300 ease-out"
                              >
                                {dropdownLink.title}
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green transition-all duration-300 ease-in-out group-hover:w-full"></span>
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
          <div className='hidden lg:block ' >
            <div className='flex  items-center gap-3 ' >
              {/* Phone Number in center */}
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center border border-white px-3 py-1 text-white">
                  <FaPhoneAlt />
                  <span className="ml-2 text-sm">( +880 ) {webContent?.phone_number}</span>
                </div>
              </div>
              {/* Social Icons to the right */}
              <div className="flex space-x-3 justify-end">
                <a
                  href={webContent?.facebook_url?.startsWith("http") ? webContent.facebook_url : `https://${webContent.facebook_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={webContent?.youtube_url?.startsWith("http") ? webContent.youtube_url : `https://${webContent.youtube_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href={webContent?.linkedin_url?.startsWith("http") ? webContent.linkedin_url : `https://${webContent.linkedin_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={webContent?.instagrame_url?.startsWith("http") ? webContent.instagrame_url : `https://${webContent.instagrame_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href={webContent?.twitter_url?.startsWith("http") ? webContent.twitter_url : `https://${webContent.twitter_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Drawer */}
        {isDrawerOpen && (
          <div className="fixed top-0 right-0 bg-[#027F3D]  text-white w-3/4 h-screen z-50 lg:w-1/4 p-5 shadow-lg">
            <button
              onClick={toggleDrawer}
              className="absolute top-3 right-3 text-white text-xl"
            >
              X
            </button>
            <ul className="mt-10 space-y-4">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  {!link.isDropdown ? (
                    <NavLink
                      to={link.path}
                      className="block hover:text-gray-300"
                      onClick={toggleDrawer}
                    >
                      {link.title}
                    </NavLink>
                  ) : (
                    <details className="group">
                      <summary className="cursor-pointer">
                        {link.title}
                      </summary>
                      <ul className="pl-5 mt-2">
                        {link.dropdownLinks.map((dropdownLink, idx) => (
                          <li key={idx} className="mt-1">
                            <NavLink
                              to={dropdownLink.path}
                              className="block hover:text-gray-300"
                              onClick={toggleDrawer}
                            >
                              {dropdownLink.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;




