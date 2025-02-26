import React from 'react';
import { Search, Github, BookOpen, Menu } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: 'templates' | 'learning-paths') => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">EduTemplates</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => onNavigate?.('templates')}
                className="text-gray-600 hover:text-gray-900"
              >
                Templates
              </button>
              <button
                onClick={() => onNavigate?.('learning-paths')}
                className="text-gray-600 hover:text-gray-900"
              >
                Learning Paths
              </button>
              <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Sign In</a>
              <a
                href="#"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
            </div>
            
            <a
              href="https://github.com"
              className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <Github className="h-5 w-5" />
            </a>

            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}