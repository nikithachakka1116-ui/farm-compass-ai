import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Camera,
  CloudRain,
  Droplets,
  SprayCan,
  Stethoscope,
  Activity,
  Bug,
  Wind,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import {
  SectionCard,
  ScoreRing,
  RiskMeter,
  AlertCard,
  Pill,
  WhyThis,
  SourceTag,
  SafetyNote,
  DemoBadge,
} from "@/components/farm/bits";
import {
  farmer,
  riskScore,
  cropHealth,
  weather,
  irrigation,
  spray,
  todayActions,
  preventionCalendar,
  activityLog,
  riskColor,
} from "@/lib/farm-data";
import heroLeaves from "@/assets/hero-leaves.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KisanMitra AI — Smart Farming & Crop Advice" },
      {
        name: "description",
        content:
          "KisanMitra AI turns crop photos, weather and field data into simple daily farming actions: irrigation, safe spray windows, disease risk and expert help.",
      },
      { property: "og:title", content: "KisanMitra AI — Smart Farming & Crop Advice" },
      {
        property: "og:description",
        content: "A friendly digital farming assistant: crop diagnosis, risk score, irrigation and weather guidance.",
      },
    ],
  }),
  component: Dashboard,
});

const quickActions = [
  { to: "/scan", label: "Scan Crop", icon: Camera, emoji: "📸" },
  { to: "/crops", label: "My Crops", icon: Activity, emoji: "🌾" },
  { to: "/fields", label: "Fields", icon: Bug, emoji: "🗺️" },
  { to: "/calendar", label: "Calendar", icon: CloudRain, emoji: "📅" },
] as const;

