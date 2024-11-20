'use client';

import { Card } from '@/app/components/Card';
import React, { useState, useEffect } from 'react';
import joker from '@/public/joker.jpg';
import wild from '@/public/the-wild-robot.jpg';
import deadpool from '@/public/deadpool-wolverine.jpg';
import badBoys from '@/public/bad-boys-ride-or-die.jpg';
import hitman from '@/public/hit-man.jpg';
import longlegs from '@/public/longlegs.jpg';
import wolfman from '@/public/the-wolfman.webp';
import irish from '@/public/irish-wish.webp';
import switHome from '@/public/sweet-home-season-2.webp';
import lokie from '@/public/loki-season-2.webp';
import azkaban from '@/public/harry-potter-and-the-prisoner-of-azkaban.webp';
import spiderman from '@/public/spider-man-3.jpg';
import strange from '@/public/doctor-strange-in-the-multiverse-of-madness.jpg';
import inter from '@/public/interstellar.webp';
import maleficent from '@/public/maleficent.webp';
import dragon from '@/public/the-dragon-prince-season-6.webp';


interface Movie {
    name: string;
    poster: string; // Adjust this type if necessary (e.g., StaticImageData)
    price: number;
}

type SortOrder = 'default' | 'lowToHigh' | 'highToLow';

function Movies() {
    const initialMovies: Movie[] = [
        { name: 'Joker: Folie a Deux', poster: joker, price: 3 },
        { name: 'The Wild Robot', poster: wild, price: 4 },
        { name: 'Deadpool & Woolverine', poster: deadpool, price: 8 },
        { name: 'Bad Boys: Ride or Die', poster: badBoys, price: 6 },
        { name: 'Hitman', poster: hitman, price: 4 },
        { name: 'Longlegs', poster: longlegs, price: 2 },
        { name: 'The Wolfman', poster: wolfman, price: 3 },
        { name: 'Irish Wish', poster: irish, price: 5 },
        { name: 'Sweet home: Season 2', poster: switHome, price: 6 },
        { name: 'Lokie: Season 2', poster: lokie, price: 8 },
        { name: 'The Dragon Prince: season 6', poster: dragon, price: 7 },
        { name: 'Harry potter and the prizoner of azkaban', poster: azkaban, price: 9 },
        { name: 'Spider-Man 3', poster: spiderman, price: 8 },
        { name: 'Doctor Strange in the multiverse of madness', poster: strange, price: 9 },
        { name: 'Interstellar', poster: inter, price: 7 },
        { name: 'Maleficent', poster: maleficent, price: 4 },
    ];

    const [movies, setMovies] = useState<Movie[]>(initialMovies);
    const [sortOrder, setSortOrder] = useState<SortOrder>('default');

    // Effect to sort movies whenever sortOrder changes
    useEffect(() => {
        const sortedMovies = [...initialMovies];
        if (sortOrder === 'lowToHigh') {
            sortedMovies.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'highToLow') {
            sortedMovies.sort((a, b) => b.price - a.price);
        }
        setMovies(sortedMovies);
    }, [sortOrder]);

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOrder(e.target.value as SortOrder);
    };

    return (
        <div className="w-[85%] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between my-3">
                <h1 className="font-bold text-sky-400 text-2xl">Movies</h1>
                {/* Sorting Dropdown */}
                <div className="py-2">
                    <label htmlFor="sort" className="mr-2 font-semibold text-gray-300 dark:text-gray-300">
                        Sort by Price:
                    </label>
                    <select
                        id="sort"
                        value={sortOrder}
                        onChange={handleSortChange}
                        className="px-3 py-1 rounded-md bg-sky-400 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    >
                        <option value="default">Default</option>
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-8 gap-5 pb-10">
                {movies.map((movie, idx) => (
                    <Card
                        key={idx}
                        name={movie.name}
                        poster={movie.poster}
                        price={movie.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Movies;
