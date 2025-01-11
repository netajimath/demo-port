import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor } from 'lucide-react';

const screens = [
  {
    image: "/images/SmartCity/1-dashboard-smartcity-street-light-control.jpg",
    title: "Dashboard Overview",
    description: "Real-time monitoring dashboard showing energy consumption, active lights, and system status."
  },
  {
    image: "/images/SmartCity/2-Street-light-control-interaction-Default-selection-of-user-specific-area.jpg",
    title: "Issue Management",
    description: "Comprehensive issue tracking system with priority-based categorization and status monitoring."
  },
  {
    image: "/images/SmartCity/3-Street-light-control-interaction-Details-about-specific-street-light.jpg",
    title: "GIS Mapping Interface",
    description: "Interactive map view showing real-time status of street lights with detailed controls."
  },
  {
    image: "/images/SmartCity/4-Street-light-control-interaction-Main-Action-to-take.jpg",
    title: "GIS Mapping Interface",
    description: "Interactive map view showing real-time status of street lights with detailed controls."
  },
  {
    image: "/images/SmartCity/5-Street-light-control-interaction-Incidents-Issues.jpg",
    title: "GIS Mapping Interface",
    description: "Interactive map view showing real-time status of street lights with detailed controls."
  }
];

export default function UXUIOutcomes() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screens.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <div className="space-y-8">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9 relative">
          <div 
            className="transition-transform duration-300 ease-in-out flex"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {screens.map((screen, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img 
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover"
                />
 {/*               {<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{screen.title}</h3>
                  <p className="text-gray-200">{screen.description}</p>
                </div>} */}
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Previous screen"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Next screen"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to screen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}