import React from 'react';
import { Bot } from 'lucide-react';
import FeaturesList from './FeaturesList';

export default function Outcomes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Bot className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">OUTCOMES</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/AIConferencing/Jarvis-3.jpg"
              alt="AI Voice Assistant Interface"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-lg" />
            
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">
              A User-Friendly AI-Voice assist mobile app which interacts with the user when needed.
            </h3>
            <FeaturesList />
          </div>
        </div>
      </div>
    </section>
  );
}

