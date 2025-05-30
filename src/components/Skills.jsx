import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

function Skills() {
  const { language } = useLanguage();
  const skills = data[language].skillsSection;

  // 🔧 Resim yolunu doğru hale getiren fonksiyon
  const resolveAssetPath = (relativePath) => {
    try {
      return new URL(relativePath, import.meta.url).href;
    } catch (e) {
      console.error('Invalid image path:', relativePath);
      return '';
    }
  };

  return (
    <section className="min-h-[350px] py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-[#2a3141] relative overflow-visible">
      {/* Sol altta oval */}
      <div
        aria-hidden="true"
        className="absolute left-0 bottom-[25px] w-[32px] h-[16px] sm:w-[40px] sm:h-[20px] md:w-[60px] md:h-[35px] bg-[#525252] rounded-r-full"
      ></div>

      {/* Sağ üst daire */}
      <div 
        aria-hidden="true"
        className="absolute right-[300px] top-[-50px] w-[60px] md:w-[120px] h-[60px] md:h-[120px] border-[12px] md:border-[24px] border-gray dark:border-gray-700 rounded-full"
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white">
          {skills.title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-16 justify-items-center">
          {skills.skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-6 transform transition-transform hover:scale-110"
            >
              <div className="w-32 md:w-40 h-32 md:h-40 flex items-center justify-center p-4 md:p-6">
                <img 
                  src={resolveAssetPath(skill.icon)} 
                  alt={skill.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;