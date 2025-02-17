import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { uploadImg } from "../../../uploadFile/uploadImg";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const UserRegistration = () => {
    const axiosPublic = useAxiosPublic();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phoneNumber = e.target.phoneNumber.value;
        const password = e.target.password.value;
        const confirmedPassword = e.target.confirmedPassword.value;
        const img = e.target.img.files[0];
        if (password !== confirmedPassword) {
            toast.error("Password and confirmed not match");
            return;
        }

        let images = "";

        if (!img?.name) {
            images = "";
        }
        images = await uploadImg(img);

        const payload = {
            name,
            email,
            phoneNumber,
            password,
            confirmedPassword,
            img: images,
        };

        try {
            setLoader(true);
            let res = await axiosPublic.post("/registration", payload);
            setLoader(false);
            if (res) {
                navigate("/login");
                e.target.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User registration successful",
                    showConfirmButton: false,
                    timer: 1500,
                });
                e.target.reset();
            }
        } catch (error) {
            setLoader(false)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: error.response.data.msg ,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <>
            <Helmet>
                <title> Registration From </title>
            </Helmet>
            <div className="flex justify-center h-[80vh] items-center">
                <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-4xl">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
                        Register
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label className="block text-gray-600 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* img */}
                            <div>
                                <label className="block text-gray-600 font-medium">Profile Image</label>
                                <input
                                    type="file"
                                    name="img"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-600 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-gray-600 font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Enter your phone number"
                                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-gray-600 font-medium">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        className="w-full mt-1 px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        required
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
                                        className="w-full mt-1 px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                        required
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
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-6 block mx-auto bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
                        >
                            {loader ? "Loading..." : "Register"}
                        </button>
                    </form>

                    {/* Already have an account? Login */}
                    <p className="mt-4 text-center text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Please login
                        </Link>
                    </p>
                </div>
            </div>
            <Toaster position="top-center" ></Toaster>
        </>
    );
};

export default UserRegistration;
