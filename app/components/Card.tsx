'use client';

import Image from 'next/image';
import React from 'react';
import movieImage from '@/public/deadpool-wolverine.jpg';

export const Card = () => {
  return (
    <div className="w-full max-w-[160px] space-y-3 rounded-md bg-white m-4 shadow-lg dark:bg-[#18181B] overflow-hidden">
      <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
        <div className="absolute left-4 right-4 top-4 flex justify-between">
          <h6 className="rounded shadow-2xl shadow-black bg-black text-white text-xl px-2"><sup className='text-xs'>$</sup>5</h6>
          <span className="rounded shadow-2xl shadow-black bg-[#ffc107] px-2 py-0.5 h-fit font-bold text-xs text-black">HD</span>
        </div>
        <div className="absolute left-4 right-4 top-4 bottom-2 flex flex-col justify-end text-white font-bold leading-4 text-center">
        <h1 className='bg-gradient-to-t from-black/70 to-black/0 pt-4'>Deadpool & Woolverine</h1>
        </div>
        
        <Image
            src={movieImage}
            className="min-w-full bg-black/20 object-cover"
            alt='movie'
          />
      </div>
    </div>
  );
};
