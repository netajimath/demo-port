import React from 'react';
import { Target } from 'lucide-react';

export default function Objective() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Target className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Objective</h2>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            To design and develop a Smart City Street Light Control system that enhances energy 
            efficiency, reduces maintenance costs, and provides real-time monitoring and control 
            of streetlights to ensure safety, convenience, and cost savings for city 
            administrations and citizens.
          </p>
        </div>
      </div>
    </section>
  );
}