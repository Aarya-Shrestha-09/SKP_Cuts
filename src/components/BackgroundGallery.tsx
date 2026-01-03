import React from 'react';
import { HAIRCUT_IMAGES } from '../constants';

export const BackgroundGallery: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex justify-between px-4 opacity-20 lg:opacity-100">
      {/* Left Column - Scrolling Down */}
      <div className="hidden md:flex flex-col gap-4 animate-scroll-down">
        {[...HAIRCUT_IMAGES, ...HAIRCUT_IMAGES].map((img, i) => (
          <img key={`left-${i}`} src={img} alt="Haircut" className="w-48 h-64 object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700" />
        ))}
      </div>
      
      {/* Right Column - Scrolling Up */}
      <div className="hidden md:flex flex-col gap-4 animate-scroll-up">
        {[...HAIRCUT_IMAGES, ...HAIRCUT_IMAGES].map((img, i) => (
          <img key={`right-${i}`} src={img} alt="Haircut" className="w-48 h-64 object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700" />
        ))}
      </div>
    </div>
  );
};
