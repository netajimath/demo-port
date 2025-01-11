import React from 'react';
import { Users, Search } from 'lucide-react';

const methods = [
  {
    icon: Users,
    title: "Stakeholder Interviews",
    items: [
      "Gather insights from city administrators",
      "Interview municipal staff",
      "Collect feedback from citizens",
      "Document pain points like faulty lights",
      "Analyze electricity theft concerns",
      "Study inefficient maintenance processes"
    ]
  },
  {
    icon: Search,
    title: "Secondary Research",
    items: [
      "Analyze existing research data",
      "Study high energy demand (3,400 MW)",
      "Research potential savings through LED integration",
      "Investigate IoT implementation benefits",
      "Review existing smart city solutions",
      "Examine maintenance cost data"
    ]
  }
];

export default function UnderstandProblem() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Understand the Problem</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700">
          Our objective was to identify the challenges faced by users (administrators, maintenance teams, citizens) 
          with existing street lighting systems through comprehensive research methods.
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
              <ul className="space-y-2">
                {method.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-gray-600">{item}</span>
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