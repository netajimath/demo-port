import { ClipboardList, Users, Target } from 'lucide-react';
import { WorkshopPhase, WorkshopOutcome } from '../types/workshop';

export const WORKSHOP_PHASES: WorkshopPhase[] = [
  {
    title: "Data Consolidation",
    icon: ClipboardList,
    description: "Consolidated all data gathered from user research and curated a prioritized list of user needs."
  },
  {
    title: "Team Collaboration",
    icon: Users,
    description: "Engaged cross-functional teams in brainstorming sessions to bring together diverse perspectives."
  },
  {
    title: "Goal Alignment",
    icon: Target,
    description: "Developed a Zero Sprint Plan outlining goals and expectations for upcoming activities."
  }
];

export const WORKSHOP_OUTCOMES: WorkshopOutcome[] = [
  {
    title: "User Understanding",
    items: [
      "Definition of User Groups and Personas",
      "Creation of User Journey Maps",
      "Development of User Stories"
    ]
  },
  {
    title: "Technical Planning",
    items: [
      "Creation of Conceptual Model",
      "Mapping of Task Flows",
      "Information Architecture Design"
    ]
  },
  {
    title: "Strategic Alignment",
    items: [
      "Business Goals Definition",
      "Product Strategy Development",
      "User Goals Integration"
    ]
  }
];