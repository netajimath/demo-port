import React from 'react';
import { useParallax } from '../../hooks/useParallax';

export default function Hero() {
  const { getParallaxStyle } = useParallax();

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <div className="w-full">
          <img 
            src="/images/casestudies/6-Case-studies-header.jpg"
            alt="UX/UI Design Background"
            className="w-full h-full object-cover"
          />
         {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80"></div>*/}
        </div>
      </div>
      <div 
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up opacity-0">
        Bridging Business, Product, Users, Customers and Innovation with Empathy and Impact
        </h1>
        
      </div>
    </section>
  );
}