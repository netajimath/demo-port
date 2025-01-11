import React from 'react';
import DesignCard from './DesignCard';

const manualScreens = [
  {
    image: "/images/AIConferencing/1-Home-Manual.jpg",
    title: "Home Screen",
    description: [
      "AI Assist is Disabled",
      "User can join a meeting by entering Meeting ID",
      "Can Enable or keep video Disabled",
      "Today's scheduled meting list",
      "Can Schedule Meeting"
    ]
  },
  {
    image: "/images/AIConferencing/2-Schedule-Meeting-Manual.jpg",
    title: "Schedule Meeting",
    description: [
      "Add Meeting Agenda/Topic",
      "Select Date and Time",
      "Duration",
      "Add Participants",
      "Next action"
    ]
  },
  {
    image: "/images/AIConferencing/3-Select-Members-or-Group-Manual.jpg",
    title: "Schedule Meeting",
    description: [
      "Add Meeting Agenda/Topic",
      "Select Date and Time",
      "Duration",
      "Add Participants",
      "Next action"
    ]
  },
  {
    image: "/images/AIConferencing/4-Info-about-Member-busy-Manual.jpg",
    title: "Schedule Meeting",
    description: [
      "Add Meeting Agenda/Topic",
      "Select Date and Time",
      "Duration",
      "Add Participants",
      "Next action"
    ]
  }
];

export default function ManualInterface() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold mb-8">MANUAL INPUT USER INTERFACE</h3>
      <p className="text-xl mb-12">
        The manual process of scheduling meeting with team members
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {manualScreens.map((screen, index) => (
          <DesignCard key={index} {...screen} />
        ))}
      </div>
    </div>
  );
}

