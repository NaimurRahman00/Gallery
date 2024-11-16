import Link from 'next/link'
import React from 'react'
import Input from './ui/Input'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-6 mx-auto max-w-[1400px]">
          <h2 className="text-2xl font-semibold dark:text-white">Gallery</h2>
          <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
              <li className="hover:underline">
                  <Input />
              </li>
              <li className="hover:underline">
                  <Link href="#">Home</Link>
              </li>
              <li className="hover:underline">
                  <Link href="#">TV-Shows</Link>
              </li>
              <li className="hover:underline">
                  <Link href="#">New Movies</Link>
              </li>
              <li className="hover:underline">
                  <Link href="#">Contact</Link>
              </li>
          </ul>
      </nav>
  )
}
