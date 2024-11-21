'use client'

import Link from 'next/link';
import Input from '../../components/Input';
import FadeUpDropDown from '../../components/Dropdown';
import { useState } from 'react';

interface NavbarProps {
  onSearch: (query: string) => void; 
}

export default function Navbar({ onSearch }: NavbarProps) { 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-2 py-3 mx-auto max-w-[1400px]">
      <h2 className="text-2xl text-white uppercase bg-sky-600 px-2 py-1 rounded-md font-black">Gallery</h2>
      <ul className="flex items-center justify-between gap-4 text-white/70 font-medium dark:text-gray-100 lg:gap-6">
        <li className="hover:underline hidden sm:inline-block">
          <Input onSearch={onSearch} /> 
        </li>
        <li className="hover:underline">
          <Link href="#">Home</Link>
        </li>
        <li
          className="relative hover:underline hidden sm:inline-block"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <button className="px-4 py-2 rounded-md focus:bg-sky-600 focus:text-white">
            Genres
          </button>
          {isDropdownOpen && <FadeUpDropDown />}
        </li>
        <li className="hover:underline hidden sm:inline-block">
          <Link href="#">Country</Link>
        </li>
        <li className="hover:underline hidden sm:inline-block">
          <Link href="#">Movies</Link>
        </li>
        <li className="hover:underline hidden sm:inline-block">
          <Link href="#">TV-Series</Link>
        </li>
      </ul>
    </nav>
  );
}
