import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ProjectInfo = () => {
  return (
    <div className="bg-green-50 bg-[url('https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730709033/DALL_E_2024-11-04_14.30.10_-_A_soft_green_leafy_background_with_light_and_natural_shades_resembling_a_tree_canopy_from_above._Gentle_overlapping_leaves_in_different_shades_of_g_zyqymv.webp')] bg-cover bg-no-repeat bg-center p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="bg-red-600 text-white font-bold py-2 px-4 rounded-full">
            ৫০% মূল্য
          </div>
          <div className="text-lg font-semibold text-gray-800">
            পরিশোধ করলে সাব কবলা রেজিস্ট্রেশন <span className="text-yellow-500">(শর্ত প্রযোজ্য)</span>
          </div>
        </div>
        <p className="text-green-700 text-xl font-bold">
          আপনি কি নিরাপদ আবাসন গড়ে তোলার জন্য জমি খুজছেন?
        </p>
      </div>

      {/* Main Flex Container for Project Details, Location, and Features */}
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Project Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[280px] max-w-sm hover:scale-105 transform transition duration-300 ease-in-out">
          <p className="text-green-600 font-semibold text-lg mb-2">সর্বনিম্ন মাত্র ২০ হাজার</p>
          <p className="text-gray-600">
            টাকা প্রতি মাসে কিস্তি পরিশোধ করে আপনি হতে পারেন আমারা ঠিকানা গ্রিন সিটি প্রজেক্টের গর্বিত মালিক।
          </p>
        </div>

        {/* Project Location */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[280px] max-w-sm hover:scale-105 transform transition duration-300 ease-in-out">
          <h3 className="text-red-500 font-bold text-lg mb-2">প্রকল্পের অবস্থান</h3>
          <p className="text-gray-600">
            ঢাকা মাওয়া হাইওয়ে থেকে খুব কাছের দূরত্বে অবস্থিত “আমারা ঠিকানা গ্রিন সিটি” প্রকল্প। বায়েজিদ ব্রীজ থেকে ১০ মিনিটের দূরত্বে ঢাকা-মাওয়া হাইওয়ের সাথে লাগোয়া। প্রকল্পের চারপাশে তৈরি হচ্ছে রিং রোড যা প্রকল্পের মূল আকর্ষণ।
          </p>
        </div>

        {/* Features Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-[280px] max-w-sm hover:scale-105 transform transition duration-300 ease-in-out">
          <h3 className="text-red-500 font-bold text-lg mb-2">বিশিষ্ট্য সমূহ</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>ঢাকা-মাওয়া এক্সপ্রেসওয়ে হাইওয়ের সন্নিকটে আমাদের আবাসন প্রকল্প অবস্থিত।</li>
            <li>আপনারা যারা দীর্ঘমেয়াদি কিস্তিতে পরিশোধ করতে চান তাদের জন্য নির্দিষ্ট প্লট আমাদের প্রজেক্টে বরাদ্দ রয়েছে।</li>
            <li>অবকাঠামো উন্নয়নের কাজ চলমান রয়েছে।</li>
            <li>বহুতল মসজিদ, ক্লাব, সুইমিং পুল ও অন্যান্য সুবিধা থাকবে।</li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-8 hover:scale-105 transform transition duration-300 ease-in-out max-w-md mx-auto">
        <h3 className="font-bold text-lg">হেড অফিস</h3>
        <p>৪৮, বিজয় নগর (৪র্থ তলা), পল্টন, ঢাকা-১০০০।</p>
        <p className="mt-2 flex items-center">
          <FaPhoneAlt className="mr-2" /> +88 01747-516981
        </p>
        <p className="mt-2 flex items-center">
          <FaEnvelope className="mr-2" /> amarThikana06@gmail.com
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
