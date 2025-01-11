import React from 'react';
import { Palette,Share2 } from 'lucide-react';

const flows = [
  {
    title: "User Onboarding",
    description: "Simple and intuitive onboarding process",
    steps: [
      "Profile Creation",
      "Health Information",
      "Emergency Contacts",
      "Preferences Setup",
      "Tutorial Walkthrough"
    ]
  },
  {
    title: "Social Connection",
    description: "Connecting with family and community",
    steps: [
      "Find Connections",
      "Join Groups",
      "Event Discovery",
      "Message Exchange",
      "Video Calls"
    ]
  },
  {
    title: "Support Request",
    description: "Requesting and receiving assistance",
    steps: [
      "Select Service Type",
      "Specify Requirements",
      "Choose Provider",
      "Schedule Service",
      "Feedback & Rating"
    ]
  }
];

export default function Flows() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
      
        <div className="flex items-center gap-3 mb-12">
          <Share2 className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">User Flows</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {flows.map((flow, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{flow.title}</h3>
              <p className="text-gray-600 mb-6">{flow.description}</p>
              <div className="space-y-4">
                {flow.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-semibold">{idx + 1}</span>
                    </div>
                    <span className="text-gray-700">{step}</span>
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