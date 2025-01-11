import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { caseStudies } from '../components/CaseStudies/data/caseStudies';
import CaseStudyBreadcrumbs from '../components/CaseStudies/Breadcrumbs';
import Footer from '../components/Footer';

// Import case study components
import * as Agio from '../components/CaseStudy/Agio';
import * as AIConferencing from '../components/CaseStudy/AIConferencing';
import * as SmartCity from '../components/CaseStudy/SmartCity';
import * as RaptAI from '../components/CaseStudy/RaptAI';

// Case study component maps
const CASE_STUDY_COMPONENTS = {
  'agio': [
    Agio.Header,
    Agio.Overview,
    Agio.Problem,
    Agio.Research,
    Agio.Process,
    Agio.Workshop,
    Agio.Findings,
    Agio.Users,
    Agio.Personas,
    Agio.ConceptualModel,
    Agio.Solution,
    Agio.Flows,
    Agio.UXUIDesign,
    Agio.UsabilityTest,
  ],
  'ai-conferencing': [
    AIConferencing.Header,
    AIConferencing.Overview,
    AIConferencing.ProblemStatement,
    AIConferencing.UXProcess,
    AIConferencing.Interview,
    AIConferencing.Research,
    AIConferencing.CompetitorAnalysis,
    AIConferencing.Outcomes,
    AIConferencing.Persona,
    AIConferencing.UIDesign,
    AIConferencing.FlowDiagram,
    AIConferencing.UsabilityTesting,
    AIConferencing.BusinessMetrics
  ],
  'smart-city': [
    SmartCity.Header,
    SmartCity.Objective,
    SmartCity.ProblemStatement,
    SmartCity.VisionGoals,
    SmartCity.UXResearch,
    SmartCity.KeyFeatures,
    SmartCity.UXProcess
  ],
  'rapt-ai': [
    RaptAI.Header,
    RaptAI.PainPoints,
    RaptAI.TargetUsers,
    RaptAI.KeyFeatures,
    RaptAI.UXResearch,
    RaptAI.Solutions,
    RaptAI.HiFi,
    RaptAI.UsabilityTesting,
    RaptAI.BusinessMetrics
  ]
};

export default function CaseStudyDetail() {
  const { id } = useParams();
  const [loadedComponents, setLoadedComponents] = useState<number[]>([]);
  const caseStudy = caseStudies.find(study => study.id === id);

  useEffect(() => {
    // Reset loaded components when case study changes
    setLoadedComponents([]);
    
    // Load header immediately
    setLoadedComponents([0]);
    
    // Load remaining components progressively
    const timer = setTimeout(() => {
      if (id && id in CASE_STUDY_COMPONENTS) {
        const components = CASE_STUDY_COMPONENTS[id as keyof typeof CASE_STUDY_COMPONENTS];
        setLoadedComponents([...Array(components.length).keys()]);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  if (!caseStudy || !id || !(id in CASE_STUDY_COMPONENTS)) {
    return (
      <div className="min-h-screen bg-white pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600">The case study you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const Components = CASE_STUDY_COMPONENTS[id as keyof typeof CASE_STUDY_COMPONENTS];

  return (
    <div className="min-h-screen bg-white pt-16">
      <CaseStudyBreadcrumbs />
      {Components.map((Component, index) => (
        loadedComponents.includes(index) && <Component key={index} />
      ))}
      <Footer />
    </div>
  );
}