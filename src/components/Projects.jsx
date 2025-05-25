import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

import laptopFrame from '../assets/laptop.png';

/**
 * Projects Component
 * 
 * Displays a grid of project cards with:
 * - Project title and description
 * - Technologies used
 * - Links to GitHub and live demo
 * - Laptop mockup with project screenshot
 * 
 * Features:
 * - Responsive grid layout
 * - Alternating background colors
 * - Custom laptop frame design
 * - Hover effects on links
 * - Bilingual support
 * 
 * @component
 * @example
 * return (
 *   <Projects />
 * )
 */
function Projects() {
  const { language } = useLanguage();
  const projects = data[language]?.projectsSection;

  if (!projects) return null;

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-[#0A0A14]">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black dark:text-white text-center">
          {projects.title}
        </h2>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.items.map((project, index) => (
            <div
              key={index}
              className={`relative w-full h-[700px] ${
                index % 2 === 0 ? 'bg-[#e0f2ff]' : 'bg-[#D9F6F1]'
              } rounded-2xl p-6 shadow-lg`}
            >
              {/* Project information */}
              <h3 className="text-2xl font-bold mb-4 text-black">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white px-4 py-1 rounded-full font-semibold text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="flex justify-between font-semibold text-black">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                  aria-label={`View ${project.title} on Github`}
                >
                  View on Github
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:underline"
                  aria-label={`Go to ${project.title} live demo`}
                >
                  Go to app →
                </a>
              </div>

              {/* Laptop mockup with project screenshot */}
              <div className="absolute left-0 right-0 bottom-1 top-20 translate-y-[40%] w-full pointer-events-none">
                <div className="relative w-full max-w-[500px] mx-auto">
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="absolute top-[1.6%] right-[12.3%] w-[75%] h-[90%] object-fill rounded-md z-10"
                    loading="lazy"
                  />
                  <img
                    src={laptopFrame}
                    alt=""
                    className="relative w-full z-20"
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;