import React from 'react';
import { LineChart } from 'lucide-react';
import ImageSlider from './ImageSlider';
import Opportunities from './Opportunities';

export default function CompetitorAnalysis() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <LineChart className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Competitor Analysis</h2>
        </div>

        <ImageSlider />
        <Opportunities />
      </div>
    </section>
  );
}