import React from 'react';
import { NavLink } from 'react-router-dom';

const Drawer = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed min-h-screen inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Positioning the drawer under the logo */}
            <div className={`fixed left-0 mt-28 w-64 bg-gray-800 text-white p-4 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <button onClick={onClose} className="text-white">Close</button>
                <ul className='mt-4 space-y-2'>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/booking-form" className={({ isActive }) => (isActive ? "underline" : "")}>Booking Form</NavLink>
                    </li>
                    <li>
                        <NavLink to="/offer" className={({ isActive }) => (isActive ? "underline" : "")}>Offer</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about-us" className={({ isActive }) => (isActive ? "underline" : "")}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "underline" : "")}>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/career" className={({ isActive }) => (isActive ? "underline" : "")}>Career</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Drawer;
