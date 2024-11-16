import React from 'react'

const AboutUs = () => {
    window.scrollTo(0, 0);
    return (
        <div className='w-11/12 mx-auto mt-16 lg:mt-20  ' >
            <div className='lg:py-10 py-4  ' >
                <div className="bg-white">
                    <div className=" flex flex-col lg:items-center text-justify lg:flex-row lg:text-justify ">
                        {/* Left Content */}
                        <div className="md:w-3/5">
                            <h1 className="lg:text-4xl font-bold leading-tight text-black">
                                Creating a Better <span className=" text-[#027f3d] bg-opacity-70 ">Real Estate Solutions</span>
                            </h1>
                            <p className="lg:mt-4 mt-1 text-[10px] lg:text-[20px] text-black">
                                Amar Thikana is a Bangladesh-based Real Estate Company. Amar Thikana specializes in offering top-notch real estate solutions, maintaining a high standard of property development and management. The main objective is to provide customers with the best possible living and investment opportunities.
                            </p>
                        </div>

                        {/* Right Logo */}
                        <div className="lg:mt-4 mt-2  lg:w-2/5 flex justify-center lg:justify-end">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731389139/Amer%20Thikana/uptnnqpi80uojvcs7bzh.png"
                                alt="Universe Soft Tech Logo"
                                className="w-40 md:w-48"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-white  my-4 lg:my-10 ">
                    <div className="flx flex-col lg:flex lg:flex-row lg:gap-8 items-center ">
                        {/* Left Content (Image and Badge) */}
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731500291/Amer%20Thikana/ynqygmetpfbezjjofbez.jpg" // Replace this with the path to your image
                                alt="Building"
                                className="rounded-lg block lg:ml-0  shadow-lg"
                            />
                            <div className="absolute bottom-4 left-8 bg-[#027f3d] bg-opacity-70font-semibold text-white px-3 py-1 rounded-full shadow-md">
                                <span className="lg:text-sm text-[10px]  ">Celebrating 23 Years of Success</span>
                            </div>
                        </div>

                        {/* Right Content (Text and Points) */}
                        <div>
                            <h2 className="lg:text-4xl lg:mt-3 text-center lg:text-start mt-3 font-bold text-black">
                                ABOUT <span className="text-[#027f3d] bg-opacity-70">AMAR THIKANA</span>
                            </h2>
                            <p className="lg:mt-4 mt-1 lg:text-[20px] text-[10px] text-justify text-black">
                                Amar Thikana's commitment to providing quality real estate solutions
                                has earned the trust of customers and partners worldwide.
                            </p>
                            <p className="lg:mt-4 mt-1 lg:text-[20px] text-[10px] text-justify text-black ">
                                Amar Thikana has been serving the real estate industry in Bangladesh
                                since 2020. We provide exceptional property management and
                                development services. At present, we are expanding our presence in
                                India, Canada, South Africa, Singapore, and Mexico.
                            </p>
                            {/* Feature Points */}
                            <ul className="lg:mt-6 mt-2 lg:text-lg text-[10px] space-y-1 lg:space-y-3">
                                <li className="flex items-center">
                                    <span className="text-black mr-2">✔️</span>
                                    Successfully developed and sold over 500 properties.
                                </li>
                                <li className="flex items-center">
                                    <span className="text-black mr-2">✔️</span>
                                    10,000+ satisfied homeowners and investors.
                                </li>
                                <li className="flex items-center">
                                    <span className="text-black mr-2">✔️</span>
                                    Over 20 years of experience in the real estate market.
                                </li>
                                <li className="flex items-center">
                                    <span className="text-black mr-2">✔️</span>
                                    100% commitment to quality and customer satisfaction.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-white ">
                    <div className=" flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
                        {/* Left Content (Text) */}
                        <div>
                            <h2 className="lg:text-4xl text-center font-bold text-black lg:text-justify ">
                                WHO <span className="text-black underline">WE</span> ARE
                            </h2>
                            <p className="lg:mt-4 lg:text-justify text-justify  mt-1 text-[10px] lg:text-lg text-black">
                                Amar Thikana is one of the leading real estate companies in Bangladesh.
                            </p>
                            <p className="lg:mt-4 lg:text-justify text-justify  mt-1 text-[10px] lg:text-lg text-black">
                                Amar Thikana is dedicated to helping individuals and businesses
                                find their ideal properties. Our approach begins with a thorough
                                understanding of every client's unique needs and preferences.
                            </p>
                            <p className="lg:mt-4 lg:text-justify text-justify  mt-1 text-[10px] lg:text-lg text-black">
                                With years of experience, our leadership team brings unparalleled
                                expertise, enabling us to deliver tailored solutions for diverse
                                property requirements.
                            </p>
                        </div>

                        {/* Right Content (Image) */}
                        <div className="relative">
                            <div className="w-[50vh] aspect-square overflow-hidden rounded-full shadow-lg">
                                <img
                                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731500291/Amer%20Thikana/ynqygmetpfbezjjofbez.jpg"
                                    alt="Team"
                                    className=" h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs