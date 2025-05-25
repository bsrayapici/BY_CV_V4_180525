import { createContext, useContext, useState, useEffect } from 'react';

/**
 * ThemeContext
 * 
 * Manages the application's theme state (dark/light mode) with:
 * - Local storage persistence
 * - Automatic document class updates
 * - Theme toggle functionality
 * 
 * @context
 */
const ThemeContext = createContext();

/**
 * ThemeProvider Component
 * 
 * Provides theme context to the application with:
 * - Theme state management
 * - Local storage synchronization
 * - Document class handling
 * 
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 */
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem('theme');
    return storedValue === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme Hook
 * 
 * Custom hook for accessing theme context with error handling
 * 
 * @returns {Object} Theme context value
 * @throws {Error} If used outside ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};