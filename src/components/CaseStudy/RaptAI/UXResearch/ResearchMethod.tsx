import React from 'react';
import { Users, Search, Eye, LineChart } from 'lucide-react';

const methods = [
  {
    icon: Users,
    title: "Stakeholder Interviews",
    participants: ["Product Manager", "Business Team", "Sales Team", "Engineering Team"]
  },
  {
    icon: Search,
    title: "User Research",
    participants: ["15 Data Scientists", "8 ML Administrators"]
  },
  {
    icon: Eye,
    title: "Observation",
    participants: ["Shadowed 5 Data Scientists", "Documented Daily Workflows"]
  },
  {
    icon: LineChart,
    title: "Analysis",
    participants: ["Journey Mapping", "Competitive Analysis", "Platform Evaluation"]
  }
];

export default function ResearchMethod() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {methods.map((method, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <method.icon className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
          <ul className="space-y-2">
            {method.participants.map((participant, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span className="text-gray-600">{participant}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}