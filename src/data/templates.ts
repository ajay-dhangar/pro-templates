import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'next-commerce',
    title: 'Next.js E-commerce',
    description: 'A modern e-commerce template built with Next.js, Tailwind CSS, and Stripe',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    category: 'e-commerce',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'TypeScript'],
    stars: 1250,
    downloads: 5678,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    demoUrl: 'https://demo.example.com/next-commerce',
    longDescription: 'A complete e-commerce solution built with Next.js and integrated with Stripe for payments. This template provides everything you need to launch your online store, including product management, shopping cart, checkout process, and order management.',
    features: [
      'Product catalog with categories',
      'Shopping cart functionality',
      'Secure checkout with Stripe',
      'Order management system',
      'User authentication',
      'Admin dashboard'
    ],
    useCases: [
      'Online retail stores',
      'Digital product marketplaces',
      'Subscription-based services',
      'Restaurant ordering systems'
    ],
    requirements: [
      'Node.js 16 or higher',
      'NPM or Yarn package manager',
      'Stripe account for payments'
    ],
    installation: [
      'Clone the repository',
      'Install dependencies with npm install',
      'Set up environment variables',
      'Run npm run dev to start development server'
    ]
  },
  {
    id: 'react-dashboard',
    title: 'React Analytics Dashboard',
    description: 'Professional dashboard template with charts, analytics, and admin features',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    category: 'frontend',
    tags: ['React', 'Dashboard', 'Analytics', 'Charts'],
    stars: 890,
    downloads: 3421,
    author: {
      name: 'Alex Morgan',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    demoUrl: 'https://demo.example.com/react-dashboard',
    longDescription: 'A comprehensive dashboard template built with React and TypeScript, featuring interactive charts, data visualization, and a complete admin interface. Perfect for building analytics platforms, admin panels, and monitoring systems.',
    features: [
      'Interactive data charts',
      'Real-time data updates',
      'Customizable widgets',
      'Dark/Light theme support',
      'Responsive design'
    ],
    useCases: [
      'Business analytics platforms',
      'Admin dashboards',
      'Monitoring systems',
      'Data visualization tools'
    ],
    requirements: [
      'Node.js 14 or higher',
      'Basic knowledge of React',
      'Familiarity with TypeScript'
    ],
    installation: [
      'Clone the repository',
      'Run npm install',
      'Configure environment variables',
      'Start development server with npm run dev'
    ]
  },
  {
    id: 'fullstack-saas',
    title: 'SaaS Starter Kit',
    description: 'Complete SaaS boilerplate with authentication, billing, and user management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    category: 'fullstack',
    tags: ['SaaS', 'Authentication', 'Billing', 'Dashboard'],
    stars: 2100,
    downloads: 7890,
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=150'
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Stripe'],
    demoUrl: 'https://demo.example.com/saas-starter',
    longDescription: 'A production-ready SaaS starter kit that includes everything you need to launch your software as a service. Features include authentication, subscription billing, user management, and a responsive dashboard.',
    features: [
      'User authentication and authorization',
      'Subscription management',
      'Team collaboration',
      'API rate limiting',
      'Email notifications',
      'Analytics dashboard'
    ],
    useCases: [
      'SaaS applications',
      'Subscription-based services',
      'Team collaboration tools',
      'Enterprise software'
    ],
    requirements: [
      'Node.js 16 or higher',
      'PostgreSQL database',
      'Stripe account for billing',
      'SendGrid for emails'
    ],
    installation: [
      'Clone the repository',
      'Install dependencies',
      'Set up database',
      'Configure environment variables',
      'Run migrations',
      'Start development server'
    ]
  }
];