import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AdminNavbar = () => {
    const axiosPublic = useAxiosPublic();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `${token}` // Corrected
        }
    };


    const { data: profileImg = [], refetch } = useQuery({
        queryKey: ['profileImg'],
        queryFn: async () => {
            const res = await axiosPublic.get('/user-profile', config);
            return res.data;
        }
    });

    const handleLogout = () => {
        localStorage.clear("role");
        localStorage.clear("token");
        window.location.href = "/login"
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);




    const handleMouseEnter = () => {
        // Set a timeout to open the menu after 3 seconds
        const timeout = setTimeout(() => {
            setIsDropdownOpen(true);
        }, 300);
        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        // Clear the timeout if user leaves early
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
        // Close menu after a small delay to allow smooth transitions
        setTimeout(() => setIsDropdownOpen(false), 300);
    };

    return (
        <div className="flex justify-between items-center bg-white shadow p-4 px-6">
            {/* Dashboard Title (Left) */}
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

            {/* Profile Section (Right) */}
            <div
                className="relative flex items-center cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={profileImg?.img || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}  // Replace with actual image URL
                    alt="Profile"
                    className="w-10 h-10 rounded-full border"
                />

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                    <div
                        className="absolute right-0 mt-40 w-40 bg-white border rounded-lg shadow-lg"
                        onMouseEnter={() => setIsDropdownOpen(true)} // Keep open when hovering menu
                        onMouseLeave={handleMouseLeave} // Close when leaving menu
                    >
                        <ul className="py-2">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link to={"/dashboard/profile"}>Profile</Link>
                            </li>
                            <li onClick={handleLogout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminNavbar;
