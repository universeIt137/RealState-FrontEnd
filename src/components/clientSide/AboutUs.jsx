import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white p-5 md:p-10">
      <div className="text-center mb-3 md:mb-6">
        <button className="bg-[#21c45e] text-gray-700 px-2 md:px-4 md:py-2 py-1 rounded-full mb-2 md:mb-4">আমাদের সম্পর্কে</button>
        <h2 className=" text-[16px] md:text-3xl text-[#21c45e] font-bold">
          <span className="">সেরা রিয়েল এস্টেট কোম্পানির</span> পরিচিতি!
        </h2>
        <p className="text-[10px] md:text-xl mt-2 md:mt-4 max-w-2xl mx-auto">
          হেরুম কুইস্কাম আমেত ডেবিটিস প্যাটিয়ার কুয়াস? নেইমো এক্সসেপচুরি ডুইস মিনি নস্ট্রাম অফিশিয়িস ডোলোরেম ফুগিয়াত ইতাকে।
          ফুগিয়াত এক্সসেপচুরি মোডি, পোর্টা।
        </p>
        <p className="text-gray-600 text-[10px] md:text-xl mt-1 md:mt-2 max-w-2xl mx-auto">
          ওডিও ভেলিত, ওডিট, ইস্ট, ইউসমড এলিকুইপ লুকটাস ফারেত্রা ভেরো, কন্ডিমেন্টাম, নস্ট্রাম মি ভেনেনাটিস, মোলিট ওডিও মি,
          উন্দে সেম্পের আদিপিসিং অট।
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 text-center flex-1 transform transition duration-300 hover:scale-105">
          <div className="bg-[#21c45e] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white mb-2 md:mb-4">
            <i className="fas fa-dollar-sign"></i> {/* Replace with an actual icon if using a library */}
          </div>
          <h3 className="font-bold text-[15px] md:text-lg text-[#199347] ">সেরা মূল্যের নিশ্চয়তা</h3>
          <p className="text-[#199347] text-[10px] md:text-sm  ">লোরেম ইপসাম ডলোর সিট অ্যামেট, কনসেক্টেতুর আদিপিসিং এলিট।</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-3 md:p-6 text-center flex-1 transform transition duration-300 hover:scale-105">
          <div className="bg-[#21c45e] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white mb-2 md:mb-4">
            <i className="fas fa-tools"></i> {/* Replace with an actual icon if using a library */}
          </div>
          <h3 className="font-bold text-[15px] md:text-lg text-[#199347] ">অর্থ বিশ্লেষণ</h3>
          <p className="text-[#199347] text-[10px] md:text-sm  ">লোরেম ইপসাম ডলোর সিট অ্যামেট, কনসেক্টেতুর আদিপিসিং এলিট।</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex-1 transform transition duration-300 hover:scale-105">
          <div className="bg-[#21c45e] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white mb-4">
            <i className="fas fa-users"></i> {/* Replace with an actual icon if using a library */}
          </div>
          <h3 className="font-bold text-[15px] md:text-lg text-[#199347] ">পেশাদার দল</h3>
          <p className="text-[#199347] text-[10px] md:text-sm  ">লোরেম ইপসাম ডলোর সিট অ্যামেট, কনসেক্টেতুর আদিপিসিং এলিট।</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
