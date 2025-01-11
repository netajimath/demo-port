import React from 'react';
import { Target, Users, Heart, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: "Problem Focus",
    description: "Addressing social isolation and lifestyle independence challenges faced by senior citizens"
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Designed for seniors with varying technical expertise and their support network"
  },
  {
    icon: Heart,
    title: "Social Connection",
    description: "Bridging the gap between seniors and their communities through meaningful interactions"
  },
  {
    icon: Shield,
    title: "Support System",
    description: "Comprehensive platform for healthcare, daily activities, and social needs"
  }
];

export default function Overview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            AGIO is a revolutionary platform designed to enhance the social and lifestyle 
            independence of senior citizens. By connecting seniors with their communities, 
            caregivers, and support services, AGIO creates a comprehensive ecosystem that 
            addresses the unique challenges faced by our elderly population.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}