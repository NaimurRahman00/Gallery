import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex max-w-7xl items-center justify-between px-2 py-2">
          <h2 className="text-2xl font-semibold dark:text-white">#NavigateUI</h2>
          <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
              <li className="hover:underline">
                  <Link href="#">Home</Link>
              </li>
              <li className="hover:underline">
                  <Link href="#">Services</Link>
              </li>
              <li className="hover:underline">
                  <Link href="#">About</Link>
              </li>
              <li className="hover:underline">
                  <Link href="#">Contact</Link>
              </li>
          </ul>
      </nav>
  )
}
