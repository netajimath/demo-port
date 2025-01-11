import React from 'react';
import { Search } from 'lucide-react';
import ResearchMethod from './ResearchMethod';

export default function UXResearch() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Search className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">UX Research</h2>
        </div>
        <ResearchMethod />
      </div>
    </section>
  );
}