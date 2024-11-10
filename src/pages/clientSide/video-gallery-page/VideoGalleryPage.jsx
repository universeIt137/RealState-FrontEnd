import React from 'react';
import { Link } from 'react-router-dom';

const VideoGalleryPage = () => {
    window.scrollTo(0, 0);
  const videos = [
    {
      id: 1,
      title: "Amar Thikana হবে পরিবেশ বান্ধব প্রজেক্ট",
      url: "https://www.youtube.com/watch?v=your_video_id_1",
      imageUrl: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731232455/amar_b5sll5.jpg",
    },
    {
      id: 2,
      title: "কোথায় বিনিয়োগ করবেন?",
      url: "https://www.youtube.com/watch?v=your_video_id_2",
      imageUrl: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889998/offer-3_zr81a8.png",
    },
    // Add more video items here
    {
      id: 3,
      title: "নতুন প্রকল্প",
      url: "https://www.youtube.com/watch?v=your_video_id_3",
      imageUrl: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889904/offer-1_bajmsf.png",
    },
    {
      id: 4,
      title: "ভবিষ্যৎ বিনিয়োগ সুযোগ",
      url: "https://www.youtube.com/watch?v=your_video_id_4",
      imageUrl: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799883/Amer%20Thikana/kuejlsp7fm243vr94avo.jpg",
    },
    {
      id: 5,
      title: "পরিবেশ বান্ধব স্থাপনা",
      url: "https://www.youtube.com/watch?v=your_video_id_5",
      imageUrl: "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889949/offer-2_s0dp1u.png",
    },
    // Repeat or add more objects until you reach 10 items
  ];

  return (
    <div className="w-11/12 mx-auto my-28">
        <h1 className='md:text-4xl font-bold text-center my-6 text-[#21c45e] ' >Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {videos.map((video) => (
          <Link
            key={video.id}
            to={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative border border-green-500 w-full h-64 bg-cover bg-center text-white flex items-center justify-center"
            style={{
              backgroundImage: `url('${video.imageUrl}')`,
            }}
          >
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center bg-[#21c45e] bg-opacity-50 p-4 rounded">
              {video.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoGalleryPage;
