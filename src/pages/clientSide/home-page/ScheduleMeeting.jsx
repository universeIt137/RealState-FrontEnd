import React from 'react';

const ScheduleMeeting = () => {
    return (
        <div className='w-11/12  mx-auto' >
            <div className="justify-center py-10">
                <div className="  shadow-lg gap-10 overflow-hidden lg:flex">

                    {/* Left Side - Background Image */}
                    <div
                        className="hidden bg-black    lg:block opacity-95 lg:w-1/2 bg-cover bg-center"
                        
                    ></div>

                    {/* Right Side - Form */}
                    <div className="w-full border lg:w-1/2 p-8">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">SCHEDULE A MEETING</h2>

                        <form className="space-y-4">
                            <div>
                                <label htmlFor="fullName" className="sr-only">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="Full Name*"
                                    className="w-full px-4 py-4 border-2 border-black focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    placeholder="Phone Number*"
                                    className="w-full px-4 border-2 border-black py-4  focus:outline-none focus:ring-2 focus:ring-green-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="  sr-only">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-4 border-2 border-black focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="time" className="sr-only">Select A Time</label>
                                <select
                                    id="time"
                                    className="w-full border-2 border-black px-4 py-4  focus:outline-none focus:ring-2 focus:ring-green-500"
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
                                    className=" py-3 border border-black px-8 text-black font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
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
