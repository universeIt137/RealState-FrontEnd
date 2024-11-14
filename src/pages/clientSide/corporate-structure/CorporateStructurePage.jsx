import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CorporateStructurePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className='' >
      <Helmet>
        <title>Amar Thikana | Corporate Structure</title>
      </Helmet>

      <div className=' ' >
        <div className='w-11/12 py-28 mx-auto'>
          <h1 className='text-center md:text-4xl font-bold text-[#21c45e] ' >Amar Thikana Corporate Structure</h1>
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731492112/corporate-structure_uafyuw.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CorporateStructurePage;
