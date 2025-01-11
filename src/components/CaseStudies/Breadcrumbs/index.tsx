import React from 'react';
import { useLocation } from 'react-router-dom';
import BreadcrumbItem from './BreadcrumbItem';
import { CASE_STUDY_NAMES } from './constants';

export default function CaseStudyBreadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  const isDetailPage = pathParts.length > 1;
  const caseStudyId = pathParts[1];
  const caseStudyName = CASE_STUDY_NAMES[caseStudyId] || caseStudyId;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Case Studies', path: '/case-studies' },
    ...(isDetailPage ? [{ label: caseStudyName }] : [])
  ];

  return (
    <nav className="sticky top-16 bg-white border-b border-gray-200 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center h-14">
          {breadcrumbs.map((crumb, index) => (
            <BreadcrumbItem
              key={crumb.label}
              label={crumb.label}
              path={crumb.path}
              isLast={index === breadcrumbs.length - 1}
            />
          ))}
        </ol>
      </div>
    </nav>
  );
}