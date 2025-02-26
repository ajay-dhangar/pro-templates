import React from 'react';

const categories = [
  { id: 'all', label: 'All Templates', icon: '📚' },
  { id: 'frontend', label: 'Frontend', icon: '🎨' },
  { id: 'fullstack', label: 'Full Stack', icon: '⚡' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'e-commerce', label: 'E-commerce', icon: '🛍️' },
  { id: 'other', label: 'Other', icon: '🔧' },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all
            ${selectedCategory === category.id
              ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }
          `}
        >
          <span>{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
}