import React from 'react';
import { LineChart, Clock, Heart, Shield } from 'lucide-react';

const goals = [
  {
    icon: LineChart,
    title: "Energy Efficiency",
    description: "50% reduction in energy costs through smart monitoring and controls"
  },
  {
    icon: Clock,
    title: "Real-time Monitoring",
    description: "Instant fault detection and status monitoring across the lighting network"
  },
  {
    icon: Heart,
    title: "Citizen Satisfaction",
    description: "Improved safety and reliability through consistent lighting"
  },
  {
    icon: Shield,
    title: "Safety Integration",
    description: "Enhanced security with cameras for accident detection and monitoring"
  }
];

export default function Goals() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {goals.map((goal, index) => {
        const Icon = goal.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
            <p className="text-gray-600">{goal.description}</p>
          </div>
        );
      })}
    </div>
  );
}