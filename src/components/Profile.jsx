import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

/**
 * Profile Component
 * 
 * Displays professional experience and education in a two-column layout:
 * - Left column: Work experience timeline
 * - Right column: Educational background
 * 
 * Features:
 * - Responsive grid layout
 * - Dark mode support
 * - Decorative elements
 * - Bilingual content
 * - Semantic HTML structure
 * - Accessible headings and content
 * 
 * @component
 * @example
 * return (
 *   <Profile />
 * )
 */
function Profile() {
  const { language } = useLanguage();
  const profile = data[language]?.profileSection;

  if (!profile) return null;

  return (
    <section 
      className="min-h-[350px] py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-[#0A0A14] relative overflow-visible"
      aria-labelledby="profile-title"
    >
      {/* Decorative circle */}
      <div
        className="absolute right-[-60px] bottom-[-70px] w-[160px] h-[160px] rounded-full border-[24px] border-[#E92577]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 
          id="profile-title"
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white"
        >
          {profile.title}
        </h2>

        {/* Experience and Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Experience Card */}
          <section 
            className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-6 md:p-8 shadow-2xl"
            aria-labelledby="experience-title"
          >
            <h3 
              id="experience-title"
              className="text-xl md:text-2xl font-bold text-[#E92577] mb-6 md:mb-8"
            >
              {profile.experience.title}
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {profile.experience.items.map((exp, i) => (
                <li
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4"
                >
                  <div className="font-medium text-gray-600 dark:text-gray-300">
                    <span className="block">{exp.role}</span>
                    <span className="block text-sm">{exp.company}</span>
                  </div>
                  <time 
                    className="text-black dark:text-white"
                    dateTime={exp.period.replace(' - ', '/')}
                  >
                    {exp.period}
                  </time>
                </li>
              ))}
            </ul>
          </section>

          {/* Education Card */}
          <section 
            className="p-6 md:p-8 text-gray-700 dark:text-gray-300"
            aria-labelledby="education-title"
          >
            <h3 
              id="education-title"
              className="relative text-2xl font-normal font-[Playfair_Display] text-black dark:text-white inline-block"
            >
              <span className="relative z-10">{profile.education.title}</span>
              <div 
                className="absolute left-[-10px] top-[17px] w-[80px] h-[18px] bg-sky-200 rounded-[12px] z-0"
                aria-hidden="true"
              />
            </h3>
            <ul className="space-y-4 md:space-y-6 text-sm leading-relaxed mt-6">
              {profile.education.items.map((edu, i) => (
                <li key={i}>
                  <div className="font-medium">
                    <span className="block">{edu.degree}</span>
                    <span className="block">{edu.school}</span>
                  </div>
                  <time 
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={edu.period.replace(' - ', '/')}
                  >
                    {edu.period}
                  </time>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Profile;