import React from 'react';
import { WorkshopOutcome as WorkshopOutcomeType } from '../types/workshop';

interface WorkshopOutcomeProps {
  outcome: WorkshopOutcomeType;
}

export default function WorkshopOutcome({ outcome }: WorkshopOutcomeProps) {
  const { title, items } = outcome;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}