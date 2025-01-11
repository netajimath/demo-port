import React from 'react';
import { useParallax } from '../../../hooks/useParallax';

export default function Header() {
  const { getParallaxStyle } = useParallax();

  return (
      <section className="relative bg-gradient-to-r from-gray-100 to-gray-300 text-gray overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">AI Based Conferencing App</h1>
            <p className="text-xl text-gray leading-relaxed mb-8">
            Ease of Using Video Conference app on Smart Phone
Enhancing mobile video conferencing with AI-driven solutions screen
            </p>
            
          </div>
          <div className="relative">
            <img 
              src="/images/AIConferencing/header-AI Based Conferencing App-2.png"
              alt="Netaji"
            />
          </div>
        </div>
      </div>
    </section> 
  );
}


