import React from 'react';
import { useParallax } from '../../../hooks/useParallax';

export default function Header() {
  const { getParallaxStyle } = useParallax();

  return (
    <section className="relative bg-gradient-to-r from-gray-600 to-gray-800 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-6">MVP-Rapt AI</h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
          AI-powered compute automation platform for efficient ML workload management           </p>
          
        </div>
        <div className="relative">
          <img 
            src="/images/RaptAI/Rapt-AI.png"
            alt="Netaji"
          />
        </div>
      </div>
    </div>
  </section> 
  );
}