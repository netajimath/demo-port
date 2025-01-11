import React from 'react';
import { Bell, GitMerge, Link } from 'lucide-react';

const ideas = [
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "Automated alerts for faulty lights or incidents",
    features: [
      "Instant fault detection alerts",
      "Priority-based notification system",
      "Customizable alert preferences",
      "Status update notifications"
    ]
  },
  {
    icon: GitMerge,
    title: "Incident Escalation",
    description: "Ensures timely resolution of issues",
    features: [
      "Automated escalation workflows",
      "SLA-based prioritization",
      "Hierarchical notification system",
      "Resolution tracking"
    ]
  },
  {
    icon: Link,
    title: "Department Integration",
    description: "Connect emergency services and departments",
    features: [
      "Police department integration",
      "Fire service connectivity",
      "Ambulance service alerts",
      "Municipal authority coordination"
    ]
  }
];

export default function IdeationPrototyping() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Ideation and Prototyping</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700">
          Based on our research findings, we developed innovative solutions to address user needs 
          and pain points, focusing on automation and integration.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {ideas.map((idea, index) => {
          const Icon = idea.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">{idea.title}</h4>
              </div>
              <p className="text-gray-600 mb-4">{idea.description}</p>
              <ul className="space-y-2">
                {idea.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-gray-600">{feature}</span>
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