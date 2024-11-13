import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CorporateStructurePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className='bg-white' >
      <Helmet>
        <title>Amar Thikana | Corporate Structure</title>
      </Helmet>

      <div className='w-11/12 mx-auto'>
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731492112/corporate-structure_uafyuw.png" alt="" />
      </div>
    </div>
  );
};

export default CorporateStructurePage;
