import React from 'react';
import { Users } from 'lucide-react';
import { WORKSHOP_PHASES, WORKSHOP_OUTCOMES } from './constants/workshop';
import WorkshopPhase from './components/WorkshopPhase';
import WorkshopOutcome from './components/WorkshopOutcome';

export default function Workshop() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Users className="w-8 h-8 text-orange-500" />
          <h2 className="text-3xl font-bold">Workshop & Collaboration</h2>
        </div>

        <div className="space-y-16">
          {/* Workshop Phases */}
          <div className="grid md:grid-cols-3 gap-8">
            {WORKSHOP_PHASES.map((phase, index) => (
              <WorkshopPhase key={index} phase={phase} />
            ))}
          </div>

          {/* Workshop Outcomes */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Workshop Outcomes</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {WORKSHOP_OUTCOMES.map((outcome, index) => (
                <WorkshopOutcome key={index} outcome={outcome} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}