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
    <section className="relative w-full min-h-screen bg-[#F4F4F4] dark:bg-[#0A0A14] text-black dark:text-white px-4 md:px-8 lg:px-16 overflow-visible">
      {/* Decorative pink rectangle (dokunulmadı) */}
      <div
        aria-hidden="false"
        className="absolute w-[217px] h-[59px] left-[1316px] top-[636px] bg-[#EA2678] rounded-[29.5px]"
      />

      {/* Decorative circle top-left */}
      <img
        src={ellipse10}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute w-[160px] h-[120px] left-[421px] top-[-45px]"
      />

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-20 lg:pt-32 gap-12">
        {/* Left: Text */}
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

          <p
            className="text-base md:text-lg mb-8 mt-2"
            dangerouslySetInnerHTML={{ __html: hero.ctaHTML }}
          />

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
        </div>

        {/* Right: Image + background */}
        <div className="relative w-[280px] md:w-[344px] h-[280px] md:h-[343px]">
          <div className="w-full h-full bg-[#E92577] rounded-[32px]" />
          <img
            src={profileImage}
            alt="profile"
            className="absolute w-[277px] md:w-[341px] h-[277px] md:h-[341px] object-cover rounded-[22px]"
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