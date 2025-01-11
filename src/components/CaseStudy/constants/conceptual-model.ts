import { Stethoscope, Wallet, Heart, GraduationCap, Cpu } from 'lucide-react';

export const CONCEPTUAL_MODEL_DATA = [
  {
    title: "Healthcare",
    icon: Stethoscope,
    sections: [
      {
        subtitle: "Hospitals/Ambulance",
        points: ["Connect all hospitals via API integration for better support."]
      },
      {
        subtitle: "Doctors/Nurses",
        points: [
          "Connect doctors/nurses, including volunteers.",
          "Costs are managed based on elders' financial status.",
          "Paid healthcare systems are available if required."
        ]
      },
      {
        subtitle: "Healthcare Management",
        points: [
          "Combine all existing cards (like medical/health IDs) into one unified system.",
          "Use health history for improved decision-making.",
          "Provide emergency support."
        ]
      }
    ]
  },
  {
    title: "Finance",
    icon: Wallet,
    sections: [
      {
        subtitle: "Support and Contributions",
        points: ["Get financial support through funding or contributions."]
      },
      {
        subtitle: "Jobs & Learning Opportunities",
        points: [
          "Provide jobs based on elders' knowledge and skills.",
          "Teach them online earning platforms."
        ]
      },
      {
        subtitle: "Financial Management",
        points: [
          "Avoid placing elders in debt. (Financial and family/council benefit.)",
          "IT platforms can provide donations and financial support.",
          "Connect younger generations and other contributors for direct online support."
        ]
      }
    ]
  },
  {
    title: "Emotional, Physical, & Social Support",
    icon: Heart,
    sections: [
      {
        subtitle: "Family, Friends & Volunteers",
        points: [
          "Connect elders to their families, friends, volunteers, and students.",
          "They can provide support emotionally, physically, or financially."
        ]
      },
      {
        subtitle: "Daily Support",
        points: [
          "Daily activities for elders like yoga, exercise, meditation.",
          "Surprise elements for joy and happiness."
        ]
      },
      {
        subtitle: "Interaction & Communication",
        points: [
          "Include video calls and direct chats.",
          "Students can attend sessions and provide support.",
          "Help with teaching digital skills."
        ]
      }
    ]
  },
  {
    title: "Learning/Work",
    icon: GraduationCap,
    sections: [
      {
        subtitle: "Job Opportunities",
        points: [
          "Provide job opportunities based on expertise.",
          "Create teaching and earning platforms.",
          "Build elder contributions through products/services.",
          "Support through direct platforms and IT connections."
        ]
      }
    ]
  },
  {
    title: "IoT & AI Services",
    icon: Cpu,
    sections: [
      {
        subtitle: "IoT Devices",
        points: [
          "Connect IoT devices to monitor daily activities.",
          "Track health and emergency requirements."
        ]
      },
      {
        subtitle: "AI Integration",
        points: [
          "AI assistance for financial, health, and emotional needs.",
          "Handle medication, appointments, and emergencies."
        ]
      },
      {
        subtitle: "Security & Controls",
        points: [
          "SOS integration for emergency services.",
          "Secure connections and data exchanges.",
          "Comprehensive admin controls."
        ]
      }
    ]
  }
] as const;