import React from 'react';
import { Beaker } from 'lucide-react';
import TestingSummary from './TestingSummary';
import IterationCard from './IterationCard';
import MetricsCard from './MetricsCard';

const iterations = [
  {
    title: "Infrastructure Setup",
    stages: {
      initial: "Required minimal configuration inputs",
      feedback: "Even basic configuration was seen as overhead",
      iteration: "Moved to zero-configuration approach with override options"
    }
  },
  {
    title: "Resource Monitoring",
    stages: {
      initial: "Detailed technical metrics",
      feedback: "Information overload for daily use",
      iteration: "Simplified dashboard with progressive disclosure"
    }
  },
  {
    title: "Alert System",
    stages: {
      initial: "Standard notification system",
      feedback: "Need for more proactive insights",
      iteration: "Added predictive alerts and automated optimization suggestions"
    }
  }
];

const metrics = {
  dataScientist: [
    { label: "Setup time reduction", value: "90%" },
    { label: "Failed model runs decrease", value: "70%" },
    { label: "Model deployment frequency increase", value: "4x" }
  ],
  administrator: [
    { label: "Resource management time reduction", value: "85%" },
    { label: "GPU utilization improvement", value: "60%" },
    { label: "Support tickets decrease", value: "40%" }
  ]
};

export default function UsabilityTesting() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Beaker className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold">Usability Testing & Iteration</h2>
        </div>

        <TestingSummary />

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Key Findings & Iterations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {iterations.map((iteration, index) => (
              <IterationCard key={index} {...iteration} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Key Metrics After MVP Launch</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <MetricsCard 
              title="Data Scientist Experience" 
              metrics={metrics.dataScientist} 
            />
            <MetricsCard 
              title="Administrator Experience" 
              metrics={metrics.administrator} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}