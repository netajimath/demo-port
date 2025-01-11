import React from 'react';
import { Users, ClipboardList, Target } from 'lucide-react';

const phases = [
  {
    icon: ClipboardList,
    title: "Research Synthesis",
    description: "Consolidated findings from user research to identify key patterns and needs"
  },
  {
    icon: Users,
    title: "Collaborative Ideation",
    description: "Cross-functional team workshops to generate innovative solutions"
  },
  {
    icon: Target,
    title: "Feature Prioritization",
    description: "Strategic planning to determine core features and development roadmap"
  }
];

const outcomes = [
  {
    title: "User Understanding",
    items: [
      "Detailed user personas",
      "Journey maps",
      "Pain point analysis",
      "Opportunity areas"
    ]
  },
  {
    title: "Solution Framework",
    items: [
      "Feature requirements",
      "Technical considerations",
      "Integration points",
      "Success metrics"
    ]
  },
  {
    title: "Implementation Plan",
    items: [
      "Development roadmap",
      "Resource allocation",
      "Timeline estimates",
      "Risk assessment"
    ]
  }
];

export default function Workshop() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Users className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">Workshop & Collaboration</h2>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              );
            })}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">Workshop Outcomes</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-4">{outcome.title}</h4>
                  <ul className="space-y-2">
                    {outcome.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-purple-600">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}