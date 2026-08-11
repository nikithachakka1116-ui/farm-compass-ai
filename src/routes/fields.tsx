import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { SectionCard, Pill, SourceTag, DemoBadge } from "@/components/farm/bits";
import { scoutingZones } from "@/lib/farm-data";
import fieldAerial from "@/assets/field-aerial.jpg";

export const Route = createFileRoute("/fields")({
  head: () => ({
    meta: [
      { title: "Field Map & Scouting — KisanMitra AI" },
      {
        name: "description",
        content:
          "Mark problem zones on a simple field map, scout each part of your field and see whether an issue is localized or widespread.",
      },
      { property: "og:title", content: "Field Map & Scouting — KisanMitra AI" },
      { property: "og:description", content: "Field scouting mode, problem-zone map and what-if farm simulator." },
    ],
  }),
  component: FieldsPage,
});

const zoneTone = {
  affected: "danger",
  watch: "warning",
  healthy: "success",
} as const;

const zoneFill = {
  affected: "bg-danger/25 ring-danger/40",
  watch: "bg-warning/25 ring-warning/40",
  healthy: "bg-success/20 ring-success/35",
} as const;

const scenarios = [
  {
    q: "What if I irrigate today?",
    risk: "Risk goes UP",
    tone: "danger" as const,
    detail:
      "Soil is already moist and rain is expected tonight. Extra water can cause waterlogging and spread root problems.",
    action: "Wait until the day after the rain and check the soil by hand first.",
  },
  {
    q: "What if I spray tomorrow morning?",
    risk: "Risk goes DOWN",
    tone: "success" as const,
    detail: "Wind and humidity should be lower between 6:00 and 8:30 AM, so the spray stays on the leaves.",
    action: "Prepare the sprayer tonight and follow the product label exactly.",
  },
  {
    q: "What if heavy rain comes tonight?",
    risk: "Risk stays HIGH",
    tone: "caution" as const,
    detail: "Standing water plus existing leaf spots can spread the disease to healthy plants within days.",
    action: "Clear drainage today and inspect the lower leaves the morning after the rain.",
  },
];

function FieldsPage() {
  const [pick, setPick] = useState(0);
  const affected = scoutingZones.filter((z) => z.status !== "healthy").length;
  const current = scenarios[pick]!;

  return (
    <AppShell>
      <div className="space-y-5">
        <div>
          <h1 className="font-display text-2xl font-bold sm:text-3xl">🗺️ Fields & scouting</h1>
          <p className="mt-1 text-sm text-muted-foreground">Walk the field, save a photo from each side, and see where the problem is.</p>
        </div>

        <SectionCard title="Field map — problem zones" action={<DemoBadge />}>
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={fieldAerial}
              alt="Aerial view of farm plots"
              width={1400}
              height={900}
              loading="lazy"
              className="h-64 w-full object-cover sm:h-80"
            />
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-3">
              <span className={`col-span-2 rounded-xl ring-2 ${zoneFill.affected} grid place-items-center text-xs font-bold text-card`}>
                North — diseased
              </span>
              <span className={`rounded-xl ring-2 ${zoneFill.healthy}`} />
              <span className={`rounded-xl ring-2 ${zoneFill.watch} grid place-items-center text-xs font-bold text-card`}>
                Center — dry
              </span>
              <span className={`rounded-xl ring-2 ${zoneFill.healthy}`} />
              <span className={`rounded-xl ring-2 ${zoneFill.affected} grid place-items-center text-xs font-bold text-card`}>
                East — pests
              </span>
              <span className={`col-span-3 rounded-xl ring-2 ${zoneFill.healthy} grid place-items-center text-xs font-bold text-card`}>
                South — healthy
              </span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Pill tone="danger">Diseased</Pill>
            <Pill tone="caution">Pest hotspot</Pill>
            <Pill tone="warning">Dry area</Pill>
            <Pill tone="info">Waterlogged</Pill>
            <Pill tone="success">Healthy</Pill>
          </div>
        </SectionCard>

        <SectionCard title="Field scouting summary" action={<SourceTag kind="ai" />}>
          <p className="rounded-xl bg-caution-soft p-3 text-sm font-semibold text-caution">
            Symptoms detected in {affected} of {scoutingZones.length} locations — the problem looks{" "}
            {affected >= 4 ? "widespread" : "localized"}. Overall field health: 74/100.
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {scoutingZones.map((z) => (
              <li key={z.zone} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-muted/60 p-3">
                <div className="min-w-0">
                  <p className="font-bold">{z.zone} side</p>
                  <p className="truncate text-sm text-muted-foreground">{z.note}</p>
                </div>
                <Pill tone={zoneTone[z.status]}>{z.status}</Pill>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="What-if farm simulator">
          <div className="flex flex-wrap gap-2">
            {scenarios.map((s, i) => (
              <button
                key={s.q}
                type="button"
                onClick={() => setPick(i)}
                className={
                  i === pick
                    ? "rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
                    : "rounded-full bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground hover:bg-accent"
                }
              >
                {s.q}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-muted/60 p-4">
            <Pill tone={current.tone}>{current.risk}</Pill>
            <p className="mt-2 text-sm">{current.detail}</p>
            <p className="mt-2 text-sm font-semibold">👉 {current.action}</p>
            <div className="mt-3">
              <SourceTag kind="ai" />
            </div>
          </div>
        </SectionCard>
      </div>
    </AppShell>
  );
}
