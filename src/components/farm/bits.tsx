import { type ReactNode, useState } from "react";
import { ChevronDown, Info, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export type Tone = "success" | "warning" | "caution" | "danger" | "info" | "muted";

const toneMap: Record<Tone, { bg: string; text: string; ring: string; dot: string }> = {
  success: { bg: "bg-success-soft", text: "text-success", ring: "ring-success/25", dot: "bg-success" },
  warning: { bg: "bg-warning-soft", text: "text-warning", ring: "ring-warning/25", dot: "bg-warning" },
  caution: { bg: "bg-caution-soft", text: "text-caution", ring: "ring-caution/25", dot: "bg-caution" },
  danger: { bg: "bg-danger-soft", text: "text-danger", ring: "ring-danger/25", dot: "bg-danger" },
  info: { bg: "bg-info-soft", text: "text-info", ring: "ring-info/25", dot: "bg-info" },
  muted: { bg: "bg-muted", text: "text-muted-foreground", ring: "ring-border", dot: "bg-muted-foreground" },
};

export function SectionCard({
  title,
  icon,
  action,
  children,
  className,
}: {
  title?: string;
  icon?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("surface p-5 sm:p-6", className)}>
      {title && (
        <header className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            {icon && <span className="shrink-0 text-primary">{icon}</span>}
            <h2 className="truncate text-lg font-semibold sm:text-xl">{title}</h2>
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

export function Pill({ tone = "muted", children }: { tone?: Tone; children: ReactNode }) {
  const t = toneMap[tone];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1", t.bg, t.text, t.ring)}>
      <span className={cn("h-1.5 w-1.5 rounded-full", t.dot)} />
      {children}
    </span>
  );
}

export function ScoreRing({
  value,
  tone = "success",
  label,
  size = 132,
}: {
  value: number;
  tone?: Tone;
  label?: string;
  size?: number;
}) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const t = toneMap[tone];
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
        <circle cx="64" cy="64" r={r} className="fill-none stroke-muted" strokeWidth="12" />
        <circle
          cx="64"
          cy="64"
          r={r}
          className={cn("fill-none transition-[stroke-dashoffset] duration-700", t.text)}
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (Math.min(100, Math.max(0, value)) / 100) * c}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl font-bold">{value}</span>
        {label && <span className="text-xs font-medium text-muted-foreground">{label}</span>}
      </div>
    </div>
  );
}

export function RiskMeter({ value, tone }: { value: number; tone: Tone }) {
  const t = toneMap[tone];
  return (
    <div className="space-y-2">
      <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
        <div className={cn("h-full rounded-full transition-all duration-700", t.dot)} style={{ width: `${value}%` }} />
      </div>
      <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
        <span>Low</span>
        <span>Moderate</span>
        <span>High</span>
        <span>Critical</span>
      </div>
    </div>
  );
}

export function AlertCard({
  tone,
  level,
  title,
  what,
  why,
  actions,
  children,
}: {
  tone: Tone;
  level: string;
  title: string;
  what?: string;
  why?: string;
  actions?: string[];
  children?: ReactNode;
}) {
  const t = toneMap[tone];
  return (
    <div className={cn("rounded-2xl p-5 ring-1", t.bg, t.ring)}>
      <div className="flex flex-wrap items-center gap-2">
        <Pill tone={tone}>{level}</Pill>
        <h3 className={cn("text-base font-bold sm:text-lg", t.text)}>{title}</h3>
      </div>
      {what && <p className="mt-2 text-sm text-foreground/80">{what}</p>}
      {why && (
        <p className="mt-1 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground/70">Why it matters: </span>
          {why}
        </p>
      )}
      {actions && (
        <ol className="mt-3 space-y-1.5">
          {actions.map((a, i) => (
            <li key={a} className="flex gap-2 text-sm">
              <span className={cn("mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[11px] font-bold text-card", t.dot)}>
                {i + 1}
              </span>
              <span>{a}</span>
            </li>
          ))}
        </ol>
      )}
      {children}
    </div>
  );
}

export function WhyThis({ reasons }: { reasons: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground transition hover:bg-accent"
      >
        <Info className="h-3.5 w-3.5" />
        Why am I seeing this?
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul className="mt-2 space-y-1 rounded-xl bg-muted/70 p-3 text-sm text-muted-foreground">
          {reasons.map((r) => (
            <li key={r} className="flex gap-2">
              <span className="text-primary">•</span>
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SourceTag({ kind }: { kind: "ai" | "expert" | "weather" | "farmer" }) {
  const map = {
    ai: { icon: <Sparkles className="h-3 w-3" />, text: "AI prediction", tone: "info" as Tone },
    expert: { icon: <ShieldCheck className="h-3 w-3" />, text: "Verified expert advice", tone: "success" as Tone },
    weather: { icon: <span>🌦️</span>, text: "Weather data", tone: "info" as Tone },
    farmer: { icon: <span>🧑‍🌾</span>, text: "You entered this", tone: "muted" as Tone },
  }[kind];
  const t = toneMap[map.tone];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold ring-1", t.bg, t.text, t.ring)}>
      {map.icon}
      {map.text}
    </span>
  );
}

export function SafetyNote({ children }: { children?: ReactNode }) {
  return (
    <p className="mt-3 rounded-xl bg-secondary/70 p-3 text-xs leading-relaxed text-secondary-foreground">
      🛡️ {children ?? "Always follow the product label and your local agricultural guidance before using any chemical."}
    </p>
  );
}

export function DemoBadge() {
  return (
    <span className="rounded-full bg-earth/10 px-2.5 py-1 text-[10px] font-bold tracking-wide text-earth uppercase ring-1 ring-earth/20">
      Sample data
    </span>
  );
}
