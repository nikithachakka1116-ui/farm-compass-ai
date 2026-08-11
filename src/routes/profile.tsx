import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { SectionCard, Pill, SourceTag } from "@/components/farm/bits";
import { farmer, fields, inventory, activityLog, languages } from "@/lib/farm-data";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Farm Profile & Records — KisanMitra AI" },
      {
        name: "description",
        content:
          "Your farm profile, fields, input inventory, activity log and privacy settings — all kept private to you.",
      },
      { property: "og:title", content: "Farm Profile & Records — KisanMitra AI" },
      { property: "og:description", content: "Farm profile, inventory reminders, activity log and privacy controls." },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <AppShell>
      <div className="space-y-5">
        <div>
          <h1 className="font-display text-2xl font-bold sm:text-3xl">👤 My farm profile</h1>
          <p className="mt-1 text-sm text-muted-foreground">Used to make weather and crop advice relevant to you.</p>
        </div>

        <SectionCard title="Farmer & farm" action={<SourceTag kind="farmer" />}>
          <dl className="grid gap-3 sm:grid-cols-3">
            {[
              { k: "Farmer name", v: farmer.name },
              { k: "Farm name", v: farmer.farmName },
              { k: "Location", v: farmer.location },
              { k: "Soil type", v: farmer.soil },
              { k: "Irrigation type", v: farmer.irrigation },
              { k: "Preferred language", v: languages[0]! },
            ].map((r) => (
              <div key={r.k} className="rounded-2xl bg-muted/60 p-4">
                <dt className="text-xs text-muted-foreground">{r.k}</dt>
                <dd className="font-semibold">{r.v}</dd>
              </div>
            ))}
          </dl>
        </SectionCard>

        <SectionCard title="My farms">
          <ul className="space-y-2">
            {fields.map((f) => (
              <li key={f.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-muted/60 p-4">
                <div className="min-w-0">
                  <p className="truncate font-bold">
                    {f.emoji} {f.name} — {f.size} — {f.crop}
                  </p>
                  <p className="text-sm text-muted-foreground">Stage: {f.stage}</p>
                </div>
                <Pill tone={f.health > 80 ? "success" : "warning"}>{f.health}/100</Pill>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="📦 Input inventory">
          <ul className="grid gap-2 sm:grid-cols-2">
            {inventory.map((i) => (
              <li key={i.item} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-muted/60 p-4">
                <div className="min-w-0">
                  <p className="truncate font-semibold">{i.item}</p>
                  <p className="text-sm text-muted-foreground">{i.qty}</p>
                </div>
                {i.low && <Pill tone="warning">Running low</Pill>}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted-foreground">
            Products are never suggested because of any commercial relationship.
          </p>
        </SectionCard>

        <SectionCard title="🧾 Farm activity log">
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

        <SectionCard title="🔒 Privacy & offline">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Your farm data is private and belongs to you.</li>
            <li>• Photos are used only to analyse your crop.</li>
            <li>• Location is used only for weather and local crop advice.</li>
            <li>• Recent diagnoses, treatments, weather and alerts are saved on your phone for offline use.</li>
            <li>• When the internet returns, we show "Syncing your farm data..." and update automatically.</li>
          </ul>
        </SectionCard>
      </div>
    </AppShell>
  );
}
