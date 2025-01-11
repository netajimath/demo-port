import React from 'react';
import { Users, Building2 } from 'lucide-react';
import PainPointCard from './PainPointCard';

const dataScientistPainPoints = [
  "Spent 30-45 minutes on average configuring infrastructure for each model run",
  "Frequently encountered OOM (Out of Memory) errors requiring manual debugging",
  "Struggled with GPU resource availability and allocation",
  "Needed constant monitoring of running models",
  "Lost productive time waiting for infrastructure setup"
];

const adminPainPoints = [
  "Difficulty in managing GPU resource allocation across teams",
  "Lack of visibility into resource utilization",
  "Complex multi-cloud management",
  "Challenge in maintaining cost efficiency",
  "Security and compliance concerns across different environments"
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Pain Points Analysis</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Data Scientists */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold">Data Scientists</h3>
            </div>
            <div className="space-y-4">
              {dataScientistPainPoints.map((point, index) => (
                <PainPointCard key={index} point={point} index={index} />
              ))}
            </div>
          </div>

          {/* Administrators */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold">Administrators</h3>
            </div>
            <div className="space-y-4">
              {adminPainPoints.map((point, index) => (
                <PainPointCard key={index} point={point} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}