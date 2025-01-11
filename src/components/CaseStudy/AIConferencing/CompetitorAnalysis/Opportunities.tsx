import React from 'react';
import { Lightbulb } from 'lucide-react';

const opportunities = [
  {
    title: "Targeting Niche Markets",
    description: "Since all platforms cater to similar regions, focusing on underserved markets (e.g., rural areas or specific industries like healthcare and education) could be a differentiator."
  },
  {
    title: "AI-Powered Translations",
    description: "Platforms like Zoom and GoToMeeting, which have limited language support, can introduce AI-driven real-time translation and transcription to compete with Microsoft Teams and Skype, making their tools more accessible globally."
  },
  {
    title: "Personalized Meeting Assistance",
    description: "Integrating AI-based virtual assistants to help users schedule meetings, send reminders, and provide actionable insights from meeting recordings (e.g., task allocation, sentiment analysis) could enhance productivity."
  },
  {
    title: "Intelligent Meeting Summaries",
    description: "Adding AI tools that automatically summarize meetings, highlight key points, and generate action items can save time for users and improve collaboration efficiency."
  },
  {
    title: "Smart Noise Suppression and Visual Enhancements",
    description: "AI can be used to enhance audio and video quality by reducing background noise, improving lighting in real-time, and creating virtual backgrounds seamlessly."
  },
  {
    title: "Enhanced Collaboration with AI",
    description: "Features like AI-powered brainstorming tools, auto-generated charts from discussions, and real-time suggestions during collaboration (e.g., writing, design, or coding) can make platforms stand out."
  }
];

export default function Opportunities() {
  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-8">
        <Lightbulb className="w-6 h-6 text-yellow-500" />
        <h3 className="text-2xl font-bold">Opportunities Identified</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {opportunities.map((opportunity, index) => (
          <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-blue-800 mb-3">{opportunity.title}</h4>
            <p className="text-gray-700">{opportunity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}