import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

/**
 * ProjectDetail Component
 * 
 * Displays detailed information about a specific project:
 * - Project title and description
 * - Full-size project image
 * - Technologies used
 * - Live demo and source code links
 * 
 * Features:
 * - Responsive layout
 * - Dark mode support
 * - Navigation back to projects
 * - Error handling for invalid project IDs
 */
function ProjectDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const projects = data[language]?.projectsSection.items;
  const project = projects?.[parseInt(id)];

  // Handle invalid project ID
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Project not found
          </h2>
          <Link 
            to="/" 
            className="text-[#E92577] hover:underline"
            aria-label="Return to homepage"
          >
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Back navigation */}
        <Link 
          to="/" 
          className="text-[#E92577] hover:underline mb-8 inline-block"
          aria-label="Back to projects list"
        >
          ← Back to projects
        </Link>
        
        {/* Project details card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Project image */}
          <img 
            src={project.image} 
            alt={`${project.title} preview`}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            {/* Project title */}
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
              {project.title}
            </h1>
            
            {/* Project description */}
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>
            
            {/* Technologies section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-[#E92577] text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E92577] text-white px-6 py-2 rounded-lg hover:bg-[#d01c68] transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                View Live Demo
              </a>
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label={`View source code of ${project.title}`}
              >
                View Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;