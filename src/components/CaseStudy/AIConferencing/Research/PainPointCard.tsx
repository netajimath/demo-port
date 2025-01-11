import React from 'react';
import { AlertCircle } from 'lucide-react';

interface PainPointProps {
  percentage: number;
  description: string;
}

export default function PainPointCard({ percentage, description }: PainPointProps) {
  return (
    <div className="flex items-start gap-4 bg-red-50 p-6 rounded-lg">
      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
      <div>
        <div className="text-2xl font-bold text-red-600 mb-2">{percentage}%</div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}