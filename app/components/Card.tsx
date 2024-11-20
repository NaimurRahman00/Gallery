'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaPlay } from 'react-icons/fa';

interface CardProps {
  name: string;
  poster: StaticImageData;
  price: number;
}

export const Card: React.FC<CardProps> = ({ name, poster, price }) => {
  // const movieDetailsUrl = `/movie/${name.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div>
      <div className="w-full max-w-[160px] space-y-3 rounded-md bg-white shadow-lg dark:bg-[#18181B] overflow-hidden group">
        <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
          {/* Price Tag */}
          <div className="absolute left-4 right-4 top-4 flex justify-between">
            <h6 className="rounded shadow-2xl shadow-black bg-sky-400 text-white text-xl px-2">
              <sup className="text-xs">$</sup>{price}
            </h6>
            <span className="rounded shadow-2xl shadow-black bg-[#ffc107] px-2 py-0.5 h-fit font-bold text-xs text-black">
              HD
            </span>
          </div>

          {/* Movie Title */}
          <div className="absolute left-2 right-2 top-2 bottom-2 flex flex-col justify-end text-white font-bold leading-4 text-center">
            <h1 className="bg-gradient-to-t from-black/70 to-black/0 pt-4">
              {name}
            </h1>
          </div>

          {/* Movie Poster */}
          <Image
            src={poster}
            className="min-w-full bg-black/20 object-cover"
            alt={name}
          />

          {/* Hover Content */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            <div className='bg-sky-400 p-4 rounded-full'>
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
