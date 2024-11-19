import React, { useState } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import scheduleStore from '../../../api-request/schedule-api/scheduleStore';


const ScheduleMeeting = ({banner}) => {
    const axiosPublic = useAxiosPublic();
    const [loader, setLoader] = useState(false);
    const { scheduleCreateApi,scheduleDataListApi } = scheduleStore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const full_name = form.fullName.value;
        const email_address = form.email.value;
        const phone_number = form.phone_number.value;
        const payload = { full_name, email_address, phone_number };

        try {
            setLoader(true)
            let res = await scheduleCreateApi(payload);
            setLoader(false);
            if (res) {
                setLoader(true);
                await scheduleDataListApi();
                setLoader(false);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
                return;
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Your work has been save failed",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Your work has been save failed",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div className="w-11/12  mx-auto">
            <div className="justify-center -mt-14 lg:-mt-0 ">
                <div className="lg:gap-10 overflow-hidden lg:flex">
                    {/* Left Side - Background Image with Overlay */}
                    <div className="relative hidden lg:block lg:w-1/2 rounded-lg">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center border  rounded-lg flex justify-center items-center"
                           
                        >
                            <img src={banner} alt="" className='rounded-lg '/>
                        </div>
                        {/* Overlay to control opacity */}
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full lg:w-1/2 lg:py-10">
                        <h2 className="lg:text-2xl font-bold text-black text-center mb-2 lg:mb-6">SCHEDULE A MEETING</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name='full_name'
                                    placeholder="Full Name*"
                                    className="w-full px-4 py-2 lg:py-4 border-2 border-black focus:outline-none  "
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name='phone_number'
                                    placeholder="Phone Number*"
                                    className="w-full px-4 border-2 border-black py-2 lg:py-4 focus:outline-none "
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name='email_address'
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2 lg:py-4 border-2 border-black focus:outline-none "
                                />
                            </div>



                            <div>
                                <button
                                    type="submit"
                                    className="lg:py-3 py-1 border border-black px-8 text-black font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                >
                                    {
                                        loader ? 'Loading...' : 'Submit'
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleMeeting;
