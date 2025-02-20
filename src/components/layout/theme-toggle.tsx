"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative text-white/90 hover:text-[#f5aa14] transition-colors"
      aria-label="Toggle theme"
    >
      {/* Sun Icon (Shown in Light Mode) */}
      <Sun className="h-5 w-5 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />

      {/* Moon Icon (Shown in Dark Mode) */}
      <Moon className="absolute h-5 w-5 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
