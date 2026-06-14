import React from "react";
import { STATS_BIG, TOPICS } from "../../lib/data";

const P = {
  playful: { bg: "#F4F0EA", fg: "#111111", muted: "#444444", accent: "#FF4A8D", border: "#111111", surface: "#FFFFFF" },
  google: { bg: "#FFFFFF", fg: "#202124", muted: "#5F6368", accent: "#4285F4", border: "#E8EAED", surface: "#F8F9FA" },
};

const F = { playful: "font-cabinet", google: "font-product-sans" };

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

        {variant === "playful" ? <PlayfulStats /> : <ClassicStats s={s} f={f} />}
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

/* ============================== TOPICS ============================== */
export function Topics({ variant }) {
  const s = P[variant];
  const f = F[variant];

  const chipCls = {
    playful: "rounded-full border-4 border-black px-5 py-2.5 text-sm font-black uppercase bg-white text-black shadow-[4px_4px_0_0_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#111] hover:bg-[#FFDF70] transition-all",
    google: "rounded-full border px-5 py-2.5 text-sm font-medium google-shadow hover:google-shadow-lg transition-all",
  }[variant];

  const chipStyle = {
    playful: {},
    google: { borderColor: s.border, color: s.fg, backgroundColor: s.surface },
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
