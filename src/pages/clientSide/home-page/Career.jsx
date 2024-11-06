import React from "react";

function Career() {
  const benefits = [
    "Flexible working hours",
    "High earning potential",
    "Opportunities for growth",
    "Helping people find their dream homes",
  ];

  const roles = [
    { title: "Real Estate Agent", description: "Work with clients to buy, sell, and rent properties." },
    { title: "Property Manager", description: "Oversee the daily operations of real estate properties." },
    { title: "Real Estate Analyst", description: "Analyze property market trends and investment opportunities." },
    { title: "Marketing Specialist", description: "Promote listings and services to attract new clients." },
  ];

  const testimonials = [
    {
      text: "Joining this team has been a life-changing experience. The support and training are top-notch.",
      name: "Jessica Wong",
      role: "Real Estate Agent",
    },
    {
      text: "I've been able to grow my career in ways I never imagined. Highly recommend!",
      name: "Tom Andrews",
      role: "Property Manager",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* Career Introduction Section */}
      <div className="text-center bg-[#1eb055] text-white  py-4 md:py-12 md:px-6 px-3 ">
        <h1 className=" text-[16px] md:text-4xl font-bold mb-2 md:mb-4">Build Your Career in Real Estate</h1>
        <p className=" text-[10px] md:text-lg max-w-2xl mx-auto">
          Explore a rewarding career in real estate with our team. Whether you’re new to the industry or an experienced agent, we offer resources, training, and opportunities to help you grow.
        </p>
      </div>

      {/* Benefits Section */}
      <div className=" py-6 md:py-12 md:px-6 px-3 ">
        <h2 className=" text-[16px] md:text-3xl font-bold text-center mb-4 md:mb-8">Why Choose Real Estate?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#1eb055] md:p-6 p-3  rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105"
            >
              <p className=" text-[10px] md:text-lg text-white font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Opportunities Section */}
      <div className="md:py-12 py-6 px-3 md:px-6 bg-gray-50">
        <h2 className="text-[16px] md:text-3xl font-bold text-center mb-4 md:mb-8">Career Opportunities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-[#1eb055] text-white p-3 md:p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="md:text-xl text-[16px] font-semibold mb-1 md:mb-2">{role.title}</h3>
              <p className="text-[10px] md:text-[16px] " >{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className=" py-6 md:py-12 px-3 md:px-6 bg-white">
        <h2 className=" text-[16px] md:text-3xl font-bold text-center mb-4 md:mb-8">What Our Team Says</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1eb055] text-white p-3 md:p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <p className=" text-[12px] md:text-lg mb-2 md:mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="md:text-sm text-[10px] ">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action Section */}
      <div className=" py-6 md:py-12 px-3 md:px-6 bg-[#1eb055] text-white text-center">
        <h2 className=" text-[16px] md:text-3xl font-bold mb-2 md:mb-4">Ready to Start Your Career?</h2>
        <p className=" text-[10px] md:text-lg mb-4 md:mb-8">Join our team and unlock your potential in real estate. Apply today!</p>
        <button className="bg-[#def6e7] text-black px-3 md:px-6 md:py-3 py-1 rounded-lg font-semibold hover:bg-green-600">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Career;
