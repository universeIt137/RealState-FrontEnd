import React from "react";

function RealEstateAd() {
  return (
    <div className="bg-green-50 p-2 md:p-8 font-sans">
      {/* Offer and Promotion Heading */}
      <div className="text-center mb-3 md:mb-8">
        <h1 className=" text-[16px] md:text-4xl font-bold text-black">Offer and Promotion</h1>
        <p className=" text-[10px] md:text-lg text-gray-700 mt-2">Exciting discounts and limited-time offers available!</p>
      </div>

      {/* Header Banner */}
      <div className="bg-[#1a9d4b] text-white p-2 md:p-4 rounded-lg flex items-center justify-center mb-6 card-hover">
        <div className="text-center">
          <h1 className=" text-[16px] md:text-3xl font-bold mb-1">৫০% মূল্য পরিশোধ করলে সাব কবলা রেজিস্ট্রেশন</h1>
          <span className="md:text-sm bg-yellow-400 text-white text-[10px] px-3 py-1 rounded inline-block">শর্ত প্রযোজ্য</span>
        </div>
      </div>

      {/* Main Question */}
      <div className="text-center mb-4 md:mb-6">
        <h1 className=" text-[15px] md:text-4xl font-bold text-green-700 mb-4">আপনি কি নিরাপদ আবাসন গড়ে তোলার জন্য জমি খুঁজছেন?</h1>
        <p className=" text-[10px] md:text-lg font-semibold text-gray-800">
          সর্বনিম্ন মাত্র <span className="text-green-700 font-bold">২০ হাজার</span> টাকা প্রতি মাসে কিস্তি পরিশোধ করে
          আপনি হতে পারেন আমাদের গ্রীন সিটি প্রকল্পের জমির মালিক।
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 ">
        {/* Project Location Section */}
        <div className="bg-[#21c45e] text-white p-3 md:p-6 rounded-lg shadow-lg md:mb-6 card-hover">
          <h2 className=" text-center md:text-2xl font-bold mb-2 md:mb-4">প্রকল্পের অবস্থান</h2>
          <p className=" text-[10px] md:text-lg text-center mb-2 md:mb-4">
            গাজীপুর চৌরাস্তা থেকে মাত্র ২০ মিনিটের দূরত্বে প্রকল্পটি অবস্থিত। প্রকল্পের কাছেই ঢাকা-ময়মনসিংহ হাইওয়ে, রাজেন্দ্রপুর রেলওয়ে
            জংশন ও ঢাকার সাথে প্রস্তাবিত মেট্রোরেল ব্যবস্থা। প্রকল্পের সামনেই পূর্ব-পশ্চিম বাইপাস রোড সংযোগ রয়েছে।
          </p>
        </div>

        {/* Project Goal Section */}
        <div className="bg-[#21c45e] text-white p-3 md:p-6 rounded-lg shadow-lg mb-3 md:mb-6 card-hover">
          <h2 className= " text-[16px] text-center md:text-2xl font-bold mb-2 md:mb-4">লক্ষ্য</h2>
          <p className=" text-[10px] md:text-lg text-center mb-2 md:mb-4">
            আমাদের লক্ষ্য আপনাদের জন্য নিরাপদ, সুন্দর, আধুনিক সুযোগ-সুবিধা সম্বলিত বাসস্থান নিশ্চিত করা। দীর্ঘমেয়াদী পরিকল্পনায়
            আধুনিক স্থাপত্যকৌশল ও আন্তর্জাতিক মানের সবকিছু নিয়ে আসছে "আমার ঠিকানা গ্রীন সিটি"।
          </p>
        </div>

        {/* Features Section */}
        <div className=" bg-[#21c45e] text-white p-3 md:p-6 rounded-lg shadow-lg mb-3 md:mb-6 card-hover">
          <h2 className=" text-[16px] text-center md:text-2xl font-bold  mb-4">বিশেষ সুবিধা সমূহ</h2>
          <ul className="list-disc list-inside space-y-2 md:text-xl text-[10px] ">
            <li>পাকা রাস্তা, বৈদ্যুতিক আলো, নিরাপদ ড্রেনেজ সিস্টেম, পানি, গ্যাস ও বিদ্যুৎ সংযোগ</li>
            <li>মসজিদ, বাজার, স্কুল ইত্যাদির ব্যবস্থা</li>
            <li>প্রকল্পের প্রতি প্লটে আলাদা বাসযোগ্য পরিবেশ এবং নান্দনিক পরিকল্পনার সুনিপুণ কার্যক্রম</li>
            <li>প্রকল্পটি ঘিরে কাঁটাতারের বেষ্টনী এবং ২৪ ঘন্টা নিরাপত্তার ব্যবস্থা</li>
          </ul>
        </div>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889904/offer-1_bajmsf.png" alt="Project Image 1" className="rounded-lg shadow-md img-hover" />
        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889949/offer-2_s0dp1u.png" alt="Project Image 2" className="rounded-lg shadow-md img-hover" />
        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889998/offer-3_zr81a8.png" alt="Project Image 3" className="rounded-lg shadow-md img-hover" />
      </div>

      {/* Contact Section */}
      <div className="bg-green-500 text-white p-6 rounded-lg text-center card-hover">
        <p className="text-[16px] md:text-xl font-semibold mb-1 md:mb-2">যোগাযোগ করুন</p>
        <p className=" text-[10px] md:text-2xl font-bold mb-1 md:mb-2">+88 01747-516981</p>
        <p className=" text-[10px] md:text-lg mb-1 md:mb-2">amarthikana06@gmail.com</p>
        <p className=" text-[10px] md:text-lg">ঠিকানা: ৪৮, বিজয়নগর (৪র্থ তলা), ঢাকা-১০০০১</p>
      </div>
    </div>
  );
}

export default RealEstateAd;
