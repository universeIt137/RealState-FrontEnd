import React from 'react';

const ProjectDetails = () => {
    const property = {
        heading: "Luxurious Apartment in Downtown",
        location: "123 Main St, Downtown, City",
        images: [
            "https://via.placeholder.com/800x400", // Replace with actual image URLs
            "https://via.placeholder.com/800x400",
        ],
        video: "https://www.youtube.com/embed/your_video_id", // Replace with actual video URL
        description: "This stunning downtown apartment offers breathtaking city views, modern amenities, and convenient access to shops and restaurants.",
        features: [
            "3 Bedrooms",
            "2 Bathrooms",
            "Swimming Pool",
            "Gym Access",
            "24/7 Security",
            "2 Parking Spaces",
        ],
    };

    return (
        <div className="w-11/12  mx-auto px-4 py-8 space-y-8">
            {/* Heading and Location */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">{property.heading}</h1>
                <p className="text-lg lg:text-xl text-gray-600">{property.location}</p>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Property Images</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.images.map((img, index) => (
                        <div key={index} className="relative h-64 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${img})` }}>
                            <span className="absolute inset-0 bg-black bg-opacity-25"></span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Property Video</h2>
                <div className="rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                    <iframe
                        width="100%"
                        height="100%"
                        src={property.video}
                        title="Property Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Property Description</h2>
                <p className="text-gray-600 text-lg">{property.description}</p>
            </div>

            {/* Features */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Property Features</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {property.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 text-lg flex items-center space-x-2">
                            <span className="text-green-600">✔</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetails;
