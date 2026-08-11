import { type ReactNode, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Camera, Sprout, Map, CalendarDays, User, Mic, Globe, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { languages } from "@/lib/farm-data";
import { VoiceAssistant } from "./VoiceAssistant";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/scan", label: "Scan", icon: Camera },
  { to: "/crops", label: "My Crops", icon: Sprout },
  { to: "/fields", label: "Fields", icon: Map },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/profile", label: "Profile", icon: User },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [lang, setLang] = useState(languages[0]);
  const [voiceOpen, setVoiceOpen] = useState(false);

  return (
    <div className="min-h-screen w-full field-texture">
      <div className="mx-auto flex w-full max-w-7xl">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-sidebar px-4 py-6 lg:flex">
          <Link to="/" className="mb-8 flex items-center gap-2.5 px-2">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <Sprout className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-lg leading-tight font-bold">KisanMitra AI</span>
              <span className="block text-xs text-muted-foreground">Your farming assistant</span>
            </span>
          </Link>
          <nav className="flex flex-1 flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition",
                  path === n.to
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
                )}
              >
                <n.icon className="h-5 w-5 shrink-0" />
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setVoiceOpen(true)}
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground shadow-soft transition hover:brightness-105"
          >
            <Mic className="h-5 w-5" />
            Ask by voice
          </button>
        </aside>

        <div className="min-w-0 flex-1 pb-24 lg:pb-8">
          <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground lg:hidden">
                  <Sprout className="h-4.5 w-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-base font-bold lg:hidden">KisanMitra AI</span>
                  <span className="hidden truncate text-sm text-muted-foreground lg:block">
                    Sri Lakshmi Farm · Guntur, Andhra Pradesh
                  </span>
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="hidden items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-1.5 text-[11px] font-semibold text-success ring-1 ring-success/25 sm:inline-flex">
                  <WifiOff className="h-3.5 w-3.5" /> Works offline
                </span>
                <label className="flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1.5">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="sr-only">Choose language</span>
                  <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    className="max-w-28 bg-transparent text-xs font-semibold outline-none sm:max-w-none"
                  >
                    {languages.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
          </header>

          <main className="px-4 py-5 sm:px-6 sm:py-7">{children}</main>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setVoiceOpen(true)}
        aria-label="Ask by voice"
        className="fixed right-4 bottom-24 z-40 grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition active:scale-95 lg:hidden"
      >
        <Mic className="h-7 w-7" />
      </button>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "flex flex-col items-center gap-1 py-2.5 text-[10px] font-semibold",
                path === n.to ? "text-primary" : "text-muted-foreground",
              )}
            >
              <n.icon className="h-5.5 w-5.5" />
              {n.label}
            </Link>
          ))}
        </div>
      </nav>

      <VoiceAssistant open={voiceOpen} onClose={() => setVoiceOpen(false)} />
    </div>
  );
}
