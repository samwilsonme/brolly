import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check local storage first
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme;
    }

    // If no stored theme, check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // Default to light if no preference or matchMedia isn't supported
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Listen for changes in system preference (optional, for dynamic updates)
  useEffect(() => {
    const handleSystemThemeChange = (event) => {
      const newSystemTheme = event.matches ? 'dark' : 'light';
      // Only update if the user hasn't explicitly chosen a theme
      if (!localStorage.getItem('theme')) {
        setTheme(newSystemTheme);
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Clean up the event listener
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  return useContext(ThemeContext);
}