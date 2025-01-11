import React, { useState } from 'react';
import { Palette, ChevronLeft, ChevronRight } from 'lucide-react';

const designScreens = [
  {
    title: "Home Dashboard",
    description: "Personalized dashboard showing daily activities, health metrics, and social connections",
    image: "/images/agio/Agio-1.jpg"
  },
  {
    title: "Social Connection",
    description: "Interface for connecting with family, friends, and community members",
    image: "/images/agio/Agio-2.jpg"
  },
  {
    title: "Health Monitoring",
    description: "Health tracking and medication management interface",
    image: "/images/agio/Agio-3.jpg"
  },
  {
    title: "Support Services",
    description: "Access to various support services and community resources",
    image: "/images/agio/Agio-4.jpg"
  },
  {
    title: "Support Services",
    description: "Access to various support services and community resources",
    image: "/images/agio/Agio-5.jpg"
  }
];

export default function UXUIDesign() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % designScreens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + designScreens.length) % designScreens.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-12">
          <Palette className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">UX/UI Design</h2>
        </div>

        <div className="relative bg-gray-50 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-300 ease-in-out flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {designScreens.map((screen, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8">
                  <div className="max-w-4xl mx-auto">
                    <img 
                      src={screen.image}
                      alt={screen.title}
                      className="w-full rounded-lg shadow-lg mb-8"
                    />
                   {/* <h3 className="text-2xl font-bold mb-4">{screen.title}</h3>
                    <p className="text-gray-600">{screen.description}</p>
                    */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {designScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}