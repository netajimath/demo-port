import React from 'react';
import { BarChart } from 'lucide-react';

const metrics = [
  {
    title: "Energy Consumption",
    target: "50%",
    description: "Reduction in energy consumption through smart controls and LED integration"
  },
  {
    title: "Maintenance Downtime",
    target: "40%",
    description: "Decrease in maintenance downtime through predictive maintenance"
  },
  {
    title: "Citizen Features",
    target: "High",
    description: "Adoption rates of citizen-facing features for reporting and feedback"
  },
  {
    title: "Safety Features",
    target: "100%",
    description: "Integration of safety-enhancing features including accident detection"
  }
];

export default function SuccessMetrics() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <BarChart className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold">Measures of Success</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">{metric.target}</div>
            <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
            <p className="text-gray-600">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}