'use client';

import { Theme } from '@/types/CommonTypes';
import React, { useEffect, useState, createContext, useContext } from 'react';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === 'dark') {
        document.documentElement.classList.add('light');
      }
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }

  return context;
}
