import React from 'react';
import { Palette } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

export default function HiFi() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Palette className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold">Hi-Fi Design</h2>
        </div>
        
        <div className="mb-8">
          <p className="text-lg text-gray-600 max-w-3xl">
            The final high-fidelity designs focus on creating an intuitive and efficient interface 
            for managing ML workloads, with emphasis on real-time monitoring, resource optimization, 
            and seamless cloud integration.
          </p>
        </div>

        <ImageCarousel />
      </div>
    </section>
  );
}