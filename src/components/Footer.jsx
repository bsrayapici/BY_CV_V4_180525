import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

/**
 * Footer Component
 * 
 * Displays the contact section featuring:
 * - Animated call-to-action message
 * - Social media links
 * - Contact information
 * 
 * Features:
 * - Responsive layout
 * - Bilingual support
 * - Animated text highlight
 * - Dark mode compatibility
 * - Accessible links and content
 * 
 * @component
 */
function Footer() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

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
      {/* Call to action heading */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white flex flex-col items-center md:items-start text-center md:text-left leading-snug">
        <span className="relative inline-block">
          <span>{firstLineStart} </span>
          <span className="inline-block relative">
            <span className="relative z-10">{highlighted}</span>
            <span 
              className="absolute bottom-0 left-0 w-full h-[15px] bg-[#93d0f4] rounded-[8px] z-0" 
              aria-hidden="true"
            />
          </span>
          {firstLineEnd && <span> {firstLineEnd}</span>}
        </span>
        <span>{secondLine}</span>
      </h2>

      {/* Social and contact links */}
      <nav className="flex flex-col gap-4 items-center md:items-start" aria-label="Social media and contact links">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#4078c0] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4078c0] transition-colors"
          aria-label="Visit my GitHub profile"
        >
          Github
        </a>
        <a 
          href="https://blog.example.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors"
          aria-label="Read my personal blog"
        >
          Personal Blog
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#0077b5] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0077b5] transition-colors"
          aria-label="Connect with me on LinkedIn"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:example@email.com" 
          className="text-[#d14836] hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d14836] transition-colors"
          aria-label="Send me an email"
        >
          Email
        </a>
      </nav>
    </footer>
  );
}

export default Footer;