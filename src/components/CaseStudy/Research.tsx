import React from 'react';
import StatCard from './components/StatCard';
import { RESEARCH_DATA } from './constants';

export default function Research() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Research Methods</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {RESEARCH_DATA.map((item, index) => (
            <StatCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}