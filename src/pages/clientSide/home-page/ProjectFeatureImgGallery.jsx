import React, { useEffect, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import ImageGallery from '../image-gallery-page/ImageGallery';
import Marquee from 'react-fast-marquee';

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
      <Marquee speed={35} pauseOnHover={true}>
        <div
          className="flex transition-transform duration-500 md:mb-7"

        >
          {images?.map((image) => (
            <div
              key={image.id}
              className={`flex-shrink-0 px-2 w-96`}
            >
              <img
                src={image}

                className="w-full h-56 object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(image)} // Open modal on image click
              />
            </div>
          ))}
        </div>
      </Marquee>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative max-w-3xl max-h-[80vh] bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 p-3 text-black font-bold text-2xl bg-white rounded-full shadow-md hover:bg-gray-200"
              onClick={closeModal}
            >
              <IoCloseSharp size={30} />
            </button>

            {/* Modal Image */}
            <img
              src={modalImage}
              alt="Modal Image"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>

      )}
    </div>
    // <div className='lg:-mt-28 -mt-5 ' >
    //     <ImageGallery></ImageGallery>
    // </div>
  );
};

export default ProjectFeatureImgGallery;
