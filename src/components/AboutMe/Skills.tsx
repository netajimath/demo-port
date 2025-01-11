import React from 'react';
import { Layout } from 'lucide-react';

const skillCategories = {
  "Design Leadership": [
    "UX Strategy",
    "Team Management", 
    "Design Systems",
    "Process Optimization"
  ],
  "Technical Skills": [
    "AI/ML Study",
    "Scalable Systems",
    "Accessibility",
    "Performance Optimization"
  ],
  "Research & Analysis": [
    "User Research",
    "Data Analysis",
    "A/B Testing",
    "Usability Testing"
  ],
  "Collaboration": [
    "Cross-functional Teams",
    "Stakeholder Management",
    "Client Relations",
    "Workshop Facilitation"
  ]
};

export default function Skills() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Layout className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}