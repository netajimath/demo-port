import React from 'react';
import type { ModelSection } from './types';

interface ContentSlideProps {
  data: ModelSection;
}

export default function ContentSlide({ data }: ContentSlideProps) {
  const Icon = data.icon;

  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{data.title}</h3>
          <p className="text-gray-600">{data.description}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {data.sections?.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">
              {section.subtitle}
            </h4>
            <ul className="space-y-3">
              {section.points.map((point, pointIdx) => (
                <li key={pointIdx} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}