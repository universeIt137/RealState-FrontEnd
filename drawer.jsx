{/* Drawer */ }
{
    isDrawerOpen && (
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
    )
}