import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
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
    const axiosPublic = useAxiosPublic();
    const { data: projectHighlightData = [] } = useQuery({
        queryKey: ['bestProject'],
        queryFn: async () => {
            let res = await axiosPublic.get(`/best-project`);
            return res.data;
        }
    });
    return (
        <div className='w-11/12 mx-auto  ' >
            <div className="-mt-10 lg:-mt-0 ">
                {/* Hero Section */}
                <section className="relative bg-cover bg-center " >
                    <div className="absolute inset-0  opacity-50"></div>
                    <div className="relative z-10 flex flex-col justify-center items-center text-black text-justify px-2 lg:px-4">
                        <h1 className="lg:text-4xl font-bold">কেন আমাদের প্রকল্প সেরা </h1>
                       
                    </div>
                </section>

               


                <Marquee speed={35} pauseOnHover={true}>
                    <div className="flex gap-5 lg:gap-10  bg-opacity-90 my-6 text-white" style={{ position: "relative" }}>
                        {projectHighlightData &&
                            projectHighlightData.map((item, i) => (
                                <div
                                    className="bg-gradient-to-r from-[#027F3D] w-96 to-[#034A26] p-6 rounded-lg shadow-lg mx-5"
                                    key={i}
                                >
                                    {/* Icon or Logo */}
                                    <div className="mb-4">
                                        <div className="h-8 w-8 bg-white rounded flex items-center justify-center">
                                            <div className="h-4 w-4 bg-teal-600"></div>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl font-bold mb-2">{item?.heading}</h2>

                                    {/* Description */}
                                    <p className="text-sm mb-6">{item?.short_description}</p>

                                    {/* Button */}
                                    {/* <button className="flex items-center px-4 py-2 rounded-full transition">
                                    <span className="mr-2">Learn more</span>
                                    <FiArrowRight className="text-lg" />
                                </button> */}
                                </div>
                            ))}
                    </div>

                </Marquee>




                {/* Call to Action */}
                <section className=" py-5   text-center">
                    <h2 className=" lg:text-4xl text-black font-bold  lg:mb-2">আপনার নতুন ঘর তৈরির জন্য প্রস্তুত?</h2>
                    <p className="text-black text-[10px] lg:text-xl mb-2 lg:mb-2">আজই একটি ভ্রমণের সময়সূচী ঠিক করুন এবং নিজের চোখে দেখে নিন কেন আমাদের প্রকল্পটি বসবাসের জন্য আদর্শ।</p>
                    <button className=" bg-gradient-to-r from-[#027F3D] to-[#034A26] bg-opacity-90  font-semibold px-8 py-3 rounded-lg text-[10px] lg:text-[16px] text-white ">
                        <Link to={'/contact-us'}>
                            Schedule a Tour
                        </Link>
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ProjectPage
