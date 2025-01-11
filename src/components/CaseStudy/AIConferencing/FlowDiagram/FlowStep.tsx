import React from 'react';

interface FlowStepProps {
  type: 'action' | 'page' | 'secondary' | 'decision';
  label: string;
  className?: string;
}

export default function FlowStep({ type, label, className = '' }: FlowStepProps) {
  const baseStyles = {
    action: 'bg-green-400 text-white',
    page: 'border-2 border-gray-300 bg-white',
    secondary: 'bg-green-100 border border-green-200',
    decision: 'rotate-45 bg-white border-2 border-orange-300'
  };

  return (
    <div 
      className={`
        px-6 py-3 rounded-lg flex items-center justify-center text-center
        ${baseStyles[type]} ${className}
      `}
    >
      {label}
    </div>
  );
}