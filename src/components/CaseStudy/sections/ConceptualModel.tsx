import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb } from 'lucide-react';
import { CONCEPTUAL_MODEL_DATA } from '../constants/conceptual-model';

export default function ConceptualModel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % CONCEPTUAL_MODEL_DATA.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + CONCEPTUAL_MODEL_DATA.length) % CONCEPTUAL_MODEL_DATA.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Conceptual Model</h2>
        </div>

        <div className="relative bg-white rounded-lg shadow-lg p-8">
          <div className="overflow-hidden min-h-[600px]">
            <div 
              className="transition-transform duration-300 ease-in-out flex"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {CONCEPTUAL_MODEL_DATA.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-semibold">{slide.title}</h3>
                    </div>
                    <div className="space-y-8">
                      {slide.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="text-lg font-semibold text-primary mb-3">
                            {section.subtitle}
                          </h4>
                          <ul className="space-y-2">
                            {section.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span className="text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {CONCEPTUAL_MODEL_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}