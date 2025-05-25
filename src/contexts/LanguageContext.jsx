// Import necessary hooks from React
import { createContext, useContext, useState, useEffect } from "react";

// Create context for language management
const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
  // Initialize language state from localStorage
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Provide language context to children
  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => useContext(LanguageContext);