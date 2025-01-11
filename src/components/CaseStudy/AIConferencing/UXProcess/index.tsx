import React from 'react';
import { 
  Users, Search, UserSquare2, Map, 
  PenTool, MessageSquare, Package
} from 'lucide-react';
import StakeholderCard from './StakeholderCard';
import ProcessStep from './ProcessStep';

const stakeholders = [
  "Product Delivery Manager",
  "Senior Software Engineer",
  "Marketing Manager",
  "Production Manager",
  "Graphic/Web Designer"
];

const processSteps = [
  {
    icon: Search,
    title: "User Research & Analysis",
    description: "Comprehensive research through contextual inquiry and competitive analysis.",
    items: [
      "Contextual inquiry with current users",
      "Analysis of Zoom, Skype, GoToMeeting, and Microsoft Teams",
      "Market research and trend analysis"
    ]
  },
  {
    icon: UserSquare2,
    title: "Persona Development",
    description: "Creating detailed user personas based on research findings.",
    items: [
      "User needs identification",
      "Pain points analysis",
      "Goals and motivations mapping"
    ]
  },
  {
    icon: Map,
    title: "Feature Mapping",
    description: "Strategic mapping of features to user requirements.",
    items: [
      "Core functionality definition",
      "Feature prioritization",
      "User journey mapping"
    ]
  },
  {
    icon: PenTool,
    title: "Prototyping & Validation",
    description: "Iterative design and testing process.",
    items: [
      "Low-fidelity wireframes",
      "Concept sketches",
      "Rapid prototyping"
    ]
  },
  {
    icon: MessageSquare,
    title: "Interactive Design & Feedback",
    description: "Incorporating user feedback into interactive designs.",
    items: [
      "User testing sessions",
      "Feedback collection",
      "Design iterations"
    ]
  },
  {
    icon: Package,
    title: "Final Delivery",
    description: "Comprehensive delivery package for development.",
    items: [
      "UI design finalization",
      "Style guide creation",
      "Developer handover documentation"
    ]
  }
];

export default function UXProcess() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Users className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold">UX Design Process</h2>
        </div>

        {/* Stakeholder Interviews */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Stakeholder Interviews</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stakeholders.map((stakeholder, index) => (
              <StakeholderCard key={index} title={stakeholder} />
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              items={step.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}