import React from 'react';
import { Lightbulb } from 'lucide-react';
import ResearchMethod from './ResearchMethod';
import UserGroups from './UserGroups';
import DataCollection from './DataCollection';
import ContextualInquiry from './ContextualInquiry';
import SynthesizeInsights from './SynthesizeInsights';
import ProjectVision from './ProjectVision';
import SuccessMetrics from './SuccessMetrics';
import KeyFeatures from './KeyFeatures';
import Deliverables from './Deliverables';
import UXUIOutcomes from './UXUIOutcomes';

export default function UXProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Lightbulb className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">UX/UI Outcomes</h2>
        </div>

        <div className="space-y-20">
          {/* Previous sections remain unchanged */}
          
          <div>
            <UXUIOutcomes />
          </div>
        </div>
      </div>
    </section>
  );
}