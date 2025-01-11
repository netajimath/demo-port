import React from 'react';
import { AlertCircle } from 'lucide-react';

const problems = [
  "Poor video and audio quality on mobile devices",
  "Difficult screen sharing and file access",
  "Limited annotation and collaboration features",
  "Challenges with taking calls while driving",
  "Inconsistent user experience across devices"
];

export default function ProblemStatement() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/AIConferencing/AI-Based-Conferencing-App-problem-statement-2.jpg"
              alt="Business person using smartphone"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold">Problem Statement</h2>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Less percentage of users prefer to use their smartphone for Video 
              Conferencing app, as it's hard to have a clear Video/Audio, 
              Screen-sharing, Sharing files Access to Docs, annotations, Recording 
              and most importantly hard to take calls while DRIVING.
            </p>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

