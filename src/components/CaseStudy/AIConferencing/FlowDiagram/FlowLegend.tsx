import React from 'react';

const legendItems = [
  { type: 'action', label: 'USER ACTION', className: 'bg-green-400 text-white' },
  { type: 'page', label: 'PAGE', className: 'border-2 border-gray-300 bg-white' },
  { type: 'secondary', label: 'SECONDARY ACTIONS', className: 'bg-green-100 border border-green-200' },
  { type: 'decision', label: 'QUESTION', className: 'rotate-45 bg-white border-2 border-orange-300' },
  { type: 'result', label: 'Decision', className: 'bg-red-500 text-white rounded-full' }
];

export default function FlowLegend() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Legend</h3>
      <div className="space-y-4">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div 
              className={`w-32 h-10 flex items-center justify-center rounded-lg text-sm ${item.className}`}
            >
              {item.type === 'result' ? 'YES' : item.label}
            </div>
            <span className="text-gray-600">{item.label}</span>
          </div>
        ))}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            Description about further steps or actions
          </p>
        </div>
      </div>
    </div>
  );
}