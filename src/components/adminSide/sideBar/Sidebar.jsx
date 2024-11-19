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


    const courseUrls =
        <>
            <NavigationItem to="/dashboard/add-content" icon={MdAddCircle} label="Manage Contents" />
        </>

    const chairmanUrls =
        <>
            <NavigationItem to="/dashboard/add-chairman" icon={MdAddCircle} label="Manage Chairman" />
        </>

    const overviewUrls =
        <>
            <NavigationItem to="/dashboard/add-overview" icon={MdAddCircle} label="Manage Overview" />
        </>

    const featureUrls =
        <>
            <NavigationItem to="/dashboard/add-features" icon={MdAddCircle} label="Manage Feature" />
        </>

    const reviewUrls =
        <>
            <NavigationItem to="/dashboard/add-review" icon={MdAddCircle} label="Manage Review" />
        </>

    const aboutPageUrls =
        <>
            <NavigationItem to="/dashboard/manage-aboutPage" icon={MdAddCircle} label="Manage About Page" />
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
                            <Dropdown buttonText="Website Content" urls={courseUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Chairman Content" urls={chairmanUrls} />
                        </li>


                        <li className="mb-4">
                            <Dropdown buttonText="Project Overview" urls={overviewUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Project Features" urls={featureUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Client Reviews" urls={reviewUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Pages" urls={aboutPageUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Why Best Project" urls={whyBestProjects} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Meting Schedule" urls={Schedule} />
                        </li>


                        {/* <li className="mb-4">
                            <Dropdown buttonText="Seminar" urls={seminarUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="All Requests" urls={requestUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Blogs" urls={blogUrls} />
                        </li>
                        <li className="mb-4">
                            <Dropdown buttonText="Comments" urls={comments} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="HomePage content" urls={homepageUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Faculty" urls={facultyUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown buttonText="Testimonial" urls={testimonialUrls} />
                        </li>

                        <li className="mb-4">
                            <Dropdown
                                buttonText="Student Gallary"
                                urls={studentGallaryUrls}
                            />
                        </li> */}
                    </ul>
                </nav>
            </aside></>
    );
};

export default Sidebar;