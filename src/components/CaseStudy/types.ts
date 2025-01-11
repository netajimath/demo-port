import { LucideIcon } from 'lucide-react';

export interface ResearchItem {
  icon: LucideIcon;
  label: string;
  count: number;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  icon: LucideIcon;
  mainText: string;
  tasks: string[];
}