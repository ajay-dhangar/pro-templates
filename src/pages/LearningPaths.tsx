import React, { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import { learningPaths } from '../data/learningPaths';
import LearningPathCard from '../components/LearningPathCard';
import Header from '../components/Header';

const levels = ['all', 'beginner', 'intermediate', 'advanced'];

export default function LearningPaths() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredPaths = learningPaths.filter((path) => {
    const matchesSearch = path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || path.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learning Paths
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Follow structured learning paths to master web development from beginner to advanced
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search learning paths..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl shadow-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Level Filter */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
          <Filter className="h-5 w-5 text-gray-400" />
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
                ${selectedLevel === level
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }
              `}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        {/* Learning Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaths.map((path) => (
            <LearningPathCard
              key={path.id}
              path={path}
              onClick={() => console.log('Navigate to path:', path.id)}
            />
          ))}
        </div>

        {filteredPaths.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No learning paths found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
}