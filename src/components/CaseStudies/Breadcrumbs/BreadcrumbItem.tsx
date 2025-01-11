import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItemProps {
  label: string;
  path?: string;
  isLast: boolean;
}

export default function BreadcrumbItem({ label, path, isLast }: BreadcrumbItemProps) {
  const content = isLast ? (
    <span className="text-gray-600">{label}</span>
  ) : (
    <Link 
      to={path || '#'} 
      className="text-primary hover:text-primary-600 transition-colors"
    >
      {label}
    </Link>
  );

  return (
    <li className="flex items-center">
      {content}
      {!isLast && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
    </li>
  );
}