import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ProcessStep } from '../components';

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Our Process</h2>
        
        <div className="grid md:grid-cols-4 gap-12 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative">
              <ProcessStep step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}