import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenuUnfold4Fill, RiCloseFill, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const SmallDeviceNavbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

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

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <div className="fixed top-0  w-full bg-green-700  text-white z-50 ">
            <div className="w-11/12 mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <NavLink to="/" className="text-xl font-bold">
                    
                </NavLink>

                {/* Drawer Toggle Button */}
                <button className='text-black' onClick={toggleDrawer}>
                    {isDrawerOpen ? <RiCloseFill size={30} /> : <RiMenuUnfold4Fill size={30} />}
                </button>

                {/* Drawer Menu */}
                {isDrawerOpen && (
                    <div className="fixed top-0 left-0  h-full text-white  w-64 bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 z-50 shadow-lg">
                        <div className="p-4">
                            <ul className="space-y-4">
                                {navLinks.map((link, idx) => (
                                    <li key={idx}>
                                        {!link.isDropdown ? (
                                            <NavLink
                                                to={link.path}
                                                className="block"
                                                onClick={toggleDrawer}
                                            >
                                                {link.title}
                                            </NavLink>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(idx)}
                                                    className="block w-full flex items-center justify-between  "
                                                >
                                                    <span>{link.title}</span>
                                                    {openDropdown === idx ? (
                                                        <RiArrowUpSLine size={20} />
                                                    ) : (
                                                        <RiArrowDownSLine size={20} />
                                                    )}
                                                </button>
                                                {openDropdown === idx && (
                                                    <ul className="pl-4 ">
                                                        {link.dropdownLinks.map((dropdownLink, index) => (
                                                            <li key={index}>
                                                                <NavLink
                                                                    to={dropdownLink.path}
                                                                    className="block py-1 "
                                                                    onClick={toggleDrawer}
                                                                >
                                                                    {dropdownLink.title}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </>
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

export default SmallDeviceNavbar;
