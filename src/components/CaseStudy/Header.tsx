import React from 'react';

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?auto=format&fit=crop&q=80&w=2070"
          alt="Senior using technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Empowering Seniors Through Technology
        </h1>
        <p className="text-xl md:text-2xl text-gray-200">
          Creating digital solutions for better social and lifestyle independence
        </p>
      </div>
    </header>
  );
}