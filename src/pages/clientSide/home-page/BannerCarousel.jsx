import React from 'react';
import LastTry from './LastTry';

const BannerCarousel = () => {
    const images = [
        'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731407252/Amer%20Thikana/ipafci7azjiclxukiy7c.jpg',
        'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731407252/Amer%20Thikana/ipafci7azjiclxukiy7c.jpg',
        'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731407252/Amer%20Thikana/ipafci7azjiclxukiy7c.jpg',
        'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731407252/Amer%20Thikana/ipafci7azjiclxukiy7c.jpg',
        'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731407252/Amer%20Thikana/ipafci7azjiclxukiy7c.jpg',
        
      ];
    return (
        <div>
            <LastTry images={images}></LastTry>
        </div>
    );
};

export default BannerCarousel;