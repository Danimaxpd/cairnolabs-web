export const THEME_COOKIE_NAME = "cairno_theme";
export const NOTICE_COOKIE_NAME = "cairno_notice_ack";

export type ThemeMode = "light" | "dark";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function setFunctionalCookie(
  name: string,
  value: string,
  maxAgeSeconds: number = ONE_YEAR_SECONDS
): void {
  if (typeof document === "undefined") return;
  const secureFlag =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${secureFlag}`;
}

export function getSavedThemeCookie(): ThemeMode {
  const saved = getCookie(THEME_COOKIE_NAME);
  return saved === "dark" ? "dark" : "light";
}
