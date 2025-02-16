import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const UserRegistration = () => {
    const axiosPublic = useAxiosPublic();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmedPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        try {
            setLoader(true);
            let res = await axiosPublic.post("/registration", formData);
            setLoader(false);
            if (res) {
                navigate("/login")
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User registration successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "User registration fail",
                showConfirmButton: false,
                timer: 1500
            });

        }
    };

    return (
        <>
            <div>
                <div className="flex justify-center items-center pt-14 ">
                    <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Name */}
                            <div>
                                <label className="block text-gray-600 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
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
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
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
                                        value={formData.password}
                                        onChange={handleChange}
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
                                        value={formData.confirmedPassword}
                                        onChange={handleChange}
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
                            >
                                {
                                    loader ? "loading.." : "Register"
                                }
                            </button>
                        </form>
                    </div>


                </div>
            </div>
            <h1 className="text-center my-2 " >You have no account ? Please <Link className=" underline " to={"/login"}>Login ! </Link>  </h1>
        </>
    );
};

export default UserRegistration;
