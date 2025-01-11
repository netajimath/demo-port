import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CASE_STUDY_NAMES: Record<string, string> = {
  'agio': 'AGIO',
  'ai-conferencing': 'AI Conferencing',
  'smart-city': 'Smart City',
  'rapt-ai': 'Rapt AI'
};

export default function CaseStudyBreadcrumbs() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  const isDetailPage = pathParts.length > 1;
  const caseStudyId = pathParts[1];
  const caseStudyName = CASE_STUDY_NAMES[caseStudyId] || caseStudyId;

  return (
    <nav className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center">
          <li>
            <Link 
              to="/" 
              className="text-primary hover:text-primary-600 transition-colors"
            >
              Home
            </Link>
          </li>
          <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
          <li>
            <Link 
              to="/case-studies"
              className={`${isDetailPage ? 'text-primary hover:text-primary-600' : 'text-gray-600'} transition-colors`}
            >
              Case Studies
            </Link>
          </li>
          {isDetailPage && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              <li className="text-gray-600">
                {caseStudyName}
              </li>
            </>
          )}
        </ol>
      </div>
    </nav>
  );
}