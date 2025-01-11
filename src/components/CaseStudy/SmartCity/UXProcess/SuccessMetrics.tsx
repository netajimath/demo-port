import React from 'react';
import { BarChart, Clock, Users, Shield } from 'lucide-react';

const metrics = [
  {
    icon: BarChart,
    title: "Energy Consumption",
    target: "50% Reduction",
    details: "Through smart monitoring and automated controls"
  },
  {
    icon: Clock,
    title: "Maintenance Downtime",
    target: "40% Decrease",
    details: "Via predictive maintenance and quick response"
  },
  {
    icon: Users,
    title: "Citizen Features",
    target: "High Adoption",
    details: "Of reporting and feedback mechanisms"
  },
  {
    icon: Shield,
    title: "Safety Features",
    target: "100% Integration",
    details: "Of accident detection and monitoring systems"
  }
];

export default function SuccessMetrics() {
  return (
    <div className="space-y-8">
      <div className="bg-primary/5 p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Success Metrics</h4>
        <p className="text-gray-700">
          Quantifiable measures to track the effectiveness and impact of the smart street
          lighting system implementation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold">{metric.title}</h4>
              </div>
              <div className="text-2xl font-bold text-primary mb-2">
                {metric.target}
              </div>
              <p className="text-gray-600 text-sm">{metric.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}