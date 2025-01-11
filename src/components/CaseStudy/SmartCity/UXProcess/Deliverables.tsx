import React from 'react';
import { FileText, Layout, PenTool, TestTubes } from 'lucide-react';

const featureMapping = [
  { feature: "Real-time monitoring", priority: "High", status: "Implemented" },
  { feature: "Fault alerts", priority: "High", status: "Implemented" },
  { feature: "Citizen reporting interface", priority: "Medium", status: "Under Testing" },
  { feature: "Energy consumption analytics", priority: "High", status: "Implemented" },
  { feature: "GIS-based map view", priority: "Medium", status: "Implemented" },
  { feature: "Accident detection via cameras", priority: "High", status: "Under Testing" }
];

const deliverablesSections = [
  {
    icon: PenTool,
    title: "Concept Sketches",
    items: [
      "Sketched multiple layouts for dashboards and citizen portals",
      "Refined layouts based on stakeholder reviews"
    ]
  },
  {
    icon: Layout,
    title: "Low-Fidelity Wireframes",
    items: [
      "Developed low-fidelity wireframes for primary workflows (admin and citizen interfaces)"
    ]
  },
  {
    icon: TestTubes,
    title: "Concept Testing",
    items: [
      "Gathered feedback from 20 participants to validate design assumptions",
      "Optimized navigation flow for better usability"
    ]
  }
];

export default function Deliverables() {
  return (
    <div className="space-y-12">
      {/* Feature Mapping */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Feature Mapping</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left">Feature</th>
                <th className="px-6 py-4 text-left">Priority</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {featureMapping.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-6 py-4">{item.feature}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.priority === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      item.status === 'Implemented'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Other Deliverables */}
      <div className="grid md:grid-cols-3 gap-8">
        {deliverablesSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold">{section.title}</h4>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
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