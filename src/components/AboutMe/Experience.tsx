import React from 'react';
import { Users, Brain, Target, Briefcase, Lightbulb, Code2, ClipboardList, Wrench } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const experienceCategories = [
  {
    title: "Team Leadership",
    icon: Users,
    items: [
      "Led a team of three designers, including one UX designer and two UI designers",
      "Delegated tasks effectively while overseeing deliverables",
      "Actively participated in team development through mentorship"
    ]
  },
  {
    title: "Strategic Planning",
    icon: Target,
    items: [
      "Defined product goals, workflows, and roadmaps",
      "Aligned design processes with business goals",
      "Structured sprint planning and milestone tracking"
    ]
  },
  {
    title: "Direct Contributions",
    icon: Briefcase,
    items: [
      "User journey mapping and persona creation",
      "Experience optimization",
      "Balanced leadership with hands-on design work"
    ]
  },
  {
    title: "Collaboration",
    icon: Lightbulb,
    items: [
      "Partnered with cross-functional teams",
      "Facilitated workshops for requirement gathering",
      "Aligned design with technical objectives"
    ]
  },
  {
    title: "User Research",
    icon: Target,
    items: [
      "Conducted interviews across IT, Finance, Education domains",
      "Synthesized insights for AI feature design",
      "Addressed industry-specific pain points"
    ]
  },
  {
    title: "AI Integration",
    icon: Brain,
    items: [
      "Financial forecasting and risk assessment",
      "Personalized learning paths in Education",
      "Customer behavior analysis and CRM optimization"
    ]
  },
  {
    title: "Design Systems",
    icon: Code2,
    items: [
      "Developed scalable design systems",
      "Created reusable components",
      "Established WCAG accessibility standards"
    ]
  },
  {
    title: "Process Management",
    icon: ClipboardList,
    items: [
      "Maintained UX documentation in Confluence and Jira",
      "Managed design backlogs",
      "Ensured timely feature delivery"
    ]
  },
  {
    title: "Problem-Solving",
    icon: Wrench,
    items: [
      "Data integration and schema mapping",
      "Scalability for diverse datasets",
      "Ensuring AI transparency and trust"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceCategories.map((category, index) => (
            <ExperienceCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}