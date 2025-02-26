import React from 'react';
import { Clock, BookOpen, ArrowRight, BarChart } from 'lucide-react';
import { LearningPath } from '../types';

interface LearningPathCardProps {
  path: LearningPath;
  onClick: () => void;
}

const getLevelColor = (level: string) => {
  switch (level) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-blue-100 text-blue-800';
    case 'advanced':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function LearningPathCard({ path, onClick }: LearningPathCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden">
      <div className="aspect-[2/1] w-full overflow-hidden">
        <img
          src={path.image}
          alt={path.title}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(path.level)}`}>
            {path.level.charAt(0).toUpperCase() + path.level.slice(1)}
          </span>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            {path.duration}
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">{path.title}</h3>
        <p className="text-gray-600 mb-4">{path.description}</p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen className="h-4 w-4" />
            <span>{path.chapters.length} Chapters</span>
          </div>
          
          {path.progress !== undefined && (
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{path.progress}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all"
                  style={{ width: `${path.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {path.topics.map((topic) => (
            <span
              key={topic}
              className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {topic}
            </span>
          ))}
        </div>

        <button
          onClick={onClick}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Start Learning
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}