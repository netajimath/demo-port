import React from 'react';
import { LucideIcon } from 'lucide-react';

interface UserCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function UserCard({ icon: Icon, title, description }: UserCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}