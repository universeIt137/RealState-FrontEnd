import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { deleteAlert } from "../../../helper/deleteAlert";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const BankInfoList = () => {
    const axiosPublic = useAxiosPublic();
    const { data: bankInfoList = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['bankInfoList'],
        queryFn: async () => {
            const res = await axiosPublic.get('/bank-info');
            return res.data;
        }
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;
    window.scrollTo(0, 0);

    const handleDelete = async (id) => {
        try {
            let resp = await deleteAlert();
            if (resp.isConfirmed) {
                await axiosPublic.delete(`/bank-info/${id}`);
                refetch();
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Bank Account has been deleted.',
                    icon: 'success',
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to delete Bank Account. Please try again later.',
                icon: 'error',
            })
        }
    };


    return (
        <div className="max-w-5xl mx-auto mt-10">
            <Helmet>
                <title>Dashboard | Bank Account Details</title>
            </Helmet>
            <h2 className="text-3xl text-center font-bold text-gray-700 mb-6">Bank Account Details</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-md">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Account Name</th>
                            <th className="py-3 px-6 text-left">Account Number</th>
                            <th className="py-3 px-6 text-left">Bank Name</th>
                            <th className="py-3 px-6 text-left">Branch Name</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {bankInfoList.map((row) => (
                            <tr
                                key={row._id}
                                className="border-b border-gray-200 hover:bg-gray-100"
                            >
                                <td className="py-3 px-6 text-left">{row.accountName}</td>
                                <td className="py-3 px-6 text-left">{row.accountNumber}</td>
                                <td className="py-3 px-6 text-left">{row.bankName}</td>
                                <td className="py-3 px-6 text-left">{row.branchName}</td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex justify-center">
                                        <Link to={`/dashboard/bank-info-update/${row?._id}`}>
                                            <button className="text-blue-500 hover:text-blue-700 mx-2">
                                                <FaEdit className="text-xl " />
                                            </button>
                                        </Link>
                                        <button onClick={() => { handleDelete(row?._id) }} className="text-xl mx-2">
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BankInfoList;
