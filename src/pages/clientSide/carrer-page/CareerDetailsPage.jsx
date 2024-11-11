import React from 'react';
import { FiAlertTriangle, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CareerDetailsPage = () => {
  // Scrolls to the top of the page when the component is loaded
  React.useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-11/12 mx-auto my-20 md:my-28">
      {/* Job Header */}
      <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg mt-10">
        <div>
          <div className=" font-bold md:text-2xl xl:text-4xl text-[#21c45e] md:mb-2">UNIVERSE SOFT TECH</div>
          <div className="text-[#21c45e] text-[14px] font-semibold md:text-2xl">Universe IT Group</div>
          <div className="text-[#21c45e] md:text-2xl xl:text-4xl font-bold md:mt-4">React Js Frontend Developer</div>
        </div>
        <button className="md:mt-6 bg-[#21c45e]  text-white font-bold md:py-2 py-1 px-2 md:text-[16px] text-[10px] md:px-6 rounded-lg">
          Apply Now
        </button>
      </div>

      {/* Job Summary */}
      <div className="bg-white border border-gray-300 rounded-lg p-4 md:p-6 mx-auto mt-5 md:mt-10 shadow-md">
        <h2 className="text-[#21c45e] font-bold lg:text-4xl md:text-2xl md:mb-4">Summary</h2>
        <div className="grid md:grid-cols-2 gap-y-1 md:gap-y-4 text-[#21c45e]">
          <div>
            <span className="font-semibold md:text-[16px] lg:text-[18px] text-[12px]">Salary :</span> <span className="font-semibold md:text-[16px] lg:text-[18px] text-[10px]">234676 BDT</span>
          </div>
          <div>
            <span className="font-semibold md:text-[16px] lg:text-[18px] text-[12px]">Education :</span> <span className="font-semibold md:text-[16px] lg:text-[18px] text-[10px]">BSc in Computer Science</span>
          </div>
          <div>
            <span className="font-semibold md:text-[16px] lg:text-[18px] text-[12px]">Experience :</span> <span className="font-semibold md:text-[16px] lg:text-[18px] text-[10px]">At least 3 years</span>
          </div>
          <div>
            <span className="font-semibold md:text-[16px] lg:text-[18px] text-[12px]">Skills :</span> <span className="font-semibold md:text-[16px] lg:text-[18px] text-[10px]">HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js</span>
          </div>
          <div>
            <span className="font-semibold md:text-[16px] lg:text-[18px] text-[12px]">Job Location :</span> <span className="font-semibold md:text-[16px] lg:text-[18px] text-[10px]">Merul Badda Aftabnagar, East West University Dhaka</span>
          </div>
          <div>
            <span className="font-semibold md:text-[16px] lg:text-[18px] text-[12px]">Workplace :</span> <span className="font-semibold md:text-[16px] lg:text-[18px] text-[10px]">Onsite</span>
          </div>
        </div>
      </div>

      {/* Video CV Notice */}
      <div className="border  text-[#21c45e]  rounded-lg p-4 text-center mx-auto mt-4">
        <span>Applicants are encouraged to submit a <span className="font-bold">Video CV</span></span>
      </div>

      {/* Requirements Section */}
      <div className="p-4 md:p-6 mx-auto bg-white border rounded-md shadow-md mt-6">
        <h2 className="text-[#21c45e] md:text-2xl lg:text-4xl font-bold md:mb-4">Requirements</h2>

        <section className="md:mb-4 mb-1 ">
          <h3 className="text-[#21c45e] text-[12px] md:text-[16px] font-semibold">Education</h3>
          <ul className="list-disc list-inside">
            <li className='md:text-[16px] text-[10px] text-[#21c45e] ' >BSc in Computer Science</li>
          </ul>
        </section>

        <section className=" mb-1 md:mb-4">
          <h3 className="text-[#21c45e] text-[12px] md:text-[16px] font-semibold">Skills</h3>
          <ul className='list-disc list-inside' >
          <li className='md:text-[16px] text-[10px] text-[#21c45e] ' >HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js</li>
          </ul>
        </section>

        <section className="md:mb-4 mb-1 ">
          <h3 className="text-[#21c45e] text-[12px] md:text-[16px] font-semibold">Experience</h3>
          <ul className="list-disc list-inside">
            <li className='md:text-[16px] text-[10px] text-[#21c45e] ' >3 years</li>
          </ul>
        </section>

        <section className="md:mb-4 mb-1">
          <h3 className="text-[#21c45e] text-[12px] md:text-[16px] font-semibold">Responsibilities & Context</h3>
          <ul className="list-disc list-inside">
            <li className='md:text-[16px] text-[10px] text-[#21c45e] '  >Must have communication skills in the native language. Collaborate with the front-end team.</li>
          </ul>
        </section>

        <section className="md:mb-4 mb-1">
          <h3 className="text-[#21c45e] text-[12px] md:text-[16px] font-semibold">Workplace</h3>
          <ul className="list-disc list-inside">
            <li className='md:text-[16px] text-[10px] text-[#21c45e]'> Onside </li>
          </ul>
        </section>

        <section className="md:mb-4 mb-1">
          <h3 className="text-[#21c45e] text-[12px] md:text-[16px] font-semibold">Employment Status</h3>
          <ul className="list-disc list-inside">
            <li className='md:text-[16px] text-[10px] text-[#21c45e]'> Pending </li>
          </ul>
        </section>

        <section className="mb-4">
          <h3 className="text-[#21c45e] text-[12px] md:text-[16px] font-semibold">Job Location</h3>
          <ul className="list-disc list-inside">
            <li className='md:text-[16px] text-[10px] text-[#21c45e]'> Merul Badda, Aftabnagar, East West University, Dhaka </li>
          </ul>
        </section>
      </div>

      {/* Job Highlights Section */}
      <div className="md:p-6 p-2 mx-auto space-y-4 mt-3 md:mt-6">
        <div className="bg-white  border shadow-md p-4 rounded-md">
          <h3 className="text-[#21c45e] md:text-2xl lg:text-4xl font-semibold">Job Highlights</h3>
          <p className="text-[#21c45e] md:mt-2 md:text-[16px] text-[10px] ">
            Please read all of the prerequisites before applying for the position.
          </p>
          <p className="text-[#21c45e] md:text-[16px] text-[10px] md:mt-2">
            We believe that great people make a great organization, and that leads to sustainable business growth. Thus, we offer a meaningful, collaborative, inclusive and rewarding career.
          </p>
        </div>

        {/* Company Information Section */}
        <div className="bg-white shadow-md border p-4 rounded-md flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h3 className="text-[#21c45e] lg:text-4xl md:text-2xl font-semibold">Company Information</h3>
            <p className="text-[#21c45e] lg:text-2xl font-semibold md:text-lg text-[9px] ">A Reputed Group of Company</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center  md:space-x-4">
            <button className="border text-[#21c45e] w-1/2 my-1 px-4 py-1 rounded-full flex md:text-lg text-[9px] items-center">
              <span className="mr-2">+</span> Follow
            </button>
            <Link to="" className="md:text-lg text-[9px] text-[#21c45e]  underline">
              More jobs from this company
            </Link>
          </div>
        </div>
      </div>

      {/* Report Section */}
      <div className="md:p-6 p-4 mx-auto bg-white border rounded-md md:space-y-4 mt-3 md:mt-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h3 className="text-[#21c45e] md:text-2xl lg:text-4xl font-bold">
            Report this Job / Company <span className="text-[#21c45e] md:text-2xl lg:text-4xl font-bold">(রিপোর্ট)</span>
          </h3>
          <button className="flex items-center text-[#21c45e] md:text-xl lg:text-2xl  font-bold">
            <FiAlertTriangle className="mr-1" /> রিপোর্ট
          </button>
        </div>

        <p className="text-[#21c45e] md:text-[16px] text-[10px] mt-1 leading-relaxed">
          এই চাকরির জন্য বিজ্ঞাপন দাতা প্রতিষ্ঠান আপনার কাছে থেকে কোন অর্থ চাইলে অথবা কোন ধরনের ভুল বা বিভ্রান্তিকর তথ্য দিলে অতি দ্রুত আমাদেরকে জানুন অথবা জরুরি রিপোর্ট করুন। চাকরি পাওয়ার জন্য কোন ব্যাক্তি / প্রতিষ্ঠানকে অর্থ প্রদান করতে বিডিজবস কাউকে উৎসাহিত করে না। কোন প্রকার অর্থ লেনদেনের দায়িত্ব বিডিজবস বহন করবে না।
        </p>

        <div className="flex items-center mt-1 space-x-3 md:space-x-6 text-[#21c45e]">
          <div className="flex lg:text-xl md:text-[17px] items-center">
            <FiPhone className="mr-1" />
            <span>16479</span>
          </div>
          <div className="flex items-center lg:text-xl md:text-[17px] ">
            <FiMail className="mr-1" />
            <span>complain@universelt.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetailsPage;
