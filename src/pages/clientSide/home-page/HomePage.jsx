import React from 'react'
import Carousel from './Carousel'
import Team from '../../../components/clientSide/Team'
import AboutUs from '../../../components/clientSide/AboutUs'
import ProjectInfo from '../../../components/clientSide/ProjectInfo'

import TestimonialCard from './Reviews'
import Career from './Career'
import Offer from './Offer'
import LayoutVisual from './LayoutVisual'


const HomePage = () => {
  return (
    <div className='' >
      {/* carousel */}
        <Carousel></Carousel>
        <AboutUs></AboutUs>
        <ProjectInfo></ProjectInfo>
        <Team></Team>
        <TestimonialCard></TestimonialCard>
        <Career></Career>
        <Offer></Offer>
        <LayoutVisual></LayoutVisual>
    </div>
  )
}

export default HomePage
