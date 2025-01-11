import React from 'react';
import { Cpu, Share2, Shield, Clock } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Cpu,
    title: "Automated GPU Optimization",
    description: "AI-driven optimization of GPU workloads for maximum efficiency",
    benefits: [
      "Real-time resource monitoring",
      "Automatic workload balancing",
      "Predictive scaling",
      "Performance optimization"
    ]
  },
  {
    icon: Share2,
    title: "Dynamic GPU Sharing",
    description: "Intelligent GPU resource sharing and fractionalization",
    benefits: [
      "Flexible resource allocation",
      "Multi-tenant support",
      "Memory optimization",
      "Cost reduction"
    ]
  },
  {
    icon: Shield,
    title: "Secure Multi-cloud Deployment",
    description: "Secure deployment across multiple cloud environments",
    benefits: [
      "Hybrid cloud support",
      "Enhanced security controls",
      "Compliance management",
      "Seamless integration"
    ]
  },
  {
    icon: Clock,
    title: "SLA-driven Allocation",
    description: "Resource allocation based on service level agreements",
    benefits: [
      "Priority-based scheduling",
      "Performance guarantees",
      "Resource optimization",
      "Cost management"
    ]
  }
];

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}