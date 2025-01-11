import { BarChart, Heart, Shield, Smartphone } from 'lucide-react';
import type { FindingCategory } from '../types';

export const FINDINGS_CATEGORIES: FindingCategory[] = [
  {
    title: "Demographics",
    icon: BarChart,
    findings: [
      "1/3 of adults outside old homes live alone (72% men, 42% women as of 2010)",
      "Population aged 65+ will rise from 43.1M (2012) to 83.7M (2050)",
      "Global population aged 65+ will increase from 8.5% to 17% by 2050 (1.6B people)"
    ]
  },
  {
    title: "Social & Emotional",
    icon: Heart,
    findings: [
      "Loss of family and social connections",
      "Emotional/psychological abuse and isolation",
      "8 out of 10 prefer dogs as companions",
      "Need for emotional support and social connections"
    ]
  },
  {
    title: "Healthcare & Support",
    icon: Shield,
    findings: [
      "Challenges with health management and expenses",
      "Limited caregiver availability",
      "Self-neglect in medical care and living conditions",
      "Difficulty maintaining medication schedules"
    ]
  },
  {
    title: "Technology & Independence",
    icon: Smartphone,
    findings: [
      "90% of elders are tech-savvy",
      "Desire for life control but lacking tools",
      "70% face retirement planning challenges",
      "Growing need for digital solutions"
    ]
  }
] as const;