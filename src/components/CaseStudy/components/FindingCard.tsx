import React from 'react';
import type { FindingCategory } from '../types';

interface FindingCardProps {
  category: FindingCategory;
}

export default function FindingCard({ category }: FindingCardProps) {
  const { icon: Icon, title, findings } = category;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {findings.map((finding, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="text-primary mt-1.5">•</span>
            <span>{finding}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}