import React from 'react'
import ProjectLayout2 from '../project-layout-page/ProjectLayout2'
import { Helmet } from 'react-helmet-async'

const LayoutTwo = () => {
    window.scrollTo(0, 0);
    return (
        <div className='w-11/12 mx-auto my-24 ' >
            <Helmet>
                <title>Amar Thikana | Project Layout</title>
            </Helmet>
            {/* Project Layout  */}
            <h1 className='lg:text-4xl font-bold lg:mt-5 lg:mb-5 lg:py-2 ml-6 '  >প্রজেক্ট লেআউট</h1>
            <div className='my-5' >
                {/* <ProjectLayout></ProjectLayout> */}
                <ProjectLayout2></ProjectLayout2>
            </div>
        </div>
    )
}

export default LayoutTwo
