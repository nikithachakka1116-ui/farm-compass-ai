import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { SectionCard, Pill, SourceTag, DemoBadge } from "@/components/farm/bits";
import { timeline, cropHealth, fields } from "@/lib/farm-data";
import leafBlight from "@/assets/leaf-blight.jpg";
import heroLeaves from "@/assets/hero-leaves.jpg";

export const Route = createFileRoute("/crops")({
  head: () => ({
    meta: [
      { title: "My Crops & Health Timeline — KisanMitra AI" },
      {
        name: "description",
        content:
          "Track each crop's health score over time, compare two photos side by side and see whether your crop is improving, stable or worsening.",
      },
      { property: "og:title", content: "My Crops & Health Timeline — KisanMitra AI" },
      { property: "og:description", content: "Crop health timeline, photo comparison and growth stage tracking." },
    ],
  }),
  component: CropsPage,
});

const stages = ["Seedling", "Vegetative", "Flowering", "Fruiting", "Maturity", "Harvest"];

function CropsPage() {
  const max = Math.max(...cropHealth.history.map((h) => h.score));

  return (
    <AppShell>
      <div className="space-y-5">
        <div>
          <h1 className="font-display text-2xl font-bold sm:text-3xl">🌾 My crops</h1>
          <p className="mt-1 text-sm text-muted-foreground">Your saved scans, health trend and growth stage.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {fields.map((f) => (
            <div key={f.id} className="surface p-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{f.emoji}</span>
                <div className="min-w-0">
                  <p className="truncate font-bold">
                    {f.name} — {f.crop}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {f.size} · {f.stage}
                  </p>
                </div>
              </div>
              <div className="mt-3 h-2.5 w-full rounded-full bg-muted">
                <div className="h-full rounded-full bg-success" style={{ width: `${f.health}%` }} />
              </div>
              <p className="mt-1.5 text-sm font-semibold">Health {f.health}/100</p>
            </div>
          ))}
        </div>

        <SectionCard title="Crop health trend" action={<DemoBadge />}>
          <div className="flex items-end gap-3 sm:gap-6">
            {cropHealth.history.map((h) => (
              <div key={h.date} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-sm font-bold">{h.score}</span>
                <div className="flex h-36 w-full items-end">
                  <div
                    className="w-full rounded-t-xl bg-primary/80"
                    style={{ height: `${(h.score / max) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{h.date}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 rounded-xl bg-success-soft p-3 text-sm font-semibold text-success">
            🟢 {cropHealth.note}
          </p>
        </SectionCard>

        <SectionCard title="Scan timeline" action={<SourceTag kind="ai" />}>
          <ol className="space-y-3">
            {timeline.map((t) => (
              <li key={t.date} className="grid grid-cols-[64px_minmax(0,1fr)] items-center gap-3 rounded-2xl bg-muted/60 p-3">
                <img
                  src={t.score > 70 ? heroLeaves : leafBlight}
                  alt={`Crop photo from ${t.date}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold">{t.date}</span>
                    <Pill tone={t.trend === "improving" ? "success" : t.trend === "stable" ? "warning" : "danger"}>
                      {t.trend}
                    </Pill>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">
                    {t.disease} · Severity {t.severity} · Health {t.score}/100
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </SectionCard>

        <SectionCard title="Compare two photos">
          <div className="grid gap-3 sm:grid-cols-2">
            <figure>
              <img
                src={leafBlight}
                alt="Previous crop photo showing leaf spots"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-52 w-full rounded-2xl object-cover"
              />
              <figcaption className="mt-2 text-sm font-semibold">Previous — June 25 · Health 64</figcaption>
            </figure>
            <figure>
              <img
                src={heroLeaves}
                alt="Current crop photo showing healthier leaves"
                width={1600}
                height={900}
                loading="lazy"
                className="h-52 w-full rounded-2xl object-cover"
              />
              <figcaption className="mt-2 text-sm font-semibold">Today · Health 72</figcaption>
            </figure>
          </div>
          <p className="mt-3 rounded-xl bg-info-soft p-3 text-sm text-info">
            The affected area looks smaller than the previous photo. We cannot measure the exact percentage reliably
            from these two images, so no number is shown.
          </p>
          <div className="mt-3">
            <SourceTag kind="ai" />
          </div>
        </SectionCard>

        <SectionCard title="Crop growth stage">
          <p className="text-sm text-muted-foreground">
            The same disease can be more or less serious depending on the stage. Field 2 (Tomato) is at:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stages.map((s) => (
              <span
                key={s}
                className={
                  s === "Flowering"
                    ? "rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
                    : "rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
                }
              >
                {s}
              </span>
            ))}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
