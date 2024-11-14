import React from "react";

function TestimonialCard() {
  const testimonials = [
    {
      text: "Ruttl আমাকে আরও দক্ষতার সাথে কাজ করতে সহায়তা করেছে। আমি কম সময় ব্যয় করি।",
      name: "ফ্রান্সিসকো ওলিডেন",
      role: "ক্লায়েন্ট সম্পর্ক ব্যবস্থাপক, এজেনসিয়া এরেমো",
      img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881894/client-1_mpvrum.webp",
    },
    {
      text: "Ruttl ব্যবহার করে আমার ক্লায়েন্টদের সাথে যোগাযোগ উন্নত হয়েছে। এটি একটি গেম চেঞ্জার!",
      name: "সারা লি",
      role: "প্রকল্প ব্যবস্থাপক, ক্রিয়েটিভ মাইন্ডস",
      img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881894/client-1_mpvrum.webp",
    },
    {
      text: "Ruttl-এর জন্য আমার দল এবং আমি ক্লায়েন্টের প্রতিক্রিয়া দ্রুত সমাধান করতে পারি।",
      name: "জেমস পার্ক",
      role: "লিড ডিজাইনার, পিক্সেল ইনোভেশনস",
      img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881894/client-1_mpvrum.webp",
    },
    {
      text: "Ruttl আমাদের কাজের ধারা সহজ করে দিয়েছে। খুবই সুপারিশ করি!",
      name: "অ্যালিস চেন",
      role: "অপারেশন ব্যবস্থাপক, ব্রাইট আইডিয়াস এজেন্সি",
      img: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730881894/client-1_mpvrum.webp",
    },
  ];

  return (
    <div className="md:px-4 px-2 py-5 md:py-10 w-11/12 my-14 mx-auto">
      <h1 className="text-center text-[16px] md:text-4xl font-bold text-[#21c45e]  md:mb-10 mb-4 ">
        ক্লায়েন্ট Review
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-[#21c45e] text-white p-3  md:p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
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
            <p className="md:mb-6 mb-3 text-base h-10 md:h-20  mt-3 text-[14px]  md:text-lg font-semibold">
              {testimonial.text}
            </p>

            {/* Profile Section */}
            <div className="flex items-center mt-10 h-14 md:h-28 my-auto">
              <img
                src={testimonial.img}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="ml-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className=" text-[10px] md:text-sm">{testimonial.role}</p>
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
