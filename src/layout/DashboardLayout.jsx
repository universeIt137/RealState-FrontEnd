import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../components/adminSide/sideBar/Sidebar';
import AdminNavbar from '../components/adminSide/adminNavbar/AdminNavbar';



const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <AdminNavbar></AdminNavbar>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8 overflow-auto">
         <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;