import { LucideIcon } from 'lucide-react';

export interface WorkshopPhase {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface WorkshopOutcome {
  title: string;
  items: string[];
}