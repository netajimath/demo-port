import React from 'react';
import { Share2 } from 'lucide-react';
import FlowStep from './FlowStep';
import FlowLegend from './FlowLegend';

export default function FlowDiagram() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Share2 className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">FLOW DIAGRAM</h2>
        </div>

        <div className="gap-12">
          <div className="md:col-span-2 relative">
            <div className="bg-white p-8 rounded-lg shadow-lg overflow-auto">
              <img 
                src="/images/AIConferencing/flow-diagram.jpg"
                alt="Meeting Schedule Flow"
                className="w-full h-auto"
              />
              
              <div className="mt-8 text-center text-gray-600">
                Flow diagram is for one specific task i.e. Scheduling a meeting
              </div>
            </div>
          </div>

          <div>
          </div>
        </div>
      </div>
    </section>
  );
}
