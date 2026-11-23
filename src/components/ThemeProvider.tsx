"use client";

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { cairnoSystem } from "@/theme/system";
import {
  getSavedThemeCookie,
  setFunctionalCookie,
  THEME_COOKIE_NAME,
  type ThemeMode,
} from "@/lib/cookies";

interface ThemeContextValue {
  theme: ThemeMode;
  mounted: boolean;
  setTheme: (next: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  mounted: false,
  setTheme: () => {},
  toggleTheme: () => {},
});

function applyThemeToDocument(mode: ThemeMode) {
  const root = document.documentElement;
  root.setAttribute("data-theme", mode);
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  root.style.colorScheme = mode;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getSavedThemeCookie();
    setThemeState(initial);
    applyThemeToDocument(initial);
    setMounted(true);
  }, []);

  const setTheme = useCallback((next: ThemeMode) => {
    setThemeState(next);
    applyThemeToDocument(next);
    setFunctionalCookie(THEME_COOKIE_NAME, next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      applyThemeToDocument(next);
      setFunctionalCookie(THEME_COOKIE_NAME, next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mounted, setTheme, toggleTheme }}>
      <ChakraProvider value={cairnoSystem}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
}

export function useCairnoTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
