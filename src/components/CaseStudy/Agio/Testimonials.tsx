import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    quote: "AGIO has made it so much easier to stay connected with my family and get help when I need it.",
    author: "Margaret L.",
    role: "User, Age 75",
    image: "https://images.unsplash.com/photo-1581579438747-99a52d7e2a51?auto=format&fit=crop&q=80&w=500"
  },
  {
    quote: "As a caregiver, this app has streamlined how I coordinate care and communicate with families.",
    author: "David Chen",
    role: "Professional Caregiver",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500"
  },
  {
    quote: "The emergency response feature gives me peace of mind knowing help is just a button away.",
    author: "Robert W.",
    role: "User, Age 68",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=500"
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <MessageCircle className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">Testimonials</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-300 ease-in-out flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xl text-gray-700 mb-6">"{testimonial.quote}"</p>
                        <div>
                          <h3 className="font-semibold text-lg">{testimonial.author}</h3>
                          <p className="text-purple-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            {/*<ChevronLeft className="w-6 h-6 text-gray-600" />*/}
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            {/*<ChevronRight className="w-6 h-6 text-gray-600" />*/}
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
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