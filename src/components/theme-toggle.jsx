"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg">
        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
        <span className="text-xs lg:text-sm font-medium text-gray-400 dark:text-gray-500 whitespace-nowrap">
          Theme
        </span>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-1.5 lg:py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <>
          <Sun
            size={14}
            className="lg:w-4 lg:h-4 text-yellow-500 dark:text-yellow-400 flex-shrink-0"
          />
          <span className="text-xs lg:text-sm font-medium whitespace-nowrap">
            Light
          </span>
        </>
      ) : (
        <>
          <Moon
            size={14}
            className="lg:w-4 lg:h-4 text-blue-500 dark:text-blue-400 flex-shrink-0"
          />
          <span className="text-xs lg:text-sm font-medium whitespace-nowrap">
            Dark
          </span>
        </>
      )}
    </button>
  );
}
