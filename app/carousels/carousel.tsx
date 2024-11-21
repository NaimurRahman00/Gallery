'use client'

import { useCallback, useEffect, useState } from "react";
import coverImage1 from '@/app/carousels/assets/oppenheimer.jpg';
import coverImage2 from '@/app/carousels/assets/the-last-voyage-of-the-demeter.jpg';
import Image from "next/image";

export const Carousel = () => {
  // Hero movies
  const heroMovies = [
    {
      name: 'Openheimer',
      duration: '180 min',
      genre: 'Biography, Drama, History',
      discription: "The Story of J.Robert Openheimer's role in the development of the atomic bomb during world war II.",
      image: coverImage1
    },
    {
      name: 'The last voyage of the demeter',
      duration: '118 min',
      genre: 'Horror',
      discription: "The crew of the merchant ship demeter attempts to survive the ocean voyage from carpathia to london as they are stalked each night by a merciless...",
      image: coverImage2
    },
  ]

  const [currentSlider, setCurrentSlider] = useState(0);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === heroMovies.length - 1 ? 0 : currentSlider + 1), [heroMovies.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="w-full relative overflow-hidden">
      {/* dots */}
      <div className="flex justify-center items-center rounded-full z-10 absolute bottom-4 w-full gap-1">
        {heroMovies.map((img, idx) => (
          <button key={`${img}_${idx}`} onClick={() => setCurrentSlider(idx)} className={`rounded-full duration-500 bg-white ${currentSlider === idx ? "w-8" : "w-2"} h-2`}></button>
        ))}
      </div>
      {/* Carousel container */}
      <div className="ease-linear h-[65%] duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
        {/* sliders */}
        {heroMovies.map((slide, idx) => (
          <div key={idx} className="flex min-w-full relative">
            <Image
              src={slide.image}
              className="min-w-full bg-black/20 object-cover"
              alt={`Slider - ${idx + 1}`}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex flex-col justify-between py-10">
              <div></div>
              <div className="w-[85%] mx-auto z-10 max-w-[1400px]">
                <h1 className="text-white font-bold text-3xl">{slide.name}</h1>
                <div className="my-2 flex justify-start items-center gap-5 text-white">
                  <span className="rounded shadow-2xl shadow-black bg-[#ffc107] px-2 py-0.5 h-fit font-bold text-xs text-black">
                    HD
                  </span>
                  <span>{slide.duration}</span>
                  <span>{slide.genre}</span>
                </div>
                <p className="text-white w-1/2 my-4">{slide.discription}</p>
                <button className="px-2 py-1 rounded bg-sky-600 text-black text-base cursor-pointer">
                  Watch now
                </button>
              </div>
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-tr from-black/90 via-black/0 to-black/90"></div>
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-tl from-black/90 via-black/0 to-black/90"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
