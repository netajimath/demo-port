import React from 'react';

interface IterationCardProps {
  title: string;
  stages: {
    initial: string;
    feedback: string;
    iteration: string;
  };
}

export default function IterationCard({ title, stages }: IterationCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-indigo-600 mb-2">Initial Design</h4>
          <p className="text-gray-700">{stages.initial}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-red-600 mb-2">User Feedback</h4>
          <p className="text-gray-700">{stages.feedback}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-green-600 mb-2">Iteration</h4>
          <p className="text-gray-700">{stages.iteration}</p>
        </div>
      </div>
    </div>
  );
}