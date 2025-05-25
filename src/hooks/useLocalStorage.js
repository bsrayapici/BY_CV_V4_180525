import { useState, useEffect } from 'react';

/**
 * useLocalStorage Hook
 * 
 * Custom hook for managing state with localStorage persistence:
 * - Automatic synchronization with localStorage
 * - Type-safe value parsing
 * - Default value fallback
 * 
 * @param {string} key - localStorage key
 * @param {any} defaultValue - Default value if key doesn't exist
 * @returns {[any, Function]} State value and setter function
 * 
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 */
export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}