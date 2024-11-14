import React from 'react'

const ProjectPage = () => {
    return (
        <div>
            <div className=" w-11/12 mx-auto  ">
                {/* Hero Section */}
                <section className="relative bg-cover bg-center " >
                    <div className="absolute inset-0  opacity-50"></div>
                    <div className="relative z-10 flex flex-col justify-center items-center text-[#21c45e] text-center px-2 md:px-4">
                        <h1 className="md:text-4xl font-bold mb-2 md:mb-4">Discover Why Our Project is the Best</h1>
                        <p className="text-[10px] md:text-xl max-w-2xl">Experience modern living in a serene environment with top-notch amenities, built to suit your lifestyle.</p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="md:py-16 py-3 px-2 md:px-8 ">
                    <h2 className=" md:text-4xl font-bold text-center text-[#21c45e] mb-3 md:mb-10">Project Highlights</h2>
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white border shadow-lg rounded-lg p-3 md:p-6 text-center">
                            <h3 className="md:text-2xl text-[10px] font-bold mb-2 text-[#21c45e] ">Lush Green Spaces</h3>
                            <p className="text-[#21c45e] md:text-lg text-[10px] ">Enjoy beautifully landscaped gardens and open spaces that bring you closer to nature.</p>
                        </div>
                        <div className="bg-white shadow-lg border rounded-lg p-3 md:p-6 text-center">
                            
                            <h3 className="md:text-2xl text-[10px] font-bold mb-2 text-[#21c45e]">Luxury Swimming Pool</h3>
                            <p className="text-[#21c45e] md:text-lg text-[10px] ">Relax and unwind in our luxurious swimming pool, a perfect escape from the daily hustle.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg border p-3 md:p-6 text-center">
                            <h3 className="md:text-2xl text-[10px] font-bold mb-2 text-[#21c45e] ">Fully-Equipped Gym</h3>
                            <p className="text-[#21c45e] md:text-lg text-[10px] ">Stay fit and healthy with access to a state-of-the-art gym facility within the premises.</p>
                        </div>
                        <div className="bg-white shadow-lg border rounded-lg p-3 md:p-6 text-center">
                            <h3 className="md:text-2xl text-[10px] font-bold mb-2 text-[#21c45e] ">24/7 Security</h3>
                            <p className="text-[#21c45e] md:text-lg text-[10px] ">Enjoy peace of mind with round-the-clock security and surveillance for a safe living environment.</p>
                        </div>
                        <div className="bg-white shadow-lg border rounded-lg p-3 md:p-6 text-center">
                            
                            <h3 className="md:text-2xl text-[10px] font-bold mb-2 text-[#21c45e] ">Vibrant Community</h3>
                            <p className="text-[#21c45e] md:text-lg text-[10px] ">Join a welcoming community of like-minded residents and participate in engaging events.</p>
                        </div>
                        <div className="bg-white border shadow-lg rounded-lg p-3 md:p-6 text-center">
                            <h3 className="md:text-2xl text-[10px] font-bold mb-2 text-[#21c45e] ">Business Center</h3>
                            <p className="text-[#21c45e] md:text-lg text-[10px] ">Access a modern business center to work and hold meetings, enhancing your productivity.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className=" py-8 md:py-16  text-center">
                    <h2 className=" md:text-4xl text-[#21c45e] font-bold mb-2 md:mb-4">Ready to Make This Your Home?</h2>
                    <p className="text-[#21c45e] text-[10px] md:text-xl mb-4 md:mb-8">Schedule a tour today and see for yourself why our project is the perfect place to live.</p>
                    <button className=" bg-[#21c45e] font-semibold px-8 py-3 rounded-lg text-[10px] md:text-[16px] text-white ">
                        Schedule a Tour
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ProjectPage
