import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: "/images/RaptAI/Rapt-AI--1.jpg",
    title: "Dashboard Overview",
    description: "Real-time monitoring dashboard showing GPU utilization and project status"
  },
  {
    src: "/images/RaptAI/Rapt-AI--2.jpg",
    title: "Project Management",
    description: "Comprehensive project tracking with detailed status and resource allocation"
  },
  {
    src: "/images/RaptAI/Rapt-AI--3.jpg",
    title: "Cloud Integration",
    description: "Multi-cloud framework selection and configuration interface"
  },
  {
    src: "/images/RaptAI/Rapt-AI--4.jpg",
    title: "Analytics Dashboard",
    description: "Advanced analytics and resource utilization monitoring"
  },
  {
    src: "/images/RaptAI/Rapt-AI--5.jpg",
    title: "Analytics Dashboard",
    description: "Advanced analytics and resource utilization monitoring"
  },
  {
    src: "/images/RaptAI/Rapt-AI--6.jpg",
    title: "Analytics Dashboard",
    description: "Advanced analytics and resource utilization monitoring"
  }
];

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
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
                className="w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
 {/*                <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                <p className="text-gray-200">{image.description}</p>

  */}
              </div>
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