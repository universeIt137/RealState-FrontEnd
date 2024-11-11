import React from 'react'
import Carousel from './Carousel'
import Team from '../../../components/clientSide/Team'
import AboutUs from '../../../components/clientSide/AboutUs'
import ProjectInfo from '../../../components/clientSide/ProjectInfo'

import TestimonialCard from './Reviews'
import Career from './Career'
import Offer from './Offer'
import LayoutVisual from './LayoutVisual'
import Contact from '../../../components/clientSide/Contact'
import ProjectOverviewPage from './ProjectOverviewPage'
import ChairmanSpeech from './ChairmanSpeech'


const HomePage = () => {
  return (
    <div className='space-y-16' >
      {/* carousel */}
        <Carousel></Carousel>
        <ChairmanSpeech></ChairmanSpeech>
        <ProjectOverviewPage></ProjectOverviewPage>
        <ProjectInfo></ProjectInfo>
        <AboutUs></AboutUs>
        <Team></Team>
        <TestimonialCard></TestimonialCard>
        <LayoutVisual></LayoutVisual>
    </div>
  )
}

export default HomePage
