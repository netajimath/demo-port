import React from 'react';
import { BarChart, Heart, Shield, Smartphone } from 'lucide-react';

const findings = [
  {
    icon: BarChart,
    title: "Demographics",
    points: [
      "1/3 of adults outside old homes live alone (72% men, 42% women)",
      "Population aged 65+ will rise from 43.1M (2012) to 83.7M (2050)",
      "Global population aged 65+ will increase from 8.5% to 17% by 2050"
    ]
  },
  {
    icon: Heart,
    title: "Social & Emotional",
    points: [
      "Loss of family and social connections",
      "Emotional/psychological isolation",
      "Need for companionship and support",
      "Desire for meaningful interactions"
    ]
  },
  {
    icon: Shield,
    title: "Healthcare & Support",
    points: [
      "Limited access to medical care",
      "Difficulty managing medications",
      "Need for emergency assistance",
      "Challenges with daily activities"
    ]
  },
  {
    icon: Smartphone,
    title: "Technology Usage",
    points: [
      "Growing tech adoption among seniors",
      "Preference for simple interfaces",
      "Need for accessibility features",
      "Interest in digital communication"
    ]
  }
];

export default function Findings() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <BarChart className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">Key Findings</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {findings.map((finding, index) => {
            const Icon = finding.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{finding.title}</h3>
                <ul className="space-y-3">
                  {finding.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}