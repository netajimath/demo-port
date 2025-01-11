import React from 'react';
import { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({ feature: { icon: Icon, title, description } }: FeatureCardProps) {
  return (
    <div className="p-6 border border-gray-800 rounded-lg hover:border-primary transition-colors">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}