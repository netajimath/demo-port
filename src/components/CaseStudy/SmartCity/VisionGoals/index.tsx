import React from 'react';
import Vision from './Vision';
import Goals from './Goals';
import SuccessMetrics from './SuccessMetrics';

export default function VisionGoals() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-16">
          <Vision />
          <Goals />
          <SuccessMetrics />
        </div>
      </div>
    </section>
  );
}