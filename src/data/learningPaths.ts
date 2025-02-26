import { LearningPath } from '../types';

export const learningPaths: LearningPath[] = [
  {
    id: 'frontend-fundamentals',
    title: 'Frontend Development Fundamentals',
    description: 'Master the core concepts of modern frontend development with React and TypeScript',
    level: 'beginner',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&q=80&w=1000',
    topics: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Responsive Design'],
    templates: ['react-dashboard', 'next-commerce'],
    progress: 0,
    chapters: [
      {
        id: 'html-css',
        title: 'HTML & CSS Foundations',
        description: 'Learn the building blocks of web development',
        duration: '2 weeks',
        completed: false
      },
      {
        id: 'javascript',
        title: 'JavaScript Essentials',
        description: 'Master modern JavaScript programming',
        duration: '2 weeks',
        completed: false
      },
      {
        id: 'react-basics',
        title: 'React Fundamentals',
        description: 'Build interactive UIs with React',
        duration: '2 weeks',
        completed: false
      },
      {
        id: 'typescript',
        title: 'TypeScript in Practice',
        description: 'Add type safety to your applications',
        duration: '2 weeks',
        completed: false
      }
    ]
  },
  {
    id: 'fullstack-master',
    title: 'Full Stack Development',
    description: 'Build complete web applications from frontend to backend',
    level: 'intermediate',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&q=80&w=1000',
    topics: ['Node.js', 'Express', 'MongoDB', 'API Design', 'Authentication', 'Deployment'],
    templates: ['fullstack-saas'],
    progress: 0,
    chapters: [
      {
        id: 'backend-basics',
        title: 'Backend Development Basics',
        description: 'Learn server-side programming with Node.js',
        duration: '3 weeks',
        completed: false
      },
      {
        id: 'database-design',
        title: 'Database Design & Implementation',
        description: 'Master database concepts and MongoDB',
        duration: '3 weeks',
        completed: false
      },
      {
        id: 'api-development',
        title: 'API Development',
        description: 'Build robust RESTful APIs',
        duration: '3 weeks',
        completed: false
      },
      {
        id: 'deployment',
        title: 'Deployment & DevOps',
        description: 'Deploy and maintain web applications',
        duration: '3 weeks',
        completed: false
      }
    ]
  },
  {
    id: 'advanced-frontend',
    title: 'Advanced Frontend Architecture',
    description: 'Learn advanced patterns and optimizations for complex frontend applications',
    level: 'advanced',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=1000',
    topics: ['Performance', 'State Management', 'Testing', 'Micro-frontends', 'Architecture'],
    templates: ['react-dashboard'],
    progress: 0,
    chapters: [
      {
        id: 'performance',
        title: 'Frontend Performance',
        description: 'Optimize React applications for speed',
        duration: '2 weeks',
        completed: false
      },
      {
        id: 'state-management',
        title: 'Advanced State Management',
        description: 'Master complex state patterns',
        duration: '3 weeks',
        completed: false
      },
      {
        id: 'testing',
        title: 'Testing Strategies',
        description: 'Implement comprehensive testing',
        duration: '2 weeks',
        completed: false
      },
      {
        id: 'architecture',
        title: 'Scalable Architecture',
        description: 'Design large-scale applications',
        duration: '3 weeks',
        completed: false
      }
    ]
  }
];