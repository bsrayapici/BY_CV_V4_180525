import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

/**
 * Footer Component
 * 
 * Displays the contact section with:
 * - Call-to-action message
 * - Social media links
 * - Contact information
 * 
 * Features:
 * - Responsive layout
 * - Bilingual support
 * - Animated text highlight
 * - Dark mode compatibility
 */
function Footer() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  // Define text content based on language
  const firstLineStart = isEnglish
    ? "Let's"
    : "Bir sonraki ürününüzde";

  const highlighted = isEnglish
    ? "work together"
    : "birlikte";

  const firstLineEnd = isEnglish
    ? "on"
    : "";

  const secondLine = isEnglish
    ? "your next product."
    : "çalışalım.";

  return (
    <footer className="relative w-full px-4 md:px-8 lg:px-16 py-20 flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
      {/* Call to action text */}
      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white flex flex-col items-center md:items-start text-center md:text-left leading-snug">
        {/* First line with highlight */}
        <div className="relative inline-block">
          <span>{firstLineStart} </span>
          <span className="inline-block border-b-[15px] border-[#93d0f4] mx-1 rounded-[8px] pb-0 leading-[0.3]">
            {highlighted}
          </span>
          {firstLineEnd && <span> {firstLineEnd}</span>}
        </div>

        {/* Second line */}
        <span>{secondLine}</span>
      </div>

      {/* Social and contact links */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#4078c0] hover:underline"
          aria-label="Visit GitHub profile"
        >
          Github
        </a>
        <a 
          href="https://blog.example.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:underline"
          aria-label="Read personal blog"
        >
          Personal Blog
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#0077b5] hover:underline"
          aria-label="Connect on LinkedIn"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:example@email.com" 
          className="text-[#d14836] hover:underline"
          aria-label="Send email"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;