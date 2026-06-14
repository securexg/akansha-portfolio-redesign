import React from "react";
import { STATS_BIG, TOPICS } from "../../lib/data";

const P = {
  editorial: { bg: "#FDFBF7", fg: "#1A2F24", muted: "#5C6B62", accent: "#9A3B26", border: "#E1DCD1", surface: "#F5F1E8" },
  brutalism: { bg: "#050505", fg: "#E0E0E0", muted: "#888888", accent: "#00FF41", border: "#333333", surface: "#0A0A0A" },
  luxury: { bg: "#0B0C10", fg: "#F8F8F8", muted: "#A0A0B0", accent: "#D4AF37", border: "rgba(255,255,255,0.10)", surface: "rgba(255,255,255,0.04)" },
  playful: { bg: "#F4F0EA", fg: "#111111", muted: "#444444", accent: "#FF4A8D", border: "#111111", surface: "#FFFFFF" },
  swiss: { bg: "#FFFFFF", fg: "#000000", muted: "#666666", accent: "#FF3333", border: "#E5E5E5", surface: "#F9F9F9" },
};

const F = { editorial: "font-serif", brutalism: "font-mono", luxury: "font-playfair", playful: "font-cabinet", swiss: "font-clash" };

export function Stats({ variant }) {
  const s = P[variant];
  const f = F[variant];
  return (
    <section id="stats" className="relative px-6 md:px-12 py-20 md:py-32" style={{ backgroundColor: s.bg, color: s.fg }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: s.accent }}>
            {variant === "brutalism" ? "> By the Numbers" : "By the Numbers"}
          </div>
          <h2 className={`${f} text-4xl md:text-6xl tracking-tight ${variant === "playful" || variant === "brutalism" ? "uppercase font-bold" : "font-medium"}`}>
            {variant === "editorial" || variant === "luxury" ? (
              <>More than <em className="italic" style={{ color: s.accent }}>just</em> talks</>
            ) : "More than just talks"}
          </h2>
        </div>

        {variant === "playful" ? <PlayfulStats /> : variant === "brutalism" ? <BrutalismStats s={s} /> : variant === "swiss" ? <SwissStats s={s} f={f} /> : <ClassicStats s={s} f={f} />}
      </div>
    </section>
  );
}

function ClassicStats({ s, f }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {STATS_BIG.map((it) => (
        <div key={it.label} className="p-7 rounded-2xl backdrop-blur-xl border" style={{ borderColor: s.border, backgroundColor: s.surface }}>
          <div className={`${f} text-5xl md:text-7xl font-medium leading-none`} style={{ color: s.accent }}>
            {it.value}
          </div>
          <div className="mt-3 text-xs uppercase tracking-[0.25em]" style={{ color: s.muted }}>{it.label}</div>
        </div>
      ))}
    </div>
  );
}

function BrutalismStats({ s }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 border" style={{ borderColor: s.border }}>
      {STATS_BIG.map((it, i) => (
        <div key={it.label} className="p-6 border-r border-b last:border-r-0" style={{ borderColor: s.border }}>
          <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "#FFB000" }}>STAT_{String(i + 1).padStart(2, "0")}</div>
          <div className="font-mono text-4xl md:text-6xl font-bold" style={{ color: s.accent }}>{it.value}</div>
          <div className="mt-2 text-xs uppercase tracking-widest" style={{ color: s.muted }}>▸ {it.label}</div>
        </div>
      ))}
    </div>
  );
}

