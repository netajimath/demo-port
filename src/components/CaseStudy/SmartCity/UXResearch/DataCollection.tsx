import React from 'react';
import { FileSpreadsheet, Database, AlertCircle } from 'lucide-react';

const dataSources = [
  {
    icon: FileSpreadsheet,
    title: "Fault and Maintenance Records",
    description: "Identify common faults and their resolution times",
    metrics: [
      "Average response time to faults",
      "Most common types of failures",
      "Maintenance frequency patterns",
      "Resolution time statistics"
    ]
  },
  {
    icon: Database,
    title: "Energy Usage Statistics",
    description: "Assess the impact of dimming and energy-saving policies",
    metrics: [
      "Peak consumption periods",
      "Energy savings from dimming",
      "Cost analysis by zone",
      "Usage patterns by time"
    ]
  },
  {
    icon: AlertCircle,
    title: "Incident Reports",
    description: "Analyze issues detected by IoT cameras",
    metrics: [
      "Theft attempts and patterns",
      "Accident-prone areas",
      "Infrastructure damage reports",
      "Emergency response times"
    ]
  }
];

export default function DataCollection() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Data Collection</h3>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <p className="text-gray-700">
          We gathered quantitative and qualitative data to inform design decisions and validate 
          proposed solutions through comprehensive analysis of existing systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {dataSources.map((source, index) => {
          const Icon = source.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">{source.title}</h4>
              </div>
              <p className="text-gray-600 mb-4">{source.description}</p>
              <ul className="space-y-2">
                {source.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-gray-600">{metric}</span>
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