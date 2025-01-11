import React from 'react';
import { Briefcase, ChevronRight, Dot, LucideChevronUpCircle } from 'lucide-react';

interface Contribution {
  title: string;
  items: string[];
}

interface ExperienceCardProps {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  description: string;
  contributions: Contribution[];
  impact?: string[];
}

export default function ExperienceCard({
  company,
  companyUrl,
  role,
  period,
  description,
  contributions,
  impact
}: ExperienceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
          <Briefcase className="w-6 h-6 text-primary" />
        </div>
        <div>
          <a 
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-2xl font-bold hover:text-primary transition-colors"
          >
            {company}
          </a>
          <p className="text-xl text-gray-600 mt-1">{role}</p>
          <p className="text-gray-500">{period}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-8 leading-relaxed">{description}</p>

      <div className="space-y-8">
        {contributions.map((contribution, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold mb-4">{contribution.title}</h4>
            <ul className="space-y-3">
              {contribution.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Dot className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {impact && (
          <div>
            <h4 className="text-lg font-semibold mb-4">Impact</h4>
            <ul className="space-y-3">
              {impact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <LucideChevronUpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}