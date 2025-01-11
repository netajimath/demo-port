import React from 'react';
import type { ModelSection } from './types';

interface ImageSlideProps {
  data: ModelSection;
}

export default function ImageSlide({ data }: ImageSlideProps) {
  return (
    <div className="relative h-[600px] w-full">
      <img 
        src={data.image} 
        alt={data.title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h3 className="text-3xl font-bold text-white mb-4">{data.title}</h3>
          <p className="text-xl text-gray-200">{data.description}</p>
        </div>
      </div>
    </div>
  );
}