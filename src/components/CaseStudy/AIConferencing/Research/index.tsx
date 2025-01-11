import React from 'react';
import { BarChart } from 'lucide-react';
import StatCard from './StatCard';
import PainPointCard from './PainPointCard';
import DeviceUsage from './DeviceUsage';

const usageStats = [
  { percentage: 66, description: "Use video conferencing outside the workplace" },
  { percentage: 33, description: "Use video conferencing from co-working spaces" },
  { percentage: 21, description: "Participate in video calls while on vacation or from bedroom" },
  { percentage: 14, description: "Join calls from airports" },
  { percentage: 11, description: "Attend calls while driving" },
  { percentage: 3, description: "Reported joining calls from the restroom" }
];

const painPoints = [
  { percentage: 48, description: "Face technical difficulties" },
  { percentage: 46, description: "Cite poor audio quality as a major issue" },
  { percentage: 41, description: "Find joining processes overly complex" },
  { percentage: 40, description: "Are dissatisfied with video quality" }
];

export default function Research() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <BarChart className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Research, Analysis, and Key Findings</h2>
        </div>

        <div className="space-y-16">
          {/* Usage Statistics */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Usage Statistics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {usageStats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>

          {/* Pain Points */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Key Pain Points</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {painPoints.map((point, index) => (
                <PainPointCard key={index} {...point} />
              ))}
            </div>
          </div>

          {/* Device Usage */}
          <DeviceUsage />
        </div>
      </div>
    </section>
  );
}