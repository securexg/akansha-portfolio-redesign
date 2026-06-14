import React from "react";
import { CODELABS, LEADERSHIP, CONTACT } from "../../lib/data";

const P = {
  editorial: { bg: "#FDFBF7", fg: "#1A2F24", muted: "#5C6B62", accent: "#9A3B26", border: "#E1DCD1", surface: "#F5F1E8" },
  brutalism: { bg: "#050505", fg: "#E0E0E0", muted: "#888888", accent: "#00FF41", border: "#333333", surface: "#0A0A0A" },
  luxury: { bg: "#0B0C10", fg: "#F8F8F8", muted: "#A0A0B0", accent: "#D4AF37", border: "rgba(255,255,255,0.10)", surface: "rgba(255,255,255,0.04)" },
  playful: { bg: "#F4F0EA", fg: "#111111", muted: "#444444", accent: "#FF4A8D", border: "#111111", surface: "#FFFFFF" },
  swiss: { bg: "#FFFFFF", fg: "#000000", muted: "#666666", accent: "#FF3333", border: "#E5E5E5", surface: "#F9F9F9" },
};

const F = { editorial: "font-serif", brutalism: "font-mono", luxury: "font-playfair", playful: "font-cabinet", swiss: "font-clash" };

/* ============================== CODELABS ============================== */
export function Codelabs({ variant }) {
  const s = P[variant];
  const f = F[variant];

  return (
    <section id="codelabs" className="relative px-6 md:px-12 py-20 md:py-28" style={{ backgroundColor: s.bg, color: s.fg }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: s.accent }}>
            {variant === "brutalism" ? "> Hands-on" : "Hands-on"}
          </div>
          <h2 className={`${f} text-4xl md:text-6xl tracking-tight ${variant === "playful" || variant === "brutalism" ? "uppercase font-bold" : "font-medium"}`}>
            {variant === "editorial" || variant === "luxury" ? (
              <>Build it <em className="italic" style={{ color: s.accent }}>yourself</em></>
            ) : "Build it yourself"}
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg" style={{ color: s.muted }}>
            Step-by-step codelabs that turn talks into working apps you can ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CODELABS.map((c) => (
            <article
              key={c.no}
              className={
                variant === "playful"
                  ? "p-8 rounded-3xl border-4 border-black bg-[#FFDF70] shadow-[8px_8px_0_0_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_#111] transition-all"
                  : variant === "brutalism"
                  ? "p-8 border hover:border-[#00FF41] transition-colors"
                  : variant === "luxury"
                  ? "p-8 rounded-2xl backdrop-blur-xl border"
                  : variant === "swiss"
                  ? "p-10"
                  : "p-8 border rounded-2xl"
              }
              style={{
                backgroundColor: variant === "swiss" || variant === "brutalism" ? s.surface : variant === "luxury" ? s.surface : variant === "editorial" ? s.surface : undefined,
                borderColor: s.border,
              }}
              data-testid={`codelab-${c.no}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`${f} text-4xl md:text-5xl font-medium`} style={{ color: s.accent }}>{c.no}</div>
                <span className="text-[10px] uppercase tracking-widest px-3 py-1 border rounded-full" style={{ borderColor: variant === "playful" ? "#111" : s.accent, color: variant === "playful" ? "#111" : s.accent }}>
                  {c.tag}
                </span>
              </div>
              <h3 className={`${f} text-2xl md:text-3xl leading-snug ${variant === "playful" || variant === "brutalism" ? "uppercase font-black" : "font-medium"}`}>
                {c.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed" style={{ color: variant === "playful" ? "#111" : s.muted }}>
                {c.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.chips.map((ch) => (
                  <span
                    key={ch}
                    className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border"
                    style={{ borderColor: variant === "playful" ? "#111" : s.border, color: variant === "playful" ? "#111" : s.muted }}
                  >
                    {ch}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {c.links.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`codelab-${c.no}-link-${i}`}
                    className={`text-sm font-medium underline-offset-4 hover:underline`}
                    style={{ color: variant === "playful" ? "#0047FF" : s.accent }}
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== LEADERSHIP ============================== */
export function Leadership({ variant }) {
  const s = P[variant];
  const f = F[variant];

  return (
    <section id="leadership" className="relative px-6 md:px-12 py-20 md:py-32" style={{ backgroundColor: s.bg, color: s.fg }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: s.accent }}>
            {variant === "brutalism" ? "> Leadership" : "Leadership"}
          </div>
          <h2 className={`${f} text-4xl md:text-6xl tracking-tight ${variant === "playful" || variant === "brutalism" ? "uppercase font-bold" : "font-medium"}`}>
            {variant === "editorial" || variant === "luxury" ? (
              <>Roles & <em className="italic" style={{ color: s.accent }}>recognition</em></>
            ) : "Roles & recognition"}
          </h2>
        </div>

        {/* Featured speaker of the day */}
        <article
          className={
            variant === "playful"
              ? "grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border-4 border-black shadow-[10px_10px_0_0_#111] mb-12"
              : "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center"
          }
        >
          <div className={variant === "playful" ? "bg-[#FFDF70] p-8 md:p-12 order-2 md:order-1" : "order-2 md:order-1"}>
            <div className="text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: s.accent }}>
              {LEADERSHIP.featured.tag}
            </div>
            <h3 className={`${f} text-3xl md:text-5xl ${variant === "playful" || variant === "brutalism" ? "uppercase font-black" : "font-medium"} leading-tight`}>
              {LEADERSHIP.featured.title}
            </h3>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: variant === "playful" ? "#111" : s.muted }}>
              {LEADERSHIP.featured.body}
            </p>
          </div>
          <div className={variant === "playful" ? "order-1 md:order-2 bg-[#0047FF] p-8 flex items-center justify-center" : "order-1 md:order-2"}>
            <img
              src={LEADERSHIP.featured.image}
              alt="Akansha Jain — Sessionize Speaker of the Day"
              className={
                variant === "playful"
                  ? "w-full max-w-md h-auto rounded-2xl border-4 border-black"
                  : variant === "brutalism" || variant === "swiss"
                  ? "w-full h-auto"
                  : "w-full h-auto rounded-2xl"
              }
            />
          </div>
        </article>

        {/* Grid of roles */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 ${variant === "brutalism" ? "border" : ""}`}
          style={variant === "brutalism" ? { borderColor: s.border } : {}}
        >
          {LEADERSHIP.items.map((it, i) => (
            <article
              key={i}
              className={
                variant === "playful"
                  ? "p-6 bg-white rounded-2xl border-4 border-black shadow-[6px_6px_0_0_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#111] transition-all"
                  : variant === "brutalism"
                  ? "p-6 border hover:bg-[#0A0A0A] transition-colors"
                  : variant === "swiss"
                  ? "p-7"
                  : variant === "luxury"
                  ? "p-6 rounded-2xl backdrop-blur-xl border"
                  : "p-6 rounded-xl border"
              }
              style={{
                backgroundColor: variant === "swiss" ? s.surface : variant === "luxury" ? s.surface : variant === "brutalism" ? "transparent" : variant === "editorial" ? s.surface : undefined,
                borderColor: s.border,
              }}
              data-testid={`leadership-item-${i}`}
            >
              <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: s.accent }}>
                {it.org}
              </div>
              <h4 className={`${f} text-lg md:text-xl ${variant === "playful" || variant === "brutalism" ? "uppercase font-black" : "font-medium"} leading-snug`}>
                {it.role}
              </h4>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: variant === "playful" ? "#444" : s.muted }}>
                {it.body}
              </p>
              <div className="mt-4 text-[10px] uppercase tracking-widest" style={{ color: s.muted }}>
                {it.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== CONTACT ============================== */
export function Contact({ variant }) {
  const s = P[variant];
  const f = F[variant];

  return (
    <section id="contact" className="relative px-6 md:px-12 py-24 md:py-40" style={{ backgroundColor: s.bg, color: s.fg }}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-[11px] uppercase tracking-[0.3em] mb-6" style={{ color: s.accent }}>
          {variant === "brutalism" ? "> Get in Touch" : "Get in Touch"}
        </div>
        <h2 className={`${f} text-5xl md:text-7xl lg:text-8xl tracking-tight ${variant === "playful" || variant === "brutalism" ? "uppercase font-bold" : "font-medium"} leading-[1.05]`}>
          {variant === "editorial" || variant === "luxury" ? (
            <>Let&apos;s make your event <em className="italic" style={{ color: s.accent }}>unforgettable</em></>
          ) : variant === "playful" ? (
            <>Let&apos;s make your event <span style={{ color: s.accent }}>unforgettable</span></>
          ) : (
            <>Let&apos;s make your event<span style={{ color: s.accent }}>.</span> unforgettable</>
          )}
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg" style={{ color: s.muted }}>
          {CONTACT.body}
        </p>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          {CONTACT.ctas.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`contact-cta-${i}`}
              className={
                c.primary
                  ? variant === "playful"
                    ? "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF4A8D] border-4 border-black text-black font-black uppercase tracking-wide shadow-[6px_6px_0_0_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#111] transition-all"
                    : variant === "brutalism"
                    ? "px-8 py-4 border-2 font-bold uppercase text-xs tracking-widest transition-all hover:bg-[#00FF41] hover:text-[#050505]"
                    : variant === "swiss"
                    ? "px-8 py-4 bg-black text-white hover:bg-[#FF3333] transition-colors"
                    : variant === "luxury"
                    ? "px-8 py-4 rounded-full text-[#0B0C10] transition"
                    : "px-8 py-4 rounded-full border transition hover:bg-[#9A3B26] hover:text-white"
                  : variant === "playful"
                  ? "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-4 border-black text-black font-black uppercase shadow-[6px_6px_0_0_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#111] transition-all"
                  : variant === "brutalism"
                  ? "px-8 py-4 border font-bold uppercase text-xs tracking-widest hover:border-[#00FF41] hover:text-[#00FF41] transition-all"
                  : variant === "swiss"
                  ? "px-8 py-4 border hover:border-black transition-colors"
                  : "px-8 py-4 rounded-full border transition"
              }
              style={
                c.primary
                  ? variant === "luxury"
                    ? { backgroundColor: s.accent }
                    : variant === "editorial"
                    ? { borderColor: s.fg, color: s.fg }
                    : variant === "brutalism"
                    ? { borderColor: s.accent, color: s.accent }
                    : {}
                  : variant === "luxury"
                  ? { borderColor: s.border, color: s.fg, background: s.surface }
                  : variant === "swiss"
                  ? { borderColor: s.border, color: s.fg }
                  : variant === "editorial"
                  ? { borderColor: s.border, color: s.fg }
                  : variant === "brutalism"
                  ? { borderColor: s.border, color: s.fg }
                  : {}
              }
            >
              {c.label} ↗
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-24 md:mt-32 max-w-7xl mx-auto pt-10 border-t flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs" style={{ borderColor: s.border, color: s.muted }}>
        <div>© 2026 Akansha Jain — Redesign demo. Original content from akanshajain.dev.</div>
        <div className="flex gap-4">
          <a href="https://sessionize.com/akanshajain/" target="_blank" rel="noopener noreferrer" className="hover:underline">Sessionize</a>
          <a href="https://www.linkedin.com/in/akansha-jain-2001/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://akanshajain.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">Original Site</a>
        </div>
      </footer>
    </section>
  );
}
