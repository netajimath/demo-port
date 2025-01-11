import React from 'react';
import { Eye, TestTube } from 'lucide-react';

const methods = [
  {
    icon: Eye,
    title: "Field Studies",
    description: "Observe how personnel and administrators currently manage street lighting systems",
    observations: [
      "Control room operations and monitoring",
      "Maintenance team workflows",
      "Emergency response procedures",
      "Communication patterns between teams",
      "Current tools and technologies in use"
    ]
  },
  {
    icon: TestTube,
    title: "Usability Testing",
    description: "Test prototypes with users in controlled environments",
    observations: [
      "Dashboard navigation and controls",
      "Mobile app functionality",
      "Alert management workflows",
      "Report generation and analysis",
      "System configuration tasks"
    ]
  }
];

export default function ContextualInquiry() {
  return (
    <div className="space-y-8">
      <div className="bg-primary/5 p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Objective</h4>
        <p className="text-gray-700">
          Observe real-world scenarios where IoT-enabled systems interact with users to understand 
          practical challenges, workflows, and opportunities for improvement in the street lighting 
          management system.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {methods.map((method, index) => {
          const Icon = method.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">{method.title}</h4>
              </div>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <ul className="space-y-2">
                {method.observations.map((observation, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-gray-600">{observation}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}