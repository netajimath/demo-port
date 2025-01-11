import React from 'react';
import { AlertCircle } from 'lucide-react';
import { PROBLEMS } from './constants';
import ProblemCard from './components/ProblemCard';
import KeyInsights from './components/KeyInsights';

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <AlertCircle className="text-orange-500 w-8 h-8" />
          <h2 className="text-3xl font-bold">Problem Statement</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {PROBLEMS.map((problem, index) => (
              <ProblemCard key={index} problem={problem} index={index} />
            ))}
          </div>
          <KeyInsights />
        </div>
      </div>
    </section>
  );
}