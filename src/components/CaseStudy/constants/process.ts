import { Search, Lightbulb, Target, MonitorPlay } from 'lucide-react';
import { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "UNDERSTAND",
    icon: Search,
    mainText: "A shared understanding of who, why and what are we building",
    tasks: [
      "Stakeholder Interviews",
      "Project Vision and Goals",
      "Brand Strategy",
      "User Research and Analysis",
      "Contextual Inquiry",
      "Competitive Analysis",
      "Measure of Success",
      "SME's",
      "Project Priority and Planned Dates"
    ]
  },
  {
    title: "IDEATE",
    icon: Lightbulb,
    mainText: "Organise discovers, Explore options to solve user and business goals",
    tasks: [
      "Persona",
      "Information Architecture",
      "User Flows",
      "Feature Mapping",
      "Concept Sketches",
      "Low-Wireframes",
      "Concept Testing"
    ]
  },
  {
    title: "DEFINE",
    icon: Target,
    mainText: "Define possible options, heuristics, test and validate",
    tasks: [
      "Rapid Prototype",
      "Interactive Design",
      "Usibility Testing",
      "Accibility",
      "Feedback Integration",
      "Validation"
    ]
  },
  {
    title: "DELIVER",
    icon: MonitorPlay,
    mainText: "Deliver UI Design, UAT, Support DEV, Future Scalability",
    tasks: [
      "User Interface Design",
      "Styleguide",
      "UAT (User Acceptance Testing)",
      "Developer Handover",
      "Test the Built Product",
      "Measure Success",
      "Future Scalability"
    ]
  }
] as const;