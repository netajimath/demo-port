import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  description: string;
}

export default function MetricCard({ icon: Icon, value, description }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}