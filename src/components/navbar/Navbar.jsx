import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { RiMenuUnfold4Fill } from 'react-icons/ri';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Drawer from './Drawer';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCorporateOpen, setIsCorporateOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false); // State for Project Info submenu
  const [isBookingInfoOpen, setIsBookingInfoOpen] = useState(false); // State for Project Info submenu
  const timeoutRef = useRef(null); // For managing the timeout in hover behavior

  const axiosPublic = useAxiosPublic();
  const { data: webContent = {} } = useQuery({
    queryKey: ['website content'],
    queryFn: async () => {
      const res = await axiosPublic.get('/website-content');
      return res.data[0];
    }
  });

  const navLinks = [
    { title: 'Home', path: '/', isDropdown: false },
    {
      title: 'Corporate',
      path: '/corporate',
      isDropdown: true,
      dropdownLinks: [
        { title: 'About Us', path: '/about-us' },
        { title: 'Mission & Vision', path: '/mission' },
        { title: 'Management Information', path: '/management-information' },
        { title: 'Marketing Information', path: '/marketing-information' },
        { title: 'Chairman Speech', path: '/chairman-speech' },
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
    {
      title: 'Project Info',
      path: '/project-details',
      isDropdown: true,
      dropdownLinks: [
        // { title: 'Project Details', path: '/project-details' },
        { title: 'Project Images', path: '/project-images' },
        { title: 'Project Videos', path: '/project-video' },
        { title: 'Citizen Facilities', path: '/citizen-facilities' },
        { title: 'Our Features', path: '/project-feature' },
        { title: 'Current Project Status', path: '/project-status' },
        { title: 'Project Layout', path: '/project-layout' },
        { title: 'Why Best Project', path: '/why-best-project' },
        { title: 'Privacy Policy', path: '/policy' },

      ],
    },
    { title: 'Career', path: '/career', isDropdown: false },
    {
      title: 'Booking Info',
      path: '/booking-form',
      isDropdown: true,
      dropdownLinks: [
        { title: 'Plot price list according to tenure', path: '/plot-list' },
        { title: 'Booking From', path: '/booking-from' },
        { title: 'Bank Information', path: '/bank-information-lists', isDropdown: false },
      ],
    },
    { title: 'Contact', path: '/contact-us', isDropdown: false },
  ];

  const handleMouseEnterCorporate = () => {
    clearTimeout(timeoutRef.current);
    setIsGalleryOpen(false);
    setIsProjectDetailsOpen(false);
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

  const handleMouseEnterGallery = () => {
    clearTimeout(timeoutRef.current);
    setIsCorporateOpen(false);
    setIsProjectDetailsOpen(false);
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

  const handleMouseEnterProjectDetails = () => {
    clearTimeout(timeoutRef.current);
    setIsCorporateOpen(false);
    setIsGalleryOpen(false);
    timeoutRef.current = setTimeout(() => {
      setIsProjectDetailsOpen(true);
    }, 100);
  };

  const handleMouseLeaveProjectDetails = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsProjectDetailsOpen(false);
    }, 100);
  };

  const handleMouseEnterBookingInfo = () => {
    clearTimeout(timeoutRef.current);
    setIsCorporateOpen(false);
    setIsGalleryOpen(false);
    setIsProjectDetailsOpen(false);
    timeoutRef.current = setTimeout(() => {
      setIsBookingInfoOpen(true);
    }, 100);
  };

  const handleMouseLeaveBookingInfo = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsBookingInfoOpen(false);
    }, 100);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#027F3D]  text-white shadow-md opacity-70' : 'bg-[#027F3D] text-white shadow-xl bg-opacity-70'
        }`}
    >
      <div className="w-11/12 mx-auto">
        <div className='flex flex-row justify-between items-center py-4'>
          <div className="bg-white lg:w-[10%] rounded-md p-1">
            <NavLink to="/">
              <img
                className="w-full md:w-32 md:rounded-full"
                src={webContent?.scheduleImageUrl}
                alt="Logo"
              />
            </NavLink>
          </div>

          <button onClick={toggleDrawer} className="lg:hidden  text-white">
            {!isDrawerOpen ? <RiMenuUnfold4Fill size={30} className="font-bold block ml-40" /> : <span>
              <Drawer isOpen={isDrawerOpen } onClose={false} />
            </span>}
          </button>

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
                          : link.title === 'Project Info'
                            ? handleMouseEnterProjectDetails
                            : link.title === 'Booking Info'
                              ? handleMouseEnterBookingInfo
                              : null
                    }
                    onMouseLeave={
                      link.title === 'Corporate'
                        ? handleMouseLeaveCorporate
                        : link.title === 'Gallery'
                          ? handleMouseLeaveGallery
                          : link.title === 'Project Info'
                            ? handleMouseLeaveProjectDetails
                            : link.title === 'Booking Info'
                              ? handleMouseLeaveBookingInfo
                              : null
                    }
                  >
                    {!link.isDropdown ? (
                      <NavLink to={link.path} className="relative flex items-center space-x-1 hover:text-white  group">
                        <span className="lg:text-[18px] mx-2">{link.title}</span>
                        <span className="absolute bottom-0 block left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                      </NavLink>
                    ) : (
                      <>
                        <button className="relative lg:text-[18px] block hover:text-white  z-20">
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
                            className="absolute left-0 mt-5 z-50 text-black font-bold rounded-md shadow-lg w-64"
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
                        {link.title === 'Project Info' && isProjectDetailsOpen && (
                          <div
                            className="absolute left-0 mt-5 z-50 text-black font-bold rounded-md shadow-lg w-64"
                            onMouseEnter={handleMouseEnterProjectDetails}
                            onMouseLeave={handleMouseLeaveProjectDetails}
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
                        {link.title === 'Booking Info' && isBookingInfoOpen && (
                          <div
                            className="absolute left-0 mt-5 z-50 text-black font-bold rounded-md shadow-lg w-64"
                            onMouseEnter={handleMouseEnterBookingInfo}
                            onMouseLeave={handleMouseLeaveBookingInfo}
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
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center border border-white px-3 py-1 text-white">
                  <FaPhoneAlt />
                  <span className="ml-2 text-sm">( +880 ) {webContent?.phone_number}</span>
                </div>
              </div>
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
                  href={webContent?.twitter_url?.startsWith("http") ? webContent.twitter_url : `https://${webContent.twitter_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaTwitter />
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
                  href={webContent?.instagram_url?.startsWith("http") ? webContent.instagram_url : `https://${webContent.instagram_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
