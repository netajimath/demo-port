import React from 'react';
import { Shield, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Safety & Security",
    description: "24/7 emergency assistance and health monitoring for peace of mind",
    points: [
      "Emergency alert system",
      "Health monitoring integration",
      "Location tracking",
      "Secure data protection"
    ]
  },
  {
    icon: Heart,
    title: "Social Connection",
    description: "Platform for connecting with family, friends, and community members",
    points: [
      "Video calling",
      "Event planning",
      "Community groups",
      "Activity sharing"
    ]
  },
  {
    icon: Users,
    title: "Support Network",
    description: "Access to verified volunteers and support services in your area",
    points: [
      "Verified caregivers",
      "Transportation services",
      "Home maintenance help",
      "Medical assistance"
    ]
  }
];

export default function Solution() {
  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Solution</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="border border-purple-700 rounded-lg p-6 hover:border-purple-500 transition-colors">
                <Icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-purple-200 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span className="text-purple-100">{point}</span>
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