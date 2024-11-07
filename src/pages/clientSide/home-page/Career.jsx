import React from "react";

function Career() {
  const benefits = [
    "নমনীয় কাজের সময়",
    "উচ্চ আয়ের সুযোগ",
    "বৃদ্ধির সুযোগ",
    "মানুষকে তাদের স্বপ্নের বাড়ি খুঁজে পেতে সহায়তা করা",
  ];

  const roles = [
    { title: "রিয়েল এস্টেট এজেন্ট", description: "গ্রাহকদের সাথে কাজ করে সম্পত্তি ক্রয়, বিক্রয় এবং ভাড়া করা।" },
    { title: "সম্পত্তি ব্যবস্থাপক", description: "রিয়েল এস্টেট সম্পত্তির দৈনন্দিন কার্যক্রম পরিচালনা করা।" },
    { title: "রিয়েল এস্টেট বিশ্লেষক", description: "সম্পত্তি বাজারের প্রবণতা এবং বিনিয়োগের সুযোগ বিশ্লেষণ করা।" },
    { title: "মার্কেটিং বিশেষজ্ঞ", description: "নতুন ক্লায়েন্ট আকর্ষণ করতে তালিকা এবং পরিষেবাগুলি প্রচার করা।" },
  ];

  const testimonials = [
    {
      text: "এই দলে যোগদান করা আমার জীবনে একটি বড় পরিবর্তন এনেছে। সহায়তা এবং প্রশিক্ষণ অত্যন্ত মানসম্পন্ন।",
      name: "জেসিকা ওং",
      role: "রিয়েল এস্টেট এজেন্ট",
    },
    {
      text: "আমি আমার ক্যারিয়ারকে এমনভাবে বাড়াতে পেরেছি যা আমি কখনো ভাবিনি। অত্যন্ত সুপারিশ করছি!",
      name: "টম অ্যান্ড্রুজ",
      role: "সম্পত্তি ব্যবস্থাপক",
    },
  ];

  return (
    <div className="text-gray-800">
      {/* ক্যারিয়ার পরিচিতি সেকশন */}
      <div className="text-center bg-[#21c45e] text-white py-4 md:py-12 md:px-6 px-3 ">
        <h1 className="text-[16px] md:text-4xl font-bold mb-2 md:mb-4">Real State আপনার ক্যারিয়ার গড়ুন</h1>
        <p className="text-[10px] md:text-lg max-w-2xl mx-auto">
          আমাদের দলের সাথে একটি লাভজনক ক্যারিয়ার অন্বেষণ করুন। আপনি নতুন হোন বা অভিজ্ঞ এজেন্ট, আমরা বৃদ্ধির জন্য সম্পদ, প্রশিক্ষণ এবং সুযোগ প্রদান করি।
        </p>
      </div>

      {/* সুবিধাসমূহ সেকশন */}
      <div className="py-6 md:py-12 md:px-6 px-3 ">
        <h2 className="text-[16px] md:text-3xl font-bold text-center mb-4 md:mb-8">রিয়েল এস্টেট কেন বেছে নেবেন?</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#21c45e] md:p-6 p-3 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105"
            >
              <p className="text-[10px] md:text-lg text-white font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ক্যারিয়ার সুযোগ সেকশন */}
      <div className="md:py-12 py-6 px-3 md:px-6 bg-gray-50">
        <h2 className="text-[16px] md:text-3xl font-bold text-center mb-4 md:mb-8">ক্যারিয়ার সুযোগ</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-[#21c45e] text-white p-3 md:p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="md:text-xl text-[16px] font-semibold mb-1 md:mb-2">{role.title}</h3>
              <p className="text-[10px] md:text-[16px]">{role.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* টেস্টিমোনিয়াল সেকশন */}
      <div className="py-6 md:py-12 px-3 md:px-6 bg-white">
        <h2 className="text-[16px] md:text-3xl font-bold text-center mb-4 md:mb-8">আমাদের দলের অভিজ্ঞতা</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#21c45e] text-white p-3 md:p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            >
              <p className="text-[12px] md:text-lg mb-2 md:mb-4">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="md:text-sm text-[10px]">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* কল টু অ্যাকশন সেকশন */}
      <div className="py-6 md:py-12 px-3 md:px-6 bg-[#21c45e] text-white text-center">
        <h2 className="text-[16px] md:text-3xl font-bold mb-2 md:mb-4">আপনি কি ক্যারিয়ার শুরু করতে প্রস্তুত?</h2>
        <p className="text-[10px] md:text-lg mb-4 md:mb-8">আমাদের দলে যোগ দিন এবং রিয়েল এস্টেটে আপনার সম্ভাবনা খুলুন। আজই আবেদন করুন!</p>
        <button className="bg-[#def6e7] text-black px-3 md:px-6 md:py-3 py-1 rounded-lg font-semibold hover:bg-green-600">
          আবেদন করুন
        </button>
      </div>
    </div>
  );
}

export default Career;
