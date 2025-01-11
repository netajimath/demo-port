import React from 'react';
import { Link } from 'react-router-dom';

interface Feature {
  title: string;
  description: string;
}

interface CaseStudyCardProps {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  features?: Feature[];
  image: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CaseStudyCard({
  id,
  title,
  subtitle,
  description,
  features,
  image,
  className = '',
  style = {}
}: CaseStudyCardProps) {
  return (
    <div 
      className={`grid md:grid-cols-2 gap-16 items-center opacity-0 ${className}`}
      style={style}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full rounded-lg shadow-xl transition-transform duration-300"
        />
      </div>
      <div>
        <h2 className="text-5xl font-bold mb-6 text-black hover:text-primary transition-colors">
          {title}
        </h2>
        <p className="text-2xl mb-4 text-black">{subtitle}</p>
        {description && <p className="text-xl mb-8 text-gray-600">{description}</p>}
        
        {features && (
          <div className="space-y-6 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        <Link 
          to={`/case-study/${id}`}
          className="inline-block bg-primary text-white px-10 py-4 rounded-lg text-lg font-semibold 
            hover:bg-primary-600 transition-colors hover:scale-105 transform duration-300"
        >
          CASE STUDY
        </Link>
      </div>
    </div>
  );
}