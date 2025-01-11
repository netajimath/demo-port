import React from 'react';
import { LineChart, Wrench, Bell } from 'lucide-react';

const insights = [
  {
    icon: LineChart,
    title: "City Administrators",
    description: "Need a centralized, easy-to-use dashboard with GIS mapping for real-time monitoring",
    details: [
      "Interactive GIS mapping interface",
      "Real-time status monitoring",
      "Customizable analytics dashboard",
      "Resource allocation tools"
    ]
  },
  {
    icon: Wrench,
    title: "Maintenance Teams",
    description: "Require automated assignment systems and escalations to reduce downtime",
    details: [
      "Automated task assignment",
      "Priority-based escalations",
      "Mobile-friendly interface",
      "Real-time status updates"
    ]
  },
  {
    icon: Bell,
    title: "Citizens",
    description: "Value quick responses to complaints and safety enhancements like high-definition cameras for monitoring",
    details: [
      "Efficient complaint management",
      "Safety monitoring systems",
      "Quick response mechanisms",
      "Public feedback channels"
    ]
  }
];

export default function SynthesizeInsights() {
  return (
    <div className="space-y-8">
      <div className="bg-primary/5 p-6 rounded-lg">
        <h4 className="text-xl font-semibold mb-3">Objective</h4>
        <p className="text-gray-700">
          Organize and analyze collected data to identify patterns and opportunities for improving
          the street lighting management system across all user groups.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">{insight.title}</h4>
              </div>
              <p className="text-gray-600 mb-4">{insight.description}</p>
              <ul className="space-y-2">
                {insight.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-gray-600">{detail}</span>
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