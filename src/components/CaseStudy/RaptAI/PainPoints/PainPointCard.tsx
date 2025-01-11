import React from 'react';
import { AlertCircle } from 'lucide-react';

interface PainPointCardProps {
  point: string;
  index: number;
}

export default function PainPointCard({ point, index }: PainPointCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-red-600 font-semibold">{index + 1}</span>
        </div>
        <p className="text-gray-700">{point}</p>
      </div>
    </div>
  );
}