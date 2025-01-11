import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { PERSONAS } from '../constants/personas';
import PersonaCard from '../components/PersonaCard';

export default function Personas() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PERSONAS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PERSONAS.length) % PERSONAS.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Users className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-bold">Personas</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-300 ease-in-out flex"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {PERSONAS.map((persona, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <PersonaCard persona={persona} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous persona"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next persona"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {PERSONAS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to persona ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}