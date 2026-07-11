import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Sparkles,
  MoveUpRight,
  Quote,
  Asterisk,
  Circle,
  Layers,
  Database,
  Cpu,
  Palette,
} from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import { ScrollToTop } from "../components/ScrollToTop";
import { useTheme } from "../hooks/use-theme";
import { useScrollReveal } from "../hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rivera — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-stack developer building scalable, high-performance web applications with React, Next.js, FastAPI and modern databases.",
      },
      { property: "og:title", content: "Alex Rivera — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of a full-stack developer specializing in React, Next.js, FastAPI and scalable backend architectures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const capabilities = [
  {
    icon: Palette,
    title: "Frontend Architecture",
    desc: "Design systems, performant React, motion-driven UI that feels native.",
    list: ["Design systems", "Framer Motion", "Accessibility"],
  },
  {
    icon: Database,
    title: "Backend Systems",
    desc: "Typed APIs, resilient data models, event-driven services that scale.",
    list: ["FastAPI / Python", "Postgres & MySQL", "Redis / Queues"],
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    desc: "From 0→1 prototyping to hardening production systems for millions.",
    list: ["System design", "DevOps & Observability", "DX Tooling"],
  },
];

const projects = [
  {
    id: "01",
    year: "2025",
    title: "Nebula Analytics",
    category: "Realtime Platform",
    description:
      "Streaming analytics for 12M+ daily events. Custom query engine, collaborative dashboards, sub-100ms p95 latency.",
    tags: ["Next.js", "FastAPI", "ClickHouse", "WebSockets"],
    stats: { users: "2.4k", latency: "68ms", uptime: "99.99%" },
    color: "bg-[#0F0F0F] text-white",
    accent: "#FF6B2B",
  },
  {
    id: "02",
    year: "2024",
    title: "Vertex Commerce",
    category: "Headless Commerce",
    description:
      "Headless storefront + orchestration layer. Inventory sync across 40 warehouses, checkout conversion +28%.",
    tags: ["React", "Stripe", "FastAPI", "MySQL"],
    stats: { users: "180k", conversion: "+28%", gm: "$42M" },
    color: "bg-[#F2EEE7] text-[#111]",
    accent: "#111111",
  },
  {
    id: "03",
    year: "2024",
    title: "Orbit Task Suite",
    category: "Collaboration Tool",
    description:
      "Figma-like multiplayer workspaces. CRDT-based sync, plugin system, granular permissions for enterprise.",
    tags: ["Next.js", "CRDT", "Tailwind", "REST"],
    stats: { teams: "650+", sync: "<50ms", rating: "4.9/5" },
    color: "bg-[#D6FF6B] text-black",
    accent: "#111",
  },
];

