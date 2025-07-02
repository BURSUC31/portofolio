'use client';
import * as React from 'react';
import { useTheme } from 'next-themes';

export const PinkThemeButton: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const togglePinkTheme = () => {
    if (theme === 'pink') {
      // If currently pink, switch to light theme
      setTheme('light');
    } else {
      // Switch to pink theme
      setTheme('pink');
    }
  };

  if (!mounted) {
    return <div className="h-[14px] w-[14px] bg-pink-400 rounded-full" />;
  }

  return (
    <button
      id="pink-theme-toggle"
      aria-label={`${theme === 'pink' ? 'Exit pink' : 'Pink'} theme`}
      onClick={togglePinkTheme}
      className="flex items-center justify-center transition-all duration-300 hover:opacity-90 cursor-pointer hover:scale-110"
      title={theme === 'pink' ? 'Exit Pink Theme' : 'Pink Theme'}
    >
      <div
        className={`h-[14px] w-[14px] rounded-full transition-all duration-300 ${
          theme === 'pink'
            ? 'bg-gradient-to-r from-pink-400 to-pink-600 ring-2 ring-pink-300'
            : 'bg-gradient-to-r from-pink-300 to-pink-500 hover:from-pink-400 hover:to-pink-600'
        }`}
      />
    </button>
  );
};
