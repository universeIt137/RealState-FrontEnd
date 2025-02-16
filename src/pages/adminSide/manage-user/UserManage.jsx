import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { updateAlert } from "../../../helper/updateAlert";
import { deleteAlert } from "../../../helper/deleteAlert";

const UserManage = () => {
    const axiosPublic = useAxiosPublic()
    // Sample User Data
    const { data: allUser = [], refetch, isLoading } = useQuery({
        queryKey: ['allUser'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-user');
            console.log(res)
            return res.data.data;
        }
    })


    // Delete User Function
    const handleDelete = async (id) => {
        try {
            let resp = await deleteAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.delete(`/user-delete/${id}`);
                if (res) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User delete successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch()
                }
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User delete fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const userRoleUpdate = async (id) => {
        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                const res = await axiosPublic.post(`/role-update/${id}`);
                if (res) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User role update successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return;
                }
            }

        } catch (error) {
            alert("Role update fail")
        }
    }

    if (isLoading) {
        return (
            <div className="flex h-screen justify-center items-center " >
                <h1>Data loading</h1>
            </div>
        )
    }

    return (
        <div className=" flex justify-center items-center  p-4">
            <Helmet>
                <title>Dashboard | User manage page </title>
            </Helmet>
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">User List</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="border p-3 text-left">Name</th>
                                <th className="border p-3 text-left">Email</th>
                                <th className="border p-3 text-left">Phone Number</th>
                                <th className="border p-3 text-left">Role</th>
                                <th className="border p-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUser.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-100">
                                    <td className="border p-3">{user.name}</td>
                                    <td className="border p-3">{user.email}</td>
                                    <td className="border p-3">{user.phoneNumber}</td>
                                    <td onClick={() => { userRoleUpdate(user._id) }} className="border p-3 cursor-pointer ">{
                                        user.role
                                    }</td>
                                    <td className="border p-3 flex justify-center gap-4">
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <Edit size={20} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserManage;
