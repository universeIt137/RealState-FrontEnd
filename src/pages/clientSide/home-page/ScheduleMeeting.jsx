import React from 'react';

const ScheduleMeeting = ({banner}) => {
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
