import React from 'react'
import Carousel from './Carousel'
import Team from '../../../components/clientSide/Team'
import AboutUs from '../../../components/clientSide/ClientReview'
import ProjectInfo from '../../../components/clientSide/ProjectInfo'

import TestimonialCard from './Reviews'

import LayoutVisual from './LayoutVisual'
import Contact from '../../../components/clientSide/Contact'
import ChairmanSpeech from './ChairmanSpeech'
import ProjectFeaturePage from './ProjectFeaturePage'
import ProjectOverview from './ProjectOverview'
import BannerSlider from './BannerSlider'
import BannerCarousel from './BannerCarousel'
import ScheduleMeeting from './ScheduleMeeting'
import ProjectPage from './ProjectPage'


const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div className='space-y-16' >
      {/* carousel */}
       {/* <Carousel></Carousel> */}

      {/* <div className="">
        <BannerSlider></BannerSlider>
      </div>  */}

      <BannerCarousel></BannerCarousel>
      <ChairmanSpeech></ChairmanSpeech>
      <ProjectOverview></ProjectOverview>
      <ProjectFeaturePage></ProjectFeaturePage>
      {/* <ProjectInfo></ProjectInfo> */}
      <AboutUs></AboutUs>
      {/* <Team></Team> */}
      {/* <TestimonialCard></TestimonialCard> */}
      {/* <LayoutVisual></LayoutVisual> */}
      <ScheduleMeeting></ScheduleMeeting>
      <ProjectPage></ProjectPage>
    </div>
  )
}

export default HomePage
