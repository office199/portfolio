import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { accent } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`group fixed bottom-6 right-6 z-[60] grid h-12 w-12 place-items-center rounded-full border bg-foreground text-background shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
      style={
        {
          ["--accent-color" as string]: accent.value,
          boxShadow: visible
            ? `0 0 0 1px ${accent.value}20, 0 10px 30px -10px rgba(0,0,0,0.4), 0 0 24px -4px ${accent.value}60`
            : undefined,
        } as React.CSSProperties
      }
    >
      {/* Accent glow pulse behind */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at center, ${accent.value}40, transparent 70%)`,
          animation: visible ? "scroll-top-pulse 2.4s ease-in-out infinite" : undefined,
        }}
      />

      {/* Pulsing dot indicator */}
      <span className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-3 w-3">
        <span
          className="absolute inline-flex h-full w-full rounded-full opacity-60"
          style={{
            backgroundColor: accent.value,
            animation: "scroll-top-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
        <span
          className="relative inline-flex h-3 w-3 rounded-full"
          style={{ backgroundColor: accent.value }}
        />
      </span>

      {/* Arrow with bounce-gentle */}
      <span className="relative grid h-8 w-8 place-items-center rounded-full bg-surface-elevated/10 transition group-hover:bg-surface-elevated/15">
        <ArrowUp className="h-4 w-4 animate-[bounce-gentle_2s_ease-in-out_infinite] transition-transform duration-300 group-hover:-translate-y-0.5" />
      </span>

      {/* Hover ring */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `0 0 0 2px ${accent.value}`,
        }}
      />
    </button>
  );
}

export default ScrollToTop;
