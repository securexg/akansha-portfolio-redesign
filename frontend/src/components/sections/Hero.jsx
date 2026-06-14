import React from "react";
import { HERO, MEDIA } from "../../lib/data";

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
                target="_blank"
                rel="noopener noreferrer"
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

/* ============================== GOOGLE ============================== */
function GoogleHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 px-6 md:px-12 font-roboto"
      style={{ backgroundColor: "#FFFFFF", color: "#202124" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Google-style header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-[#4285F4]" />
            <div className="w-3 h-3 rounded-full bg-[#EA4335]" />
            <div className="w-3 h-3 rounded-full bg-[#FBBC05]" />
            <div className="w-3 h-3 rounded-full bg-[#34A853]" />
          </div>
          <div className="text-sm font-medium" style={{ color: "#5F6368" }}>
            <RotatingGreeting /> · Speaker · Engineer · Community
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h1 className="font-product-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight">
              Engineering code.<br />
              <span style={{ color: "#4285F4" }}>Inspiring</span> communities.
            </h1>
            <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: "#5F6368" }}>
              {HERO.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={HERO.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-primary"
                className="material-ripple inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4285F4] text-white font-medium hover:bg-[#3367D6] transition-colors google-shadow"
              >
                {HERO.ctaPrimary.label}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#talks"
                className="material-ripple inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 font-medium hover:bg-gray-50 transition-colors"
                style={{ borderColor: "#DADCE0", color: "#4285F4" }}
              >
                View talks
              </a>
            </div>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="relative">
              <div className="absolute inset-0 google-gradient opacity-10 rounded-2xl blur-2xl" />
              <img
                src={MEDIA.headshot}
                alt="Akansha Jain"
                className="relative w-full max-w-[400px] h-auto rounded-2xl google-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Material Design cards for stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HERO.stats.map((s, i) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl border google-shadow hover:google-shadow-lg transition-all"
              style={{ backgroundColor: "#F8F9FA", borderColor: "#E8EAED" }}
            >
              <div className="font-product-sans text-5xl md:text-6xl font-medium" style={{ color: i === 0 ? "#4285F4" : i === 1 ? "#EA4335" : "#FBBC05" }}>
                {s.value}
              </div>
              <div className="mt-3 text-sm font-medium uppercase tracking-wider" style={{ color: "#5F6368" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Hero({ variant }) {
  if (variant === "google") return <GoogleHero />;
  return <PlayfulHero />;
}
