import React from 'react';

interface ProblemCardProps {
  problem: string;
  index: number;
}

export default function ProblemCard({ problem, index }: ProblemCardProps) {
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
      <span className="text-orange-500 font-semibold">{index + 1}.</span>
      <p className="text-gray-700">{problem}</p>
    </div>
  );
}