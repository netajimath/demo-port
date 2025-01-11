import React from 'react';
import type { Persona } from '../types/persona';

interface PersonaCardProps {
  persona: Persona;
}

export default function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-start gap-6 mb-8">
        <img 
          src={persona.image} 
          alt={persona.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold mb-1">{persona.name}</h3>
          <p className="text-xl text-orange-500 mb-2">{persona.title}</p>
          <p className="text-gray-600">{persona.age} years, {persona.location}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-3">Personal Details</h4>
          <p className="text-gray-600">{persona.personalDetails}</p>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Quote</h4>
          <p className="text-orange-600 italic">"{persona.quote}"</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Key Insights</h4>
          <ul className="space-y-2">
            {persona.keyInsights.map((insight, index) => (
              <li key={index} className="text-gray-600">{insight}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Needs</h4>
          <ul className="space-y-2">
            {persona.needs.map((need, index) => (
              <li key={index} className="text-gray-600">{need}</li>
            ))}
          </ul>
        </div>

        <div className="bg-black text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-3">Key Insight</h4>
          <p>{persona.keyInsight}</p>
        </div>
      </div>
    </div>
  );
}