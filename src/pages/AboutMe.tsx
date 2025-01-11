import React, { useState, useEffect } from 'react';
import { useProgressiveLoading } from '../hooks/useProgressiveLoading';
import { AboutComponents } from '../components/AboutMe/config';
import Footer from '../components/Footer';

export default function AboutMe() {
  const { loadedComponents } = useProgressiveLoading(AboutComponents.length);

  return (
    <div className="min-h-screen bg-white pt-16">
      {AboutComponents.map((Component, index) => (
        loadedComponents.includes(index) && <Component key={index} />
      ))}
      <Footer />
    </div>
  );
}