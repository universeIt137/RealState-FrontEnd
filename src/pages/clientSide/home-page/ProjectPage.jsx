import React from 'react'
const features = [
    {
        title: "Lush Green Spaces",
        description: "Enjoy beautifully landscaped gardens and open spaces that bring you closer to nature.",
    },
    {
        title: "Luxury Swimming Pool",
        description: "Relax and unwind in our luxurious swimming pool, a perfect escape from the daily hustle.",
    },
    {
        title: "Fully-Equipped Gym",
        description: "Stay fit and healthy with access to a state-of-the-art gym facility within the premises.",
    },
    {
        title: "24/7 Security",
        description: "Enjoy peace of mind with round-the-clock security and surveillance for a safe living environment.",
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

                {/* Features Section */}
                <section className="lg:py-2 px-2  ">
                    <h2 className=" lg:text-4xl font-bold text-center text-black mb-1 lg:mb-5">Project Highlights</h2>
                    <div className="grid lg:gap-10 gap-3 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg border p-3 lg:p-6 text-justify"
                            >
                                <h3 className="lg:text-2xl text-[10px] font-bold lg:mb-2 text-black">
                                    {feature.title}
                                </h3>
                                <p className="text-black lg:text-lg text-[10px]">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className=" py-5   text-center">
                    <h2 className=" lg:text-4xl text-black font-bold  lg:mb-2">Ready to Make This Your Home?</h2>
                    <p className="text-black text-[10px] lg:text-xl mb-2 lg:mb-2">Schedule a tour today and see for yourself why our project is the perfect place to live.</p>
                    <button className=" bg-[#027F3D] opacity-70 font-semibold px-8 py-3 rounded-lg text-[10px] lg:text-[16px] text-white ">
                        Schedule a Tour
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ProjectPage
