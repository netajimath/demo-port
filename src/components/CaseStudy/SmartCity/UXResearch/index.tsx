import React from 'react';
import { Search } from 'lucide-react';
import UnderstandProblem from './UnderstandProblem';
import UserGroups from './UserGroups';
import ContextualInquiry from './ContextualInquiry';
import DataCollection from './DataCollection';
import SynthesizeInsights from './SynthesizeInsights';
import IdeationPrototyping from './IdeationPrototyping';

export default function UXResearch() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Search className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">UX Research Process</h2>
        </div>

        <div className="space-y-20">
          <UnderstandProblem />
          <UserGroups />
          <ContextualInquiry />
          <DataCollection />
          <SynthesizeInsights />
          <IdeationPrototyping />
        </div>
      </div>
    </section>
  );
}