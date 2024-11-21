import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';


const ManageApply = () => {
    const axiosPublic = useAxiosPublic();


    const { data: allData = [], refetch } = useQuery({
        queryKey: ['careerData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/apply');
            return res.data;
        }
    })


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic
                    .delete(`/apply/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Data has been deleted.',
                                icon: 'success',
                            });
                            refetch();
                        }

                    })
                    .catch((err) => {
                        console.log(err);

                    });
            }
        });
    };

    const handleUpdate = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic
                    .patch(`/apply/${id}`)
                    .then((res) => {
                        if (res) {
                            Swal.fire({
                                title: 'Updated!',
                                text: 'Data has been updated.',
                                icon: 'success',
                            });
                            refetch();
                        }

                    })
                    .catch((err) => {
                        console.log(err);

                    });
            }
        });
    };


    return (
        <div className="overflow-x-auto w-full my-5">
            <Helmet>
                <title>Dashboard | Manage Application</title>
            </Helmet>
            <p className="text-2xl font-bold text-center mb-2">Manage Application</p>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Phone</th>
                        <th className="px-4 py-2 border">CV</th>
                        <th className="px-4 py-2 border">Address</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData?.map((content) => (
                            <tr key={content?._id} className="text-center">
                                <td className="px-4 py-2 border font-semibold">{content?.name}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.phone}</td>
                                <td className="px-4 py-2 border font-semibold">
                                    <Link target='_blank' to={content?.cvImageUrl}>
                                        <button className='btn bg-green text-white'>Click Here</button>
                                    </Link>
                                </td>
                                <td className="px-4 py-2 border font-semibold">{content?.location}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.status ? `Confirmed` : `Not Confirmed`}</td>

                                <td className="px-4 py-2 border">
                                    <button
                                         onClick={() => handleUpdate(content?._id)}
                                        className="px-2 py-1 bg-blue-500 text-white rounded mr-2"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(content?._id)}
                                        className="px-2 py-1 bg-red-500 text-white rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageApply;

