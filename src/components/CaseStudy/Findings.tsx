import React from 'react';
import { BarChart } from 'lucide-react';
import { FINDINGS_CATEGORIES } from './constants/findings';
import { FindingCard } from './components';

export default function Findings() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <BarChart className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-bold">Key Findings</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FINDINGS_CATEGORIES.map((category, index) => (
            <FindingCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}