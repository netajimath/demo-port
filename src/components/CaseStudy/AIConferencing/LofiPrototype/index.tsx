import React from 'react';
import { Pencil } from 'lucide-react';
import PrototypeCarousel from './PrototypeCarousel';

export default function LofiPrototype() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Pencil className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">PROTOTYPE</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <PrototypeCarousel />
        </div>
      </div>
    </section>
  );
}