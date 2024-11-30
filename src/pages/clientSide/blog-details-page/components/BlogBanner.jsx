import React from 'react';
import BlogSlider from './BlogSlider';
import BlogVideo from './BlogVideo';

const BlogBanner = ({ blog }) => {
    return (
        <div className='flex'>
            <div className="lg:w-3/4 ">
                <BlogSlider></BlogSlider>
            </div>
            
        </div>
    );
};

export default BlogBanner;