import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const goals = [
  {
    title: "Energy Efficiency",
    description: "50% reduction in energy costs through smart monitoring and controls"
  },
  {
    title: "Real-time Monitoring",
    description: "Instant fault detection and status monitoring across the lighting network"
  },
  {
    title: "Citizen Satisfaction",
    description: "Improved safety and reliability through consistent lighting"
  },
  {
    title: "Safety Integration",
    description: "Enhanced security with cameras for accident detection and monitoring"
  }
];

export default function ProjectVision() {
  return (
    <div className="space-y-8">
      <div className="bg-primary/5 p-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-primary" />
          <h4 className="text-xl font-semibold">Vision</h4>
        </div>
        <p className="text-gray-700">
          To create a scalable, reliable, and user-friendly smart streetlight management system
          that revolutionizes urban lighting infrastructure through IoT technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {goals.map((goal, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold">{goal.title}</h4>
            </div>
            <p className="text-gray-600">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}