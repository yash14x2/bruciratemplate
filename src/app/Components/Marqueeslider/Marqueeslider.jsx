import React from 'react';
import Image from 'next/image';

const MarqueeSlider = () => {
  const images = [
    '/images/Logo/Layer-2-2.png',
    '/images/Logo/image 755.png',
    '/images/Logo/Indeed-Logo.png',
    '/images/Logo/indiagold_transparent_logo_website.png',
    '/images/Logo/Layer-2-2.png',
    '/images/Logo/Logo.png',
    '/images/Logo/My_11_circle_logo.png',
    '/images/Logo/Sequoia_Capital_logo 1.png',
    '/images/Logo/Layer-2-2.png',
    '/images/Logo/image 755.png',
    '/images/Logo/Indeed-Logo.png',
    '/images/Logo/indiagold_transparent_logo_website.png',
    '/images/Logo/Layer-2-2.png',
    '/images/Logo/Logo.png',
    '/images/Logo/My_11_circle_logo.png',
    '/images/Logo/Sequoia_Capital_logo 1.png',
  ];

  return (
    <div className="overflow-hidden relative  h-[137px] mt-[134px]">
      <div className="flex  animate-marquee gap-[7%]">
      
        {images.map((image, index) => (
          <Image
            key={`image-${index}`}
            src={image}
            width={117}
            height={40}
            quality={80}
            loading="eager"
            alt={`Image ${index + 1}`}
            className="h-[40px] w-[117px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
