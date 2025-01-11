import React from 'react';
import { BarChart2, Users2, AlertTriangle, Lightbulb } from 'lucide-react';

const findings = [
  {
    icon: BarChart2,
    title: "Energy Usage",
    points: [
      "High energy consumption in traditional lighting",
      "Significant cost impact on city budgets",
      "Peak load management challenges"
    ]
  },
  {
    icon: Users2,
    title: "User Needs",
    points: [
      "Real-time monitoring requirements",
      "Remote control capabilities",
      "Maintenance workflow optimization"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Pain Points",
    points: [
      "Delayed fault detection and response",
      "Manual intervention requirements",
      "Limited visibility into system status"
    ]
  },
  {
    icon: Lightbulb,
    title: "Opportunities",
    points: [
      "IoT integration for automation",
      "Smart scheduling possibilities",
      "Predictive maintenance potential"
    ]
  }
];

export default function Analysis() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {findings.map((finding, index) => {
        const Icon = finding.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-semibold">{finding.title}</h4>
            </div>
            <ul className="space-y-2">
              {finding.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}