function Dashboard() {
  const tone = riskColor(riskScore.value) as "success" | "warning" | "caution" | "danger";

  return (
    <AppShell>
      <div className="space-y-5">
        <section className="relative overflow-hidden rounded-3xl">
          <img
            src={heroLeaves}
            alt="Healthy green crop leaves with morning dew"
            width={1600}
            height={900}
            className="h-44 w-full object-cover sm:h-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/45 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center gap-2 p-5 sm:p-8">
            <span className="w-fit rounded-full bg-card/90 px-3 py-1 text-[11px] font-bold text-primary">
              🌱 Good morning, {farmer.name}
            </span>
            <h1 className="max-w-md font-display text-2xl leading-tight font-bold text-card sm:text-4xl">
              What should you do on the farm today?
            </h1>
            <p className="max-w-sm text-sm text-card/85">
              Three things need your attention. Everything below is explained in simple words.
            </p>
          </div>
        </section>

        <SectionCard title="Today's farm action plan" icon={<span>🌱</span>} action={<DemoBadge />}>
          <div className="grid gap-3 sm:grid-cols-3">
            {todayActions.map((a) => (
              <div key={a.title} className="rounded-2xl bg-muted/60 p-4">
                <Pill tone={a.tone}>{a.tag}</Pill>
                <h3 className="mt-2 text-base font-bold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
          <WhyThis
            reasons={[
              "Rain probability tonight is 80%",
              "Leaf spot symptoms increased in the last scan",
              "Wind speed is above the safe spraying limit",
            ]}
          />
        </SectionCard>

        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
          {quickActions.map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="surface flex flex-col items-start gap-2 p-4 transition hover:shadow-lift"
            >
              <span className="text-2xl">{q.emoji}</span>
              <span className="text-sm font-bold">{q.label}</span>
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          ))}
        </div>

        <AlertCard
          tone="danger"
          level="🔴 Urgent"
          title="Heavy rain warning"
          what={`${weather.warning.when}. Your tomato field already has leaf spots.`}
          why="Rain plus existing leaf spots can spread the disease quickly across the field."
          actions={weather.warning.steps}
        >
          <SafetyNote>Check again after the rain stops and take a fresh photo tomorrow morning.</SafetyNote>
        </AlertCard>

        <div className="grid gap-5 lg:grid-cols-2">
          <SectionCard title="Crop risk score" icon={<Stethoscope className="h-5 w-5" />}>
            <div className="flex items-center gap-5">
              <ScoreRing value={riskScore.value} tone={tone} label={riskScore.label} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">Main reasons</p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {riskScore.reasons.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-caution">•</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <RiskMeter value={riskScore.value} tone={tone} />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <SourceTag kind="ai" />
              <SourceTag kind="weather" />
            </div>
          </SectionCard>

          <SectionCard title="Crop health" icon={<Activity className="h-5 w-5" />}>
            <div className="flex items-center gap-5">
              <ScoreRing value={cropHealth.score} tone="success" label="Health" />
              <div className="min-w-0 flex-1 space-y-2">
                <Pill tone="success">🟢 Improving</Pill>
                <p className="text-sm text-muted-foreground">{cropHealth.note}</p>
                <dl className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <dt className="text-xs text-muted-foreground">Detected</dt>
                    <dd className="font-semibold">{cropHealth.disease}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Severity</dt>
                    <dd className="font-semibold">{cropHealth.severity}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">AI confidence</dt>
                    <dd className="font-semibold">{cropHealth.confidence}%</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted-foreground">Previous score</dt>
                    <dd className="font-semibold">{cropHealth.previous}/100</dd>
                  </div>
                </dl>
              </div>
            </div>
            <Link
              to="/crops"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
            >
              See the health timeline <ArrowRight className="h-4 w-4" />
            </Link>
          </SectionCard>

          <SectionCard title="Weather" icon={<CloudRain className="h-5 w-5" />} action={<SourceTag kind="weather" />}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: <Thermometer className="h-4 w-4" />, label: "Temperature", value: `${weather.temp}°C` },
                { icon: <Droplets className="h-4 w-4" />, label: "Humidity", value: `${weather.humidity}%` },
                { icon: <CloudRain className="h-4 w-4" />, label: "Rain chance", value: `${weather.rainChance}%` },
                { icon: <Wind className="h-4 w-4" />, label: "Wind", value: `${weather.wind} km/h` },
              ].map((w) => (
                <div key={w.label} className="rounded-2xl bg-info-soft p-3">
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-info">
                    {w.icon}
                    {w.label}
                  </span>
                  <p className="mt-1 font-display text-xl font-bold">{w.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {weather.forecast.map((f) => (
                <div key={f.day} className="rounded-xl bg-muted/60 p-2 text-center">
                  <p className="text-[11px] font-semibold text-muted-foreground">{f.day}</p>
                  <p className="text-xl">{f.icon}</p>
                  <p className="text-sm font-bold">{f.temp}</p>
                  <p className="text-[11px] text-info">{f.rain}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 rounded-xl bg-caution-soft p-3 text-sm text-caution">
              ⚠️ {weather.summary}. Postpone spraying and check field drainage.
            </p>
          </SectionCard>

          <SectionCard title="Smart irrigation" icon={<Droplets className="h-5 w-5" />}>
            <div className="rounded-2xl bg-info-soft p-4">
              <p className="font-display text-xl font-bold text-info">💧 {irrigation.decision}</p>
              <p className="mt-1 text-sm text-foreground/80">{irrigation.why}</p>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {irrigation.facts.map((f) => (
                <div key={f.label} className="rounded-xl bg-muted/60 p-3">
                  <dt className="text-xs text-muted-foreground">{f.label}</dt>
                  <dd className="font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
            <WhyThis reasons={["Rain expected tonight (80%)", "22 mm rain in the last 3 days", "Soil holds water well"]} />
          </SectionCard>

          <SectionCard title="Safe spray window" icon={<SprayCan className="h-5 w-5" />}>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-success-soft p-4">
                <p className="text-xs font-bold text-success">BEST TIME</p>
                <p className="mt-1 font-display text-lg font-bold">{spray.best}</p>
              </div>
              <div className="rounded-2xl bg-danger-soft p-4">
                <p className="text-xs font-bold text-danger">AVOID</p>
                <p className="mt-1 font-display text-lg font-bold">{spray.avoid}</p>
              </div>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {spray.why.map((w) => (
                <li key={w} className="flex gap-2">
                  <span className="text-caution">•</span>
                  {w}
                </li>
              ))}
            </ul>
            <SafetyNote />
          </SectionCard>

          <SectionCard title="Upcoming pest & disease risk" icon={<Bug className="h-5 w-5" />}>
            <ul className="space-y-3">
              {preventionCalendar.map((p) => (
                <li key={p.title} className="rounded-2xl bg-muted/60 p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill tone={p.level === "high" ? "caution" : p.level === "moderate" ? "warning" : "success"}>
                      {p.when}
                    </Pill>
                    <span className="font-bold">{p.title}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.advice}</p>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <SectionCard title="Recent activity" icon={<Activity className="h-5 w-5" />} action={<SourceTag kind="farmer" />}>
          <ol className="relative space-y-4 border-l border-border pl-5">
            {activityLog.map((a) => (
              <li key={a.date + a.type} className="relative">
                <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-card" />
                <p className="text-xs font-semibold text-muted-foreground">{a.date}</p>
                <p className="font-semibold">{a.type}</p>
                <p className="text-sm text-muted-foreground">{a.detail}</p>
              </li>
            ))}
          </ol>
        </SectionCard>

        <p className="pb-2 text-center text-xs text-muted-foreground">
          Demonstration prototype. Numbers shown are sample data, not live field or weather readings. Your photos,
          location and farm records stay private to you.
        </p>
      </div>
    </AppShell>
  );
}
