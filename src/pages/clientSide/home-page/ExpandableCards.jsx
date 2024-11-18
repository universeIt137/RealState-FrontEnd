import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ExpandableCards = () => {

  const axiosPublic = useAxiosPublic();

  const { data: cards = [] } = useQuery({
    queryKey: ['overview'],
    queryFn: async () => {
      const res = await axiosPublic.get('/overview');
      return res.data;
    }
})

  
  return (
    <div className="flex my-5 justify-center items-center py-5 bg-gradient-to-r from-universe_primary to-universe_secondary">
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative w-40 sm:w-52 lg:w-64 h-[350px] sm:h-[500px] bg-cover bg-center rounded-3xl overflow-hidden transition-all duration-500 hover:w-72 lg:hover:w-96 cursor-pointer border shadow-lg`}
            style={{ backgroundImage: `url(${card?.ImageUrl})` }}
          >
            {/* Gradient overlay that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-3xl opacity-0 hover:opacity-100 transition-opacity duration-500">
              {/* Text that becomes visible on hover */}
              <Link  target="_blank">
                <p className="absolute text-lg sm:text-2xl lg:text-4xl text-white w-full text-center bottom-5 hover:text-blue-700">
                  {card?.description}
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
