import React from 'react';
import { Activity, AlertTriangle, Users, Cpu, Link, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Activity,
    title: "Lifecycle Monitoring",
    description: "Real-time tracking and maintenance of lighting equipment",
    items: [
      "Real-time tracking of equipment lifecycle",
      "Actionable notifications for low-quality or malfunctioning equipment",
      "Proactive maintenance scheduling",
      "Equipment performance analytics"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description: "Automated assignment and escalation of issues",
    items: [
      "Automated assignment to nearest available personnel",
      "Instant incident notifications",
      "Escalation protocol for delayed resolutions",
      "Real-time status tracking"
    ]
  },
  {
    icon: Link,
    title: "Integration with Departments",
    description: "Unified platform for interdepartmental coordination",
    items: [
      "Connection with police, ambulance, and fire stations",
      "Municipal authority integration",
      "Centralized platform for issue management",
      "Cross-department communication"
    ]
  },
  {
    icon: Shield,
    title: "Advanced Monitoring",
    description: "HD camera surveillance for enhanced safety",
    items: [
      "High-definition surveillance cameras",
      "Accident and theft detection",
      "Fallen tree and fire identification",
      "Damaged road detection"
    ]
  },
  {
    icon: Users,
    title: "User-centric Features",
    description: "Intuitive interface for efficient management",
    items: [
      "User-friendly incident management",
      "Progress tracking capabilities",
      "Clear accountability system",
      "Cross-functional monitoring"
    ]
  },
  {
    icon: Cpu,
    title: "Emergency Handling",
    description: "Quick response system for critical situations",
    items: [
      "Immediate emergency service notifications",
      "Real-time incident status tracking",
      "Automated emergency protocols",
      "Priority-based response system"
    ]
  }
];

export default function KeyFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}