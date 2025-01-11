import React from 'react';

interface Software {
  name: string;
  logo: string;
}

const software: Software[] = [
  {
    name: "Zoom.US",
    logo: "/images/AIConferencing/zoom.png"
  },
  {
    name: "Skype",
    logo: "/images/AIConferencing/skype.png"
  },
  {
    name: "GoToMeeting",
    logo: "/images/AIConferencing/gotomeeting.png"
  },
  {
    name: "Microsoft Teams",
    logo: "/images/AIConferencing/teems.png"
  }
];

export default function SoftwareGrid() {
  return (
    <div className="mt-12">
      <p className="text-center text-xl mb-8">
        Above five are aware and frequently use the below softwares.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {software.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={item.logo} 
              alt={item.name}
              className="w-20 h-20 object-contain mb-4"
            />
            <span className="text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

