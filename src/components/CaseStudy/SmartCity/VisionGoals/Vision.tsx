import React from 'react';
import { Target } from 'lucide-react';

export default function Vision() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Target className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold">Vision and Goals</h2>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Vision</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          To create a scalable, reliable, and user-friendly smart streetlight management system 
          that revolutionizes urban lighting infrastructure through IoT technology.
        </p>
      </div>
    </div>
  );
}