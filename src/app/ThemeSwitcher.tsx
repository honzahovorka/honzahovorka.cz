'use client';

import React from 'react';
import { useTheme } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)] transition-colors duration-300 shadow-lg"
      aria-label="Toggle theme"
    >
      <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} size="lg" />
    </button>
  );
};

export default ThemeSwitcher;
