import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { SectionCard, Pill, DemoBadge } from "@/components/farm/bits";
import { calendarTasks, preventionCalendar, insights } from "@/lib/farm-data";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Farm Calendar & Reminders — KisanMitra AI" },
      {
        name: "description",
        content:
          "A simple weekly farm calendar with irrigation, spraying, inspections, disease-risk periods and actionable reminders.",
      },
      { property: "og:title", content: "Farm Calendar & Reminders — KisanMitra AI" },
      { property: "og:description", content: "Weekly tasks, prevention calendar and farm insights in plain language." },
    ],
  }),
  component: CalendarPage,
});

const reminders = [
  "🌱 Inspect your crop today.",
  "💧 Irrigation may be required on Thursday.",
  "🌧️ Heavy rain expected tonight — clear the drainage.",
  "📸 Take another crop photo in 3 days to compare progress.",
  "🐛 Pest-risk period starts next week.",
];

function CalendarPage() {
  return (
    <AppShell>
      <div className="space-y-5">
        <div>
          <h1 className="font-display text-2xl font-bold sm:text-3xl">📅 Farm calendar</h1>
          <p className="mt-1 text-sm text-muted-foreground">Today's most important task is highlighted.</p>
        </div>

        <SectionCard title="This week" action={<DemoBadge />}>
          <div className="grid gap-2 sm:grid-cols-7">
            {calendarTasks.map((t, i) => (
              <div
                key={t.day}
                className={
                  i === 0
                    ? "rounded-2xl bg-danger-soft p-3 ring-2 ring-danger/30"
                    : "rounded-2xl bg-muted/60 p-3"
                }
              >
                <p className="text-xs font-bold text-muted-foreground">{t.day}</p>
                <p className="mt-1 text-sm font-semibold">{t.task}</p>
                {i === 0 && <p className="mt-1 text-[11px] font-bold text-danger">TODAY · DO FIRST</p>}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Pest & disease prevention calendar">
          <ul className="space-y-3">
            {preventionCalendar.map((p) => (
              <li key={p.title} className="rounded-2xl bg-muted/60 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Pill tone={p.level === "high" ? "caution" : p.level === "moderate" ? "warning" : "success"}>
                    {p.when}
                  </Pill>
                  <span className="font-bold">{p.title}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Recommended action: {p.advice}</p>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Smart reminders">
          <ul className="grid gap-2 sm:grid-cols-2">
            {reminders.map((r) => (
              <li key={r} className="rounded-2xl bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground">
                {r}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Farm insights">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Irrigations this season", value: insights.irrigations },
              { label: "Crop scans saved", value: insights.scans },
              { label: "Rain days recorded", value: insights.rainDays },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-muted/60 p-4">
                <p className="font-display text-3xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold">Most common problems on your farm</p>
            {insights.commonProblems.map((p) => (
              <div key={p.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <div className="h-3 w-full rounded-full bg-muted">
                  <div className="h-full rounded-full bg-caution" style={{ width: `${(p.count / 6) * 100}%` }} />
                </div>
                <span className="shrink-0 text-sm font-medium">
                  {p.name} ({p.count})
                </span>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
