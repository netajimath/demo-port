import React from 'react';
import { Users2, Building2, Wrench } from 'lucide-react';

const userGroups = [
  {
    icon: Building2,
    title: "City Administrators",
    responsibilities: [
      "Oversee and monitor lighting system",
      "Review analytics and reports",
      "Allocate resources and budget",
      "Make strategic decisions"
    ]
  },
  {
    icon: Wrench,
    title: "Electric Board Personnel",
    responsibilities: [
      "Respond to incidents",
      "Perform maintenance tasks",
      "Monitor system health",
      "Implement repairs and upgrades"
    ]
  },
  {
    icon: Users2,
    title: "Citizens",
    responsibilities: [
      "Report lighting issues",
      "Benefit from well-lit environments",
      "Provide feedback on system",
      "Navigate safer streets"
    ]
  }
];

export default function UserGroups() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Define User Groups</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700">
          We identified and segmented target users to address their specific needs and ensure 
          the system meets the requirements of all stakeholders involved in the street lighting ecosystem.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {userGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">{group.title}</h4>
              </div>
              <ul className="space-y-2">
                {group.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primarys">•</span>
                    <span className="text-gray-600">{responsibility}</span>
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