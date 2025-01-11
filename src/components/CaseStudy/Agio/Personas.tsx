import React from 'react';
import { UserCircle } from 'lucide-react';

const personas = [
  {
    name: "Margaret Chen",
    age: 72,
    location: "San Francisco, CA",
    role: "Retired Teacher",
    image: "/images/agio/Persona-Margaret-Chen.jpg",
    quote: "I want to stay connected with my family and community, but sometimes it feels overwhelming.",
    about: "Margaret lives alone since her husband passed away 3 years ago. Her children live in different states, and while they call regularly, she misses daily social interactions.",
    goals: [
      "Maintain independence in daily activities",
      "Stay connected with family and friends",
      "Access reliable healthcare support",
      "Participate in community activities"
    ],
    painPoints: [
      "Difficulty managing multiple medications",
      "Feels isolated from community",
      "Limited access to transportation",
      "Struggles with complex technology"
    ]
  },
  {
    name: "Robert Wilson",
    age: 68,
    location: "Chicago, IL",
    role: "Semi-retired Accountant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500",
    quote: "I'm tech-savvy but find most apps too complicated. I need something straightforward.",
    about: "Robert works part-time from home and wants to maintain an active lifestyle. He's comfortable with technology but frustrated by overly complex interfaces.",
    goals: [
      "Balance work and personal life",
      "Find local social activities",
      "Maintain physical and mental health",
      "Connect with like-minded seniors"
    ],
    painPoints: [
      "Complex user interfaces",
      "Difficulty finding relevant activities",
      "Limited social network",
      "Health monitoring challenges"
    ]
  }
];

export default function Personas() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <UserCircle className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold">User Personas</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-start p-6 gap-6">
                <img
                  src={persona.image}
                  alt={persona.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">{persona.name}</h3>
                  <p className="text-purple-600">{persona.role}</p>
                  <p className="text-gray-600">
                    {persona.age} years • {persona.location}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-purple-50">
                <p className="text-lg italic text-purple-800">"{persona.quote}"</p>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-semibold mb-3">About</h4>
                <p className="text-gray-600 mb-6">{persona.about}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Goals</h4>
                    <ul className="space-y-2">
                      {persona.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-500">•</span>
                          <span className="text-gray-600">{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Pain Points</h4>
                    <ul className="space-y-2">
                      {persona.painPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-500">•</span>
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}