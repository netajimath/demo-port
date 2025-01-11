import { LucideIcon } from 'lucide-react';

export interface FindingCategory {
  title: string;
  icon: LucideIcon;
  findings: readonly string[];
}