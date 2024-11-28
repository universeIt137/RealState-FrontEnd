import React, { useState } from 'react';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IoMdCard } from 'react-icons/io';
import { IoCartOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { MdMenuOpen, MdOutlineCategory, MdOutlineDiscount, MdOutlineLockPerson } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { SiNginxproxymanager } from 'react-icons/si';
import { GrDashboard } from "react-icons/gr";

// update code 
import { FaHome, FaUsers, FaWpforms } from 'react-icons/fa';
import { FaCircleUser, FaFileWaveform } from 'react-icons/fa6';
import { MdAdd, MdAddCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaRegComments } from "react-icons/fa";
import Dropdown from './Dropdown';
import NavigationItem from './NavigationItem';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    const dynamicPageUrls =
        <>
            <NavigationItem to="/dashboard/banner-upload" icon={MdAddCircle} label="Upload Banner" />
            <NavigationItem to="/dashboard/manage-banner" icon={MdAddCircle} label="Manage Banner" />
            <NavigationItem to="/dashboard/add-chairman" icon={MdAddCircle} label="Manage Chairman" />
            <NavigationItem to="/dashboard/add-overview" icon={MdAddCircle} label="Project Overview" />
            <NavigationItem to="/dashboard/add-features" icon={MdAddCircle} label="Project Feature" />
            <NavigationItem to="/dashboard/manage-characteristics" icon={MdAddCircle} label="Manage Characteristics" />
            <NavigationItem to="/dashboard/add-review" icon={MdAddCircle} label="Client Review" />
            <NavigationItem to="/dashboard/best-upload-form" icon={MdAddCircle} label="Why Our Project Best" />




            <NavigationItem to="/dashboard/manage-aboutPage" icon={MdAddCircle} label="Manage About Page" />
        </>

    const courseUrls =
        <>
            <NavigationItem to="/dashboard/add-content" icon={MdAddCircle} label="Manage Contents" />
        </>

    const chairmanUrls =
        <>
            <NavigationItem to="/dashboard/add-chairman" icon={MdAddCircle} label="Manage Chairman" />
        </>

   
    const featureUrls =
        <>
            <NavigationItem to="/dashboard/add-features" icon={MdAddCircle} label="Manage Feature" />
        </>

    const reviewUrls =
        <>
            <NavigationItem to="/dashboard/add-review" icon={MdAddCircle} label="Manage Review" />
        </>



    const whyBestProjects =
        <>
            <NavigationItem to="/dashboard/best-upload-form" icon={MdAddCircle} label="Upload" />
            {/* <NavigationItem to="/dashboard/manage" icon={MdAddCircle} label="Manage" /> */}
        </>
    const Schedule =
        <>
            <NavigationItem to="/dashboard/schedule-list" icon={MdAddCircle} label="Schedule List" />
            {/* <NavigationItem to="/dashboard/manage" icon={MdAddCircle} label="Manage" /> */}
        </>

    const CSRUrls =
        <>
            <NavigationItem to="/dashboard/add-csr" icon={MdAddCircle} label="Add CSR" />
            <NavigationItem to="/dashboard/manage-csr" icon={MdAddCircle} label="Manage CSR" />
        </>

    const banner =
        <>
            <NavigationItem to="/dashboard/banner-upload" icon={MdAddCircle} label="Upload Banner" />
            <NavigationItem to="/dashboard/manage-banner" icon={MdAddCircle} label="Manage Banner" />
        </>

    const certificateUrl =
        <>
            <NavigationItem to="/dashboard/add-certificate" icon={MdAddCircle} label="Add Certificate" />
            <NavigationItem to="/dashboard/manage-certificate" icon={MdAddCircle} label="Manage Certificate" />
        </>

    const offerUrl =
        <>
            <NavigationItem to="/dashboard/manage-offer" icon={MdAddCircle} label="Manage Offer" />
        </>

    const videoGalleryUrl =
        <>
            <NavigationItem to="/dashboard/img-upload" icon={MdAddCircle} label="Manage Image Gallery" />
            <NavigationItem to="/dashboard/upload-video" icon={MdAddCircle} label="Manage Video Gallery" />
        </>

    const careerUrl =
        <>
            <NavigationItem to="/dashboard/add-career" icon={MdAddCircle} label="Add Career" />
            <NavigationItem to="/dashboard/manage-career" icon={MdAddCircle} label="Manage Career" />
            <NavigationItem to="/dashboard/manage-apply" icon={MdAddCircle} label="Manage Application" />
        </>

    const imgGallery =
        <>
            <NavigationItem to="/dashboard/img-upload" icon={MdAddCircle} label="Upload Img" />
        </>




    return (
        <>
            <aside
                className={`bg-[#21c45e]  text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-14'
                    }`}
            >
                <div className="flex justify-between items-center p-4 gap-8">
                    <div className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>
                        <Link to={'/'}>Amer Thikana</Link>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        {isSidebarOpen ? <IoCloseCircleOutline className='text-4xl' /> : <MdMenuOpen className='text-3xl' />}
                    </button>
                </div>

                <nav className="flex-1 p-4">
                    <ul className={`space-y-2 pb-20 list-none ${!isSidebarOpen && 'hidden'} `}>
                        {/* <NavigationItem to="/dashboard" icon={FaHome} label="Dashboard" /> */}
                        <NavigationItem
                            to="/dashboard"
                            icon={GrDashboard}
                            label="Dashboard"
                        />

                        <li className="mb-4">
                            <Dropdown buttonText="Dynamic Pages Content" urls={dynamicPageUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Website Content" urls={courseUrls} />
                        </li>




                        

                       

                       


                       

                        <li className="mb-4">
                            <Dropdown buttonText="Meeting Schedule" urls={Schedule} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="CSR" urls={CSRUrls} />
                        </li>

                       

                        <li className="mb-4">
                            <Dropdown buttonText="Certificate" urls={certificateUrl} />
                        </li>
                        <li className="mb-4">
                            <Dropdown buttonText="Offer" urls={offerUrl} />
                        </li>
                        <li className="mb-4">
                            <Dropdown buttonText="Galleries" urls={videoGalleryUrl} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Career" urls={careerUrl} />
                        </li>
                       
                    </ul>
                </nav>
            </aside></>
    );
};

export default Sidebar;