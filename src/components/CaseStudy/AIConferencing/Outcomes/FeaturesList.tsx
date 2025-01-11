import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "Schedule and send the invitation to participants/group based on different time zones and. Understand if there is an overlapping schedule and inform the user and team.",
  "Create groups based on user request.",
  "Send info to the scheduled team if present meeting extended.",
  "Send a voice or text message in case of no internet connection.",
  "Understand Presentations and zoom in according to the user explanation.",
  "Stick Annotations to the specific area of presentation, even if it is scrolled.",
  "Understand the user voice and annotate.",
  "Ask and share/mail the recordings, meeting notes/presentation(with sticky annotations on them) to the participants.",
  "Inform notifications and assist for response methods.",
  "For chat reply, convert user voice to text and reply automatically."
];

export default function FeaturesList() {
  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
            <Check className="w-3 h-3 text-blue-600" />
          </div>
          <p className="text-gray-700">{feature}</p>
        </div>
      ))}
    </div>
  );
}