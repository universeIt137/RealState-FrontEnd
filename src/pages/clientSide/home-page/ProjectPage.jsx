import React from 'react'

const ProjectPage = () => {
    return (
        <div>
            <div className="w-full min-h-screen bg-gray-100">
                {/* Hero Section */}
                <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?architecture')` }}>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Why Our Project is the Best</h1>
                        <p className="text-lg md:text-xl max-w-2xl">Experience modern living in a serene environment with top-notch amenities, built to suit your lifestyle.</p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 px-4 md:px-8 lg:px-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Project Highlights</h2>
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img src="https://source.unsplash.com/random/100x100/?garden" alt="Garden" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Lush Green Spaces</h3>
                            <p className="text-gray-600">Enjoy beautifully landscaped gardens and open spaces that bring you closer to nature.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img src="https://source.unsplash.com/random/100x100/?pool" alt="Swimming Pool" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Luxury Swimming Pool</h3>
                            <p className="text-gray-600">Relax and unwind in our luxurious swimming pool, a perfect escape from the daily hustle.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img src="https://source.unsplash.com/random/100x100/?gym" alt="Gym" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Fully-Equipped Gym</h3>
                            <p className="text-gray-600">Stay fit and healthy with access to a state-of-the-art gym facility within the premises.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img src="https://source.unsplash.com/random/100x100/?security" alt="Security" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">24/7 Security</h3>
                            <p className="text-gray-600">Enjoy peace of mind with round-the-clock security and surveillance for a safe living environment.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img src="https://source.unsplash.com/random/100x100/?community" alt="Community" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Vibrant Community</h3>
                            <p className="text-gray-600">Join a welcoming community of like-minded residents and participate in engaging events.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <img src="https://source.unsplash.com/random/100x100/?office" alt="Office Space" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Business Center</h3>
                            <p className="text-gray-600">Access a modern business center to work and hold meetings, enhancing your productivity.</p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-green-500 py-16 text-white text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make This Your Home?</h2>
                    <p className="text-lg md:text-xl mb-8">Schedule a tour today and see for yourself why our project is the perfect place to live.</p>
                    <button className="bg-white text-green-500 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100">
                        Schedule a Tour
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ProjectPage
