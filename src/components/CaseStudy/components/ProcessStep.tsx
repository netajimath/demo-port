import React from 'react';
import { ProcessStep as ProcessStepType } from '../types';

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
  const { icon: Icon, title, mainText, tasks } = step;
  
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      
      <p className="text-primary font-medium mb-6">{mainText}</p>
      
      <ul className="space-y-3">
        {tasks.map((task, taskIndex) => (
          <li key={taskIndex} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-gray-700">{task}</span>
          </li>
        ))}
      </ul>
      
      {index < 3 && (
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10">
          →
        </div>
      )}
    </div>
  );
}