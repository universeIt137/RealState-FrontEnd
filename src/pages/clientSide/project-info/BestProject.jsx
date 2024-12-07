import React from 'react'
import ProjectPage from '../home-page/ProjectPage'
import { Helmet } from 'react-helmet-async'

const BestProject = () => {
  return (
    <div className='my-24 w-11/12 mx-auto  ' >
      <Helmet>
        <title>Amar Thikana | Why Best Project</title>
      </Helmet>
      <ProjectPage></ProjectPage>
      {/* Google Map */}
      <div className=" hover:scale-105 transition-transform duration-300 ease-out w-full flex items-center justify-center ">
        <iframe
          className="w-full h-[250px] lg:h-[320px] rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.259359142789!2d90.27558088302615!3d23.593039068087254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375597000f30fc05%3A0xd0f86bbf6893c0d9!2sAmar%20Thikana%20Green%20City!5e0!3m2!1sen!2sbd!4v1732966778105!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default BestProject
