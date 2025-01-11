import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { FLOW_DIAGRAMS } from '../constants/flows';
import FlowDiagram from '../components/FlowDiagram';

export default function Flows() {
  const [selectedFlow, setSelectedFlow] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Share2 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Flow Diagrams</h2>
        </div>

        <div className="flex gap-4 mb-8">
          {FLOW_DIAGRAMS.map((diagram, index) => (
            <button
              key={index}
              onClick={() => setSelectedFlow(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedFlow === index
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {diagram.title}
            </button>
          ))}
        </div>

        <FlowDiagram 
          nodes={FLOW_DIAGRAMS[selectedFlow].nodes} 
          maxHeight={600}
        />
      </div>
    </section>
  );
}