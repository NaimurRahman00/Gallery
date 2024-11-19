'use client'

import { useCallback, useEffect, useState } from "react";
import coverImage1 from '@/app/carousels/assets/oppenheimer.jpg';
import coverImage2 from '@/app/carousels/assets/the-last-voyage-of-the-demeter.jpg';
import Image from "next/image";

export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [coverImage1, coverImage2];
  // const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1);
  const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1), [carouselImages.length]);

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="w-full relative overflow-hidden">
      {/* dots */}
      <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
        {carouselImages.map((img, idx) => (
          <button key={`${img}_${idx}`} onClick={() => setCurrentSlider(idx)} className={`rounded-full duration-500 bg-white ${currentSlider === idx ? "w-8" : "w-2"} h-2`}></button>
        ))}
      </div>
      {/* Carousel container */}
      <div className="ease-linear h-[65%] duration-500 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
        {/* sliders */}
        {carouselImages.map((slide, idx) => (
          // <img src={}  />
          <Image
            key={idx}
            src={slide}
            className="min-w-full bg-black/20 object-cover"
            alt={`Slider - ${idx + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-tr from-black/90 via-black/0 to-black/90"></div>
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-tl from-black/90 via-black/0 to-black/90"></div>
    </div>
  )
};
