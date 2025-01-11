import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: "/images/AIConferencing/1-Compitative-analysis.jpg",
    title: "Competitor Analysis Dashboard",
    description: "Comprehensive analysis of leading video conferencing platforms"
  },
  {
    src: "/images/AIConferencing/2-Compitative-analysis.jpg",
    title: "Feature Comparison Matrix",
    description: "Detailed comparison of key features across platforms"
  },
  {
    src: "/images/AIConferencing/3-Compitative-analysis.jpg",
    title: "User Experience Analysis",
    description: "In-depth analysis of user experience and interface design"
  },
  {
    src: "/images/AIConferencing/4-Compitative-analysis.jpg",
    title: "Market Positioning",
    description: "Strategic positioning analysis of major competitors"
  }
];


export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-12">
      <div className="aspect-w-16 aspect-h-9">
        <div 
          className="transition-transform duration-300 ease-in-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img 
                src={image.src}
                alt={image.title}
                className="w-full h-[600px] object-cover"
              />
              
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}