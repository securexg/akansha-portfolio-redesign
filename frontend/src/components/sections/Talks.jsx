import React from "react";
import { SELECTED_TALKS, FEATURED_TALK, ARCHIVE } from "../../lib/data";

/* Section wrapper that adapts to variant */
function SectionShell({ variant, eyebrow, title, sub, children, id }) {
  const styles = {
    editorial: { bg: "#FDFBF7", fg: "#1A2F24", muted: "#5C6B62", accent: "#9A3B26" },
    brutalism: { bg: "#050505", fg: "#E0E0E0", muted: "#888888", accent: "#00FF41" },
    luxury: { bg: "#0B0C10", fg: "#F8F8F8", muted: "#A0A0B0", accent: "#D4AF37" },
    playful: { bg: "#F4F0EA", fg: "#111111", muted: "#444444", accent: "#FF4A8D" },
    swiss: { bg: "#FFFFFF", fg: "#000000", muted: "#666666", accent: "#FF3333" },
  }[variant];

  const headerFont = {
    editorial: "font-serif",
    brutalism: "font-mono",
    luxury: "font-playfair",
    playful: "font-cabinet",
    swiss: "font-clash",
  }[variant];

  return (
    <section id={id} className="relative px-6 md:px-12 py-20 md:py-32" style={{ backgroundColor: styles.bg, color: styles.fg }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: styles.accent }}>
            {variant === "brutalism" ? `> ${eyebrow}` : eyebrow}
          </div>
          <h2 className={`${headerFont} text-4xl md:text-6xl leading-[1.05] tracking-tight ${variant === "brutalism" || variant === "playful" ? "uppercase font-bold" : "font-medium"}`}>
            {title}
          </h2>
          {sub && (
            <p className="mt-6 max-w-2xl text-base md:text-lg" style={{ color: styles.muted }}>
              {sub}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ============================== SELECTED TALKS ============================== */
export function SelectedTalks({ variant }) {
  return (
    <SectionShell
      variant={variant}
      id="talks"
      eyebrow="Selected Talks"
      title={variant === "editorial" || variant === "luxury"
        ? <>Talks that <em className="italic" style={{ color: variant === "luxury" ? "#D4AF37" : "#9A3B26" }}>moved</em> the room</>
        : "Talks that moved the room"}
      sub="From community meetups to international conference stages — delivering ideas that resonate."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SELECTED_TALKS.map((t) => (
          <TalkCard key={t.id} talk={t} variant={variant} />
        ))}
      </div>
    </SectionShell>
  );
}

function TalkCard({ talk, variant }) {
  const baseHeading = {
    editorial: "font-serif text-2xl md:text-3xl font-medium leading-snug",
    brutalism: "font-mono text-lg md:text-xl uppercase font-bold leading-snug",
    luxury: "font-playfair text-2xl md:text-3xl leading-snug",
    playful: "font-cabinet text-2xl md:text-3xl font-black uppercase leading-tight",
    swiss: "font-clash text-2xl md:text-3xl font-medium leading-snug",
  }[variant];

  const cardCls = {
    editorial: "bg-transparent border-t pt-6 pb-8",
    brutalism: "border p-6 hover:border-[#00FF41] transition-colors",
    luxury: "p-7 rounded-2xl backdrop-blur-xl border",
    playful: "p-7 rounded-3xl border-4 border-black shadow-[8px_8px_0_0_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[5px_5px_0_0_#111] transition-all",
    swiss: "p-8",
  }[variant];

  const styles = {
    editorial: { borderColor: "#E1DCD1", color: "#1A2F24", muted: "#5C6B62", accent: "#9A3B26", bg: "transparent" },
    brutalism: { borderColor: "#333333", color: "#E0E0E0", muted: "#888888", accent: "#00FF41", bg: "#0A0A0A" },
    luxury: { borderColor: "rgba(255,255,255,0.10)", color: "#F8F8F8", muted: "#A0A0B0", accent: "#D4AF37", bg: "rgba(255,255,255,0.04)" },
    playful: { borderColor: "#111", color: "#111", muted: "#444", accent: "#0047FF", bg: "#FFFFFF" },
    swiss: { borderColor: "#E5E5E5", color: "#000", muted: "#666", accent: "#FF3333", bg: "#F9F9F9" },
  }[variant];

  return (
    <article
      className={cardCls}
      style={{ backgroundColor: styles.bg, borderColor: styles.borderColor, color: styles.color }}
      data-testid={`talk-card-${talk.id}`}
    >
      <div className="flex items-center justify-between mb-3 text-[11px] uppercase tracking-widest" style={{ color: styles.accent }}>
        <span>{talk.id}</span>
        <span>{talk.kind}</span>
      </div>
      <h3 className={baseHeading}>{talk.title}</h3>
      <div className="mt-4 text-sm" style={{ color: styles.muted }}>
        ◆ {talk.venue}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-wider" style={{ color: styles.muted }}>
        {talk.year && <span>{talk.year} · Year</span>}
        {talk.level && <span>{talk.level} · Level</span>}
        {talk.views && <span>{talk.views} · Views</span>}
        {talk.attendees && <span>{talk.attendees} · Attendees</span>}
      </div>
      <p className="mt-4 text-sm leading-relaxed" style={{ color: styles.muted }}>
        {talk.desc}
      </p>
      {talk.link && (
        <a
          href={talk.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-sm font-medium underline-offset-4 hover:underline"
          style={{ color: styles.accent }}
          data-testid={`talk-card-link-${talk.id}`}
        >
          Watch Talk ↗
        </a>
      )}
    </article>
  );
}

/* ============================== FEATURED TALK ============================== */
export function FeaturedTalk({ variant }) {
  const styles = {
    editorial: { bg: "#1A2F24", fg: "#FDFBF7", accent: "#FFCBA4" },
    brutalism: { bg: "#0A0A0A", fg: "#E0E0E0", accent: "#00FF41" },
    luxury: { bg: "#0B0C10", fg: "#F8F8F8", accent: "#D4AF37" },
    playful: { bg: "#0047FF", fg: "#FFFFFF", accent: "#FFDF70" },
    swiss: { bg: "#000000", fg: "#FFFFFF", accent: "#FF3333" },
  }[variant];

  const head = {
    editorial: "font-serif text-4xl md:text-6xl leading-tight font-light",
    brutalism: "font-mono text-3xl md:text-5xl uppercase font-bold leading-tight",
    luxury: "font-playfair text-4xl md:text-6xl leading-tight",
    playful: "font-cabinet text-4xl md:text-7xl uppercase font-black leading-[0.95]",
    swiss: "font-clash text-4xl md:text-6xl leading-tight font-medium",
  }[variant];

  return (
    <section className="relative px-6 md:px-12 py-20 md:py-28" style={{ backgroundColor: styles.bg, color: styles.fg }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <a href={FEATURED_TALK.link} target="_blank" rel="noopener noreferrer" className="block group relative">
            <img
              src={FEATURED_TALK.image}
              alt="Akansha Jain speaking at FlutterNinjas Tokyo"
              className={`w-full h-auto ${variant === "playful" ? "rounded-3xl border-4 border-black shadow-[10px_10px_0_0_#111]" : variant === "swiss" || variant === "brutalism" ? "rounded-none" : "rounded-2xl"}`}
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.35), transparent 60%)" }}
            >
              <span
                className={`h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-full text-2xl font-bold`}
                style={{ backgroundColor: styles.accent, color: styles.bg }}
              >
                ▶
              </span>
            </div>
          </a>
        </div>
        <div className="md:col-span-6">
          <div className="text-[11px] uppercase tracking-[0.3em] mb-4" style={{ color: styles.accent }}>
            Featured Talk
          </div>
          <h3 className={head}>
            Offline Mode, <em className="italic">Online Impact</em>
          </h3>
          <p className="mt-6 text-base md:text-lg leading-relaxed opacity-80">
            {FEATURED_TALK.desc}
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-xs uppercase tracking-widest opacity-80">
            <div><div className="opacity-60">Location</div><div className="mt-1 text-sm">{FEATURED_TALK.city}, {FEATURED_TALK.country}</div></div>
            <div><div className="opacity-60">Year</div><div className="mt-1 text-sm">{FEATURED_TALK.year}</div></div>
            <div><div className="opacity-60">Level</div><div className="mt-1 text-sm">{FEATURED_TALK.level}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== ARCHIVE ============================== */
export function Archive({ variant }) {
  const [active, setActive] = React.useState("All");
  const filtered = ARCHIVE.items.filter((it) => active === "All" || it.cats.includes(active));

  const styles = {
    editorial: { bg: "#FDFBF7", fg: "#1A2F24", muted: "#5C6B62", accent: "#9A3B26", border: "#E1DCD1", surface: "#F5F1E8" },
    brutalism: { bg: "#050505", fg: "#E0E0E0", muted: "#888888", accent: "#00FF41", border: "#333333", surface: "#0A0A0A" },
    luxury: { bg: "#0B0C10", fg: "#F8F8F8", muted: "#A0A0B0", accent: "#D4AF37", border: "rgba(255,255,255,0.10)", surface: "rgba(255,255,255,0.04)" },
    playful: { bg: "#F4F0EA", fg: "#111111", muted: "#444444", accent: "#FF4A8D", border: "#111111", surface: "#FFFFFF" },
    swiss: { bg: "#FFFFFF", fg: "#000000", muted: "#666666", accent: "#FF3333", border: "#E5E5E5", surface: "#F9F9F9" },
  }[variant];

  return (
    <SectionShell
      variant={variant}
      id="archive"
      eyebrow="Complete Archive"
      title={
        variant === "editorial" || variant === "luxury" ? (
          <>{ARCHIVE.count} talks & <em className="italic" style={{ color: styles.accent }}>counting</em></>
        ) : (
          `${ARCHIVE.count} talks & counting`
        )
      }
    >
      <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
        {ARCHIVE.tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              data-testid={`archive-tab-${tab.toLowerCase().replace(/\W+/g, "-")}`}
              className={`px-4 py-2 text-xs md:text-sm uppercase tracking-wider transition ${
                variant === "playful"
                  ? `border-2 border-black rounded-full font-bold ${isActive ? "bg-black text-white" : "bg-white text-black hover:bg-[#FFDF70]"}`
                  : variant === "brutalism"
                  ? `border ${isActive ? "border-[#00FF41] text-[#00FF41]" : "border-[#333] hover:border-[#00FF41]"}`
                  : variant === "swiss"
                  ? `border ${isActive ? "border-black bg-black text-white" : "border-[#E5E5E5] hover:border-black"}`
                  : `rounded-full border ${isActive ? "text-white" : "hover:opacity-90"}`
              }`}
              style={
                variant === "editorial" || variant === "luxury"
                  ? {
                      backgroundColor: isActive ? styles.accent : "transparent",
                      borderColor: isActive ? styles.accent : styles.border,
                      color: isActive ? "#FFF" : styles.fg,
                    }
                  : {}
              }
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 ${
          variant === "brutalism" ? "border" : ""
        }`}
        style={variant === "brutalism" ? { borderColor: styles.border } : {}}
      >
        {filtered.map((it, i) => (
          <article
            key={i}
            className={
              variant === "playful"
                ? "p-5 bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0_0_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_0_#111] transition-all"
                : variant === "brutalism"
                ? "p-5 border hover:bg-[#0A0A0A] transition-colors"
                : variant === "swiss"
                ? "p-6"
                : variant === "luxury"
                ? "p-6 rounded-2xl backdrop-blur-xl border"
                : "p-6 border-t md:border-t-0 md:border md:rounded-xl"
            }
            style={{
              backgroundColor: variant === "swiss" ? styles.surface : variant === "luxury" ? styles.surface : variant === "brutalism" ? "transparent" : undefined,
              borderColor: styles.border,
            }}
            data-testid={`archive-card-${i}`}
          >
            <div className="text-[10px] uppercase tracking-widest mb-3" style={{ color: styles.accent }}>
              {it.type}
            </div>
            <h4 className={`${variant === "editorial" || variant === "luxury" ? "font-serif" : variant === "playful" ? "font-cabinet font-black uppercase" : variant === "brutalism" ? "font-mono uppercase" : "font-clash"} text-lg leading-snug`}>
              {it.title}
            </h4>
            <div className="mt-3 text-sm" style={{ color: styles.muted }}>{it.venue}</div>
            <div className="mt-2 text-[10px] uppercase tracking-widest" style={{ color: styles.muted }}>
              {it.level}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="text-sm" style={{ color: styles.muted }}>
          Showing {filtered.length} of {ARCHIVE.count} talks
        </div>
        <button
          className={
            variant === "playful"
              ? "px-6 py-3 bg-[#FF4A8D] border-4 border-black rounded-full font-black uppercase shadow-[5px_5px_0_0_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#111] transition-all"
              : variant === "brutalism"
              ? "px-6 py-3 border-2 uppercase font-bold tracking-widest"
              : variant === "swiss"
              ? "px-6 py-3 bg-black text-white hover:bg-[#FF3333] transition-colors text-sm uppercase tracking-widest"
              : "px-6 py-3 rounded-full border transition"
          }
          style={
            variant === "brutalism"
              ? { borderColor: styles.accent, color: styles.accent }
              : variant === "editorial" || variant === "luxury"
              ? { borderColor: styles.fg, color: styles.fg }
              : {}
          }
          data-testid="archive-load-more"
          onClick={() => alert("This is a redesign demo — full archive lives on akanshajain.dev")}
        >
          Load More
        </button>
      </div>
    </SectionShell>
  );
}

export default { SelectedTalks, FeaturedTalk, Archive };
