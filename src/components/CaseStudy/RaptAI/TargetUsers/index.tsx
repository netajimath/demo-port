import React from 'react';
import { Users, Code2, Cloud, BarChart } from 'lucide-react';
import UserCard from './UserCard';

const targetUsers = [
  {
    icon: Code2,
    title: "Data Scientists",
    description: "ML practitioners focused on model development and experimentation who need efficient infrastructure management"
  },
  {
    icon: Users,
    title: "IT & ML Ops Teams",
    description: "Operations teams managing ML infrastructure and ensuring smooth deployment of models"
  },
  {
    icon: Cloud,
    title: "Cloud Operations Teams",
    description: "Teams managing cloud resources and optimizing infrastructure costs across environments"
  },
  {
    icon: BarChart,
    title: "C-Suite Executives",
    description: "Decision makers focused on ROI, efficiency, and strategic resource allocation"
  }
];

export default function TargetUsers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 text-center">Target Users</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetUsers.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
}