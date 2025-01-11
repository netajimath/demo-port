import React from 'react';
import { Palette } from 'lucide-react';
import VoiceInterface from './VoiceInterface';
import ManualInterface from './ManualInterface';

export default function UIDesign() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Palette className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">UX/UI OUTCOMES</h2>
        </div>

        <VoiceInterface />
        <ManualInterface />
      </div>
    </section>
  );
}