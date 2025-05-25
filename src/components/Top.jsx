// Import context hooks for language and theme management
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

function Top() {
  // Get language control functions from context
  const { language, setLanguage } = useLanguage();
  // Get theme control functions from context
  const { darkMode, toggleTheme } = useTheme();

  return (
    // Fixed navigation bar at the top right
    <div className="fixed top-0 right-0 p-6 flex items-center gap-4 z-50">
      <div className="flex items-center gap-2">
        {/* Theme toggle switch */}
        <div className="flex items-center gap-2">
          {/* Switch container */}
          <div
            className={`w-14 h-7 flex items-center ${
              darkMode ? 'bg-[#E92577]' : 'bg-gray-200'
            } rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out`}
            onClick={toggleTheme}
          >
            {/* Animated switch dot */}
            <div
              className={`w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                darkMode
                  ? 'translate-x-7 bg-[#FFE86E]' // Yellow dot for dark mode
                  : 'translate-x-0 bg-white'     // White dot for light mode
              }`}
            />
          </div>

          {/* Dark mode label */}
          <span className="text-sm text-black dark:text-white">DARK MODE</span>
        </div>

        {/* Language switcher */}
        <span className="mx-2 text-black dark:text-white">|</span>
        <button
          onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
          className="text-sm hover:opacity-80 transition-opacity"
        >
          {/* Dynamic language switch text */}
          {language === 'en' ? (
            <>
              <span className="text-[#E92577] font-bold tracking-wide">
                TÜRKÇE
              </span>
              <span className="text-black dark:text-white font-semibold">
                'YE GEÇ
              </span>
            </>
          ) : (
            <>
              <span className="text-[#E92577] font-bold tracking-wide">
                SWITCH TO{' '}
              </span>
              <span className="text-black dark:text-white font-semibold">
                ENGLISH
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Top;