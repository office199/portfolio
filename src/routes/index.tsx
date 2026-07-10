import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Send,
  Code2,
  Database,
  Server,
  Zap,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Rivera — Full-Stack Developer Portfolio" },
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

const techStack = [
  { name: "HTML5", tag: "markup" },
  { name: "CSS3", tag: "styling" },
  { name: "Tailwind CSS", tag: "utility-first" },
  { name: "JavaScript", tag: "ES6+" },
  { name: "React", tag: "ui library" },
  { name: "Next.js", tag: "framework" },
  { name: "FastAPI", tag: "python api" },
  { name: "API Integration", tag: "rest / graphql" },
  { name: "MySQL", tag: "database" },
];

const projects = [
  {
    title: "Nebula Analytics",
    description:
      "Real-time analytics dashboard streaming millions of events per day with sub-100ms query latency.",
    tags: ["Next.js", "FastAPI", "WebSockets", "MySQL"],
    features: ["Real-time data fetching", "Live event streams", "OAuth 2.0"],
    accent: "primary" as const,
  },
  {
    title: "Vertex Commerce",
    description:
      "Headless commerce platform with a React storefront and a FastAPI backend orchestrating inventory and payments.",
    tags: ["React", "FastAPI", "Stripe API", "MySQL"],
    features: ["Database management", "Payment gateway", "Admin CMS"],
    accent: "violet" as const,
  },
  {
    title: "Orbit Task Suite",
    description:
      "Collaborative workspace with real-time sync, granular permissions and a plugin-based automation engine.",
    tags: ["Next.js", "Tailwind", "WebSockets", "REST"],
    features: ["Seamless API communication", "Multi-tenant", "Role-based auth"],
    accent: "primary" as const,
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-sm tracking-widest uppercase">Alex.dev</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#stack" className="hover:text-foreground transition">Stack</a>
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition"
        >
          Available for work
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 grid-pattern">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Full-Stack Developer · Remote worldwide
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05]">
          Building <span className="text-gradient">scalable</span> web
          applications from database to pixel.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          I'm Alex — a full-stack engineer designing resilient backend
          architectures and crafting fast, accessible frontends that ship real
          business value.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary hover:brightness-110 transition"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-surface transition"
          >
            Contact Me
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 max-w-xl">
          {[
            { k: "6+", v: "Years shipping" },
            { k: "40+", v: "Projects delivered" },
            { k: "12", v: "Happy teams" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-primary">
            01 — About
          </div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
            End-to-end engineering.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I bridge the gap between polished frontend experiences and robust
            backend architectures. On the client, I obsess over performance,
            accessibility and motion; on the server, I design typed APIs,
            normalized schemas and observable systems that scale.
          </p>
          <p className="text-foreground/80">
            Currently focused on <span className="text-primary">Next.js</span>,{" "}
            <span className="text-accent">FastAPI</span> and event-driven
            architectures that keep data fresh across every device.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Systems design", "Type safety", "DX & tooling", "Observability"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground/80"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              02 — Stack
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
              Tools I reach for daily.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A pragmatic toolkit spanning the whole stack — from markup to
            managed databases.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {techStack.map((t, i) => (
            <div
              key={t.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition hover:border-primary/50 hover:bg-surface"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-primary/60 group-hover:bg-primary group-hover:shadow-[0_0_12px_var(--color-primary)] transition" />
              </div>
              <div className="mt-8">
                <div className="font-display text-xl font-semibold">{t.name}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {t.tag}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-primary">
              03 — Selected work
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
              Full-stack applications.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-1"
          >
            More on request <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const isViolet = project.accent === "violet";
  const iconRing = isViolet ? "text-accent ring-accent/30 bg-accent/10" : "text-primary ring-primary/30 bg-primary/10";
  const glow = isViolet ? "glow-violet" : "glow-primary";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur transition hover:border-primary/40">
      <div className="relative h-48 overflow-hidden border-b border-border grid-pattern">
        <div
          className="absolute inset-0"
          style={{
            background: isViolet
              ? "radial-gradient(ellipse at center, oklch(0.55 0.25 295 / 0.5), transparent 65%)"
              : "radial-gradient(ellipse at center, oklch(0.55 0.20 245 / 0.5), transparent 65%)",
          }}
        />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className={`grid h-16 w-16 place-items-center rounded-2xl ring-1 ${iconRing} ${glow}`}>
            {isViolet ? <Database className="h-7 w-7" /> : <Zap className="h-7 w-7" />}
          </div>
        </div>
        <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          case study
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-border">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-background/60 px-2 py-1 font-mono text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 md:p-14 backdrop-blur">
          <div
            className="absolute inset-0 -z-10 opacity-70"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">
                04 — Contact
              </div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
                Let's build something <span className="text-gradient">exceptional</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you're a founder, recruiter or engineering lead — drop
                me a line and I'll reply within 24 hours.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:hello@alex.dev" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition">
                  <Mail className="h-4 w-4" /> hello@alex.dev
                </a>
                <a href="#" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition">
                  <Github className="h-4 w-4" /> github.com/alexdev
                </a>
                <a href="#" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition">
                  <Linkedin className="h-4 w-4" /> linkedin.com/in/alexdev
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
                />
              </Field>
              <Field label="Project details">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, timeline and stack…"
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
                />
              </Field>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary hover:brightness-110 transition"
              >
                {sent ? "Message sent ✓" : "Send message"}
                <Send className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-2 font-mono">
          <Code2 className="h-3.5 w-3.5 text-primary" />
          Crafted with Next.js · Tailwind · FastAPI
        </div>
        <div>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</div>
        <div className="flex items-center gap-1 font-mono">
          <Server className="h-3.5 w-3.5 text-accent" />
          v2026.07
        </div>
      </div>
    </footer>
  );
}
