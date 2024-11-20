'use client';

import { useEffect, useState } from 'react';
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
import Image from 'next/image';

// Hardcoded movie data for illustration
const movieData = [
    { slug: 'joker-folie-a-deux', name: 'Joker: Folie a Deux', poster: joker, price: 3, description: 'A story about the Joker and his insane world.' },
    { slug: 'the-wild-robot', name: 'The Wild Robot', poster: wild, price: 4, description: 'A robot discovers nature and the wild world around it.' },
    { slug: 'deadpool-wolverine', name: 'Deadpool & Wolverine', poster: deadpool, price: 8, description: 'The ultimate team-up of Deadpool and Wolverine.' },
    { slug: 'bad-boys-ride-or-die', name: 'Bad Boys: Ride or Die', poster: badBoys, price: 6, description: 'The Bad Boys return for another action-packed adventure.' },
    { slug: 'hitman', name: 'Hitman', poster: hitman, price: 4, description: 'A highly trained assassin with a deadly skillset.' },
    { slug: 'longlegs', name: 'Longlegs', poster: longlegs, price: 2, description: 'An adventure story with a mysterious creature.' },
    { slug: 'the-wolfman', name: 'The Wolfman', poster: wolfman, price: 3, description: 'A man cursed to turn into a werewolf under the full moon.' },
    { slug: 'irish-wish', name: 'Irish Wish', poster: irish, price: 5, description: 'A romantic drama set in Ireland.' },
    { slug: 'sweet-home-season-2', name: 'Sweet Home: Season 2', poster: switHome, price: 6, description: 'A horror series about humans trapped in a building.' },
    { slug: 'loki-season-2', name: 'Loki: Season 2', poster: lokie, price: 8, description: 'The god of mischief continues his adventures in the multiverse.' },
    { slug: 'the-dragon-prince-season-6', name: 'The Dragon Prince: Season 6', poster: dragon, price: 7, description: 'The ongoing saga of magic and dragons in a mystical land.' },
    { slug: 'harry-potter-prisoner-of-azkaban', name: 'Harry Potter and the Prisoner of Azkaban', poster: azkaban, price: 9, description: 'The third movie in the Harry Potter series.' },
    { slug: 'spider-man-3', name: 'Spider-Man 3', poster: spiderman, price: 8, description: 'Spider-Man faces new challenges with multiple villains.' },
    { slug: 'doctor-strange-multiverse-madness', name: 'Doctor Strange in the Multiverse of Madness', poster: strange, price: 9, description: 'A journey through the multiverse with Doctor Strange.' },
    { slug: 'interstellar', name: 'Interstellar', poster: inter, price: 7, description: 'A journey into space to save humanity.' },
    { slug: 'maleficent', name: 'Maleficent', poster: maleficent, price: 4, description: 'The origin story of the iconic Disney villain.' },
];

export default function MoviePage({
    params,
}: {
    params: { slug: string };  // Accessing the slug directly from params
}) {
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const { slug } = params; // Get the slug from URL params

        // Find the movie based on the slug
        const foundMovie = movieData.find((movie) => movie.slug === slug);

        if (foundMovie) {
            setMovie(foundMovie); // Set the movie if found
        } else {
            console.error('Movie not found');
        }

        setLoading(false); // Stop loading
    }, [params]);

    if (loading) {
        return <div>Loading...</div>; // Show loading state while data is being fetched
    }

    if (!movie) {
        return <div>No movie found</div>; // If no movie is found
    }

    return (
        <div>
            <div className="flex w-10/12 mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-5">
                <Image
                    className=""
                    src={movie.poster}
                    alt={movie.slug}
                    width={180}
                />
                <div className="w-2/3 p-4 md:p-4">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                        Backpack
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
                    </p>
                    <div className="flex mt-2 item-center">
                        <svg
                            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg
                            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg
                            className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                        <svg className="w-5 h-5 text-gray-500 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                    </div>
                    <div className="flex justify-between mt-3 item-center">
                        <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                            $220
                        </h1>
                        <button className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
