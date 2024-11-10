import React from 'react';
import { FiAlertTriangle, FiPhone, FiMail } from 'react-icons/fi';

const CareerDetailsPage = () => {
  // Scrolls to the top of the page when the component is loaded
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-11/12 mx-auto my-28">
      {/* Job Header */}
      <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg mt-10">
        <div>
          <div className="text-blue-700 font-semibold text-2xl mb-2">UNIVERSE SOFT TECH</div>
          <div className="text-gray-600 text-lg">Universe IT Group</div>
          <div className="text-orange-500 text-3xl font-bold mt-4">React Js Frontend Developer</div>
        </div>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
          Apply Now
        </button>
      </div>

      {/* Job Summary */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mx-auto mt-10 shadow-md">
        <h2 className="text-orange-500 font-bold text-2xl mb-4">Summary</h2>
        <div className="grid grid-cols-2 gap-y-4 text-gray-700">
          <div>
            <span className="font-semibold">Salary :</span> <span className="font-bold">234676 BDT</span>
          </div>
          <div>
            <span className="font-semibold">Education :</span> <span className="font-bold">BSc in Computer Science</span>
          </div>
          <div>
            <span className="font-semibold">Experience :</span> <span className="font-bold">At least 3 years</span>
          </div>
          <div>
            <span className="font-semibold">Skills :</span> <span className="font-bold">HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js</span>
          </div>
          <div>
            <span className="font-semibold">Job Location :</span> <span className="font-bold">Merul Badda Aftabnagar, East West University Dhaka</span>
          </div>
          <div>
            <span className="font-semibold">Workplace :</span> <span className="font-bold">Onsite</span>
          </div>
        </div>
      </div>

      {/* Video CV Notice */}
      <div className="border border-blue-200 bg-blue-50 text-blue-600 rounded-lg p-4 text-center mx-auto mt-4">
        <span>Applicants are encouraged to submit a <span className="font-bold">Video CV</span></span>
      </div>

      {/* Requirements Section */}
      <div className="p-6 mx-auto bg-white border rounded-md shadow-md mt-6">
        <h2 className="text-orange-600 text-xl font-bold mb-4">Requirements</h2>

        <section className="mb-4">
          <h3 className="text-orange-600 font-semibold">Education</h3>
          <ul className="list-disc list-inside">
            <li>BSc in Computer Science</li>
          </ul>
        </section>

        <section className="mb-4">
          <h3 className="text-orange-600 font-semibold">Skills</h3>
          <p>HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js</p>
        </section>

        <section className="mb-4">
          <h3 className="text-orange-600 font-semibold">Experience</h3>
          <ul className="list-disc list-inside">
            <li>3 years</li>
          </ul>
        </section>

        <section className="mb-4">
          <h3 className="text-orange-600 font-semibold">Responsibilities & Context</h3>
          <p>Must have communication skills in the native language. Collaborate with the front-end team.</p>
        </section>

        <section className="mb-4">
          <h3 className="text-orange-600 font-semibold">Workplace</h3>
          <p>Onsite</p>
        </section>

        <section className="mb-4">
          <h3 className="text-orange-600 font-semibold">Employment Status</h3>
          <p>Pending</p>
        </section>

        <section className="mb-4">
          <h3 className="text-orange-600 font-semibold">Job Location</h3>
          <p>Merul Badda, Aftabnagar, East West University, Dhaka</p>
        </section>
      </div>

      {/* Job Highlights Section */}
      <div className="p-6 mx-auto space-y-4 mt-6">
        <div className="bg-blue-100 p-4 rounded-md">
          <h3 className="text-blue-700 font-semibold">Job Highlights</h3>
          <p className="text-gray-800 mt-2">
            Please read all of the prerequisites before applying for the position.
          </p>
          <p className="text-gray-800 mt-2">
            We believe that great people make a great organization, and that leads to sustainable business growth. Thus, we offer a meaningful, collaborative, inclusive and rewarding career.
          </p>
        </div>

        {/* Company Information Section */}
        <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
          <div>
            <h3 className="text-blue-700 font-semibold">Company Information</h3>
            <p className="text-gray-800">A Reputed Group of Company</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full flex items-center">
              <span className="mr-2">+</span> Follow
            </button>
            <a href="#" className="text-blue-600 underline">
              More jobs from this company
            </a>
          </div>
        </div>
      </div>

      {/* Report Section */}
      <div className="p-6 mx-auto bg-red-50 border border-red-300 rounded-md space-y-4 mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-blue-700 font-semibold">
            Report this Job / Company <span className="text-blue-700">(রিপোর্ট)</span>
          </h3>
          <button className="flex items-center text-red-700 font-semibold">
            <FiAlertTriangle className="mr-1" /> রিপোর্ট
          </button>
        </div>

        <p className="text-gray-700 leading-relaxed">
          এই চাকরির জন্য বিজ্ঞাপন দাতা প্রতিষ্ঠান আপনার কাছে থেকে কোন অর্থ চাইলে অথবা কোন ধরনের ভুল বা বিভ্রান্তিকর তথ্য দিলে অতি দ্রুত আমাদেরকে জানুন অথবা জরুরি রিপোর্ট করুন। চাকরি পাওয়ার জন্য কোন ব্যাক্তি / প্রতিষ্ঠানকে অর্থ প্রদান করতে বিডিজবস কাউকে উৎসাহিত করে না। কোন প্রকার অর্থ লেনদেনের দায়িত্ব বিডিজবস বহন করবে না।
        </p>

        <div className="flex items-center space-x-6 text-gray-700">
          <div className="flex items-center">
            <FiPhone className="mr-1" />
            <span>16479</span>
          </div>
          <div className="flex items-center">
            <FiMail className="mr-1" />
            <span>complain@universelt.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailsPage;
