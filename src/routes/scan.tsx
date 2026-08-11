import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Camera, Upload, Loader2, UserCheck, Check, X } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { SectionCard, Pill, ScoreRing, SourceTag, SafetyNote, WhyThis, DemoBadge } from "@/components/farm/bits";
import { scanSteps, diagnosis } from "@/lib/farm-data";
import leafBlight from "@/assets/leaf-blight.jpg";

export const Route = createFileRoute("/scan")({
  head: () => ({
    meta: [
      { title: "Scan Your Crop — KisanMitra AI" },
      {
        name: "description",
        content:
          "Upload or click a photo of your crop and get a simple explanation of the possible disease, confidence level and what to do next.",
      },
      { property: "og:title", content: "Scan Your Crop — KisanMitra AI" },
      { property: "og:description", content: "AI crop diagnosis with confidence, simple actions and expert escalation." },
    ],
  }),
  component: ScanPage,
});

function ScanPage() {
  const [phase, setPhase] = useState<"idle" | "running" | "done">("idle");
  const [step, setStep] = useState(0);
  const [lowConfidence, setLowConfidence] = useState(false);
  const [sent, setSent] = useState(false);

  const run = (low: boolean) => {
    setLowConfidence(low);
    setPhase("running");
    setStep(0);
    setSent(false);
    scanSteps.forEach((_, i) => setTimeout(() => setStep(i), i * 700));
    setTimeout(() => setPhase("done"), scanSteps.length * 700);
  };

  const confidence = lowConfidence ? 54 : diagnosis.confidence;

  return (
    <AppShell>
      <div className="space-y-5">
        <div>
          <h1 className="font-display text-2xl font-bold sm:text-3xl">📸 Scan your crop</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Take a clear photo of the affected leaf in daylight. You can add more than one photo.
          </p>
        </div>

        <SectionCard action={<DemoBadge />}>
          <div className="grid gap-4 sm:grid-cols-[220px_minmax(0,1fr)]">
            <img
              src={leafBlight}
              alt="Tomato leaf with brown spots and yellowing"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-48 w-full rounded-2xl object-cover sm:h-full"
            />
            <div className="flex flex-col justify-center gap-3">
              <button
                type="button"
                onClick={() => run(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-base font-bold text-primary-foreground shadow-soft transition active:scale-[0.99]"
              >
                <Camera className="h-6 w-6" /> Take photo
              </button>
              <button
                type="button"
                onClick={() => run(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-5 py-4 text-base font-bold text-secondary-foreground transition hover:bg-accent"
              >
                <Upload className="h-6 w-6" /> Upload from phone
              </button>
              <button
                type="button"
                onClick={() => run(true)}
                className="text-sm font-semibold text-muted-foreground underline underline-offset-4"
              >
                Try an unclear photo (low confidence example)
              </button>
            </div>
          </div>
        </SectionCard>

        {phase === "running" && (
          <SectionCard title="Analysing crop...">
            <ul className="space-y-3">
              {scanSteps.map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-sm font-medium">
                  {i < step ? (
                    <Check className="h-5 w-5 text-success" />
                  ) : i === step ? (
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  ) : (
                    <span className="h-5 w-5 rounded-full border border-border" />
                  )}
                  <span className={i <= step ? "" : "text-muted-foreground"}>{s}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        )}

        {phase === "done" && (
          <>
            <SectionCard title="Diagnosis" action={<SourceTag kind="ai" />}>
              <div className="flex flex-wrap items-center gap-5">
                <ScoreRing value={confidence} tone={lowConfidence ? "warning" : "success"} label="confidence" />
                <div className="min-w-0 flex-1 space-y-2">
                  <h3 className="font-display text-xl font-bold">
                    {lowConfidence ? "Unclear symptoms — not confirmed" : diagnosis.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Pill tone={lowConfidence ? "warning" : "caution"}>Severity: {diagnosis.severity}</Pill>
                    <Pill tone={lowConfidence ? "warning" : "success"}>
                      {confidence}% — {lowConfidence ? "low confidence" : "high confidence"}
                    </Pill>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {lowConfidence
                      ? "This image is unclear. The symptoms could indicate a fungal infection or a nutrient deficiency. We are not sure."
                      : "Your crop appears to have a common fungal leaf disease on the lower leaves."}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-muted/60 p-4">
                  <p className="text-sm font-bold">What we observed</p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {diagnosis.observed.map((o) => (
                      <li key={o}>• {o}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-success-soft p-4">
                  <p className="text-sm font-bold text-success">What to do now</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {diagnosis.doNow.map((o) => (
                      <li key={o} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-danger-soft p-4">
                  <p className="text-sm font-bold text-danger">What NOT to do</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {diagnosis.doNot.map((o) => (
                      <li key={o} className="flex gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-4 rounded-xl bg-info-soft p-3 text-sm font-semibold text-info">
                🔁 Check again: {diagnosis.recheck}
              </p>
              <WhyThis
                reasons={[
                  "Spot shape and colour matched a common fungal pattern",
                  "Humidity above 85% supports fungal growth",
                  "Damage is on lower leaves, which is typical for this disease",
                ]}
              />
              <SafetyNote />
            </SectionCard>

            {lowConfidence && (
              <SectionCard title="👨‍🌾 Expert verification recommended">
                <p className="text-sm text-muted-foreground">
                  AI confidence is low. An agricultural expert should verify this result before you take any chemical
                  action.
                </p>
                <div className="mt-3 rounded-2xl bg-muted/60 p-4 text-sm">
                  <p className="font-semibold">We will send:</p>
                  <ul className="mt-1 space-y-1 text-muted-foreground">
                    <li>• Crop photo and scan date</li>
                    <li>• Crop type: Tomato · Stage: Flowering</li>
                    <li>• Location: Guntur, Andhra Pradesh</li>
                    <li>• Symptoms and the AI analysis above</li>
                    <li>• Current weather conditions</li>
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => setSent(true)}
                  className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3.5 text-base font-bold text-primary-foreground"
                >
                  <UserCheck className="h-5 w-5" /> Send to expert
                </button>
                {sent && (
                  <p className="mt-3 rounded-xl bg-success-soft p-3 text-sm font-semibold text-success">
                    ✅ Sent. An expert usually replies within a few hours. You will see the reply here.
                  </p>
                )}
              </SectionCard>
            )}
          </>
        )}
      </div>
    </AppShell>
  );
}
