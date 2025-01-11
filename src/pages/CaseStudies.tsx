import React, { useState, useEffect } from 'react';
import { useProgressiveLoading } from '../hooks/useProgressiveLoading';
import { CaseStudyComponents } from '../components/CaseStudies/config';
import Footer from '../components/Footer';

export default function CaseStudies() {
  const { loadedComponents } = useProgressiveLoading(CaseStudyComponents.length);

  return (
    <div className="min-h-screen bg-white pt-16">
      {CaseStudyComponents.map((Component, index) => (
        loadedComponents.includes(index) && <Component key={index} />
      ))}
      <Footer />
    </div>
  );
}