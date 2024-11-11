import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';

const testimonialData = [
  { id: 1, name: 'Mr. Navid Rahman', role: 'Apartment Owner', text: 'Hear from our homeowners sharing their tales of happiness.', video: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 2, name: 'Ms. Sarah Johnson', role: 'Condo Owner', text: 'Our experience was seamless and enjoyable.', video: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 3, name: 'Mr. David Lee', role: 'Home Buyer', text: 'A truly satisfying journey to find our dream home.', video: 'https://www.w3schools.com/html/movie.mp4' },
  { id: 4, name: 'Mrs. Emily Clark', role: 'Property Investor', text: 'The best real estate experience we could ask for.', video: 'https://www.youtube.com/live/7d3GqPGZ8aI?si=WAIFWUEMKiRg3HmO' },
];

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoChange, setAutoChange] = useState(true);
  const [showModal, setShowModal] = useState(false); // For modal visibility
  const [isPlaying, setIsPlaying] = useState(false); // To track if the video is playing
  const videoRef = useRef(null); // To reference the video element

  useEffect(() => {
    if (!autoChange) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [autoChange]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1));
    setAutoChange(false); // Stop auto change when manually navigating
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
    setAutoChange(false); // Stop auto change when manually navigating
  };

  const handlePlay = () => {
    setShowModal(true); // Show modal on play button click
    setIsPlaying(true); // Set the video to play
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal when clicking the close button
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when modal is closed
      setIsPlaying(false); // Set playing state to false
    }
  };

  const currentTestimonial = testimonialData[currentIndex];

  return (
    <div className="w-11/12 mx-auto my-28">
      <div className="flex flex-col md:grid md:grid-cols-2 md:space-x-40 py-8 px-4 lg:px-16 bg-white">
        {/* Video Section */}
        <div className="relative w-full  h-64 lg:h-80">
          <video
            src={currentTestimonial.video}
            alt={currentTestimonial.name}
            className="w-full h-full object-cover"
            loop
            muted
          />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 text-white text-3xl rounded-full"
          >
            <FaPlay className="bg-white text-blue-600 p-2 rounded-full w-12 h-12" />
          </button>
        </div>

        {/* Text Section */}
        <div className="mt-8 lg:mt-0 flex-1  ">
          <h2 className="text-2xl lg:text-3xl font-semibold text-blue-900">
            Homeowner’s Reflections on Apartments
          </h2>
          <p className="text-gray-700 mt-4">{currentTestimonial.text}</p>
          <p className="mt-6 font-semibold text-gray-900">{currentTestimonial.name}</p>
          <p className="text-gray-600">{currentTestimonial.role}</p>

          {/* Arrows for navigation */}
          <div className="flex space-x-4 mt-6 text-gray-500">
            <button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-100">
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Video */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-full h-full lg:w-3/4 lg:h-3/4">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute z-50 top-4 right-4 bg-green-500 text-3xl"
            >
              <FaTimes />
            </button>
            <div className="relative w-full h-full">
              <video
                ref={videoRef}
                src={currentTestimonial.video}
                className="w-full h-full object-cover"
                controls
                autoPlay={isPlaying}
                muted
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
