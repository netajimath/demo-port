import React from 'react';
import { useParallax } from '../../../hooks/useParallax';

export default function Header() {
  const { getParallaxStyle } = useParallax();

  return (
    <section className="relative bg-gradient-to-r from-gray-700 to-gray-700 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">Smart City Street Light Control</h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
          IoT-based monitoring and control system for optimal energy efficiency         </p>
          
        </div>
        <div className="relative">
          <img 
            src="/images/SmartCity/header-smartcity-street-light-control.png"
            alt="Netaji"
          />
        </div>
      </div>
    </div>
  </section> 
  );
}