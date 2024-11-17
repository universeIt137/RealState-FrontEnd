import React from 'react';
import { Link } from 'react-router-dom';

const ExpandableCards = () => {
  const cards = [
    {
      name: 'Project 01',
      image: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889904/offer-1_bajmsf.png',
      live_link: 'https://learning-management-syst-f5df8.web.app/',
    },
    {
      name: 'Project 02',
      image: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799891/Amer%20Thikana/cdmwebyklefwysceljmu.jpg',
      live_link: 'https://eranian.onrender.com/',
    },
    {
      name: 'Project 03',
      image: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730799883/Amer%20Thikana/kuejlsp7fm243vr94avo.jpg',
      live_link: 'https://bideshgami-a638b.web.app/',
    },
    {
      name: 'Project 04',
      image: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1730889949/offer-2_s0dp1u.png',
      live_link: 'https://quantum-builders.onrender.com',
    },
    {
      name: 'Project 05',
      image: 'https://res.cloudinary.com/dnvmj9pvk/image/upload/v1731500291/Amer%20Thikana/ynqygmetpfbezjjofbez.jpg',
      live_link: 'https://quantum-builders.onrender.com',
    },
  ];

  return (
    <div className="flex my-5 justify-center items-center py-5 bg-gradient-to-r from-universe_primary to-universe_secondary">
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-40 sm:w-52 lg:w-64 h-[350px] sm:h-[500px] bg-cover bg-center rounded-3xl overflow-hidden transition-all duration-500 hover:w-72 lg:hover:w-96 cursor-pointer border shadow-lg`}
            style={{ backgroundImage: `url(${card.image})` }}
          >
            {/* Gradient overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-3xl opacity-0 hover:opacity-100 transition-opacity duration-500">
              {/* Text that becomes visible on hover */}
              <Link to={card.live_link} target="_blank">
                <p className="absolute text-lg sm:text-2xl lg:text-4xl text-white w-full text-center bottom-5 hover:text-blue-700">
                  {card.name}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableCards;
