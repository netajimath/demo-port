import React from 'react';
import { Wrench } from 'lucide-react';

const tools = {
  "Research & Testing": [
    "UserTesting", "UsabilityHub", "Miro", "SurveyMonkey",
    "Google Forms", "Google Analytics", "Hotjar", "FullStory",
    "Keynote, PPT", "Confluence and Jira"
  ],
  "Design": [
    "Figma", "Sketch", "Adobe Suite", "Framer", "Axure", "Balsamiq"
  ]
};

export default function Tools() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Wrench className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Tools</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(tools).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {items.map((tool, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-gray-700">{tool}</span>
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