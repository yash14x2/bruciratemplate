"use client";
import React from 'react'
import { useState } from 'react';
import { Open_Sans } from 'next/font/google'
const OpenSans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: "600",
  });

export const Carousel = () => {
    const testimonials = [
        {
          id: 1,
          image:'/images/Logo/carouselimage.png',
          testimony:
           "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s, when an unknown printer took a galley of  type and scrambled",
          name: 'LISSA SMITH',
          designation: 'DIRECTOR OF MARKETING AND COMMUNICATIONS',
          company: 'VYMO',
        },
        {
          id: 2,
          image: '/images/Logo/carouselimage.png',
          testimony:
            'Another testimony text. This is an example of a second testimonial.',
          name: 'JOHN DOE',
          designation: 'CEO',
          company: 'Tech Corp',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
      };
    
  return (
    <div className='container mt-[129px]'>
        <div
        className={`flex text-[#EF001C] font-[600] tracking-[2px] gap-[12px] items-center ${OpenSans.className}`}
      >
        <span className="w-[54px] h-[1px] bg-[#EF001C]"></span>
        <h2>TESTIMONY FROM OUR PARTNERS</h2>
      </div>
      <div className="relative w-full  ">
     
      <div className="flex items-center">
      
        <div className="flex-shrink-0">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="h-571 w-484  object-cover"
          />
        </div>
        {/* Testimonial Content */}
        <div className="ml-8">
          <p className="text-[24px] leading-[41px] font-[600] h-[205px] w-[634] ">
            {testimonials[currentIndex].testimony}
          </p>
          <div className='mt-[27%]'>
          <h3 className="font-bold text-black">
            {testimonials[currentIndex].name},{' '}
            <span className="text-gray-500">{testimonials[currentIndex].company}</span>
          </h3>
          <p className="text-gray-500 text-sm">
            {testimonials[currentIndex].designation}
          </p>
            </div>

        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full border border-black hover:bg-gray-200"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600"
        >
          →
        </button>
      </div>
    </div>
    </div>
  )
}

export default Carousel
