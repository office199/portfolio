import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Palette, Check } from "lucide-react";
import { useTheme, ACCENT_COLORS } from "../hooks/use-theme";

export function ThemeToggle() {
  const { mode, toggleMode, accent, setAccent } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Theme settings"
        className="group grid h-9 w-9 place-items-center rounded-full border bg-surface-elevated transition-all duration-300 hover:border-foreground/20 hover:shadow-md"
      >
        <Palette
          className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground"
          style={{ color: open ? accent.value : undefined }}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full mt-3 w-[220px] origin-top-right animate-in fade-in zoom-in-95 rounded-2xl border bg-surface-elevated p-4 shadow-xl"
          style={{ zIndex: 100 }}
        >
          {/* Dark / Light toggle */}
          <div className="mb-4">
            <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Appearance
            </div>
            <button
              onClick={toggleMode}
              className="flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 transition-colors duration-200 hover:bg-muted"
            >
              {mode === "light" ? (
                <Sun className="h-4 w-4 text-amber-500" />
              ) : (
                <Moon className="h-4 w-4 text-indigo-400" />
              )}
              <span className="text-[13px] font-medium">
                {mode === "light" ? "Light mode" : "Dark mode"}
              </span>
              <span className="ml-auto rounded-md bg-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {mode === "light" ? "☀" : "☾"}
              </span>
            </button>
          </div>

          {/* Accent colour picker */}
          <div>
            <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Accent color
            </div>
            <div className="grid grid-cols-6 gap-2">
              {ACCENT_COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setAccent(c)}
                  title={c.label}
                  aria-label={`Set accent to ${c.label}`}
                  className="group/swatch relative grid h-8 w-8 place-items-center rounded-full transition-transform duration-200 hover:scale-110"
                  style={{ backgroundColor: c.swatch }}
                >
                  {accent.id === c.id && (
                    <Check className="h-3.5 w-3.5 text-white drop-shadow-sm" />
                  )}
                  {/* Ring when selected */}
                  <span
                    className={`pointer-events-none absolute inset-[-3px] rounded-full border-2 transition-opacity duration-200 ${
                      accent.id === c.id ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ borderColor: c.swatch }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
