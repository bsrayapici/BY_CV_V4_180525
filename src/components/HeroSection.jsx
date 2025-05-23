import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

import profileImage from '../assets/profile-image.jpg';
import ellipse10 from '../assets/Ellipse 10.png';

const HeroSection = () => {
  const { language } = useLanguage();
  const hero = data[language].heroSection;

  return (
    <section className="relative w-full h-full py-12 md:py-20 overflow-hidden bg-[#F4F4F4] dark:bg-[#0A0A14] text-black dark:text-white px-4 md:px-8 lg:px-16">
      
      {/* 🎯 Pink rectangle - centered to profile image */}
      <div
  aria-hidden="true"
  className="absolute right-0 bottom-[25px] w-[32px] h-[16px] sm:w-[40px] sm:h-[20px] md:w-[60px] md:h-[24px] bg-[#EA2678] rounded-r-full rotate-180"
></div>

      {/* 🎯 Decorative circle top-left */}
      <img
        src={ellipse10}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute w-[160px] h-[120px] left-[421px] top-[-45px]"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {hero.greeting}
          </h1>

          <div className="relative inline-block">
            <div
              aria-hidden="true"
              className="absolute left-0 top-[24px] w-[140px] h-[22px] bg-[#E92577] rounded-[12px] z-0"
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight relative z-10">
              {hero.intro}
            </h2>
          </div>

          <div className="flex justify-center lg:justify-start gap-6">
            {hero.socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={item.logo}
                  alt={item.alt_text}
                  className="w-6 md:w-8 h-6 md:h-8"
                />
              </a>
            ))}
          </div>

          <p
            className="text-base md:text-lg mb-8 mt-2"
            dangerouslySetInnerHTML={{ __html: hero.ctaHTML }}
          />
        </div>

        {/* Right Side: Profile Image in Pink Box */}
        <div className="relative w-[260px] md:w-[320px] h-[260px] md:h-[320px]">
          <div className="w-full h-full bg-[#E92577] rounded-[32px]" />
          <img
            src={profileImage}
            alt="profile"
            className="absolute w-[257px] md:w-[317px] h-[257px] md:h-[317px] object-cover rounded-[22px]"
            style={{
              left: '50%',
              top: '30px',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;