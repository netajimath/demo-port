import React from 'react';
import { Activity, AlertTriangle, Users, Cpu, Link, Shield } from 'lucide-react';

const features = [
  {
    icon: Activity,
    title: "Lifecycle Monitoring",
    description: "Real-time tracking of equipment lifecycle and maintenance",
    items: [
      "IoT system tracks lifecycle of all equipment",
      "Actionable notifications for malfunctioning equipment",
      "Proactive maintenance scheduling",
      "Performance analytics and reporting"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description: "Automated assignment and incident handling system",
    items: [
      "Automated assignment to nearest personnel",
      "Instant incident notifications",
      "Escalation protocol for delays",
      "Real-time status tracking"
    ]
  },
  {
    icon: Link,
    title: "Department Integration",
    description: "Unified platform for interdepartmental coordination",
    items: [
      "Integration with emergency services",
      "Municipal authority coordination",
      "Centralized issue management",
      "Cross-department communication"
    ]
  },
  {
    icon: Shield,
    title: "Advanced Monitoring",
    description: "HD camera surveillance for enhanced safety",
    items: [
      "High-definition surveillance",
      "Accident and theft detection",
      "Environmental monitoring",
      "Infrastructure damage detection"
    ]
  },
  {
    icon: Users,
    title: "User-centric Features",
    description: "Intuitive interface for efficient management",
    items: [
      "User-friendly incident tracking",
      "Clear progress monitoring",
      "Accountability system",
      "Cross-functional insights"
    ]
  },
  {
    icon: Cpu,
    title: "Emergency Response",
    description: "Rapid response system for critical situations",
    items: [
      "Immediate emergency notifications",
      "Real-time incident tracking",
      "Automated response protocols",
      "Priority-based handling"
    ]
  }
];

export default function KeyFeatures() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Icon className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-semibold">{feature.title}</h4>
            </div>
            <p className="text-gray-600 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.items.map((item, idx) => (
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
  );
}