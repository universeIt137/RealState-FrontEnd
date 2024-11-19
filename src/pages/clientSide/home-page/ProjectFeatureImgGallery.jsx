import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";

const imagesData = [
  { id: 1, src: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731492226/Amer%20Thikana/dmbxeyr2odm9vrrwh290.png ', alt: 'Image 1' },
  { id: 2, src: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889949/offer-2_s0dp1u.png', alt: 'Image 2' },
  { id: 3, src: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889949/offer-2_s0dp1u.png', alt: 'Image 3' },
  { id: 4, src: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889904/offer-1_bajmsf.png', alt: 'Image 4' },
  { id: 5, src: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799891/Amer%20Thikana/cdmwebyklefwysceljmu.jpg', alt: 'Image 5' },
];

const ProjectFeatureImgGallery = ({ images }) => {
  // console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Auto-sliding images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < imagesData.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Open modal with the clicked image
  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Image Slider */}
      <div
        className="flex transition-transform duration-500 md:mb-7"
        style={{
          transform: `translateX(-${currentIndex * (window.innerWidth < 640 ? 100 : 33.33)}%)`,
        }}
      >
        {images?.map((image) => (
          <div
            key={image.id}
            className={`flex-shrink-0 px-2 ${window.innerWidth < 640 ? 'w-full' : 'w-1/3'}`}
          >
            <img
              src={image}
              
              className="w-full h-56 object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(image)} // Open modal on image click
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-20 right-4 p-3 text-white font-bold text-2xl bg-black rounded-full"
              onClick={closeModal} // Close modal
            >
              <IoCloseSharp size={30} />
            </button>
            <img
              src={modalImage}
              alt="Modal Image"
              className="min-w-[50vw] min-h-[50vh] object-contain" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFeatureImgGallery;
