import React from 'react'
import Carousel from './Carousel'
import Team from '../../../components/clientSide/Team'
import AboutUs from '../../../components/clientSide/AboutUs'
import ProjectInfo from '../../../components/clientSide/ProjectInfo'

import TestimonialCard from './Reviews'
import Career from './Career'
import Offer from './Offer'


const HomePage = () => {
  return (
    <div className='bg-green-100' >
      {/* carousel */}
        <Carousel></Carousel>
        <Team></Team>
        <AboutUs></AboutUs>
        <ProjectInfo></ProjectInfo>
        <TestimonialCard></TestimonialCard>
        <Career></Career>
        <Offer></Offer>
    </div>
  )
}

export default HomePage
