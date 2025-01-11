import React from 'react';
import { Users, Phone } from 'lucide-react';

interface InterviewCardProps {
  type: 'face' | 'phone';
  roles: string[];
}

export default function InterviewCard({ type, roles }: InterviewCardProps) {
  const Icon = type === 'face' ? Users : Phone;
  const title = type === 'face' ? 'Face to Face' : 'Telephonic';

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {roles.map((role, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-600">•</span>
            <span className="text-gray-700">{role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}