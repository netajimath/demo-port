import { Shield, Heart, Users } from 'lucide-react';
import { Feature } from '../types';

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