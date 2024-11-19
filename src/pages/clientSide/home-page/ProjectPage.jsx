import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
const features = [
    {
        title: "20 feet and 30 feet wide roads.",
        description: "Spacious 20 and 30 feet wide roads are ideal for modern transportation, ensuring easy and safe travel.",
    },
    {
        title: "All civic amenities, including water and electricity, are available.",
        description: "Ensured civic amenities including water and electricity. Your lifestyle will be comfortable and secure.",
    },
    {
        title: "An area monitored by round-the-clock security guards.",
        description: "Round-the-clock monitoring to maintain a safe living space.",
    },
    {
        title: "Enjoy a well-rounded community with places of worship, education, and recreation.",
        description: "The project area also includes a mosque, madrasa, school, college, university, playground, hospital, and an international-standard market, along with all other amenities.",
    },
    {
        title: "Vibrant Community",
        description: "Join a welcoming community of like-minded residents and participate in engaging events.",
    },
    {
        title: "Business Center",
        description: "Access a modern business center to work and hold meetings, enhancing your productivity.",
    },
];
const ProjectPage = () => {
    return (
        <div className='w-11/12 mx-auto  ' >
            <div className="-mt-10 lg:-mt-0 ">
                {/* Hero Section */}
                <section className="relative bg-cover bg-center " >
                    <div className="absolute inset-0  opacity-50"></div>
                    <div className="relative z-10 flex flex-col justify-center items-center text-black text-justify px-2 lg:px-4">
                        <h1 className="lg:text-4xl font-bold">Discover Why Our Project is the Best</h1>
                        <p className="text-[10px] lg:text-xl lg:my-4 text-justify max-w-2xl">Experience modern living in a serene environment with top-notch amenities, built to suit your lifestyle.</p>
                    </div>
                </section>

                <div className="bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90 my-6 text-white p-6 rounded-lg shadow-lg w-80">
                    {/* Icon or Logo */}
                    <div className="mb-4">
                        <div className="h-8 w-8 bg-white rounded flex items-center justify-center">
                            <div className="h-4 w-4 bg-teal-600"></div>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-2">Marketing</h2>

                    {/* Description */}
                    <p className="text-sm mb-6">
                        Marketing and analytics of the beauty and wellness markets
                    </p>

                    {/* Button */}
                    <button className="flex items-center  px-4 py-2 rounded-full  transition">
                        <span className="mr-2">Learn more</span>
                        <FiArrowRight className="text-lg" />
                    </button>
                </div>

                {/* Call to Action */}
                <section className=" py-5   text-center">
                    <h2 className=" lg:text-4xl text-black font-bold  lg:mb-2">Ready to Make This Your Home?</h2>
                    <p className="text-black text-[10px] lg:text-xl mb-2 lg:mb-2">Schedule a tour today and see for yourself why our project is the perfect place to live.</p>
                    <button className=" bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90  font-semibold px-8 py-3 rounded-lg text-[10px] lg:text-[16px] text-white ">
                        Schedule a Tour
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ProjectPage
