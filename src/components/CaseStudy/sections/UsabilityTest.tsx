import React from 'react';
import { ClipboardCheck, BarChart } from 'lucide-react';

const statistics = [
  { label: "Task Completion", value: "81%" },
  { label: "Enjoyed Surprise Support", value: "78%" },
  { label: "Financial Security Concerns", value: "83%" },
  { label: "Voice Assist Satisfaction", value: "82%" },
  { label: "Would Use Product", value: "78%" }
];

const findings = [
  "All participants found the AGIO app to be clear, straightforward",
  "87% think the app is easy to use",
  "Had difficulty with voice assistant (as we used a person)",
  "Elders also want to be Volunteers",
  "Preferred Health and Finance as main navigation",
  "Purchased but not able to understand who paid for this (Need Indication)",
  "Surprises were emotional",
  "Not able to find specific learning/teaching. Need an option to add their interests",
  "Can't trust on providing financial details. May get misuse"
];

export default function UsabilityTest() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <ClipboardCheck className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Usability Test Summary</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Summary */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Overview</h3>
            <p className="text-gray-600 mb-6">
              The team AGIO conducted moderated usability testing with 18 participants aged 63+ from America. 
              The testing involved 6 facilitators and 3 voice-over assistants, capturing emotions, comments, 
              navigation choices, task completion rates, and overall satisfaction.
            </p>
            <div className="space-y-4">
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800">
                  <span className="font-semibold">Satisfaction Score:</span> 85%
                </p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800">
                  <span className="font-semibold">Completion Rate:</span> 72.8%
                </p>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800">
                  <span className="font-semibold">Average Task Time:</span> 279 seconds
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-6">
              <BarChart className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Statistics</h3>
            </div>
            <div className="space-y-4">
              {statistics.map((stat, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{stat.label}</span>
                  <div className="w-24 text-right">
                    <span className="text-xl font-semibold text-primary">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Findings */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Key Findings</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {findings.map((finding, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-700">{finding}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}