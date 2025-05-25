import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

function Skills() {
  const { language } = useLanguage();
  const skills = data[language].skillsSection;

  return (
    <section className="min-h-[350px] py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-[#2a3141] relative overflow-visible">
      {/* ✅ Sol altta yarım oval şekil */}
      <div
        aria-hidden="true"
        className="absolute left-0 bottom-[25px] w-[32px] h-[16px] sm:w-[40px] sm:h-[20px] md:w-[60px] md:h-[35px] bg-[#525252] rounded-r-full"
      ></div>
      
      {/* Light gray circle in the top-right */}
      <div 
        aria-hidden="true"
        className="absolute right-[300px] top-[-50px] w-[60px] md:w-[120px] h-[60px] md:h-[120px] border-[12px] md:border-[24px] border-gray dark:border-gray-700 rounded-full"
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-black dark:text-white">
          {skills.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-16 justify-items-center">
          {skills.skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-6 transform transition-transform hover:scale-110"
            >
              <div className="w-24 md:w-32 h-24 md:h-32 flex items-center justify-center p-4 md:p-6">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg md:text-xl font-medium text-black dark:text-white">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;