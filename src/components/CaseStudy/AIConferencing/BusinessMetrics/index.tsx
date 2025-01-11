import React from 'react';
import { TrendingUp, BarChart } from 'lucide-react';

const metrics = [
  {
    title: "Cost Savings",
    value: "70-76%",
    description: "across industries"
  },
  {
    title: "Growth in AI Jobs",
    value: "3.4x",
    description: "with 96% GPU utilization"
  },
  {
    title: "User Scalability",
    value: "4x",
    description: "while reducing costs by 68%"
  },
  {
    title: "Diagnostic Efficiency",
    value: "76%",
    description: "cost savings with 89% GPU utilization"
  }
];

export default function BusinessMetrics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <TrendingUp className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Business Outcome Metrics</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold mb-2">{metric.title}</h3>
              <p className="text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}