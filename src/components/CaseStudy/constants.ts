import { Search, Lightbulb, Target, MonitorPlay, Users, Phone, BarChart3, Heart, Shield } from 'lucide-react';
import { ProcessStep, ResearchItem, Feature } from './types';

export const PROBLEMS = [
  "Seniors are experiencing social isolation and loss of lifestyle independence.",
  "Limited access to easily accessible medical assistance and support services.",
  "Disconnect between willing volunteers and seniors in need of assistance.",
  "Growing gap between younger and older generations.",
  "Difficulty managing daily tasks and maintaining social connections."
] as const;

export const RESEARCH_DATA: ResearchItem[] = [
  {
    icon: Users,
    label: "Face to Face",
    count: 8
  },
  {
    icon: Phone,
    label: "Telephonic",
    count: 12
  },
  {
    icon: BarChart3,
    label: "Contextual",
    count: 4
  },
  {
    icon: Heart,
    label: "Survey",
    count: 190
  }
] as const;

export const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Safety & Security",
    description: "24/7 emergency assistance and health monitoring for peace of mind."
  },
  {
    icon: Heart,
    title: "Social Connection",
    description: "Platform for connecting with family, friends, and community members."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Access to verified volunteers and support services in your area."
  }
] as const;

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