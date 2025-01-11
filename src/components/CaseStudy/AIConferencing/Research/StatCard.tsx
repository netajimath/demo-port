import React from 'react';

interface StatCardProps {
  percentage: number;
  description: string;
}

export default function StatCard({ percentage, description }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl font-bold text-blue-600 mb-3">{percentage}%</div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}