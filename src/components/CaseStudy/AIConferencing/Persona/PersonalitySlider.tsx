import React from 'react';

interface PersonalityTrait {
  left: string;
  right: string;
  value: number;
}

const traits: PersonalityTrait[] = [
  { left: "Introvert", right: "Extrovert", value: 75 },
  { left: "Thinking", right: "Feeling", value: 30 },
  { left: "Busy", right: "Time rich", value: 40 },
  { left: "Messy", right: "Organized", value: 70 },
  { left: "Independent", right: "Team player", value: 85 }
];

export default function PersonalitySlider() {
  return (
    <div className="space-y-4">
      {traits.map((trait, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>{trait.left}</span>
            <span>{trait.right}</span>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div 
              className="absolute h-full bg-blue-600 rounded-full"
              style={{ width: `${trait.value}%` }}
            />
            <div 
              className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -mt-1"
              style={{ left: `${trait.value}%`, transform: 'translateX(-50%)' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}