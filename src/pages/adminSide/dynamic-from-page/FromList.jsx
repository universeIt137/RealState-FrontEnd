import React from 'react';
import { MdDelete } from 'react-icons/md';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { deleteAlert } from '../../../helper/deleteAlert';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const FromList = () => {
    window.scrollTo(0, 0);
    const axiosPublic = useAxiosPublic();

    const { data: bookingFromData = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['bookingFromData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booking-form`);
            return res.data;
        }
    });

    const handleDelete = async (id) => {
        console.log(`deleting ${id}`);
        try {
            let resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/booking-form/${id}`);
                if (res) {
                    refetch()
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Booking from has been deleted.',
                        icon: 'success',
                    });
                }
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to delete booking from.',
                icon: 'error',
            })
        }
    };



    return (
        <div>
            <Helmet>
                <title>Amar Thikana | Booking from List</title>
            </Helmet>
            <div className="overflow-x-auto p-4">
                <h1 className='lg:text-4xl text-center font-bold mb-6 ' >Booking from list</h1>
                <table className="table-auto w-full border border-gray-200">
                    {/* Table Head */}
                    <thead>
                        <tr className="text-black bg-gray-100">
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Image</th>
                            <th className="px-4 py-2 border">Mobile Number</th>
                            <th className="px-4 py-2 border">Name of Nominee</th>
                            <th className="px-4 py-2 border">View Details</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {bookingFromData && bookingFromData.map((item, i) => (
                            <tr key={i} className="text-sm text-center text-gray-800 even:bg-gray-100 odd:bg-white">
                                <td className="px-4 py-2 border">{item?.name}</td>
                                <td className="px-4 py-2 border">
                                    <img
                                        src={item?.image}
                                        alt="User"
                                        className="w-10 h-10 rounded-full mx-auto"
                                    />
                                </td>
                                <td className="px-4 py-2 border">{item?.mobileNumber}</td>
                                <td className="px-4 py-2 border">{item?.nameOfNomoni}</td>
                                <td className="px-4 py-2 border">
                                    <Link to={`/dashboard/booking-from-details/${item?._id}`}>
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                                            View Details
                                        </button>
                                    </Link>
                                </td>
                                <td className="px-4 py-2 border">
                                    <button onClick={() => handleDelete(item?._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                        <MdDelete className="text-xl" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FromList;
