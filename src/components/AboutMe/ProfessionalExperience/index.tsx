import React from 'react';
import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    company: "Multiples Consulting",
    companyUrl: "https://www.multiplesconsulting.com/",
    role: "Lead Product Design Consultant",
    period: "December 2023 – Present",
    description: "The stealth-mode client is a cutting-edge AI technology firm specializing in a versatile and scalable AI engine that leverages predictive AI,generative AI, and intelligent agents to seamlessly integrate into SaaS solutions and industry-specific applications, empowering businesses with advanced tools to transform operations, enhance decision-making, and drive innovation across industries.",
    contributions: [
      {
        items: [
          "Led a team of designers by delegating tasks, mentoring team members, and ensuring timely deliverables.",
"Defined product goals and workflows, aligning design strategies with business objectives.",
"Balanced leadership responsibilities with hands-on contributions to critical UX/CX tasks.",
"Designed AI features and AI Agents to address scalability, inefficiencies, and customer expectations.",
"Partnered with developers, AI engineers, product managers, and SMEs to define technical requirements and align project goals.",
"Facilitated workshops and brainstorming sessions to promote innovation and integrate diverse team insights.",
"Conducted user and customer interviews across industries to uncover pain points, workflows, and needs.",
"Delivered a versatile AI platform that enhanced decision-making, operational efficiency, and customer experiences.",
"Maintained detailed documentation of product requirements, research findings, user testing results, and design iterations in Confluence.",
"Managed a comprehensive backlog in Jira, prioritizing features and enhancements based on user feedback and strategic goals.",
"Delivered intuitive, user-focused design solutions to enable seamless adoption of AI capabilities.",
"Ensured the AI engine provided actionable insights to improve efficiency and enhance decision-making for end-users."
        ]
      }
    ]
  },
  {
    company: "Ivanti",
    companyUrl: "https://www.ivanti.com/products",
    role: "Senior UX Designer",
    period: "March 2020 – November 2023",
    description: "As a Senior UX Designer, I delivered impactful user and customer experiences (UX and CX), collaborating closely with product teams, developers, cybersecurity specialists, AI experts, sales, and SME stakeholders. My role involved gathering comprehensive requirements to integrate advanced features and AI capabilities into ITSM, ITAM, and Endpoint Security cloud-based products.",
    contributions: [
      {
        items: [
          "My executions includes both UX and CX experience connecting closely with the product team, developers, cybersecurity, AI experts, sales, and SME stakeholders to compile thorough requirements for features and AI capabilities into ITSM, ITAM, and Endpoint Security cloud base products for both desktop and mobile platforms.",
"Conduct extensive user research to grasp the distinct needs, challenges, and workflows of IT analysts, administrators, and end-users/customers.",
"Collaborate closely with AI engineers and data scientists to translate intricate AI concepts into user-friendly interfaces, bridging the divide between technical complexities and user understanding.",
"Ensure that the results align with relevant compliance standards and governance requirements in IT domain.",
"Create a clear and intuitive information architecture for the products, ensuring easy navigation and access to advanced functionalities for users.",
"Define experiences that enable administrators and end-users to effortlessly configure security settings, monitor threats, and respond effectively to endpoint incidents.",
"Provide insights into how AI influences recommendations, automations, and security decisions. A team player in creating component library for Design System.",
"Manage clear UX documentation and maintain a backlog of product requirements, research, user testing, UI outcomes, UX audits, and post-release observations in Confluence and Jira.",
"Achievement: Awarded for redefining AI-powered product experience."  
]
      }
    ]
  },
  {
    company: "ZNR TIG Services Pvt. Ltd.",
    companyUrl: "https://www.znrtig.com/",
    role: "Co-Founder, Product/UX/UI Lead",
    period: "October 2018 – January 2020",
    description: "ZNR TIG Services is a platform designed to empower rural users by connecting them with world-class tutors, both online and offline, overcoming geographical limitations. The platform aspires to expand into E-commerce, Banking, and Health Care, aiming to improve lives and foster economic independence. Key contributions include:",
    contributions: [
      {
        items: [
          "Managed multidisciplinary teams across UI, UX, Marketing, and PR, aligning their efforts to achieve strategic objectives and drive the platform's success.",
          "Provided clear guidance and specifications throughout the development lifecycle, ensuring successful product delivery.",
          "Planned, documented, and developed the UX/UI for both Web and Mobile applications, ensuring usability and scalability.",,
          "Conducted in-depth research to understand the unique needs of rural users across age groups, focusing on improving their quality of life and providing opportunities for education and business growth."
        ]
      }
    ]
  },
  {
    company: "Intellus Learning, Inc.",
    companyUrl: "https://resources.intelluslearning.com/home/dashboard",
    role: "Lead UX Engineer",
    period: "February 2016 – October 2018",
    description: "",
    contributions: [
      {
        items: [
          "Played a pivotal role in aligning product and business planning with the overall business vision by contributing to strategic decision-making processes.",
          "Defined goals, priorities, workflows, systems, and performance metrics to align UX with business objectives.",
          "Prioritized tasks, set deadlines, and allocated team members based on expertise to optimize resources and meet project demands.",
          "Facilitated problem-solving, reconciled differing perspectives, and ensured delivery of high-quality user experiences while managing constraints.",
          "Approved design solutions, guided team members, and participated in project discussions, taking full responsibility for outcomes.",
          "Conducted routine performance evaluations, provided feedback, and managed budgets for CAPEX and OPEX.",
          "Promoted a culture of innovation through design thinking and discussions on future visions for the product."
        ]
      }
    ]
  },
  {
    company: "Ellucian Higher Education Systems",
    companyUrl: "https://www.ellucian.com/solutions/all-products",
    role: "Specialist UX Designer",
    period: "July 2014 – February 2016",
    description: "",
    contributions: [
      {
        items: [
          "Played a pivotal role in migrating a legacy system from Oracle to a responsive web-based product.",
          "Contributed to the evolution of the Design System by introducing innovative approaches to streamline design processes.",
          "Acted as a Product Owner, managing deliverables across product, engineering, and business teams to align goals and ensure timely execution.",
          "Focused on crafting insights-driven design solutions by deeply understanding user motivations and behaviors.",
          "Conducted comprehensive user research, competitor analysis, and qualitative feedback interpretation to inform design decisions.",
          "Developed user-centric artifacts, including user stories, personas, and storyboards, to shape and align design strategies.",
          "Created detailed information architecture, sitemaps, wireframes, and prototypes, followed by usability testing to ensure the effectiveness and usability of solutions."
        ]
      }
    ]
  },
  {
    company: "Cleartrip Private Limited",
    companyUrl: "https://www.cleartrip.ae/",
    role: "Creative Designer",
    period: "October 2013 – July 2014",
    description: "Contributed to Cleartrip’s user experiences by creating intuitive UI concepts and prototypes for multiple platforms (iOS, Android, and Responsive Web).",
    contributions: [
      {
        items: [
          "Contributed to user experiences by creating intuitive UI concepts and prototypes for multiple platforms (iOS, Android, and Responsive Web)",
          "Collaborating on page flow and interaction ideas during the early design phases.",
          "Translating user needs and business requirements into innovative design solutions."
        ]
      }
    ]
  },
  {
    company: "EF Information Systems Pvt. Ltd.",
    companyUrl: "https://www.efacademy.org/en/",
    role: "Production Designer",
    period: "March 2012 – October 2013",
    description: "Worked on refining EF's design system and producing intuitive user interfaces by combining UX thinking with design execution.",
    contributions: [
      {
        title: "Design System Development",
        items: [
          "Worked on refining design system and producing intuitive user interfaces by combining UX thinking with design execution.",
          "Collaborated with the design team to evolve the design system, ensuring visual and functional consistency.",
          "Refined ideas through feedback and testing to improve usability."
        ]
      }
    ]
  },
  {
    company: "Logix Microsystems Ltd.",
    companyUrl: "https://www.izmostudio.com/",
    role: "Graphic Designer",
    period: "September 2007 – March 2012",
    description: "",
    contributions: [
      {
        items: [
          "Worked on refining design system and producing intuitive user interfaces by combining UX thinking with design execution.",
          "Collaborated with the design team to evolve the design system, ensuring visual and functional consistency.",
          "Refined ideas through feedback and testing to improve usability."
        ]
      }
    ]
  }
];

export default function ProfessionalExperience() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Professional Experience</h2>
        </div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}