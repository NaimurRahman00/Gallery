import { Card } from '@/app/components/Card';
import React from 'react';
import joker from '@/public/joker.jpg'
import wild from '@/public/the-wild-robot.jpg'
import deadpool from '@/public/deadpool-wolverine.jpg'
import badBoys from '@/public/bad-boys-ride-or-die.jpg'
import hitman from '@/public/hit-man.jpg'
import longlegs from '@/public/longlegs.jpg'
import wolfman from '@/public/the-wolfman.webp'
import irish from '@/public/irish-wish.webp'
import switHome from '@/public/sweet-home-season-2.webp'
import lokie from '@/public/loki-season-2.webp'
import dragon from '@/public/the-dragon-prince-season-6.webp'

interface Movie {
    name: string;
    poster: string;
    price: number;
}

function Movies() {
    const movies: Movie[] = [
        {
            name: 'Joker: Folie a Deux',
            poster: joker,
            price: 3
        },
        {
            name: 'The Wild Robot',
            poster: wild,
            price: 4
        },
        {
            name: 'Deadpool & Woolverine',
            poster: deadpool,
            price: 8
        },
        {
            name: 'Bad Boys: Ride or Die',
            poster: badBoys,
            price: 6
        },
        {
            name: 'Hitman',
            poster: hitman,
            price: 4
        },
        {
            name: 'Longlegs',
            poster: longlegs,
            price: 2
        },
        {
            name: 'The Wolfman',
            poster: wolfman,
            price: 3
        },
        {
            name: 'Irish Wish',
            poster: irish,
            price: 5
        },
        {
            name: 'Sweet home: Season 2',
            poster: switHome,
            price: 6
        },
        {
            name: 'Lokie: Season 2',
            poster: lokie,
            price: 8
        },
        {
            name: 'The Dragon Prince: season 6',
            poster: dragon,
            price: 7
        },
    ];

    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='px-4 pt-3 font-bold text-sky-400 text-2xl'>Movies</h1>
            <div className='flex flex-wrap gap-1'>
                {movies.map((movie, idx) => (
                    <Card key={idx} name={movie.name} poster={movie.poster} price={movie.price}/>
                ))}
            </div>
        </div>
    );
}

export default Movies;
