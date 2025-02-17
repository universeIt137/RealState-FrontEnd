import { useQuery } from '@tanstack/react-query';
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadFile/uploadImg';
import { updateAlert } from '../../../helper/updateAlert';
import toast, { Toaster } from 'react-hot-toast';

const AdminProfile = () => {
    const axiosPublic = useAxiosPublic();
    const [loader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const token = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `${token}` // Corrected
        }
    };


    const { data: profileData = [], refetch } = useQuery({
        queryKey: ['profileData'],
        queryFn: async () => {
            const res = await axiosPublic.get('/user-profile', config);
            return res.data;
        }
    });


    const { img: upcommingImg } = profileData;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneNumber = e.target.phoneNumber.value;
        const role = e.target.role.value;
        const confirmedPassword = e.target.confirmedPassword.value;
        const password = e.target.password.value;
        const img = e.target.img.files[0];
       

        let updateImage = upcommingImg;
        console.log(`update img is ${updateImage}`)
        if (!img?.name) {
            updateImage = upcommingImg
        } else {
            updateImage = await uploadImg(img);
        }

        const payload = {
            name, email, phoneNumber, role, confirmedPassword, password, img: updateImage
        };

        console.log(payload)

        try {
            const resp = await updateAlert();
            if (resp.isConfirmed) {
                setLoader(true);
                let res = await axiosPublic.put("/profile-update", payload, config);
                setLoader(false);
                if (res) {
                    toast.success("Profile update successfully!")
                    refetch();
                    return;
                }
            }
        } catch (error) {
            setLoader(false);
            toast.error("Profile update fail!")
        }

    }
    return (
        <div>
            <div className="flex justify-center  items-center ">
                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">User Profile</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className='grid grid-cols-2 gap-3 ' >
                            {/* Name */}
                            <div>
                                <label className="block text-gray-600 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={profileData?.name}
                                    placeholder="Enter your full name"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"

                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-600 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={profileData?.email}
                                    placeholder="Enter your email"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    disabled
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-gray-600 font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Enter your phone number"
                                    defaultValue={profileData?.phoneNumber}
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"

                                />
                            </div>

                            {/* Role Selection */}
                            <div>
                                <label className="block text-gray-600 font-medium">Role</label>
                                <input
                                    type='text'
                                    name="role"
                                    defaultValue={profileData?.role}
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    disabled
                                >

                                </input>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-gray-600 font-medium">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        defaultValue={profileData?.password}

                                        className="w-full mt-1 px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        disabled
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-2/4 right-3 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-gray-600 font-medium">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmedPassword"
                                        placeholder="Confirm your password"
                                        defaultValue={profileData?.confirmedPassword}
                                        className="w-full mt-1 px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        disabled
                                    />
                                    <button
                                        type="button"
                                        className="absolute top-2/4 right-3 transform -translate-y-1/2"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Profile Image Upload */}
                            <div>
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                        <img src={profileData.img || `https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`} />
                                    </div>
                                </div>
                                <label className="block text-gray-600 font-medium">Profile Image</label>
                                <input
                                    type="file"
                                    name="img"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"

                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className=" px-8 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
                        >
                            {loader ? "Loading..." : "Update"}
                        </button>
                    </form>

                </div>
            </div>
            {
                <Toaster position='top-center'></Toaster>
            }
        </div>
    );
};

export default AdminProfile;