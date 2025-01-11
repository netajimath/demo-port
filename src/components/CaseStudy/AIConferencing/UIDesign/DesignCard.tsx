import React from 'react';

interface DesignCardProps {
  image: string;
  title: string;
  description: string[];
}

export default function DesignCard({ image, title, description }: DesignCardProps) {
  return (
    <div className="flex flex-col">
      <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
      <div className="space-y-2">
        {description.map((text, index) => (
          <p key={index} className="text-sm text-gray-600 text-center">{text}</p>
        ))}
      </div>
    </div>
  );
}