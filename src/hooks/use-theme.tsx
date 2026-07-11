import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Mode = "light" | "dark";

/** Each accent supplies its CSS accent colour + a human-readable label. */
export interface AccentColor {
  id: string;
  label: string;
  value: string; // oklch / hex / any CSS colour
  swatch: string; // preview swatch (always opaque hex for the button)
}

export const ACCENT_COLORS: AccentColor[] = [
  { id: "orange", label: "Orange", value: "#FF6B2B", swatch: "#FF6B2B" },
  { id: "blue", label: "Blue", value: "#3B82F6", swatch: "#3B82F6" },
  { id: "violet", label: "Violet", value: "#8B5CF6", swatch: "#8B5CF6" },
  { id: "rose", label: "Rose", value: "#F43F5E", swatch: "#F43F5E" },
  { id: "emerald", label: "Emerald", value: "#10B981", swatch: "#10B981" },
  { id: "amber", label: "Amber", value: "#F59E0B", swatch: "#F59E0B" },
];

interface ThemeCtx {
  mode: Mode;
  toggleMode: () => void;
  accent: AccentColor;
  setAccent: (a: AccentColor) => void;
}

const ThemeContext = createContext<ThemeCtx | null>(null);

const STORAGE_KEY_MODE = "portfolio-theme-mode";
const STORAGE_KEY_ACCENT = "portfolio-theme-accent";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem(STORAGE_KEY_MODE);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  const [accent, setAccentState] = useState<AccentColor>(() => {
    if (typeof window === "undefined") return ACCENT_COLORS[0];
    const id = localStorage.getItem(STORAGE_KEY_ACCENT);
    return ACCENT_COLORS.find((c) => c.id === id) ?? ACCENT_COLORS[0];
  });

  // Apply dark class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY_MODE, mode);
  }, [mode]);

  // Apply accent colour as CSS custom property
  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", accent.value);
    localStorage.setItem(STORAGE_KEY_ACCENT, accent.id);
  }, [accent]);

  const toggleMode = useCallback(
    () => setMode((m) => (m === "light" ? "dark" : "light")),
    [],
  );

  const setAccent = useCallback((a: AccentColor) => setAccentState(a), []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
