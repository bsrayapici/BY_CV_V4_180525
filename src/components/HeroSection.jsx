import React from 'react';
// Theme context hook for dark/light mode functionality
import { useTheme } from '../contexts/ThemeContext';
// Language context hook for multilingual support
import { useLanguage } from '../contexts/LanguageContext';
// Static content data for different languages
import { data } from '../constants/data';
// Import profile image and decorative elements
import profileImage from '../assets/profile-image.jpg';
import ellipse10 from '../assets/Ellipse 10.png';

/**
 * HeroSection Component
 * 
 * This component serves as the main landing section of the portfolio website.
 * It includes:
 * - Greeting and introduction text
 * - Social media links
 * - Profile image
 * - Decorative elements
 * 
 * Features:
 * - Responsive design
 * - Dark mode support
 * - Bilingual content
 * - Decorative elements for visual interest
 */
const HeroSection = () => {
  // Get current language from LanguageContext
  const { language } = useLanguage();
  // Get content data for current language
  const hero = data[language].heroSection;

  return (
    // Main section container with responsive padding and overflow control
    <section className="relative w-full min-h-screen bg-[#F4F4F4] dark:bg-[#0A0A14] text-black dark:text-white p-4 md:p-8 lg:p-16 overflow-hidden">
      {/* Decorative pink rectangle - absolute positioned */}
      <div 
        aria-hidden="true" // Hide from screen readers as it's decorative
        className="absolute w-[217px] h-[59px] left-[1316px] top-[636px] bg-[#EA2678] rounded-[29.5px]" 
      />

      {/* Decorative circle elements */}
      <img
        src={ellipse10}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute w-[160px] h-[120px] left-[421px] top-[-45px]"
      
      />
      <div 
        aria-hidden="true"
        //className="hidden md:block absolute w-[121px] h-[121px] left-[80%] top-[90%] border-[21px] border-[#D9D9D9] rounded-full" 
      />

      {/* Main content container with responsive flex layout */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto pt-20 lg:pt-32">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative z-10">
          {/* Greeting text */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {hero.greeting}
          </h1>
          
          {/* Introduction with decorative background */}
          <div className="relative">
            {/* Pink background strip for text highlight */}
            <div 
              aria-hidden="true"
             className="absolute left-0 top-[24px] w-[140px] h-[22px] bg-[#E92577] rounded-[12px] z-0" 
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight relative z-10">
              {hero.intro}
            </h2>
          </div>

          {/* CTA text with HTML content */}
          <p
            className="text-base md:text-lg mb-8"
            dangerouslySetInnerHTML={{ __html: hero.ctaHTML }}
          />

          {/* Social media links */}
          <div className="flex gap-6">
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

        {/* Right side - Profile image with pink background */}
        <div className="relative w-full lg:w-auto">
          {/* Pink background rectangle */}
          <div 
            aria-hidden="true"
            className="w-[280px] md:w-[344px] h-[280px] md:h-[343px] bg-[#E92577] rounded-[32px] mx-auto" 
          />
          {/* Profile image with absolute positioning */}
          <img
            src={profileImage}
            alt="profile"
           className="absolute w-[277px] md:w-[341px] h-[277px] md:h-[341px] object-cover rounded-[22px]"
            style={{ 
              left: '50%', 
              top: '30px',
              transform: 'translateX(-50%)' // Center horizontally
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;