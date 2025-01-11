import React from 'react';
import { Code2, FileCode, SplitSquareVertical, GitFork } from 'lucide-react';

const practices = [
  {
    icon: FileCode,
    title: "Small and Focused Files",
    description: "Create modular files with single responsibilities to improve maintainability.",
    examples: [
      "Keep files small and focused on a single task",
      "Improve code readability and maintenance",
      "Make testing and debugging easier"
    ]
  },
  {
    icon: SplitSquareVertical,
    title: "Break Down Large Files",
    description: "Split large files into multiple smaller, more manageable modules.",
    examples: [
      "Separate complex components into smaller ones",
      "Create dedicated files for different features",
      "Maintain better code organization"
    ]
  },
  {
    icon: Code2,
    title: "Clear Responsibility",
    description: "Each file should have a single, well-defined purpose.",
    examples: [
      "One component per file",
      "Clear and focused functionality",
      "Avoid mixing unrelated code"
    ]
  },
  {
    icon: GitFork,
    title: "Reusable Logic",
    description: "Extract common functionality into separate utility files.",
    examples: [
      "Create shared helper functions",
      "Maintain utility libraries",
      "Promote code reuse"
    ]
  }
];

export default function CodingPractices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Coding Best Practices</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{practice.title}</h3>
                <p className="text-gray-600 mb-4">{practice.description}</p>
                <ul className="space-y-2">
                  {practice.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-700 text-sm">{example}</span>
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