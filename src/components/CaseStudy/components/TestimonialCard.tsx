import React from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 relative">
      <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/10" />
      <div className="relative">
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          "{testimonial.quote}"
        </p>
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-lg">{testimonial.author}</h4>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}