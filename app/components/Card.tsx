'use client';

import Image from 'next/image';
import React from 'react';

interface CardProps {
  name: string;
  poster: string;
  price: number;
}

export const Card: React.FC<CardProps> = ({ name, poster, price }) => {
  return (
    <div className="w-full max-w-[160px] space-y-3 rounded-md bg-white shadow-lg dark:bg-[#18181B] overflow-hidden">
      <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
        {/* Price Tag */}
        <div className="absolute left-4 right-4 top-4 flex justify-between">
          <h6 className="rounded shadow-2xl shadow-black bg-black text-white text-xl px-2">
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
      </div>
    </div>
  );
};
