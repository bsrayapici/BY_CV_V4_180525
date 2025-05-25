import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

import profileImage from '../assets/profile-image.jpg';
import ellipse10 from '../assets/Ellipse 10.png';

/**
 * HeroSection Component
 * 
 * Main landing section featuring:
 * - Personal introduction
 * - Profile image with custom styling
 * - Social media links
 * - Call-to-action message
 * 
 * Features:
 * - Responsive layout
 * - Dark mode support
 * - Bilingual content
 * - Decorative elements
 * - Accessible images and links
 * - Performance optimized images
 * 
 * @component
 */
const HeroSection = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const hero = data[language].heroSection;

  return (
    <section 
      className="relative w-full h-full py-12 md:py-20 overflow-hidden bg-[#F4F4F4] dark:bg-[#0A0A14] text-black dark:text-white px-4 md:px-8 lg:px-16"
      aria-labelledby="hero-title"
    >
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="absolute right-0 bottom-[25px] w-[32px] h-[16px] sm:w-[40px] sm:h-[20px] md:w-[60px] md:h-[35px] bg-[#EA2678] rounded-r-full rotate-180"
      />

      <img
        src={ellipse10}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute w-[160px] h-[120px] left-[421px] top-[-45px]"
        loading="lazy"
        fetchPriority="low"
      />

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
          <h2 
            id="hero-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            {hero.greeting}
          </h2>

          {/* Introduction with highlight */}
          <div className="relative inline-block">
            <div
              aria-hidden="true"
              className="absolute left-0 top-[24px] w-[140px] h-[22px] bg-[#E92577] rounded-[12px] z-0"
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight relative z-10">
              {hero.intro}
            </h2>
          </div>

          {/* Social Media Links */}
          <nav 
            className="flex justify-center lg:justify-start gap-6"
            aria-label="Social media links"
          >
            {hero.socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#E92577] focus:ring-offset-2 rounded-lg"
                aria-label={`Visit my ${item.alt_text} profile`}
              >
                <img
                  src={theme === 'dark' && item.logoDark ? item.logoDark : item.logo}
                  alt=""
                  className="w-6 md:w-8 h-6 md:h-8"
                  loading="lazy"
                  fetchPriority="low"
                  aria-hidden="true"
                />
                <span className="sr-only">{item.alt_text}</span>
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div 
            className="text-base md:text-lg mb-8 mt-2"
            dangerouslySetInnerHTML={{ __html: hero.ctaHTML }}
          />
        </div>

        {/* Profile Image */}
        <div className="relative w-[260px] md:w-[320px] h-[260px] md:h-[320px]">
          <div 
            className="w-full h-full bg-[#E92577] rounded-[32px]"
            aria-hidden="true"
          />
          <img
            src={profileImage}
            alt="Profile photo"
            className="absolute w-[257px] md:w-[317px] h-[257px] md:h-[317px] object-cover rounded-[22px]"
            style={{
              left: '50%',
              top: '30px',
              transform: 'translateX(-50%)',
            }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;