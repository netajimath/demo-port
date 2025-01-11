import React from 'react';
import { Target, Users, Brain, Smartphone } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: "Problem Focus",
    description: "Addressing key challenges in mobile video conferencing through AI innovation"
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Designed for both enterprise and consumer users with varying technical expertise"
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Leveraging artificial intelligence for enhanced user experience and accessibility"
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Optimized for smartphone users with intuitive interface and efficient features"
  }
];

export default function Overview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Video conferencing has existed for quite a while in both enterprise and consumer worlds. 
            Despite technological improvements, many users struggle with video conferencing apps on 
            smartphones due to poor video/audio quality, limited screen sharing, and accessibility 
            challenges. This case study explores how AI-driven enhancements can simplify and enhance 
            the video conferencing experience, especially for smartphone users.
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
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