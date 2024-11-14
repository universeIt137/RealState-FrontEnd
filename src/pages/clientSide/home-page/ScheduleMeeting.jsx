import React from 'react';

const ScheduleMeeting = () => {
    return (
        <div className="w-11/12  mx-auto">
            <div className="justify-center -mt-14 lg:-mt-0 ">
                <div className="lg:gap-10 overflow-hidden lg:flex">
                    {/* Left Side - Background Image with Overlay */}
                    <div className="relative hidden lg:block lg:w-1/2">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799878/Amer%20Thikana/m0zytoaeovvwdx5pkcqa.jpg')`,
                            }}
                        ></div>
                        {/* Overlay to control opacity */}
                        <div className="absolute inset-0 bg-black opacity-20"></div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full lg:w-1/2 lg:py-10">
                        <h2 className="lg:text-2xl font-bold text-black text-center mb-2 lg:mb-6">SCHEDULE A MEETING</h2>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
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
                                    placeholder="Email Address"
                                    className="w-full px-4 py-2 lg:py-4 border-2 border-black focus:outline-none "
                                />
                            </div>

                            <div>
                                <label htmlFor="time" className="sr-only">Select A Time</label>
                                <select
                                    id="time"
                                    className="w-full border-2 border-black px-4 py-2 lg:py-4 focus:outline-none "
                                >
                                    <option value="">Select A Time</option>
                                    <option value="9am">9:00 AM</option>
                                    <option value="10am">10:00 AM</option>
                                    <option value="11am">11:00 AM</option>
                                    <option value="1pm">1:00 PM</option>
                                    <option value="2pm">2:00 PM</option>
                                </select>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="lg:py-3 py-1 border border-black px-8 text-black font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                >
                                    Submit
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
