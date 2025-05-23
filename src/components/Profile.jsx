import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

function Profile() {
  const { language } = useLanguage();
  const profile = data[language]?.profileSection;

  if (!profile) return null;

  return (
    <section className="min-h-[350px] py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-[#0A0A14] relative overflow-visible">
      <div aria-hidden="true"></div>
      <div
        className="absolute right-[-60px] bottom-[-70px] w-[160px] h-[160px] rounded-full border-[24px] border-[#E92577]"
      ></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white">
          {profile.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Experience */}
          <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-bold text-[#E92577] mb-6 md:mb-8">
              {profile.experience.title}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {profile.experience.items.map((exp, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4"
                >
                  <span className="font-medium text-gray-600 dark:text-gray-300">
                    {exp.role} at {exp.company}
                  </span>
                  <span className="text-black dark:text-white">{exp.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="p-6 md:p-8 text-gray-700 dark:text-gray-300">
          <h3 className="relative text-2xl font-normal font-[Playfair_Display] text-black dark:text-white inline-block">              <span className="relative z-10">{profile.education.title}</span>
              <div className="absolute left-[-10px] top-[17px] w-[80px] h-[18px] bg-sky-200 rounded-[12px] z-0"></div>
            </h3>
            <div className="space-y-4 md:space-y-6 text-sm leading-relaxed">
              {profile.education.items.map((edu, i) => (
                <div key={i}>
                  <p className="font-medium">
                    {edu.degree}, {edu.school}
                  </p>
                  <p>{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;