export interface ModelSection {
    type: 'image' | 'content';
    title: string;
    description?: string;
    image?: string;
    icon?: any;
    sections?: {
      subtitle: string;
      points: string[];
    }[];
  }