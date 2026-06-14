import React from "react";
import { HERO, MEDIA } from "../../lib/data";
import { motion } from "framer-motion";

// Rotating multilingual greeting used across variants
function RotatingGreeting({ className = "" }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % HERO.greetings.length), 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className={className} data-testid="rotating-greeting">
      {HERO.greetings[i]}
    </span>
  );
}

/* ============================== EDITORIAL ============================== */
function EditorialHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 px-6 md:px-16 grain-overlay overflow-hidden"
      style={{ backgroundColor: "#FDFBF7", color: "#1A2F24" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
        <div className="md:col-span-7">
          <div className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "#5C6B62" }}>
            <RotatingGreeting /> — Issue 01 · The Speaker Edition
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight font-light">
            Engineering<br />
            <em className="italic font-medium" style={{ color: "#9A3B26" }}>code.</em><br />
            Inspiring<br />
            <em className="italic font-medium">communities.</em>
          </h1>
          <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "#5C6B62" }}>
            {HERO.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={HERO.ctaPrimary.href}
              data-testid="hero-cta-primary"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border transition-all hover:bg-[#1A2F24] hover:text-[#FDFBF7]"
              style={{ borderColor: "#1A2F24" }}
            >
              {HERO.ctaPrimary.label}
              <span aria-hidden>→</span>
            </a>
            <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "#5C6B62" }}>
              {HERO.role}
            </span>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="relative overflow-hidden rounded-[10rem] md:rounded-[12rem]" style={{ aspectRatio: "3/4" }}>
            <img
              src={MEDIA.headshot}
              alt="Akansha Jain"
              className="w-full h-full object-cover"
              style={{ filter: "saturate(0.85) contrast(1.05)" }}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#FDFBF7] border border-[#E1DCD1] rounded-full px-5 py-3 text-xs uppercase tracking-[0.25em]">
            Akansha Jain
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-24 md:mt-32 grid grid-cols-3 gap-6 md:gap-12 border-t pt-10" style={{ borderColor: "#E1DCD1" }}>
        {HERO.stats.map((s) => (
          <div key={s.label}>
            <div className="font-serif text-5xl md:text-7xl font-light leading-none" style={{ color: "#9A3B26" }}>
              {s.value}
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.3em]" style={{ color: "#5C6B62" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================== BRUTALISM ============================== */
function BrutalismHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 font-mono scanlines"
      style={{ backgroundColor: "#050505", color: "#E0E0E0" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-xs mb-8" style={{ color: "#00FF41" }}>
          <span className="opacity-60">$</span> whoami{" "}
          <span className="animate-blink">▊</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <pre className="text-[10px] sm:text-xs mb-6 leading-tight" style={{ color: "#FFB000" }}>
{`// >> AKANSHA_JAIN.exe — runtime: 5y
// >> status: ONLINE
// >> region: GLOBAL`}
            </pre>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight leading-[1.02]">
              <span style={{ color: "#00FF41" }}>&gt;</span> Engineering_code.
              <br />
              <span style={{ color: "#FFB000" }}>&gt;</span> Inspiring_communities.
            </h1>

            <p className="mt-8 max-w-2xl text-sm md:text-base leading-relaxed" style={{ color: "#888888" }}>
              <span style={{ color: "#00FF41" }}>// </span>
              {HERO.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-3 items-center">
              <a
                href={HERO.ctaPrimary.href}
                data-testid="hero-cta-primary"
                className="px-6 py-3 border-2 font-bold uppercase text-xs tracking-widest transition-all hover:bg-[#00FF41] hover:text-[#050505]"
                style={{ borderColor: "#00FF41", color: "#00FF41" }}
              >
                {`[ ${HERO.ctaPrimary.label} ]`}
              </a>
              <span className="text-xs uppercase tracking-widest" style={{ color: "#888888" }}>
                <RotatingGreeting className="mr-2" style={{ color: "#FFB000" }} />
                · {HERO.role}
              </span>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="border-2 p-2" style={{ borderColor: "#333333" }}>
              <div className="text-[10px] uppercase tracking-widest mb-2 flex items-center justify-between" style={{ color: "#00FF41" }}>
                <span>► headshot.png</span><span>200x267</span>
              </div>
              <img
                src={MEDIA.headshot}
                alt="Akansha Jain"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 border" style={{ borderColor: "#333333" }}>
          {HERO.stats.map((s, i) => (
            <div
              key={s.label}
              className={`p-5 ${i < 2 ? "border-r" : ""}`}
              style={{ borderColor: "#333333" }}
            >
              <div className="text-3xl md:text-5xl font-bold" style={{ color: "#00FF41" }}>
                {s.value}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-widest" style={{ color: "#888888" }}>
                ▸ {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== LUXURY ============================== */
function LuxuryHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-24 px-6 md:px-16 overflow-hidden"
      style={{ backgroundColor: "#0B0C10", color: "#F8F8F8" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 30%, rgba(212,175,55,0.18), transparent 70%), radial-gradient(50% 50% at 10% 80%, rgba(212,175,55,0.10), transparent 70%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: "#D4AF37" }}>
          <RotatingGreeting /> · Speaker · Engineer · Community
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-6xl sm:text-7xl md:text-[8rem] leading-[0.95] tracking-tight font-medium text-center"
        >
          Engineering code.
          <br />
          <span className="italic" style={{ color: "#D4AF37" }}>Inspiring</span> communities.
        </motion.h1>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 md:col-start-2">
            <div
              className="relative rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(255,255,255,0.10)" }}
            >
              <img src={MEDIA.headshot} alt="Akansha Jain" className="w-full h-auto" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(11,12,16,0.6), transparent 60%)" }}
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <p className="font-manrope text-base md:text-xl font-light leading-relaxed" style={{ color: "#D0D0E0" }}>
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href={HERO.ctaPrimary.href}
                data-testid="hero-cta-primary"
                className="px-8 py-4 rounded-full backdrop-blur-md border transition-all"
                style={{
                  borderColor: "rgba(255,255,255,0.20)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#F8F8F8",
                }}
              >
                {HERO.ctaPrimary.label}
                <span className="ml-2">↗</span>
              </a>
              <span className="text-[11px] tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>
                Available · 2026
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-3 md:gap-6">
          {HERO.stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl backdrop-blur-xl border"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div className="font-playfair text-4xl md:text-6xl font-medium" style={{ color: "#D4AF37" }}>
                {s.value}
              </div>
              <div className="mt-3 text-[11px] tracking-[0.25em] uppercase" style={{ color: "#A0A0B0" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== PLAYFUL ============================== */
function PlayfulHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 px-6 md:px-12 font-figtree overflow-hidden"
      style={{ backgroundColor: "#F4F0EA", color: "#111111" }}
    >
      {/* huge bg word */}
      <div
        className="absolute -top-8 left-0 right-0 text-[22vw] leading-none font-cabinet font-black opacity-[0.06] pointer-events-none select-none uppercase whitespace-nowrap"
        aria-hidden
      >
        AKANSHA JAIN
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 border-4 border-black rounded-full bg-white text-sm font-bold uppercase">
          <span className="h-2 w-2 rounded-full bg-[#FF4A8D] animate-pulse" />
          <RotatingGreeting /> · Booking 2026
        </div>

        <h1 className="mt-10 font-cabinet text-[14vw] md:text-[10rem] leading-[0.85] font-black uppercase tracking-tighter">
          ENGINEER<br />
          <span style={{ color: "#0047FF" }}>CODE.</span>{" "}
          <br />
          INSPIRE<br />
          <span style={{ color: "#FF4A8D" }}>COMMUNITIES.</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              {HERO.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={HERO.ctaPrimary.href}
                data-testid="hero-cta-primary"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF4A8D] border-4 border-black text-black font-black uppercase tracking-wide shadow-[6px_6px_0_0_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#111] transition-all"
              >
                {HERO.ctaPrimary.label} →
              </a>
              <a
                href="#talks"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border-4 border-black text-black font-black uppercase tracking-wide shadow-[6px_6px_0_0_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_#111] transition-all"
              >
                Watch Talks ▶
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="relative rotate-[-3deg]">
              <div className="absolute inset-0 bg-[#0047FF] translate-x-3 translate-y-3 rounded-3xl" />
              <img
                src={MEDIA.headshot}
                alt="Akansha Jain"
                className="relative w-full max-w-[360px] h-auto rounded-3xl border-4 border-black shadow-[10px_10px_0_0_#111]"
              />
              <div className="absolute -bottom-6 -right-6 rotate-6 bg-[#FFDF70] border-4 border-black rounded-full px-5 py-3 text-xs font-black uppercase">
                Speaker of the Day
              </div>
            </div>
          </div>
        </div>

        {/* tetris stats */}
        <div className="mt-16 grid grid-cols-6 grid-rows-2 gap-3 md:gap-4">
          <div className="col-span-3 row-span-2 bg-[#0047FF] text-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0_0_#111]">
            <div className="font-cabinet text-7xl md:text-9xl font-black leading-none">54+</div>
            <div className="mt-3 text-sm font-bold uppercase tracking-wider">Talks & Workshops</div>
          </div>
          <div className="col-span-3 bg-[#FFDF70] border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0_0_#111]">
            <div className="font-cabinet text-4xl md:text-6xl font-black leading-none">28K+</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider">Attendees</div>
          </div>
          <div className="col-span-3 bg-[#FF4A8D] text-white border-4 border-black rounded-3xl p-5 shadow-[8px_8px_0_0_#111]">
            <div className="font-cabinet text-4xl md:text-6xl font-black leading-none">105K+</div>
            <div className="mt-2 text-xs font-bold uppercase tracking-wider">Community</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== SWISS ============================== */
function SwissHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 px-6 md:px-12 font-satoshi"
      style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-x-4 gap-y-12">
        {/* col labels */}
        <div className="col-span-12 grid grid-cols-12 text-[10px] uppercase tracking-[0.25em] pb-4 border-b" style={{ color: "#666", borderColor: "#E5E5E5" }}>
          <div className="col-span-2">A · Identity</div>
          <div className="col-span-6">B · Statement</div>
          <div className="col-span-4 text-right">C · Index 2026/I</div>
        </div>

        <div className="col-span-12 md:col-span-2">
          <div className="text-xs tracking-widest uppercase font-semibold">Akansha Jain</div>
          <div className="mt-2 text-xs" style={{ color: "#666" }}>
            Speaker. Engineer.<br />Community Builder.
          </div>
          <div className="mt-6 text-xs" style={{ color: "#666" }}>
            <RotatingGreeting />
          </div>
        </div>

        <div className="col-span-12 md:col-span-7">
          <h1 className="font-clash text-6xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight font-medium">
            Engineering code.<br />
            Inspiring<br />
            communities<span style={{ color: "#FF3333" }}>.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: "#333" }}>
            {HERO.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href={HERO.ctaPrimary.href}
              data-testid="hero-cta-primary"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white hover:bg-[#FF3333] transition-colors"
            >
              {HERO.ctaPrimary.label}
              <span>↗</span>
            </a>
            <a href="#talks" className="text-sm underline underline-offset-4 hover:text-[#FF3333]">
              View selected talks
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 md:justify-self-end">
          <img
            src={MEDIA.headshot}
            alt="Akansha Jain"
            className="w-full max-w-[300px] h-auto"
            style={{ filter: "grayscale(0.05)" }}
          />
          <div className="mt-3 text-[10px] uppercase tracking-[0.25em]" style={{ color: "#666" }}>
            Fig. 01 — Headshot
          </div>
        </div>

        {/* Stats row */}
        <div className="col-span-12 grid grid-cols-12 gap-x-4 border-t pt-10" style={{ borderColor: "#E5E5E5" }}>
          {HERO.stats.map((s, i) => (
            <div key={s.label} className={`col-span-4 ${i > 0 ? "border-l pl-6" : "pr-6"}`} style={{ borderColor: "#E5E5E5" }}>
              <div className="text-[10px] uppercase tracking-[0.25em]" style={{ color: "#666" }}>
                0{i + 1}
              </div>
              <div className="font-clash text-5xl md:text-7xl font-medium mt-2">{s.value}</div>
              <div className="mt-3 text-sm" style={{ color: "#333" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hero({ variant }) {
  if (variant === "brutalism") return <BrutalismHero />;
  if (variant === "luxury") return <LuxuryHero />;
  if (variant === "playful") return <PlayfulHero />;
  if (variant === "swiss") return <SwissHero />;
  return <EditorialHero />;
}
