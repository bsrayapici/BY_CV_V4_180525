import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

function Skills() {
  const { language } = useLanguage();
  const skills = data[language].skillsSection;

  return (
<section className="min-h-[350px] py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-[#0A0A14] relative overflow-visible">      {/* Gray decorative element  tonhe left */}
      <div 
        aria-hidden="true"
      
  className="absolute left-0 top-[90%] w-[40px] md:w-[100px] h-[40px] md:h-[80px] bg-gray-600 rounded-r-full transform -translate-y-1/2"
/>
    
      
      {/* Light gray circle in the top-right */}
      <div 
       // aria-hidden="true"
        className="absolute right-[300px] top-[-50px] w-[60px] md:w-[120px] h-[60px] md:h-[120px] border-[12px] md:border-[24px] border-gray-200 dark:border-gray-700 rounded-full"
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white">
          {skills.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-12 justify-items-center">
          {skills.skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-4 transform transition-transform hover:scale-110"
            >
              <div className="w-16 md:w-24 h-16 md:h-24 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center p-3 md:p-4">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-10 md:w-16 h-10 md:h-16 object-contain"
                />
              </div>
              <h3 className="text-xs md:text-sm font-medium text-black dark:text-white uppercase tracking-wider text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;