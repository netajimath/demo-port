import React from 'react';
import { Users, Search } from 'lucide-react';

interface MethodProps {
  title: string;
  items: string[];
  icon: typeof Users;
}

function Method({ title, items, icon: Icon }: MethodProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResearchMethod() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Method
        icon={Users}
        title="Stakeholder Interviews"
        items={[
          "Gather insights from city administrators",
          "Interview municipal staff",
          "Collect feedback from citizens",
          "Understand pain points like faulty lights",
          "Document electricity theft concerns",
          "Analyze inefficient maintenance processes"
        ]}
      />
      <Method
        icon={Search}
        title="Secondary Research"
        items={[
          "Analyze existing research data",
          "Study high energy demand (3,400 MW)",
          "Research potential savings through LED integration",
          "Investigate IoT implementation benefits",
          "Review existing smart city solutions",
          "Examine maintenance cost data"
        ]}
      />
    </div>
  );
}