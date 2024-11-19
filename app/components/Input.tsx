import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

export default function Input() {
  return (
    <div className='relative'>
        <input className="w-80 bg-gradient-to-r from-blue-950/80 to-blue-900/80 rounded-full px-4 py-2 text-gray-300 capitalize focus:outline-none" type="text" placeholder='SEARCH' />
        <span className='absolute top-2 right-3 text-gray-300 text-2xl font-bold cursor-pointer'><IoSearchOutline /></span>  
    </div>
  )
}
