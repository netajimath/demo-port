import React from 'react';
import { caseStudies } from './data/caseStudies';
import CaseStudyCard from './CaseStudyCard';

export default function CaseStudyGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in">CASE STUDIES</h2>
        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              {...study}
              className={index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}