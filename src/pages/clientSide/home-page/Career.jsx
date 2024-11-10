import React from 'react';
import { BsWordpress } from 'react-icons/bs';
import { FaBookReader } from 'react-icons/fa';
import { GiOpenBook } from 'react-icons/gi';
import { RiHomeOfficeFill } from 'react-icons/ri';

const Career = () => {
  window.scrollTo(0, 0);
  return (
    <div className="md:w-1/2 mx-5 my-20 mb-8 md:my-28 md:mx-auto">
      <div className="p-4 bg-[#21c45e] border rounded-lg shadow-md">
        <h2 className="md:text-3xl text-center font-bold text-white">Backend developer</h2>
        <div className="mt-2 md:text-[17px] text-white">
          <div className="flex md:text-[16px] text-sm items-center md:w-1/2 mx-auto">
            <span className="mr-1"><RiHomeOfficeFill /></span>
            <span className='ml-1' >Workplace: In Office</span>
          </div>
          <div className="flex my-1 md:mt-0 mt-1 md:text-[16px] text-sm items-center md:w-1/2 mx-auto">
            <span className=" "><BsWordpress /></span>
            <span className='ml-2' >Good</span>
          </div>
          <div className="flex md:mt-0 mt-1 md:text-[16px] text-sm items-center md:w-1/2 mx-auto">
            <span className="mr-2"> <img className='w-4' src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731240463/salary_ytecw8.png" alt="" /> </span>
            <span>Salary: 25000</span>
          </div>
          <p className="flex md:mt-0   mt-1 gap-1 md:text-[16px] text-sm items-center md:w-1/2 mx-auto">
            <span className='' ><GiOpenBook className="mr-[3px]" /></span>
            <span>BS'c in Computer Science...</span>
          </p>
        </div>
        <div className="mt-3 w-1/2 mx-auto text-sm text-white">13 days ago</div>
      </div>
    </div>
  );
};

export default Career;
