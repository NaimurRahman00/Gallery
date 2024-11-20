import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

interface InputProps {
  onSearch: (query: string) => void; // **New Prop**
}

export default function Input({ onSearch }: InputProps) { // **Added onSearch**
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value); 
  };

  return (
    <div className="relative">
      <input
        className="w-80 bg-gradient-to-r from-blue-950/80 to-blue-900/80 rounded-full px-4 py-2 text-gray-300 capitalize focus:outline-none"
        type="text"
        placeholder="SEARCH"
        value={searchValue}
        onChange={handleChange}
      />
      <span className="absolute top-2 right-3 text-gray-300 text-2xl font-bold cursor-none">
        <IoSearchOutline />
      </span>
    </div>
  );
}
