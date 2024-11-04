import React from 'react'
import Carousel from '../../components/Carousel'
import Team from '../team-page/Team'
import AboutUs from '../about-us-page/AboutUs'
import ProjectInfo from '../project-info-page/ProjectInfo'

const HomePage = () => {
  return (
    <div className='bg-green-100' >
      {/* carousel */}
        <Carousel></Carousel>
        <Team></Team>
        <AboutUs></AboutUs>
        <ProjectInfo></ProjectInfo>
    </div>
  )
}

export default HomePage
