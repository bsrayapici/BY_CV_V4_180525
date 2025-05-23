import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../constants/data';

function Footer() {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  // Satırları belirleyelim
  const firstLineStart = isEnglish
    ? "Let’s"
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
      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white flex flex-col items-center md:items-start text-center md:text-left leading-snug">

        {/* 1. Satır */}
        <div className="relative inline-block">
          <span>{firstLineStart} </span>
          <span className="inline-block border-b-[15px] border-[#93d0f4] mx-1 rounded-[8px] pb-0 leading-[0.3]">
            {highlighted}
          </span>
          {firstLineEnd && <span> {firstLineEnd}</span>}
        </div>

        {/* 2. Satır */}
        <span>{secondLine}</span>
      </div>

      {/* Bağlantılar */}
      <div className="flex flex-col gap-4 items-center md:items-start">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#4078c0] hover:underline"
        >
          Github
        </a>
        <a 
          href="https://blog.example.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black dark:text-white hover:underline"
        >
          Personal Blog
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#0077b5] hover:underline"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:example@email.com" 
          className="text-[#d14836] hover:underline"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
export default Footer;