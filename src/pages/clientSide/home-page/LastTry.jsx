import React, { useEffect, useRef } from 'react';

const LastTry = ({ images, timeRunning = 3000, timeAutoNext = 7000 }) => {
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const autoNextTimeout = useRef(null);
  const transitionTimeout = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoNextTimeout.current = setTimeout(() => {
      handleNextClick();
    }, timeAutoNext);
  };

  const stopAutoSlide = () => {
    clearTimeout(autoNextTimeout.current);
    clearTimeout(transitionTimeout.current);
  };

  const handleNextClick = () => {
    showSlider('next');
    startAutoSlide();
  };

  const handlePrevClick = () => {
    showSlider('prev');
    startAutoSlide();
  };

  const showSlider = (type) => {
    const sliderItems = sliderRef.current.children;
    const thumbnailItems = thumbnailRef.current.children;

    if (type === 'next') {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add('next');
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    clearTimeout(transitionTimeout.current);
    transitionTimeout.current = setTimeout(() => {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.remove('prev');
    }, timeRunning);
  };

  return (
    <div
      ref={carouselRef}
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={handlePrevClick}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Prev
      </button>
      <button
        onClick={handleNextClick}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Next
      </button>

      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              minWidth: '100%',
              flexShrink: 0,
            }}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      <div
        ref={thumbnailRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          marginTop: '10px',
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: '50px',
              height: '50px',
              cursor: 'pointer',
            }}
          >
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastTry;
