import React from "react";
import { TIMELINE } from "../../lib/data";

const PALETTE = {
  editorial: { bg: "#FDFBF7", fg: "#1A2F24", muted: "#5C6B62", accent: "#9A3B26", border: "#E1DCD1", surface: "#F5F1E8" },
  brutalism: { bg: "#050505", fg: "#E0E0E0", muted: "#888888", accent: "#00FF41", border: "#333333", surface: "#0A0A0A" },
  luxury: { bg: "#0B0C10", fg: "#F8F8F8", muted: "#A0A0B0", accent: "#D4AF37", border: "rgba(255,255,255,0.10)", surface: "rgba(255,255,255,0.04)" },
  playful: { bg: "#F4F0EA", fg: "#111111", muted: "#444444", accent: "#FF4A8D", border: "#111111", surface: "#FFFFFF" },
  swiss: { bg: "#FFFFFF", fg: "#000000", muted: "#666666", accent: "#FF3333", border: "#E5E5E5", surface: "#F9F9F9" },
};

const HEAD_FONT = {
  editorial: "font-serif",
  brutalism: "font-mono",
  luxury: "font-playfair",
  playful: "font-cabinet",
  swiss: "font-clash",
};

export default function Timeline({ variant }) {
  const s = PALETTE[variant];
  const f = HEAD_FONT[variant];

  return (
    <section id="journey" className="relative px-6 md:px-12 py-20 md:py-32" style={{ backgroundColor: s.bg, color: s.fg }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: s.accent }}>
            {variant === "brutalism" ? "> The Journey" : "The Journey"}
          </div>
          <h2 className={`${f} text-4xl md:text-6xl leading-[1.05] tracking-tight ${variant === "playful" || variant === "brutalism" ? "uppercase font-bold" : "font-medium"}`}>
            {variant === "editorial" || variant === "luxury" ? (
              <>From learner to <em className="italic" style={{ color: s.accent }}>international</em> stage</>
            ) : (
              "From learner to international stage"
            )}
          </h2>
        </div>

        {variant === "swiss" ? <SwissTL p={s} f={f} /> : variant === "playful" ? <PlayfulTL p={s} f={f} /> : variant === "brutalism" ? <BrutalismTL p={s} /> : <ClassicTL p={s} f={f} variant={variant} />}
      </div>
    </section>
  );
}

function ClassicTL({ p, f, variant }) {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style={{ backgroundColor: p.border }} />
      <ul className="space-y-12 md:space-y-20">
        {TIMELINE.map((t, i) => {
          const left = i % 2 === 0;
          return (
            <li key={t.year} className="relative md:grid md:grid-cols-2 md:gap-12">
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full" style={{ backgroundColor: p.accent }} />
              <div className={`pl-12 md:pl-0 ${left ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                <div className={`${f} text-3xl md:text-5xl mb-2`} style={{ color: p.accent }}>{t.year}</div>
                <h3 className={`${f} text-xl md:text-2xl font-medium mb-3`}>{t.title}</h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: p.muted }}>{t.body}</p>
                <div className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                  {t.badges.map((b) => (
                    <span
                      key={b}
                      className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: p.surface, color: p.fg, border: `1px solid ${p.border}` }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function BrutalismTL({ p }) {
  return (
    <pre className="text-xs md:text-sm leading-relaxed overflow-x-auto" style={{ color: p.fg }}>
      {TIMELINE.map((t, i) => (
        <div key={t.year} className="mb-6 md:flex md:gap-6 border-l-2 pl-4" style={{ borderColor: p.accent }}>
          <div className="md:w-32 shrink-0">
            <div className="font-bold" style={{ color: p.accent }}>[{t.year}]</div>
            <div className="text-[10px] opacity-60">log #{String(i + 1).padStart(3, "0")}</div>
          </div>
          <div className="flex-1">
            <div className="uppercase font-bold mb-2" style={{ color: "#FFB000" }}>&gt; {t.title}</div>
            <div className="whitespace-normal" style={{ color: p.muted }}>{t.body}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.badges.map((b) => (
                <span key={b} className="text-[10px] uppercase px-2 py-1 border" style={{ borderColor: p.border, color: p.accent }}>
                  ▸ {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </pre>
  );
}

function PlayfulTL({ p, f }) {
  const colors = ["#FFDF70", "#FF4A8D", "#0047FF", "#FFDF70", "#FF4A8D", "#0047FF"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {TIMELINE.map((t, i) => (
        <div
          key={t.year}
          className={`relative p-7 rounded-3xl border-4 border-black shadow-[8px_8px_0_0_#111] ${i % 3 === 1 ? "rotate-[-1deg]" : i % 3 === 2 ? "rotate-[1deg]" : ""}`}
          style={{ backgroundColor: colors[i % colors.length], color: i === 2 || i === 5 ? "#FFF" : "#111" }}
        >
          <div className={`${f} text-5xl font-black mb-3`}>{t.year}</div>
          <h3 className={`${f} text-xl uppercase font-black mb-3`}>{t.title}</h3>
          <p className="text-sm leading-relaxed font-medium">{t.body}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {t.badges.map((b) => (
              <span key={b} className="text-[10px] uppercase font-black px-3 py-1 rounded-full bg-white text-black border-2 border-black">
                {b}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SwissTL({ p, f }) {
  return (
    <ul className="border-t" style={{ borderColor: p.border }}>
      {TIMELINE.map((t) => (
        <li key={t.year} className="grid grid-cols-12 gap-4 py-10 border-b" style={{ borderColor: p.border }}>
          <div className={`${f} col-span-12 md:col-span-2 text-4xl md:text-5xl font-medium`} style={{ color: "#000" }}>
            {t.year}
          </div>
          <div className="col-span-12 md:col-span-3">
            <h3 className={`${f} text-xl md:text-2xl font-medium`}>{t.title}</h3>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-base leading-relaxed" style={{ color: p.muted }}>{t.body}</p>
          </div>
          <div className="col-span-12 md:col-span-2">
            <div className="flex flex-wrap gap-1">
              {t.badges.map((b) => (
                <span key={b} className="text-[10px] uppercase tracking-widest border px-2 py-1" style={{ borderColor: p.border }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
