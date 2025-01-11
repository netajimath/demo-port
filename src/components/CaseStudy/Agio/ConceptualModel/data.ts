import { Stethoscope, Heart, Wallet, GraduationCap, Cpu } from 'lucide-react';
import type { ModelSection } from './types';

export const modelSections: ModelSection[] = [
  {
    type: 'image',
    title: "AGIO Conceptual Overview",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2400",
    description: "A comprehensive platform connecting seniors with healthcare, social support, and community services"
  },
  // ... rest of the sections remain unchanged
  {
    type: 'content',
    icon: Stethoscope,
    title: "Healthcare",
    description: "Comprehensive healthcare management and support system",
    sections: [
      {
        subtitle: "Medical Support",
        points: [
          "24/7 emergency medical assistance",
          "Medication management and reminders",
          "Virtual health consultations",
          "Health history tracking"
        ]
      },
      {
        subtitle: "Wellness Monitoring",
        points: [
          "Regular health check-ins",
          "Vital signs monitoring",
          "Activity tracking",
          "Nutrition guidance"
        ]
      }
    ]
  },
  {
    type: 'content',
    icon: Heart,
    title: "Social Connection",
    description: "Building meaningful relationships and community engagement",
    sections: [
      {
        subtitle: "Community Integration",
        points: [
          "Local event participation",
          "Interest-based group activities",
          "Volunteer opportunities",
          "Social meetups"
        ]
      },
      {
        subtitle: "Family Connection",
        points: [
          "Video calls with family",
          "Photo and message sharing",
          "Family event planning",
          "Activity updates"
        ]
      }
    ]
  },
  {
    type: 'content',
    icon: Wallet,
    title: "Support Services",
    description: "Comprehensive assistance for daily living needs",
    sections: [
      {
        subtitle: "Daily Assistance",
        points: [
          "Transportation services",
          "Grocery delivery",
          "Home maintenance help",
          "Meal preparation support"
        ]
      },
      {
        subtitle: "Financial Management",
        points: [
          "Bill payment reminders",
          "Expense tracking",
          "Financial advice",
          "Secure transactions"
        ]
      }
    ]
  },
  {
    type: 'content',
    icon: GraduationCap,
    title: "Learning & Growth",
    description: "Continuous personal development opportunities",
    sections: [
      {
        subtitle: "Skill Development",
        points: [
          "Technology tutorials",
          "Hobby workshops",
          "Online courses",
          "Creative activities"
        ]
      },
      {
        subtitle: "Knowledge Sharing",
        points: [
          "Mentoring opportunities",
          "Experience sharing",
          "Community teaching",
          "Cultural exchange"
        ]
      }
    ]
  },
  {
    type: 'content',
    icon: Cpu,
    title: "Smart Features",
    description: "AI-powered assistance and automation",
    sections: [
      {
        subtitle: "AI Assistance",
        points: [
          "Voice commands",
          "Smart reminders",
          "Personalized recommendations",
          "Emergency detection"
        ]
      },
      {
        subtitle: "Safety & Security",
        points: [
          "Emergency alerts",
          "Location tracking",
          "Fall detection",
          "Security monitoring"
        ]
      }
    ]
  }
];