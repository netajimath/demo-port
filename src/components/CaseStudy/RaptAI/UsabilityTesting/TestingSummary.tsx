import React from 'react';
import { ClipboardCheck } from 'lucide-react';

const testingDetails = [
  "Conducted usability tests with 8 data scientists and 4 administrators",
  "Used task completion scenarios to validate core functionality",
  "Gathered feedback through think-aloud protocols"
];

export default function TestingSummary() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
      <div className="flex items-center gap-3 mb-6">
        <ClipboardCheck className="w-6 h-6 text-indigo-600" />
        <h3 className="text-xl font-semibold">Testing Approach</h3>
      </div>
      <ul className="space-y-3">
        {testingDetails.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-indigo-600">•</span>
            <span className="text-gray-700">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}