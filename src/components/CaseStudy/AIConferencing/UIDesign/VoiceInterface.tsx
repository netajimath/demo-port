import React from 'react';
import DesignCard from './DesignCard';

const voiceScreens = [
  {
    image: "/images/AIConferencing/1-Home-Manual.jpg",
    title: "Home Screen",
    description: [
      "AI Assist is enabled and directly takes",
      "user to understand his needs."
    ]
  },
  {
    image: "/images/AIConferencing/2-AI-Conversation.jpg",
    title: "AI Assist Conversation",
    description: [
      "AI Assist tries to understand user requirement",
      "through voice communication.",
      "Informs about a participant busy schedule and asks",
      "to reschedule to other time when all",
      "participants are available."
    ]
  },
  {
    image: "/images/AIConferencing/3-AI-Conversation.jpg",
    title: "AI Assist Conversation",
    description: [
      "Small details are not missed, it asks about",
      "Topic/Agenda of the meeting"
    ]
  },
  {
    image: "/images/AIConferencing/4-AI-Conversation.jpg",
    title: "AI Assist Conversation",
    description: [
      "Schedules meeting and sends invitation",
      "and redirects user to home."
    ]
  }
];

export default function VoiceInterface() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">VUI (VOICE USER INTERFACE)</h3>
      <p className="text-xl mb-12">
        A User-Friendly AI-Voice assist mobile app which interacts with the user when needed.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-8">
        {voiceScreens.map((screen, index) => (
          <DesignCard key={index} {...screen} />
        ))}
      </div>
    </div>
  );
}


