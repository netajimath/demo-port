import React from 'react';
import { Search, Users, Phone, BarChart3 } from 'lucide-react';

const researchMethods = [
  {
    icon: Users,
    label: "Face to Face",
    count: 8,
    description: "In-depth interviews with seniors and caregivers"
  },
  {
    icon: Phone,
    label: "Telephonic",
    count: 12,
    description: "Remote interviews with family members and support staff"
  },
  {
    icon: BarChart3,
    label: "Contextual",
    count: 4,
    description: "Observational studies in senior living environments"
  }
];

export default function Research() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Search className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">Research Methods</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
    {/*            <Icon className="w-12 h-12 text-purple-600 mb-4 pr-3 float-left" />    */}
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {method.count}
                </div>
                <div className="text-xl  font-bold mb-3">{method.label}</div>
                <p className="text-gray-600">{method.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}