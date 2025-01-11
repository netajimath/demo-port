import React from 'react';
import { Lightbulb, Users, Building2 } from 'lucide-react';
import SolutionCard from './SolutionCard';

const dataScientistSolutions = [
  {
    icon: Lightbulb,
    title: "One-Click Deployment Interface",
    features: [
      "Simplified model deployment process",
      "Automated infrastructure setup",
      "Built-in optimization recommendations"
    ]
  },
  {
    icon: Users,
    title: "Resource Monitor Dashboard",
    features: [
      "Real-time GPU utilization visualization",
      "Model performance metrics",
      "Automated alerts for potential issues"
    ]
  },
  {
    icon: Building2,
    title: "Workflow Integration",
    features: [
      "Native integration with popular notebooks",
      "Seamless connection to existing DSML platforms",
      "Automatic code optimization suggestions"
    ]
  }
];

const adminSolutions = [
  {
    icon: Lightbulb,
    title: "Central Control Panel",
    features: [
      "Multi-cloud resource management",
      "Team-wide resource allocation",
      "Cost optimization tools"
    ]
  },
  {
    icon: Users,
    title: "Analytics Dashboard",
    features: [
      "Resource utilization trends",
      "Cost analysis and projections",
      "Team performance metrics"
    ]
  },
  {
    icon: Building2,
    title: "Security Management",
    features: [
      "Role-based access control",
      "Compliance monitoring",
      "Audit logs"
    ]
  }
];

export default function Solutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Solutions</h2>
        
        <div className="space-y-16">
          {/* Data Scientists Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold">For Data Scientists</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {dataScientistSolutions.map((solution, index) => (
                <SolutionCard key={index} {...solution} />
              ))}
            </div>
          </div>

          {/* Admin Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold">For Administrators</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {adminSolutions.map((solution, index) => (
                <SolutionCard key={index} {...solution} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}