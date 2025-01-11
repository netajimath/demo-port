import React from 'react';

interface MetricProps {
  value: string;
  label: string;
}

export default function MetricsCard({ title, metrics }: { title: string; metrics: MetricProps[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-600">{metric.label}</span>
            <span className="text-2xl font-bold text-indigo-600">{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}