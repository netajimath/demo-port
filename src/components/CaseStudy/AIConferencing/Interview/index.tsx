import React from 'react';
import { MessageSquare } from 'lucide-react';
import InterviewCard from './InterviewCard';
import SoftwareGrid from './SoftwareGrid';

const faceToFaceRoles = [
  "Product Delivery Manager",
  "Senior Software Engineer"
];

const telephonicRoles = [
  "Marketing Manager",
  "Production Manager",
  "Graphic/Web designer (Marketing)"
];

export default function Interview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <MessageSquare className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">INTERVIEW</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <InterviewCard type="face" roles={faceToFaceRoles} />
          <InterviewCard type="phone" roles={telephonicRoles} />
        </div>

        <SoftwareGrid />
      </div>
    </section>
  );
}