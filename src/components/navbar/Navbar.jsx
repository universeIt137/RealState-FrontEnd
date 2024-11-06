// import React, { useState } from 'react';
// import { RiMenuUnfold4Fill } from 'react-icons/ri';
// import { NavLink, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const [isGalleryOpen, setIsGalleryOpen] = useState(false); // Dropdown state for Gallery in drawer
//   const { pathname } = useLocation();

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   const toggleGalleryDropdown = () => {
//     setIsGalleryOpen(!isGalleryOpen);
//   };

//   window.scrollTo(0, 0);

//   return (
//     <div className='bg-gradient-to-r from-green-500 to-blue-500 text-white py-1 px-4'>
//       <div className='flex items-center justify-between'>
//         {/* Logo */}
//         <div className='bg-white rounded-full p-1 shadow-2xl shadow-black'>
//           <NavLink to={"/"}>
//           <img
//             className=' w-14 rounded-full'
//             src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730629044/WhatsApp_Image_2024-10-29_at_9.35.05_PM_1_d0dbna.jpg"
//             alt="Logo"
//           />
//           </NavLink>
//         </div>

//         {/* Toggle Button for Mobile Devices */}
//         <button onClick={toggleDrawer} className='md:hidden text-white'>
//           <RiMenuUnfold4Fill size={30} className='font-bold' />
//         </button>

//         {/* Desktop Navigation Links */}
//         <nav className='hidden md:block'>
//           <ul className='flex space-x-6'>
//             <li>
//               <NavLink to="/" className={`${pathname === "/" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/booking-form" className={`${pathname === "/booking-form" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                 Booking Form
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/offer" className={`${pathname === "/offer" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                 Offer
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about-us" className={`${pathname === "/about-us" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact-us" className={`${pathname === "/contact-us" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                 Contact Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/career" className={`${pathname === "/career" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                 Career
//               </NavLink>
//             </li>
//             {/* Gallery Dropdown */}
//             <li className='relative group'>
//               <NavLink to="/gallery" className={`${pathname === "/gallery" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                 Gallery
//               </NavLink>
//               <ul className='absolute hidden group-hover:block bg-[#111111] text-white p-2 space-y-2 mt-2 rounded shadow-lg'>
//                 <li>
//                   <NavLink to="/gallery/images" className={`${pathname === "/gallery/images" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                     Img Gallery
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/gallery/videos" className={`${pathname === "/gallery/videos" ? 'text-black bg-white p-2 rounded-xl' : ''} text-md`}>
//                     Video Gallery
//                   </NavLink>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       {/* Drawer for Small Devices */}
//       {isDrawerOpen && (
//         <div className='md:hidden fixed inset-0 bg-opacity-50 z-50'>
//           <div className='absolute left-0 w-full h-screen bg-green-400 text-white p-4'>
//             <button onClick={toggleDrawer} className='text-white'>
//               <img className='w-6' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730633915/delete_sermfh.png" alt="Close" />
//             </button>
//             <ul className='mt-4 space-y-2'>
//               <li>
//                 <NavLink to="/" exact onClick={toggleDrawer} className='text-lg'>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/booking-form" onClick={toggleDrawer} className='text-lg'>
//                   Booking Form
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/offer" onClick={toggleDrawer} className='text-lg'>
//                   Offer
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about-us" onClick={toggleDrawer} className='text-lg'>
//                   About Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact-us" onClick={toggleDrawer} className='text-lg'>
//                   Contact Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/career" onClick={toggleDrawer} className='text-lg'>
//                   Career
//                 </NavLink>
//               </li>
//               {/* Gallery Dropdown in Drawer */}
//               <li>
//                 <button onClick={toggleGalleryDropdown} className='text-lg w-full text-left'>
//                   Gallery
//                 </button>
//                 {isGalleryOpen && (
//                   <ul className='ml-4 mt-2 space-y-2'>
//                     <li>
//                       <NavLink to="/gallery/images" onClick={toggleDrawer} className='text-lg'>
//                         Img Gallery
//                       </NavLink>
//                     </li>
//                     <li>
//                       <NavLink to="/gallery/videos" onClick={toggleDrawer} className='text-lg'>
//                         Video Gallery
//                       </NavLink>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-10 p-4 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Logo</div>
        <div className="space-x-4">
          <a href="#home" className="hover:text-gray-700">Home</a>
          <a href="#categories" className="hover:text-gray-700">Categories</a>
          <a href="#cart" className="hover:text-gray-700">Cart</a>
          <a href="#profile" className="hover:text-gray-700">Profile</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
