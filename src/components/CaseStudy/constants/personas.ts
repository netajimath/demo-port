import type { Persona } from '../types/persona';

export const PERSONAS: Persona[] = [
  {
    name: "Nicole",
    title: "The Hesitant Planner",
    age: 38,
    location: "USA",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500&h=500",
    personalDetails: "Nicole, a married mom of two, works in HR and has been building her career for 10 years. She envisions a retirement where she's healthy, independent, and comfortable but has yet to start planning. The topic feels overwhelming, and idealized retiree lifestyles seem unattainable.",
    quote: "I fear getting old, getting sick, and depending on someone else—physically and financially.",
    keyInsights: [
      "Avoidance: Aware of the need for retirement planning but lacks financial knowledge to act.",
      "Skepticism: Distrusts retirement products as inadequate.",
      "Fear: Dependency in old age—both physical and financial—is her biggest concern."
    ],
    needs: [
      "Financial Education: Simple guidance on saving, investing, and planning.",
      "Retirement Planning: Help estimating future income to sustain her desired lifestyle.",
      "Independence: Solutions for self-sufficiency in old age (healthcare and finances).",
      "Trustworthy Products: Transparent and flexible retirement options."
    ],
    keyInsight: "Nicole needs clear financial education and tailored plans to turn her retirement fears into a confident future."
  },
  {
    name: "Jonathan",
    title: "The Purposeful Retiree",
    age: 67,
    location: "USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500&h=500",
    personalDetails: "Jonathan, a married father of four, is retired after 40 years of work but continues to work to supplement his pension and stay engaged. While he planned for retirement, his pension isn't enough to maintain his lifestyle, and he fears losing purpose and routine.",
    quote: "If I stop working, I'll miss my challenges and my everyday routine. I don't want to feel useless.",
    keyInsights: [
      "Purpose-Driven: More than finances, he fears losing meaning and daily structure.",
      "Emotional Gaps: Retirement often feels like a loss of relevance and community.",
      "Financial Needs: While he receives a pension, he needs better long-term planning."
    ],
    needs: [
      "Purpose: Opportunities to stay active, connected, and engaged.",
      "Financial Guidance: Support to balance current needs with long-term stability.",
      "Independence: Plans for healthcare and self-sufficiency in old age.",
      "Community: Ways to contribute skills and maintain social connections."
    ],
    keyInsight: "Jonathan's story highlights the need for purpose-driven retirement plans that address both emotional fulfillment and financial security."
  }
];