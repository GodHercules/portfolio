'use client';

import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

type ThemeToggleProps = {
  lightLabel: string;
  darkLabel: string;
};

export function ThemeToggle({ lightLabel, darkLabel }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = theme === 'system' ? resolvedTheme : theme;
  const isDark = activeTheme === 'dark';
  const ariaLabel = !mounted ? darkLabel : isDark ? lightLabel : darkLabel;

  return (
    <Button
      variant="ghost"
      className="h-10 w-10 rounded-full p-0"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={ariaLabel}
      type="button"
    >
      {!mounted ? <Moon size={16} /> : isDark ? <SunMedium size={16} /> : <Moon size={16} />}
    </Button>
  );
}
