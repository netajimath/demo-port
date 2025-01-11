import React from 'react';
import { User2 } from 'lucide-react';

interface StakeholderCardProps {
  title: string;
}

export default function StakeholderCard({ title }: StakeholderCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <User2 className="w-5 h-5 text-blue-600" />
        </div>
        <span className="text-gray-800 font-medium">{title}</span>
      </div>
    </div>
  );
}