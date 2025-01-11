import React from 'react';
import { Code2, Palette, Smartphone, ArrowUpRight } from 'lucide-react';

const SpecialtyCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => (
  <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition cursor-pointer group">
    <div className="flex justify-between items-start">
      <div>
        <Icon className="text-orange-500 mb-4" size={24} />
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <ArrowUpRight className="text-orange-500 opacity-0 group-hover:opacity-100 transition" size={20} />
    </div>
  </div>
);

export default function Specialties() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold mb-12">My specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpecialtyCard
            icon={Code2}
            title="Frontend Development"
            description="Building responsive and performant web applications using modern technologies"
          />
          <SpecialtyCard
            icon={Palette}
            title="UI/UX Design"
            description="Creating beautiful and intuitive user interfaces with attention to detail"
          />
          <SpecialtyCard
            icon={Smartphone}
            title="Mobile Development"
            description="Developing cross-platform mobile applications with native-like experience"
          />
        </div>
      </div>
    </section>
  );
}