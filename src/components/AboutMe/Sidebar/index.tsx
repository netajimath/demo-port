import React from 'react';
import { Wrench, Award } from 'lucide-react';

const tools = {
  "Research & Testing": [
    "UserTesting",
    "UsabilityHub", 
    "Miro",
    "SurveyMonkey",
    "Google Forms",
    "Google Analytics",
    "Hotjar",
    "FullStory",
    "Keynote, PPT",
    "Confluence and Jira"
  ],
  "Design": [
    "Figma",
    "Sketch", 
    "Adobe Suite",
    "Framer",
    "Axure",
    "Balsamiq"
  ]
};

const certifications = [
  {
    title: "Mastering Design Thinking",
    institution: "MIT Sloan"
  },
  {
    title: "Human Computer Interaction",
    institution: "Interaction Design Foundation"
  },
  {
    title: "Designing the Mobile User Experience",
    institution: "HFI"
  }
];

export default function Sidebar() {
  return (
    <div className="w-80 bg-gray-50 p-6 space-y-12 flex-shrink-0">
      {/* Tools Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Wrench className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold">Tools</h2>
        </div>
        <div className="space-y-6">
          {Object.entries(tools).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-600 mb-3">{category}</h3>
              <div className="space-y-2">
                {items.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-bold">Certifications</h2>
        </div>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.institution}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}