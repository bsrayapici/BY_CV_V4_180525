// Import necessary hooks from React
import { createContext, useContext, useState, useEffect } from 'react';

// Create context for theme management
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const storedValue = localStorage.getItem('theme');
    return storedValue === 'dark';
  });

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Provide theme context to children
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};