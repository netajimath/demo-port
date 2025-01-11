import React from 'react';
import { AlertCircle } from 'lucide-react';

const problems = [
  "Social isolation and loss of lifestyle independence among seniors",
  "Limited access to medical assistance and support services",
  "Disconnect between volunteers and seniors needing assistance",
  "Growing gap between younger and older generations",
  "Difficulty managing daily tasks and maintaining social connections"
];

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <AlertCircle className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">Problem Statement</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-700">{problem}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-purple-900 text-white p-8 rounded-lg">
            <div className="bg-900 text-white p-3 rounded-lg"><img 
          src="/images/agio/Problem statement.png" height="10%"
          alt="Smart City Lights"
        /></div>
            <h3 className="text-2xl font-bold mb-6">Key Insight</h3>
            <p className="text-lg leading-relaxed">
              33% of seniors living outside care homes live alone, with the number 
              expected to double by 2050. The disconnect between generations and lack 
              of accessible support systems creates a significant impact on seniors' 
              quality of life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}