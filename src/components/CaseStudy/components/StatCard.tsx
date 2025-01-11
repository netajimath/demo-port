import React from 'react';
import { ResearchItem } from '../types';

interface StatCardProps {
  item: ResearchItem;
}

export default function StatCard({ item: { icon: Icon, label, count } }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-4xl font-bold text-primary">{count}</p>
    </div>
  );
}