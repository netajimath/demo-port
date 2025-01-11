import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const prototypes = [
  {
    image: "/images/AIConferencing/1-prototype.jpg",
    title: "Low Fi wireframes VUI (Voice User Interface)"
  },
  {
    image: "/images/AIConferencing/2-prototype.jpg",
    title: "Low Fi wireframes VUI (Voice User Interface)"
  },
  {
    image: "/images/AIConferencing/3-prototype.jpg",
    title: "Low Fi wireframes VUI (Voice User Interface)"
  },
  {
    image: "/images/AIConferencing/4-prototype.jpg",
    title: "Low Fi wireframes VUI (Voice User Interface)"
  }
];

export default function PrototypeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % prototypes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + prototypes.length) % prototypes.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div 
          className="transition-transform duration-300 ease-in-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {prototypes.map((prototype, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={prototype.image}
                alt={prototype.title}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Previous prototype"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Next prototype"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {prototypes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to prototype ${index + 1}`}
          />
        ))}
      </div>
 {/*
      <div className="mt-4 text-center">
        <p className="text-gray-600">{prototypes[currentSlide].title}</p>
      </div>

      */}
    </div>
  );
}

