import React from 'react';
import { CheckCircle } from 'lucide-react';

const needs = [
  "To improve delivery accuracy to 99%.",
  "Quick adoption of technology from the team.",
  "Improve process and productivity through automation.",
  "Need a standard process for communication when product objectives shift, this would help sync with team members.",
  "Need a history of how accurately the team estimated their capacity, and this helps to predict future deliveries."
];

export default function NeedsList() {
  return (
    <div className="space-y-3">
      {needs.map((need, index) => (
        <div key={index} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
          <p className="text-gray-700">{need}</p>
        </div>
      ))}
    </div>
  );
}