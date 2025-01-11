import React from 'react';
import { useParallax } from '../../../hooks/useParallax';

export default function Header() {
  const { getParallaxStyle } = useParallax();

  return (
      <section className="relative bg-gradient-to-r from-purple-900 to-purple-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">AGIO</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
            A Revolutionary App for Enhancing Social and Lifestyle 
Independence for Senior Citizens

A Marketplace Connecting Seniors 
with Communities:
Seniors to Seniors | Families | Adults | Care Givers | Support and Services            </p>
            
          </div>
          <div className="relative">
            <img 
              src="/images/agio/Agio -Header image-2.png"
              alt="Netaji"
            />
          </div>
        </div>
      </div>
    </section>  
  );
}