function PlayfulStats() {
  const cols = [
    { v: STATS_BIG[0], bg: "#0047FF", text: "#FFF", span: "col-span-6 md:col-span-4" },
    { v: STATS_BIG[1], bg: "#FFDF70", text: "#111", span: "col-span-6 md:col-span-2" },
    { v: STATS_BIG[2], bg: "#FF4A8D", text: "#FFF", span: "col-span-6 md:col-span-3" },
    { v: STATS_BIG[3], bg: "#FFFFFF", text: "#111", span: "col-span-6 md:col-span-3" },
    { v: STATS_BIG[4], bg: "#FFDF70", text: "#111", span: "col-span-6 md:col-span-3" },
    { v: STATS_BIG[5], bg: "#0047FF", text: "#FFF", span: "col-span-6 md:col-span-3" },
  ];
  return (
    <div className="grid grid-cols-6 gap-3 md:gap-4">
      {cols.map(({ v, bg, text, span }) => (
        <div
          key={v.label}
          className={`${span} p-6 rounded-3xl border-4 border-black shadow-[6px_6px_0_0_#111] flex flex-col justify-between min-h-[160px]`}
          style={{ backgroundColor: bg, color: text }}
        >
          <div className="font-cabinet text-5xl md:text-7xl font-black leading-none">{v.value}</div>
          <div className="text-xs font-bold uppercase tracking-wider mt-3">{v.label}</div>
        </div>
      ))}
    </div>
  );
}

function SwissStats({ s, f }) {
  return (
    <div className="grid grid-cols-12 gap-x-4 border-t" style={{ borderColor: s.border }}>
      {STATS_BIG.map((it, i) => (
        <div key={it.label} className={`col-span-12 md:col-span-4 py-8 ${i % 3 !== 0 ? "md:border-l md:pl-6" : "md:pr-6"} border-b md:border-b-0`} style={{ borderColor: s.border }}>
          <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: s.muted }}>0{i + 1}</div>
          <div className={`${f} text-5xl md:text-7xl font-medium mt-3`}>{it.value}</div>
          <div className="mt-2 text-sm" style={{ color: s.muted }}>{it.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ============================== TOPICS ============================== */
export function Topics({ variant }) {
  const s = P[variant];
  const f = F[variant];

  const chipCls = {
    editorial: "rounded-full border px-5 py-2.5 text-sm transition hover:bg-[#9A3B26] hover:text-white",
    brutalism: "border px-4 py-2 text-xs uppercase tracking-widest font-mono transition hover:border-[#00FF41] hover:text-[#00FF41]",
    luxury: "rounded-full border px-5 py-2.5 text-sm font-light backdrop-blur-md transition hover:border-[#D4AF37] hover:text-[#D4AF37]",
    playful: "rounded-full border-4 border-black px-5 py-2.5 text-sm font-black uppercase bg-white text-black shadow-[4px_4px_0_0_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#111] hover:bg-[#FFDF70] transition-all",
    swiss: "border px-5 py-2.5 text-sm uppercase tracking-wider hover:border-black transition",
  }[variant];

  const chipStyle = {
    editorial: { borderColor: s.border, color: s.fg },
    brutalism: { borderColor: s.border, color: s.fg },
    luxury: { borderColor: s.border, color: s.fg, background: s.surface },
    playful: {},
    swiss: { borderColor: s.border, color: s.fg },
  }[variant];

  return (
    <section id="topics" className="relative px-6 md:px-12 py-20 md:py-28" style={{ backgroundColor: s.bg, color: s.fg }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: s.accent }}>
            {variant === "brutalism" ? "> I Speak About" : "I Speak About"}
          </div>
          <h2 className={`${f} text-4xl md:text-5xl tracking-tight ${variant === "playful" || variant === "brutalism" ? "uppercase font-bold" : "font-medium"}`}>
            {variant === "editorial" || variant === "luxury" ? (
              <>Topics I <em className="italic" style={{ color: s.accent }}>cover</em></>
            ) : "Topics I cover"}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: s.muted }}>
            Complex topics made accessible — from beginner workshops to advanced conference talks.
          </p>
        </div>
        <div className="md:col-span-8 flex flex-wrap gap-3">
          {TOPICS.map((t) => (
            <span key={t} className={chipCls} style={chipStyle} data-testid={`topic-${t.toLowerCase().replace(/\W+/g, "-")}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
