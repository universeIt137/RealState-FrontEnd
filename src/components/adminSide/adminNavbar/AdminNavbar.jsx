import React from 'react';

const AdminNavbar = () => {
    window.scrollTo(0, 0);
    return (
        <div>
            <div className="flex justify-center items-center bg-white shadow p-4">
                
                <div className="flex items-center space-x-4">
                    <div className="">
                        <h1 className='text-3xl  font-bold text-center ' >Dashboard</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;