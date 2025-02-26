export interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'frontend' | 'fullstack' | 'backend' | 'e-commerce' | 'other';
  tags: string[];
  stars: number;
  downloads: number;
  author: {
    name: string;
    avatar: string;
  };
  technologies: string[];
  demoUrl?: string;
  longDescription?: string;
  features?: string[];
  useCases?: string[];
  requirements?: string[];
  installation?: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  image: string;
  topics: string[];
  templates: string[];
  progress?: number;
  chapters: {
    id: string;
    title: string;
    description: string;
    duration: string;
    completed?: boolean;
  }[];
}