import React from 'react';
import { ArrowLeft, Star, Download, ExternalLink, Play } from 'lucide-react';
import { Template } from '../types';

interface TemplateDetailsProps {
  template: Template;
  onBack: () => void;
}

export default function TemplateDetails({ template, onBack }: TemplateDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to templates
        </button>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={template.image}
                  alt={template.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <h1 className="text-3xl font-bold">{template.title}</h1>
                <p className="mt-2 text-lg text-gray-600">{template.description}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="mt-2 text-gray-600">{template.longDescription}</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">Features</h2>
                <ul className="mt-2 list-inside list-disc space-y-2 text-gray-600">
                  {template.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold">Use Cases</h2>
                <ul className="mt-2 list-inside list-disc space-y-2 text-gray-600">
                  {template.useCases?.map((useCase, index) => (
                    <li key={index}>{useCase}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={template.author.avatar}
                    alt={template.author.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{template.author.name}</p>
                    <p className="text-sm text-gray-600">Template Creator</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-b py-3">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="font-medium">{template.stars}</span>
                  <span className="text-gray-600">stars</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="h-5 w-5 text-gray-400" />
                  <span className="font-medium">{template.downloads}</span>
                  <span className="text-gray-600">downloads</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {template.demoUrl && (
                  <a
                    href={template.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800"
                  >
                    <Play className="h-4 w-4" />
                    Live Preview
                  </a>
                )}
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  <Download className="h-4 w-4" />
                  Download Template
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="font-semibold">Requirements</h2>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {template.requirements?.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="font-semibold">Installation</h2>
              <ol className="mt-3 list-decimal space-y-2 text-sm text-gray-600">
                {template.installation?.map((step, index) => (
                  <li key={index} className="ml-4">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}