import React from 'react';
import { Search, Lightbulb, Target, MonitorPlay } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: "UNDERSTAND",
    mainText: "Understanding senior citizens' needs and challenges",
    tasks: [
      "Stakeholder Interviews",
      "User Research and Analysis",
      "Contextual Inquiry",
      "Competitive Analysis",
      "Project Vision and Goals"
    ]
  },
  {
    icon: Lightbulb,
    title: "IDEATE",
    mainText: "Exploring solutions for social connection and independence",
    tasks: [
      "Persona Development",
      "User Journey Mapping",
      "Feature Ideation",
      "Concept Sketches",
      "Low-fi Wireframes"
    ]
  },
  {
    icon: Target,
    title: "DEFINE",
    mainText: "Defining and validating core features",
    tasks: [
      "Rapid Prototyping",
      "Interactive Design",
      "Usability Testing",
      "Accessibility Testing",
      "Feedback Integration"
    ]
  },
  {
    icon: MonitorPlay,
    title: "DELIVER",
    mainText: "Creating a comprehensive solution",
    tasks: [
      "UI Design",
      "Design System",
      "Developer Handoff",
      "User Testing",
      "Launch Strategy"
    ]
  }
];

  
export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Design Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-purple-600 mb-4">{step.mainText}</p>
                <ul className="space-y-2">
                  {step.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-600">•</span>
                      <span className="text-gray-600">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


