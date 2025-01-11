import React from 'react';
import { TrendingUp, Cpu, Clock, Users, LineChart } from 'lucide-react';
import MetricCard from './MetricCard';

const metrics = [
  {
    icon: TrendingUp,
    value: "70-76%",
    description: "Cost savings across industries through optimized resource utilization"
  },
  {
    icon: Cpu,
    value: "3.4x",
    description: "Growth in AI discovery jobs with 96% GPU utilization"
  },
  {
    icon: Clock,
    value: "Real-time",
    description: "Adjustments for SLA compliance and resource optimization"
  },
  {
    icon: Users,
    value: "4x",
    description: "User scalability while reducing costs by 68%"
  },
  {
    icon: LineChart,
    value: "76%",
    description: "Cost savings with improved diagnostic efficiency and 89% GPU utilization"
  }
];

export default function BusinessMetrics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Business Outcome Metrics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}