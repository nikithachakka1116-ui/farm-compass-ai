import { useState } from "react";
import { Mic, Volume2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SourceTag, SafetyNote } from "@/components/farm/bits";

const samples = [
  {
    q: "నా టమాటా ఆకులు పసుపుగా మారుతున్నాయి, నేను ఏం చేయాలి?",
    a: "Yellow lower leaves after heavy rain usually mean a fungal problem or too much water. Remove the worst leaves today, keep water off the leaves, and take a photo again in 3 days. Do not spray before tonight's rain.",
  },
  {
    q: "Should I irrigate today?",
    a: "No. Rain is expected tonight and your soil is still moist. Check again tomorrow evening.",
  },
  {
    q: "मैं छिड़काव कब कर सकता हूँ?",
    a: "Tomorrow morning between 6:00 and 8:30 is the safest window. Wind and rain make today unsafe.",
  },
];

export function VoiceAssistant({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [state, setState] = useState<"idle" | "listening" | "answer">("idle");
  const [pick, setPick] = useState(0);

  if (!open) return null;

  const listen = (i: number) => {
    setPick(i);
    setState("listening");
    setTimeout(() => setState("answer"), 1600);
  };

  const speak = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const u = new SpeechSynthesisUtterance(samples[pick]!.a);
      window.speechSynthesis.speak(u);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="w-full max-w-lg rounded-t-3xl bg-card p-6 shadow-lift sm:rounded-3xl">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <h2 className="truncate text-lg font-bold">🎙️ Ask by voice</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-full p-2 hover:bg-muted">
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">Speak in your own language — Telugu, Hindi, Tamil, Kannada, Malayalam, Marathi, Bengali or English.</p>

        <div className="mt-6 flex flex-col items-center">
          <button
            type="button"
            onClick={() => listen(pick)}
            className={cn(
              "grid h-28 w-28 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition active:scale-95",
              state === "listening" && "animate-pulse",
            )}
          >
            <Mic className="h-12 w-12" />
          </button>
          <p className="mt-3 text-sm font-semibold">
            {state === "listening" ? "Listening..." : state === "answer" ? "Here is a simple answer" : "Tap and speak"}
          </p>
        </div>

        <div className="mt-5 space-y-2">
          <p className="text-xs font-semibold text-muted-foreground">Try an example question</p>
          {samples.map((s, i) => (
            <button
              key={s.q}
              type="button"
              onClick={() => listen(i)}
              className="w-full rounded-xl bg-secondary px-3 py-2.5 text-left text-sm font-medium text-secondary-foreground transition hover:bg-accent"
            >
              {s.q}
            </button>
          ))}
        </div>

        {state === "answer" && (
          <div className="mt-5 rounded-2xl bg-success-soft p-4 ring-1 ring-success/25">
            <SourceTag kind="ai" />
            <p className="mt-2 text-sm leading-relaxed">{samples[pick]!.a}</p>
            <button
              type="button"
              onClick={speak}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-card px-3 py-2 text-xs font-bold ring-1 ring-border"
            >
              <Volume2 className="h-4 w-4" /> Read answer aloud
            </button>
            <SafetyNote />
          </div>
        )}
      </div>
    </div>
  );
}
