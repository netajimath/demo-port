import React from 'react';
import { ClipboardCheck, BarChart } from 'lucide-react';

const metrics = [
  { label: "Task Completion Rate", value: "92%" },
  { label: "User Satisfaction", value: "4.6/5" },
  { label: "Time on Task", value: "-35%" },
  { label: "Error Rate", value: "2.1%" }
];

const findings = [
  "Intuitive navigation and clear information hierarchy",
  "High engagement with social features",
  "Positive response to emergency assistance features",
  "Some users needed help with initial setup",
  "Request for more customization options",
  "Strong appreciation for voice commands"
];

export default function UsabilityTesting() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <ClipboardCheck className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Usability Testing</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Summary */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Testing Approach</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span className="text-gray-700">Conducted usability tests with 8 data scientists and 4 administrators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1.5">•</span>
                <span className="text-gray-700">Used task completion scenarios to validate core functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1.5">•</span>
                <span className="text-gray-700">Gathered feedback through think-aloud protocols</span>
              </li>
            </ul>
          </div>

          {/* Statistics */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <BarChart className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold">Key Metrics</h3>
            </div>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{metric.label}</span>
                  <div className="w-24 text-right">
                    <span className="text-xl font-semibold text-blue-600">{metric.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Key Findings</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {findings.map((finding, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-700">{finding}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}