const stack = [
  { name: "TypeScript", meta: "Language • Expert", level: 95 },
  { name: "React / Next.js", meta: "Frontend • Expert", level: 96 },
  { name: "Python / FastAPI", meta: "Backend • Expert", level: 90 },
  { name: "Tailwind CSS", meta: "Styling • Expert", level: 93 },
  { name: "MySQL / Postgres", meta: "Database • Advanced", level: 86 },
  { name: "Redis / Queues", meta: "Infra • Advanced", level: 82 },
  { name: "Docker / AWS", meta: "DevOps • Advanced", level: 80 },
  { name: "Live Sync", meta: "Realtime • Advanced", level: 85 },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Capabilities />
      <Projects />
      <Stack />
      <QuoteSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { accent } = useTheme();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_0_0_var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="flex h-16 items-center justify-between sm:h-[72px]">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-foreground text-background transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-[15px] font-bold tracking-tight">A</span>
            </div>
            <div className="hidden leading-none sm:block">
              <div
                className="font-display text-[14px] font-bold tracking-wide transition-colors duration-300"
                style={{ ["--hover-color" as string]: accent.value }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accent.value)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                ALEX RIVERA
              </div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                Full-Stack Developer
              </div>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden items-center gap-0 md:flex">
            {[
              { l: "About", h: "#about" },
              { l: "Capabilities", h: "#capabilities" },
              { l: "Work", h: "#work" },
              { l: "Stack", h: "#stack" },
            ].map((i) => (
              <a
                key={i.l}
                href={i.h}
                className="group relative px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {i.l}
                <span
                  className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ backgroundColor: accent.value }}
                />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Availability */}
            <span className="hidden items-center gap-2.5 sm:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4CAF00] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4CAF00]"></span>
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                Available
              </span>
            </span>

            {/* Divider */}
            <span className="hidden h-4 w-px bg-border sm:block" />

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Divider */}
            <span className="hidden h-4 w-px bg-border sm:block" />

            {/* CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-background transition-all duration-300 hover:shadow-lg"
              style={{
                ["--btn-hover-bg" as string]: accent.value,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = accent.value;
                e.currentTarget.style.boxShadow = `0 10px 25px -5px ${accent.value}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <span className="hidden sm:inline">Let&apos;s talk</span>
              <span className="sm:hidden">Hi</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background grids & blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute left-[-10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#FFD6B8] blur-[120px] opacity-60" />
        <div className="absolute right-[-10%] top-[20%] h-[700px] w-[700px] rounded-full bg-[#D6FF6B]/60 blur-[130px] opacity-70" />
        <div className="absolute bottom-[-20%] left-[30%] h-[500px] w-[800px] rounded-full blur-[120px] opacity-20" style={{ backgroundColor: "var(--accent-color)" }} />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid min-h-[100svh] grid-cols-12 gap-6 pb-12 pt-28 sm:pb-20 sm:pt-36">
          {/* Eyebrow + main */}
          <div className="col-span-12 lg:col-span-8">
            <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border bg-surface-elevated px-3 py-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span className="font-mono text-[11px] uppercase tracking-widest">
                Full-Stack Developer • Remote worldwide
              </span>
            </div>

            <h1 className="mt-8 font-display text-[12vw] font-[800] leading-[0.85] tracking-[-0.04em] sm:text-[9vw] lg:text-[96px]">
              <span className="hero-title-line block">FULL-STACK</span>
              <span className="hero-title-line block font-serif font-normal italic tracking-[-0.02em] text-[var(--accent-color)]">
                developer
              </span>
              <span className="hero-title-line block">BUILDING FOR</span>
              <span className="hero-title-line relative inline-block">
                SCALE
                <span className="absolute -right-3 -top-2 hidden rotate-12 rounded-full bg-[#D6FF6B] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-black shadow-sm sm:inline-flex">
                  est. 2019
                </span>
              </span>
            </h1>

            <div className="hero-body mt-10 grid max-w-3xl grid-cols-12 gap-6">
              <p className="col-span-12 font-sans text-[18px] leading-[1.5] text-muted-foreground sm:col-span-8 sm:text-[20px]">
                I&apos;m Alex — I design resilient backend architectures and craft fast, accessible
                frontends that ship{" "}
                <span className="font-medium text-foreground underline decoration-[#D6FF6B] decoration-4 underline-offset-4">
                  real business value
                </span>
                . Currently obsessed with typed APIs, event-driven systems & motion.
              </p>
              <div className="col-span-12 flex flex-wrap gap-3 sm:col-span-4 sm:flex-col sm:items-end">
                <a
                  href="#work"
                  className="group inline-flex h-[52px] w-full items-center justify-between rounded-full bg-foreground px-2 pl-7 text-[14px] font-medium text-background transition hover:opacity-95 sm:w-[220px]"
                >
                  <span>View selected work</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-surface-elevated text-foreground transition group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
                <a
                  href="#about"
                  className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full border bg-surface-elevated px-7 text-[14px] font-medium transition hover:bg-muted sm:w-[220px]"
                >
                  About me <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Side card */}
          <div className="hero-card col-span-12 lg:col-span-4 lg:pl-6">
            <div className="sticky top-[120px] mt-8 lg:mt-0">
              {/* Profile / status card */}
              <div className="relative overflow-hidden rounded-[28px] border bg-surface-elevated p-2 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.25)]">
                <div className="rounded-[20px] bg-[#0F0F0F] p-6 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 overflow-hidden rounded-full bg-white/20">
                        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-[var(--accent-color)] to-[#FFD6B8] font-display text-[18px] font-bold text-black">
                          A
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-[14px] font-bold">Alex Rivera</div>
                        <div className="font-mono text-[11px] uppercase tracking-wide text-white/60">
                          San Francisco • Remote
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-white/10 p-2">
                      <Circle className="h-3 w-3 fill-[#D6FF6B] text-[#D6FF6B]" />
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-6">
                    {[
                      { k: "6+", l: "Years" },
                      { k: "40+", l: "Projects" },
                      { k: "12", l: "Teams" },
                    ].map((s) => (
                      <div key={s.l} className="">
                        <div className="font-display text-[26px] font-bold leading-none">{s.k}</div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
                          {s.l}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3 font-mono text-[11px] uppercase tracking-widest text-white/50">
                    <div className="flex justify-between">
                      <span>Focus</span>
                      <span className="text-white">Next.js • FastAPI</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timezone</span>
                      <span className="text-white">PST • GMT-8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Response</span>
                      <span className="text-[#D6FF6B]">&lt; 6 hours</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-2 pt-2">
                  <div className="rounded-[16px] bg-surface p-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Currently
                    </div>
                    <div className="mt-2 font-display text-[14px] font-semibold leading-[1.15]">
                      Building analytics infra for Series B startup
                    </div>
                  </div>
                  <div className="rounded-[16px] bg-[#D6FF6B] p-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest">Next chapter</div>
                    <div className="mt-2 font-display text-[14px] font-semibold leading-[1.15]">
                      Open to senior IC roles, Q1 2026
                    </div>
                  </div>
                </div>
              </div>

              {/* Small social */}
              <div className="mt-4 flex justify-between gap-2 rounded-full border bg-surface-elevated px-2 py-2">
                {[
                  { icon: Github, label: "GitHub" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Mail, label: "Email" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-muted px-3 py-2 font-mono text-[11px] uppercase tracking-wide transition hover:bg-foreground hover:text-background"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "React",
    "Next.js",
    "FastAPI",
    "TypeScript",
    "Python",
    "Postgres",
    "Tailwind",
    "Realtime",
    "System Design",
    "Motion",
  ];
  return (
    <div className="relative border-y bg-foreground text-background">
      <div className="flex overflow-hidden">
        <div className="marquee-track flex w-max shrink-0">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center">
              {items.map((t) => (
                <div key={`${dup}-${t}`} className="flex items-center">
                  <span className="px-10 font-display text-[18px] font-semibold uppercase tracking-wide sm:text-[22px]">
                    {t}
                  </span>
                  <Asterisk className="h-4 w-4 opacity-50" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border-b bg-background ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className="sticky top-32">
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 reveal-up ${isVisible ? "is-visible" : ""} stagger-1`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                <span className="font-mono text-[11px] uppercase tracking-widest">01 — About</span>
              </div>
              <h2
                className={`mt-6 font-display text-[40px] font-bold leading-[0.9] tracking-[-0.03em] sm:text-[56px] reveal-up ${isVisible ? "is-visible" : ""} stagger-2`}
              >
                End-to-end
                <br />
                <span className="font-serif font-normal italic text-muted-foreground">engineering</span>
                <br />
                with taste.
              </h2>

              <div
                className={`mt-10 hidden max-w-[320px] rounded-2xl border bg-surface-elevated p-4 shadow-sm lg:block reveal-left ${isVisible ? "is-visible" : ""} stagger-3`}
              >
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  <Layers className="h-3.5 w-3.5" />
                  Philosophy
                </div>
                <p className="mt-3 font-serif text-[20px] leading-[1.25]">
                  &ldquo;Good software feels inevitable. No bloat, no cleverness — just clarity at
                  scale.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="prose prose-neutral max-w-none">
              <p
                className={`font-sans text-[24px] font-[350] leading-[1.35] tracking-[-0.015em] text-foreground sm:text-[28px] reveal-up ${isVisible ? "is-visible" : ""} stagger-2`}
              >
                I bridge the gap between polished frontend experiences and robust backend
                architectures. On the client, I obsess over performance, accessibility and motion; on
                the server, I design typed APIs, normalized schemas and observable systems.
              </p>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div
                  className={`rounded-[20px] border bg-surface-elevated p-6 reveal-up ${isVisible ? "is-visible" : ""} stagger-3`}
                >
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Frontend
                  </div>
                  <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">
                    Crafting design systems with Radix, Tailwind and motion. Every interaction measured
                    against Core Web Vitals and real user pain.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["React", "Next.js", "Tailwind", "Motion"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border bg-muted px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={`rounded-[20px] border bg-[#0F0F0F] p-6 text-white reveal-up ${isVisible ? "is-visible" : ""} stagger-4`}
                >
                  <div className="font-mono text-[11px] uppercase tracking-widest text-white/50">
                    Backend
                  </div>
                  <p className="mt-3 text-[15px] leading-[1.6] text-white/70">
                    Python + FastAPI services with clean domain boundaries. Event-driven, idempotent,
                    observable from day zero.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["FastAPI", "Postgres", "Redis", "AWS"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`mt-10 rounded-[20px] border bg-surface p-6 sm:p-8 reveal-scale ${isVisible ? "is-visible" : ""} stagger-5`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Now focused on
                  </div>
                  <div className="h-px w-8 bg-border" />
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 15", "FastAPI", "Real-time infra", "AI SDKs"].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full bg-surface-elevated px-3 py-1.5 text-[13px] font-medium shadow-sm"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-color)]" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="capabilities"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-background ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className={`reveal-left ${isVisible ? "is-visible" : ""} stagger-1`}>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              <span className="font-mono text-[11px] uppercase tracking-widest">02 — Capabilities</span>
            </div>
            <h2 className="mt-6 max-w-[520px] font-display text-[36px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[48px]">
              What I do
              <span className="font-serif font-normal italic"> best.</span>
            </h2>
          </div>
          <p
            className={`max-w-[380px] text-[16px] leading-[1.6] text-muted-foreground reveal-right ${isVisible ? "is-visible" : ""} stagger-2`}
          >
            A pragmatic toolkit spanning the whole stack — from design tokens to database indexes.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className={`group relative flex flex-col rounded-[24px] border bg-surface-elevated p-7 transition hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.2)] reveal-up ${isVisible ? "is-visible" : ""} stagger-${i + 2} `}
            >
              <div className="flex items-start justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-full border bg-muted">
                  <c.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[12px] text-muted-foreground">
                  0{i + 1} / 03
                </span>
              </div>
              <h3 className="mt-8 font-display text-[22px] font-semibold leading-[1.1] tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">{c.desc}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {c.list.map((l) => (
                  <span
                    key={l}
                    className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-wide"
                  >
                    {l}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="work"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border-y bg-surface ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className={`reveal-left ${isVisible ? "is-visible" : ""} stagger-1`}>
            <div className="inline-flex items-center gap-2 rounded-full border bg-surface-elevated px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              <span className="font-mono text-[11px] uppercase tracking-widest">
                03 — Selected work
              </span>
            </div>
            <h2 className="mt-6 font-display text-[36px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[52px]">
              Full-stack
              <br />
              <span className="font-serif font-normal italic">shipping.</span>
            </h2>
          </div>
          <div className={`hidden items-center gap-2 sm:flex reveal-right ${isVisible ? "is-visible" : ""} stagger-2`}>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              2024 — 2025 • 3 projects
            </span>
            <div className="h-6 w-px bg-border" />
            <span className="font-mono text-[11px] uppercase tracking-widest">
              Available for new builds
            </span>
          </div>
        </div>

        <div className="mt-14 space-y-6">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              className={`group relative overflow-hidden rounded-[28px] border ${p.color} transition hover:shadow-[0_32px_80px_-24px_rgba(0,0,0,0.25)] reveal-up ${isVisible ? "is-visible" : ""} stagger-${idx + 2}`}
            >
              <div className="grid lg:grid-cols-12">
                <div className="p-8 sm:p-10 lg:col-span-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[12px] tracking-widest opacity-60">{p.id}</span>
                      <span className="h-6 w-px bg-current opacity-20" />
                      <span className="font-mono text-[11px] uppercase tracking-widest opacity-70">
                        {p.category} • {p.year}
                      </span>
                    </div>
                    <MoveUpRight className="h-5 w-5 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-8 font-display text-[36px] font-bold leading-[0.9] tracking-[-0.02em] sm:text-[48px]">
                    {p.title}
                  </h3>

                  <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.6] opacity-80 sm:text-[18px]">
                    {p.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-current/20 px-3 py-1 font-mono text-[11px] uppercase tracking-wide"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 grid grid-cols-3 gap-6 border-t border-current/10 pt-8">
                    {Object.entries(p.stats).map(([k, v]) => (
                      <div key={k}>
                        <div className="font-display text-[22px] font-bold leading-none">{v}</div>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-widest opacity-60">
                          {k}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative lg:col-span-5">
                  <div className="absolute inset-0 hidden lg:block">
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `radial-gradient(600px circle at 30% 20%, ${p.accent}40, transparent 60%), radial-gradient(500px circle at 80% 80%, ${p.accent}30, transparent)`,
                      }}
                    />
                  </div>

                  <div className="relative flex h-full min-h-[360px] flex-col justify-between p-8 sm:p-10">
                    <div className="flex justify-end">
                      <div className="rounded-full border border-current/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                        Case study →
                      </div>
                    </div>

                    <div className="mt-auto space-y-4">
                      <div className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-current/10 bg-white/10 p-4 backdrop-blur">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-surface-elevated text-foreground">
                          <Layers className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">
                            Stack highlight
                          </div>
                          <div className="mt-1 font-display text-[13px] font-semibold leading-[1.2]">
                            {p.id === "01" && "Live query engine with WebSocket fan-out & ClickHouse"}
                            {p.id === "02" && "Idempotent checkout & warehouse sync orchestrator"}
                            {p.id === "03" && "CRDT document model with offline-first sync"}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <span className="flex-1 rounded-full bg-current py-2.5 text-center font-mono text-[11px] uppercase tracking-widest text-[var(--background)] mix-blend-difference">
                          Live demo
                        </span>
                        <span className="flex-1 rounded-full border border-current/20 py-2.5 text-center font-mono text-[11px] uppercase tracking-widest">
                          Code walkthrough
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-10 flex justify-center reveal-fade ${isVisible ? "is-visible" : ""} stagger-6`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border bg-surface-elevated px-6 py-3 font-mono text-[12px] uppercase tracking-widest shadow-sm transition hover:bg-foreground hover:text-background"
          >
            More work on request — 12+ shipped
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="stack"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-background ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 reveal-up ${isVisible ? "is-visible" : ""} stagger-1`}>
              <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
              <span className="font-mono text-[11px] uppercase tracking-widest">04 — Stack</span>
            </div>
            <h2
              className={`mt-6 max-w-[420px] font-display text-[36px] font-bold leading-[0.95] tracking-[-0.03em] sm:text-[48px] reveal-left ${isVisible ? "is-visible" : ""} stagger-2`}
            >
              Tools I reach for
              <span className="font-serif font-normal italic"> daily.</span>
            </h2>
            <p
              className={`mt-4 max-w-[360px] text-[15px] leading-[1.6] text-muted-foreground reveal-up ${isVisible ? "is-visible" : ""} stagger-3`}
            >
              Opinionated, production-tested, boring where it counts. No hype cycles — just tools
              that ship.
            </p>

            <div className={`mt-10 hidden rounded-[20px] border bg-[#0F0F0F] p-6 text-white lg:block reveal-scale ${isVisible ? "is-visible" : ""} stagger-4`}>
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                How I choose
              </div>
              <p className="mt-3 font-serif text-[18px] leading-[1.35] text-white/90">
                If it doesn&apos;t improve DX, performance, or type-safety — it doesn&apos;t make it
                into the stack.
              </p>
              <div className="mt-6 h-px bg-white/10" />
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-surface-elevated text-foreground font-display text-[12px] font-bold">
                  A
                </div>
                <div className="text-[13px]">
                  <span className="font-medium">Alex</span>{" "}
                  <span className="text-white/60">· Last updated Jan 2026</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid gap-3">
              {stack.map((s, i) => (
                <div
                  key={s.name}
                  className={`group flex items-center justify-between rounded-full border bg-surface-elevated px-5 py-4 transition hover:border-foreground/15 hover:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.2)] sm:px-6 reveal-right ${isVisible ? "is-visible" : ""} stagger-${Math.min(i + 1, 8)}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline">
                      {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-display text-[16px] font-semibold leading-none sm:text-[18px]">
                        {s.name}
                      </div>
                      <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                        {s.meta}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="hidden h-1.5 w-[120px] overflow-hidden rounded-full bg-muted sm:block">
                      <div
                        className="h-full rounded-full bg-foreground transition-all group-hover:bg-[var(--accent-color)]"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                    <span className="font-mono text-[11px] text-muted-foreground">{s.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border-y bg-foreground py-20 text-background sm:py-28 ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className={`col-span-12 lg:col-span-3 reveal-left ${isVisible ? "is-visible" : ""} stagger-1`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
              <Quote className="h-3 w-3" />
              <span className="font-mono text-[11px] uppercase tracking-widest">Testimonial</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <blockquote
              className={`font-display text-[32px] font-medium leading-[1.05] tracking-[-0.02em] sm:text-[48px] reveal-up ${isVisible ? "is-visible" : ""} stagger-2`}
            >
              <span className="text-white/40">“</span>Alex shipped our analytics platform in 6 weeks.
              <span className="font-serif font-normal italic text-[#D6FF6B]"> Clean code, zero drama,</span>{" "}
              scales like a dream. Would hire again in a heartbeat.
              <span className="text-white/40">”</span>
            </blockquote>
            <div className={`mt-10 flex items-center gap-4 reveal-fade ${isVisible ? "is-visible" : ""} stagger-4`}>
              <div className="h-12 w-12 overflow-hidden rounded-full bg-white/15">
                <div className="grid h-full w-full place-items-center bg-[#D6FF6B] font-display font-bold text-black">
                  S
                </div>
              </div>
              <div>
                <div className="font-display text-[15px] font-semibold">Sarah Chen</div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-white/60">
                  CTO, Nebula • Series B, 120 people
                </div>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-mono text-[11px] uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6FF6B]" />
                Verified build • 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", budget: "10-25k", message: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-background ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7">
            <div
              className={`inline-flex items-center gap-2 rounded-full border bg-surface-elevated px-3 py-1 reveal-up ${isVisible ? "is-visible" : ""} stagger-1`}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-color)]" />
              <span className="font-mono text-[11px] uppercase tracking-widest">05 — Contact</span>
            </div>

            <h2
              className={`mt-6 font-display text-[48px] font-bold leading-[0.9] tracking-[-0.04em] sm:text-[72px] reveal-left ${isVisible ? "is-visible" : ""} stagger-2`}
            >
              LET&apos;S
              <br />
              BUILD
              <br />
              <span className="font-serif font-normal italic text-[var(--accent-color)]">something</span>
              <br />
              REAL.
            </h2>

            <div className={`mt-10 flex flex-wrap gap-3 reveal-up ${isVisible ? "is-visible" : ""} stagger-3`}>
              <a
                href="mailto:hello@alex.dev"
                className="inline-flex items-center gap-2 rounded-full border bg-surface-elevated px-5 py-3 font-mono text-[12px] uppercase tracking-widest shadow-sm transition hover:bg-foreground hover:text-background"
              >
                <Mail className="h-4 w-4" />
                hello@alex.dev
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border bg-surface-elevated px-5 py-3 font-mono text-[12px] uppercase tracking-widest shadow-sm transition hover:bg-foreground hover:text-background"
              >
                <Github className="h-4 w-4" />
                github
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border bg-surface-elevated px-5 py-3 font-mono text-[12px] uppercase tracking-widest shadow-sm transition hover:bg-foreground hover:text-background"
              >
                <Linkedin className="h-4 w-4" />
                linkedin
              </a>
            </div>

            <div className={`mt-16 hidden lg:block reveal-scale ${isVisible ? "is-visible" : ""} stagger-4`}>
              <div className="max-w-[340px] rounded-[20px] border bg-surface-elevated p-6">
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Office hours
                </div>
                <div className="mt-4 space-y-2 font-mono text-[12px]">
                  <div className="flex justify-between">
                    <span>Mon — Fri</span>
                    <span className="font-medium">09:00 — 18:00 PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response</span>
                    <span className="font-medium">&lt; 6h avg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span className="font-medium">SF • Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-span-12 lg:col-span-5 reveal-right ${isVisible ? "is-visible" : ""} stagger-3`}>
            <div className="sticky top-28 rounded-[28px] border bg-surface-elevated p-2 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.2)]">
              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setTimeout(() => setSent(false), 4000);
                }}
                className="rounded-[20px] bg-surface p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[20px] font-bold">Start a project</h3>
                  <span className="rounded-full bg-surface-elevated px-3 py-1 font-mono text-[10px] uppercase tracking-widest shadow-sm">
                    2 min • No spam
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Your name
                    </span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Alex Rivera"
                      className="mt-2 w-full rounded-full border bg-surface-elevated px-5 py-3.5 font-sans text-[15px] outline-none transition focus:border-foreground focus:ring-4 focus:ring-foreground/10"
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-full border bg-surface-elevated px-5 py-3.5 font-sans text-[15px] outline-none transition focus:border-foreground focus:ring-4 focus:ring-foreground/10"
                    />
                  </label>

                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Budget range
                    </span>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {["<10k", "10-25k", "25k+"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`rounded-full border px-3 py-2.5 font-mono text-[12px] uppercase tracking-wide transition ${
                            form.budget === b
                              ? "border-foreground bg-foreground text-background"
                              : "bg-surface-elevated hover:border-foreground/20"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </label>

                  <label className="block">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Project details
                    </span>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your product, timeline, stack…"
                      className="mt-2 w-full resize-none rounded-[20px] border bg-surface-elevated px-5 py-4 font-sans text-[15px] leading-[1.5] outline-none transition focus:border-foreground focus:ring-4 focus:ring-foreground/10"
                    />
                  </label>

                  <button
                    type="submit"
                    className="group flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-foreground text-[14px] font-medium text-background transition hover:opacity-90 disabled:opacity-60"
                  >
                    {sent ? (
                      <>
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#D6FF6B] text-black">
                          ✓
                        </span>
                        Message sent — talk soon!
                      </>
                    ) : (
                      <>
                        Send message
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-surface-elevated text-foreground transition group-hover:rotate-45">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                    I reply within 6 hours • NDA-friendly
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border-t bg-surface-elevated ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        <div
          className={`flex flex-col gap-10 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12 reveal-fade ${isVisible ? "is-visible" : ""} stagger-1`}
        >
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-foreground font-display text-[16px] font-bold text-background">
              A
            </div>
            <div>
              <div className="font-display text-[14px] font-bold leading-none tracking-wide">
                ALEX RIVERA
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Full-Stack Developer © {new Date().getFullYear()}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4CAF00]" />
              All systems operational
            </span>
            <span>Crafted with Next.js · Tailwind · FastAPI</span>
            <span>v2026.07 • SF</span>
          </div>
        </div>

        <div className={`overflow-hidden border-t py-2 reveal-up ${isVisible ? "is-visible" : ""} stagger-2`}>
          <div className="font-display text-[14vw] font-[800] leading-[0.8] tracking-[-0.04em] text-muted select-none">
            ALEX RIVERA
          </div>
        </div>
      </div>
    </footer>
  );
}
