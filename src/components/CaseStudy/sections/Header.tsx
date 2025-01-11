import React from 'react';
import { useParallax } from '../../../hooks/useParallax';

export default function Header() {
  const { getParallaxStyle } = useParallax();

  return (
    <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
          alt="Senior using technology"
          className="w-full h-full object-cover"
          style={getParallaxStyle(0.5)}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div 
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
        style={getParallaxStyle(-0.2)}
      >
        <h1 className="text-7xl font-bold mb-6 animate-slide-up opacity-0">AGIO</h1>
        <p className="text-3xl text-gray-200 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
          Connecting Elders EMOTIONALLY with the world
        </p>
      </div>
    </header>
  );
}