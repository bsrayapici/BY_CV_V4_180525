import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

function ProjectDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const projects = data[language]?.projectsSection.items;
  const project = projects[parseInt(id)];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Project not found</h2>
          <Link to="/" className="text-[#E92577] hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-[#E92577] hover:underline mb-8 inline-block">
          ← Back to projects
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
              {project.title}
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>
            
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
            
            <div className="flex gap-4">
              <a 
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="bg-[#E92577] text-white px-6 py-2 rounded-lg hover:bg-[#d01c68] transition-colors"
              >
                View Live Demo
              </a>
              <a 
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
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