import React from 'react'
import Carousel from './Carousel'
import Team from '../../../components/clientSide/Team'
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
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import ClientReviewHome from './ClientReviewHome';
import BannerCarousel2 from './BannerCarousel2'


const HomePage = () => {
  window.scrollTo(0, 0);

  const axiosPublic = useAxiosPublic();
  const { data: webContent = {} } = useQuery({
    queryKey: ['web content'],
    queryFn: async () => {
      const res = await axiosPublic.get('/website-content');
      return res.data[0];
    }
  })


  

  


  return (
    <div className='space-y-16' >
      <Helmet>
        <title>Amer Thikana</title>
      </Helmet>
      

      <BannerCarousel banner_images={webContent?.banner_images}></BannerCarousel>
      {/* <BannerCarousel2></BannerCarousel2> */}
      <div className="  ">
        
      <ChairmanSpeech></ChairmanSpeech>
      </div>
      <ProjectOverview></ProjectOverview>
      <ProjectFeaturePage></ProjectFeaturePage>
      {/* <ProjectInfo></ProjectInfo> */}
      {/* <AboutUs></AboutUs> */}
      <ClientReviewHome></ClientReviewHome>
      {/* <Team></Team> */}
      {/* <TestimonialCard></TestimonialCard> */}
      {/* <LayoutVisual></LayoutVisual> */}
      <ScheduleMeeting banner={webContent?.scheduleImageUrl}></ScheduleMeeting>
      <ProjectPage></ProjectPage>
    </div>
  )
}

export default HomePage
