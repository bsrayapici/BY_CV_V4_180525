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
    <section className="min-h-[350px] py-20 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-[#0A0A14] relative overflow-visible">
      {/* Pink decorative circle */}
      <div aria-hidden="true"></div>
      <div
        className="absolute right-[-60px] bottom-[-70px] w-[160px] h-[160px] rounded-full border-[24px] border-[#E92577]"
      ></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-black dark:text-white">
          {profile.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Basic Information */}
        <div className="bg-white dark:bg-[#0a0a0a] rounded-3xl p-6 md:p-8 shadow-2xl">
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
        <div className="p-6 md:p-8 shadow-none text-gray-700 dark:text-gray-300">
        <h3 className="relative text-2xl font-normal font-[Playfair_Display] text-black inline-block">
  <span className="relative z-10">About me</span> <br></br> <br></br> 
  <div className="absolute left-[-10px]  top-[17px] w-[80px] h-[18px] bg-sky-200 rounded-[12px] z-0"></div>
</h3>
  <div className="space-y-4 md:space-y-6 text-sm leading-relaxed">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
    </p>
    <br></br>
    <p>
      Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!
    </p>
    <br></br>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

export default Profile;