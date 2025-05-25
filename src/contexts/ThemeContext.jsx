// ThemeContext.jsx - Manages application-wide theme state
import { createContext, useContext, useState, useEffect } from 'react';

// Create context for theme management
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize dark mode state from localStorage with fallback
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem('theme');
    return storedValue === 'dark';
  });

  // Sync theme changes with document classes and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Toggle theme function with functional update pattern
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Provide theme context to children components
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming theme context with error handling
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};