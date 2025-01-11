import { Users, Phone, BarChart3, Heart } from 'lucide-react';
import { ResearchItem } from '../types';

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