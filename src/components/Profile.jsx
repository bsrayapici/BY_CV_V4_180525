import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

function Profile() {
  const { language } = useLanguage();
  const profile = data[language]?.profileSection;

  if (!profile) {
    return null;
  }

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white dark:bg-[#0A0A14] relative overflow-hidden">
      {/* Pink decorative circle */}
      <div 
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-[80px] md:w-[160px] h-[80px] md:h-[160px] rounded-full bg-[#E92577] opacity-20"
      />

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white">
          {profile.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Basic Information */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-[#E92577] mb-6 md:mb-8">
              Basic Information
            </h3>
            <div className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                <span className="font-medium text-gray-600 dark:text-gray-300">Birth Date</span>
                <span className="text-black dark:text-white">24.03.1996</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                <span className="font-medium text-gray-600 dark:text-gray-300">Location</span>
                <span className="text-black dark:text-white">Ankara</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                <span className="font-medium text-gray-600 dark:text-gray-300">Education</span>
                <span className="text-black dark:text-white">Hacettepe Ünv. Biyoloji Lisans, 2016</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                <span className="font-medium text-gray-600 dark:text-gray-300">Preferred Role</span>
                <span className="text-black dark:text-white">Frontend, UI</span>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 relative inline-block">
              <span className="relative z-10">About me</span>
              <div className="absolute -z-10 left-0 right-0 bottom-0 h-3 bg-[#7aaef3] opacity-50"></div>
            </h3>
            <div className="space-y-4 md:space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
              </p>
              <p>
                Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;