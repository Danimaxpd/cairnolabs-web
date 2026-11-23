import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const cairnoConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif" },
        body: { value: "var(--font-sans), -apple-system, BlinkMacSystemFont, sans-serif" },
        mono: { value: "var(--font-mono), ui-monospace, SFMono-Regular, monospace" },
      },
      colors: {
        fjord: {
          50: { value: "#eef5f7" },
          100: { value: "#d5e7ec" },
          300: { value: "#73b8ca" },
          400: { value: "#58a4b8" },
          600: { value: "#1f4e5f" },
          700: { value: "#163b48" },
          900: { value: "#0d1417" },
        },
        limestone: {
          50: { value: "#ffffff" },
          100: { value: "#f7f5f0" },
          200: { value: "#efece4" },
          300: { value: "#e3ded4" },
          700: { value: "#2a2f37" },
          800: { value: "#181b20" },
          900: { value: "#111316" },
        },
        ochre: {
          400: { value: "#e08b58" },
          600: { value: "#c26d3b" },
        },
      },
    },
    semanticTokens: {
      colors: {
        "bg.canvas": {
          value: { _light: "{colors.limestone.100}", _dark: "{colors.limestone.900}" },
        },
        "bg.surface": {
          value: { _light: "{colors.limestone.50}", _dark: "{colors.limestone.800}" },
        },
        "bg.subtle": {
          value: { _light: "{colors.limestone.200}", _dark: "#20242b" },
        },
        "border.stone": {
          value: { _light: "{colors.limestone.300}", _dark: "{colors.limestone.700}" },
        },
        "fg.primary": {
          value: { _light: "#16191d", _dark: "#f3f1ec" },
        },
        "fg.muted": {
          value: { _light: "#5a616b", _dark: "#98a0aa" },
        },
        "accent.brand": {
          value: { _light: "{colors.fjord.600}", _dark: "{colors.fjord.400}" },
        },
        "accent.ochre": {
          value: { _light: "{colors.ochre.600}", _dark: "{colors.ochre.400}" },
        },
      },
    },
  },
});

export const cairnoSystem = createSystem(defaultConfig, cairnoConfig);
