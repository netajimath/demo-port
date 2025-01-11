import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  title: string;
  icon: LucideIcon;
  mainText: string;
  tasks: string[];
}