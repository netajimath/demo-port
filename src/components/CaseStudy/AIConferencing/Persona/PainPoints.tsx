import React from 'react';
import { XCircle } from 'lucide-react';

const painPoints = [
  "Difficult coordinating team/client meetings due to time zone difference.",
  "Unsure about how productive remote team members are since their availability is often unknown.",
  "It's always challenging to give clients a reasonable timeframe that is not off-base since a cycle is often unpredictable.",
  "It's always challenging to explain why specific features/deliverables have been delayed/deprioritized.",
  "There are too many tools that forces me to spend time."
];

export default function PainPoints() {
  return (
    <div className="space-y-3">
      {painPoints.map((point, index) => (
        <div key={index} className="flex items-start gap-3">
          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
          <p className="text-gray-700">{point}</p>
        </div>
      ))}
    </div>
  );
}