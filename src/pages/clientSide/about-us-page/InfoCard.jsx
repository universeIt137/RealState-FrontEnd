import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const InfoCard = () => {
    return (
        <div className="relative bg-white shadow-lg p-6 rounded-md lg:h-[350px]  overflow-hidden flex justify-center items-center">
            {/* Top Left Green Curved Design */}
            <div className="hidden lg:block absolute lg:-top-20 lg:-left-20 w-44 h-44 bg-[#45a170]  rounded-full"></div>

            {/* Bottom Right Green Rectangle */}
            <div className="hidden lg:block absolute bottom-0 right-0 w-20 h-20 bg-[#45a170] "></div>

            {/* Main Content */}
            <div className=" z-10">
                <h2 className="lg:text-4xl text-xl font-semibold text-[#45a170] mb-4 text-center lg:text-start">
                    Amar Thikana Real Estate Ltd.
                </h2>
                <div className="text-gray-700 lg:space-y-3">
                    <div className="flex items-center gap-2">
                        <FaLocationPin></FaLocationPin>
                        <p className="text-[15px] font-bold">
                            Address:  Address: 48, Bijoy Nagar (4th Floor), <br /> Paltan, Dhaka-1000.
                        </p> 
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhone></FaPhone>
                        <p className="text-[15px] font-bold">Phone: +88 01747-516981</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope></FaEnvelope>
                        <p className="text-[15px] font-bold">Email:amarthikana06@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
