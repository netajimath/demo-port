import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, image, link }: { title: string; image: string; link: string }) => (
  <a href={link} className="group relative block overflow-hidden rounded-lg">
    <img
      src={image}
      alt={title}
      className="w-full h-[250px] object-cover transition duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
      <div className="flex justify-between items-center w-full text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition" size={20} />
      </div>
    </div>
  </a>
);

export default function Projects() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">My recent work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="E-commerce Platform"
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
            link="#"
          />
          <ProjectCard
            title="Portfolio Website"
            image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
            link="#"
          />
          <ProjectCard
            title="Mobile App"
            image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop"
            link="#"
          />
        </div>
      </div>
    </section>
  );
}