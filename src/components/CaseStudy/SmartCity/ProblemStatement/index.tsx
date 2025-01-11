import React from 'react';
import { AlertTriangle } from 'lucide-react';
import ProblemCard from './ProblemCard';

const problems = [
  {
    title: "Energy Inefficiency",
    description: "High energy consumption due to outdated lighting technology."
  },
  {
    title: "Maintenance Issues",
    description: "No real-time fault detection or monitoring leading to prolonged outages."
  },
  {
    title: "Electricity Theft",
    description: "Difficulty in tracking energy consumption accurately."
  },
  {
    title: "Unnecessary Usage",
    description: "Lights often remain on during the day, wasting energy."
  }
];

export default function ProblemStatement() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <AlertTriangle className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Problem Statement</h2>
        </div>

        <p className="text-lg text-gray-700 mb-12">
          Street lighting in urban environments faces several critical challenges 
          that impact efficiency, cost, and safety:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}