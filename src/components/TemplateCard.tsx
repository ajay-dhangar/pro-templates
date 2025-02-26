import React from 'react';
import { Star, Download, ExternalLink, Info, Play, Clock } from 'lucide-react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onClick: () => void;
}

export default function TemplateCard({ template, onClick }: TemplateCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-lg overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-2 bg-black/75 backdrop-blur-sm rounded-full px-3 py-1.5">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="text-sm font-medium text-white">{template.stars}</span>
        </div>
      </div>

      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={template.image}
          alt={template.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              {template.title}
            </h3>
            <p className="text-gray-600 line-clamp-2">{template.description}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>2-4 hours</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Download className="h-4 w-4" />
            <span>{template.downloads} downloads</span>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {template.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              {tech}
            </span>
          ))}
          {template.technologies.length > 3 && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              +{template.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img
                src={template.author.avatar}
                alt={template.author.name}
                className="h-8 w-8 rounded-full ring-2 ring-white"
              />
              <div>
                <p className="text-sm font-medium">{template.author.name}</p>
                <p className="text-xs text-gray-600">Instructor</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onClick}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Info className="h-4 w-4" />
              View Details
            </button>
            {template.demoUrl ? (
              <a
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                <Play className="h-4 w-4" />
                Live Preview
              </a>
            ) : (
              <button
                disabled
                className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed"
              >
                <Play className="h-4 w-4" />
                Preview N/A
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}