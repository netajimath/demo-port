import React, { useState } from 'react';
import { Palette, ChevronLeft, ChevronRight } from 'lucide-react';

const DESIGN_SECTIONS = [
  {
    title: "Manual Input Flow",
    description: "Complete manual input interface without voice assistance",
    images: [
      "/images/agio-mockup.png",
      "/images/ai-conferencing-mockup.png"
    ]
  },
  {
    title: "Voice Assist Flow",
    description: "AI-based voice assist to ease user interaction",
    images: [
      "/images/agio-mockup.png",
      "/images/ai-conferencing-mockup.png"
    ]
  },
  {
    title: "Sign Up / Login Flow",
    description: "Streamlined onboarding with social media, SSN, or email authentication",
    images: [
      "/images/agio-mockup.png",
      "/images/ai-conferencing-mockup.png"
    ]
  },
  {
    title: "Core Features",
    description: "Main app screens showing home, connect, chat, notifications, and user details",
    images: [
      "/images/agio-mockup.png",
      "/images/ai-conferencing-mockup.png"
    ]
  }
];

export default function UXUIDesign() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % DESIGN_SECTIONS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + DESIGN_SECTIONS.length) % DESIGN_SECTIONS.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Palette className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">UX/UI Design Outcome</h2>
        </div>

        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-300 ease-in-out flex"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {DESIGN_SECTIONS.map((section, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                    <p className="text-gray-600 mb-8">{section.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {section.images.map((image, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={image}
                        alt={`${section.title} design ${imgIndex + 1}`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous design"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next design"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {DESIGN_SECTIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to design ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}