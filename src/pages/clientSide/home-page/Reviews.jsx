import React from "react";

function TestimonialCard() {
  const testimonials = [
    {
      text: "Ruttl helped me work more efficiently. I spend less time passing ",
      name: "Francisco Oliden",
      role: "Client Relationship Manager at Agencia Eremo",
      img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881894/client-1_mpvrum.webp",
    },
    {
      text: "Using Ruttl has improved communication with my clients. It's a game changer!",
      name: "Sarah Lee",
      role: "Project Manager at Creative Minds",
      img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881894/client-1_mpvrum.webp",
    },
    {
      text: "Thanks to Ruttl, my team and I can address client feedback faster than ever.",
      name: "James Park",
      role: "Lead Designer at Pixel Innovations",
      img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881894/client-1_mpvrum.webp",
    },
    {
      text: "Ruttl simplified our workflow significantly. Highly recommend it!",
      name: "Alice Chen",
      role: "Operations Manager at Bright Ideas Agency",
      img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881894/client-1_mpvrum.webp",
    },
  ];

  return (
    <div className="px-4 py-10 w-11/12 mx-auto">
      <h1 className="text-center text-2xl font-bold text-black mb-8 md:mb-12 lg:text-3xl">
        Client Review
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-green-600 text-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Top Quote Icon */}
            <div className="absolute -top-6 -left-6 text-white opacity-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-12 w-12"
              >
                <path d="M9.2 10c-2.9 2.2-3.4 5.4-3.4 8 0 1 .2 1.5.7 2.1.4.6 1 .9 1.7.9.6 0 1.1-.3 1.4-.8s.6-1 .6-1.7c0-.6-.1-1.4-.3-2.2-.3-.8-.6-1.8-1.3-2.5s-1.7-1.3-3-1.3c-.5 0-1 .1-1.6.3s-1 .3-1.4.7c-.4.3-.7.6-.9.9l1.2 1.2zM18.4 10c-2.9 2.2-3.4 5.4-3.4 8 0 1 .2 1.5.7 2.1.4.6 1 .9 1.7.9.6 0 1.1-.3 1.4-.8s.6-1 .6-1.7c0-.6-.1-1.4-.3-2.2-.3-.8-.6-1.8-1.3-2.5s-1.7-1.3-3-1.3c-.5 0-1 .1-1.6.3s-1 .3-1.4.7c-.4.3-.7.6-.9.9l1.2 1.2z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <p className="mb-6 text-base h-20 my-auto lg:text-lg font-semibold">
              {testimonial.text}
            </p>

            {/* Profile Section */}
            <div className="flex items-center h-28 my-auto">
              <img
                src={testimonial.img}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="ml-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            </div>

            {/* Bottom Quote Icon */}
            <div className="absolute -bottom-6 my-auto -right-6 text-white opacity-50 transform rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-12 w-12"
              >
                <path d="M9.2 10c-2.9 2.2-3.4 5.4-3.4 8 0 1 .2 1.5.7 2.1.4.6 1 .9 1.7.9.6 0 1.1-.3 1.4-.8s.6-1 .6-1.7c0-.6-.1-1.4-.3-2.2-.3-.8-.6-1.8-1.3-2.5s-1.7-1.3-3-1.3c-.5 0-1 .1-1.6.3s-1 .3-1.4.7c-.4.3-.7.6-.9.9l1.2 1.2zM18.4 10c-2.9 2.2-3.4 5.4-3.4 8 0 1 .2 1.5.7 2.1.4.6 1 .9 1.7.9.6 0 1.1-.3 1.4-.8s.6-1 .6-1.7c0-.6-.1-1.4-.3-2.2-.3-.8-.6-1.8-1.3-2.5s-1.7-1.3-3-1.3c-.5 0-1 .1-1.6.3s-1 .3-1.4.7c-.4.3-.7.6-.9.9l1.2 1.2z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCard;
