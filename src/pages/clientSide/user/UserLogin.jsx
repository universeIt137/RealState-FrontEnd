import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FiEyeOff } from "react-icons/fi";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
    const axiosPublic = useAxiosPublic();
    const [formData, setFormData] = useState({
        phoneNumber: "",
        password: "",
        confirmedPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let res = await axiosPublic.post(`/user-login`, formData);
            setLoading(false);
            if (res) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);
                navigate("/dashboard")

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset();
                return;

            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "User login fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">User Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

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
                                {showPassword ? <FiEyeOff size={20} /> : <FaEye size={20} />}
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
                                {showConfirmPassword ? <FiEyeOff size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
                    >
                        {
                            loading ? "loading.." : "Submit"
                        }
                    </button>
                </form>
                <h1 className="text-center my-2 " >You have no account ? Please <Link className=" underline " to={"/registration"}>Registration ! </Link>  </h1>
            </div>
        </div>
    );
};

export default UserLogin;
