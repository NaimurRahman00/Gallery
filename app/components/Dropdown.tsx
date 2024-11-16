'use client';

import { useEffect, useRef } from 'react';

export default function Dropdown() {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const items: string[] = ['Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Comedy',
    'Costume',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film-Noir',
    'Game-Show',
    'History',
    'Horror',
    'Kungfu',
    'Music',
    'Musical',
    'Mystery',
    'Mythological',
   'News',
    'Psychological',
    'Reality-TV',
    'Romance',
    'Sci-Fi',
    'Science Fiction'];

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        console.log('Clicked outside dropdown');
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto text-white">
      <ul className="absolute grid grid-cols-3 grid-rows-10 grid-flow-col w-96 top-6 z-50 space-y-1 rounded-sm bg-gray-800 shadow-md">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="rounded-sm px-2 py-1  hover:bg-sky-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
