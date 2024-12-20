import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

// Policy data array
const policyData = [
  { title: 'অঙ্গিকার বাস্তবায়নে দ্বৈত সহযোগিতা ও সুষ্ঠু নীতিমালা:', content: '' },
  { content: '১. আগে আসলে আগে পাবেন ও প্লট খালি থাকা সাপেক্ষে গ্রাহক তার পছন্দকৃত প্লট বুকিং দিতে পারবেন।' },
  { content: '২. কোম্পানীর নির্ধারিত বুকিং ফর্মে গ্রহীতার ১ কপি ছবি ও নমিনীর ১ কপি ছবি ও কাঠা ১০,০০০/- (দশ হাজার) বুকিং মানিসহ গ্রাহককে প্লটের জন্য বুকিং ফর্ম পূরণ করতে হবে।' },
  { content: '৩. প্লটের মূল্য কোম্পানীর নির্ধারিত মূল্য তালিকা অনুযায়ী নির্ধারিত হবে, কোম্পানী যেকোন সময় মূল্য তালিকা পরিবর্তনের অধিকার সংরক্ষণ করেন।' },
  { content: '৪. এককালীন মূল্য পরিশোধের ক্ষেত্রে সম্পূর্ণ টাকা পরিশোধ করার পর এবং কিস্তির ক্ষেত্রে সর্বমোট সিদ্ধান্ত অনুযায়ী নির্দিষ্ট পরিমাণ ডাউন পেমেন্ট পাওয়ার পর প্লট গ্রহীতার সাথে কোম্পানীর চুক্তিনামা সম্পন্ন হবে।' },
  { content: '৫. সকল পেমেন্ট আমার ঠিকানা গ্রীন সিটি এর অনুকূলে চেক/ক্যাশ/ব্যাংক ড্রাফট/পে-অর্ডার এর মাধ্যমে পরিশোধ যোগ্য।' },
  { content: '৬. বিদেশে অবস্থানরত সম্মানিত প্রবাসী ক্রেতাগণ সমপরিমাণ টাকা বৈদেশিক মুদ্রায়, চেক/টিটি./ব্যাংক ড্রাফট/মানি এক্সচেঞ্জ (Western Union) এর মাধ্যমে পরিশোধ করতে পারবেন।' },
  { content: '৭. প্রকল্পে পানি, বিদ্যুৎ গ্যাস, স্যুয়ারেজ লাইন ও টেলিফোন ইত্যাদি মেইন সংযোগ কোম্পানীরি উদ্যোগে সরকারী নীতিমলা অনুযায়ী স্থাপন করা হবে।' },
  { content: '৮. অভ্যন্তরীন কার্যক্রম সমূহ ভবিষ্যতে সঠিক উন্নয়ন সার্বক্ষণিক তদারকি ও রক্ষনাবেক্ষণের জন্য পর্যায়ক্রমে সিটি কর্পোরেশনের/পৌরসভা/স্থানীয় কর্তৃপক্ষের নিকট হস্তান্তর করা হবে।' },
  { content: '৯. প্রকল্প উন্নয়ন প্রক্রিয়া সম্পন্ন হওয়া ও চুক্তি মোতাবেক মূল্য পরিশোধ সাপেক্ষে প্লট হস্তান্তর করা হবে।' },
];

const PrivacyPolicy = () => {
  const axiosPublic = useAxiosPublic();


  // Fetch content data
  const { data: policyData = [], isSuccess, refetch } = useQuery({
    queryKey: ['policyData'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/privacy`);
      return res.data;
    }
  });

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Privacy Policy</h1>

        {/* Policy Content Section */}
        <div className="space-y-6 text-[15px] text-gray-700">
          {policyData.map((item, index) => (
            <div key={index}>
              {/* {item.title && <p className="font-bold">{item.title}</p>} */}
              <p className='my-10 text-lg py-1 '
                dangerouslySetInnerHTML={{
                  __html: item?.description
                }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
