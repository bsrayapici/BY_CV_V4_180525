import { createContext, useContext, useState, useEffect } from "react";

/**
 * LanguageContext
 * 
 * Manages the application's language state with:
 * - Local storage persistence
 * - Language switching functionality
 * - Default language fallback
 * 
 * @context
 */
const LanguageContext = createContext();

/**
 * LanguageProvider Component
 * 
 * Provides language context to the application with:
 * - Language state management
 * - Local storage synchronization
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 */
export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * useLanguage Hook
 * 
 * Custom hook for accessing language context
 * 
 * @returns {Object} Language context value
 */
export const useLanguage = () => useContext(LanguageContext);