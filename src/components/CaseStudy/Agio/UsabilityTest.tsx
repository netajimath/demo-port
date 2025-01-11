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

export default function UsabilityTest() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <ClipboardCheck className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">Usability Testing</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Key Findings</h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                {findings.map((finding, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}