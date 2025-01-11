import React from 'react';
import { WorkshopPhase as WorkshopPhaseType } from '../types/workshop';

interface WorkshopPhaseProps {
  phase: WorkshopPhaseType;
}

export default function WorkshopPhase({ phase }: WorkshopPhaseProps) {
  const { icon: Icon, title, description } = phase;
  
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}