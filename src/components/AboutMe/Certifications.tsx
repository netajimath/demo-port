import React from 'react';
import { Award } from 'lucide-react';

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

export default function Certifications() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}