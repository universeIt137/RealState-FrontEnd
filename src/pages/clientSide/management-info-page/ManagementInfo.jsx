import React from 'react';
import { Helmet } from 'react-helmet-async';

const ManagementInfo = () => {
    // Data: 10 arrays of objects representing management personnel
    const managementData = [
        { id: 1, name: 'Alice Johnson', jobPost: 'CEO', phone: '123-456-7890', email: 'alice@company.com', experience: 15, imgUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Bob Smith', jobPost: 'CTO', phone: '234-567-8901', email: 'bob@company.com', experience: 12, imgUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Charlie Brown', jobPost: 'CFO', phone: '345-678-9012', email: 'charlie@company.com', experience: 10, imgUrl: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Diana Prince', jobPost: 'HR Manager', phone: '456-789-0123', email: 'diana@company.com', experience: 8, imgUrl: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Ethan Hunt', jobPost: 'Marketing Head', phone: '567-890-1234', email: 'ethan@company.com', experience: 7, imgUrl: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Fiona Scott', jobPost: 'Project Manager', phone: '678-901-2345', email: 'fiona@company.com', experience: 9, imgUrl: 'https://via.placeholder.com/150' },
        { id: 7, name: 'George Lucas', jobPost: 'Technical Lead', phone: '789-012-3456', email: 'george@company.com', experience: 11, imgUrl: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Hannah Adams', jobPost: 'UI/UX Designer', phone: '890-123-4567', email: 'hannah@company.com', experience: 5, imgUrl: 'https://via.placeholder.com/150' },
        { id: 9, name: 'Ian Wright', jobPost: 'Software Engineer', phone: '901-234-5678', email: 'ian@company.com', experience: 4, imgUrl: 'https://via.placeholder.com/150' },
        { id: 10, name: 'Julia Roberts', jobPost: 'Content Manager', phone: '012-345-6789', email: 'julia@company.com', experience: 6, imgUrl: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className='w-11/12 mx-auto ' >
            <Helmet>
                <title>Management Information</title>
            </Helmet>
            <div className="my-24 grid lg:grid-cols-4 grid-cols-2 gap-11  lg:gap-6 justify-between ">
            {managementData.map(({ id, name, jobPost, phone, email, experience, imgUrl }) => (
                <div key={id} className="bg-gradient-to-r from-[#30ac6a] to-[#068b48] bg-opacity-90 p-4   rounded-lg text-black">
                    <div className="relative bg-gray-100 rounded-md shadow-md">
                        <div className="relative">
                            <div className="flex gap-1 justify-end p-5 items-center">
                                <img className="h-6 object-cover" src="https://via.placeholder.com/30" alt="Logo" />
                            </div>
                            <div className="h-[120px] relative flex flex-col justify-center items-center gap-5">
                                <div className="bg-primary/70 size-28 rounded-full relative overflow-hidden">
                                    <img
                                        className="w-full h-full rounded-full object-cover p-1"
                                        src={imgUrl}
                                        alt={name}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="text-base font-bold capitalize">{name}</h2>
                                <h2 className="text-sm">{jobPost}</h2>
                                <h2 className="text-sm pt-1">{phone}</h2>
                                <h2 className="text-sm break-words">{email}</h2>
                            </div>
                            <div className="pb-7">
                                <div className="bg-gradient-to-r from-primary to-primary/70 w-[50%] text-white font-semibold mt-5 ml-auto py-1 text-sm pl-5">
                                    <p>Experience:</p>
                                    <p>{experience} Years +</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ManagementInfo;
