'use client'

import Link from 'next/link';
import Input from './Input';
import FadeUpDropDown from './Dropdown';
import { useState } from 'react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-2 py-3 mx-auto max-w-[1400px]">
      <h2 className="text-2xl font-semibold dark:text-white">Gallery</h2>
      <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
        <li className="hover:underline">
          <Input />
        </li>
        <li className="hover:underline">
          <Link href="#">Home</Link>
        </li>
        <li
          className="relative hover:underline"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          <button className="px-4 py-2 rounded-md focus:bg-sky-600 focus:text-white">
            Genres
          </button>
          {isDropdownOpen && <FadeUpDropDown />}
        </li>
        <li className="hover:underline">
          <Link href="#">Country</Link>
        </li>
        <li className="hover:underline">
          <Link href="#">Movies</Link>
        </li>
        <li className="hover:underline">
          <Link href="#">TV-Series</Link>
        </li>
      </ul>
    </nav>
  );
}
