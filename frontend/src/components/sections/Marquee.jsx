import React from "react";
import { MARQUEE } from "../../lib/data";

const STYLES = {
  editorial: {
    wrap: "py-10 border-y",
    wrapStyle: { backgroundColor: "#FDFBF7", borderColor: "#E1DCD1" },
    item: "font-serif italic text-2xl md:text-3xl mx-10 whitespace-nowrap",
    itemColor: "#5C6B62",
    speed: "animate-marquee",
    sep: "•",
  },
  brutalism: {
    wrap: "py-4 border-y font-mono",
    wrapStyle: { backgroundColor: "#0A0A0A", borderColor: "#333333" },
    item: "uppercase tracking-widest text-sm md:text-base mx-6 whitespace-nowrap",
    itemColor: "#00FF41",
    speed: "animate-marquee-fast",
    sep: ">",
  },
  luxury: {
    wrap: "py-12",
    wrapStyle: { backgroundColor: "#0B0C10" },
    item: "font-playfair italic text-2xl md:text-4xl mx-12 whitespace-nowrap",
    itemColor: "#A0A0B0",
    speed: "animate-marquee",
    sep: "✦",
  },
  playful: {
    wrap: "py-6 border-y-4 border-black font-cabinet",
    wrapStyle: { backgroundColor: "#FFDF70" },
    item: "uppercase tracking-tight text-3xl md:text-5xl font-black mx-6 whitespace-nowrap",
    itemColor: "#111111",
    speed: "animate-marquee-fast",
    sep: "★",
  },
  swiss: {
    wrap: "py-8 border-y font-clash",
    wrapStyle: { backgroundColor: "#FFFFFF", borderColor: "#E5E5E5" },
    item: "uppercase tracking-tight text-xl md:text-2xl mx-8 whitespace-nowrap font-medium",
    itemColor: "#000000",
    speed: "animate-marquee",
    sep: "/",
  },
};

export default function Marquee({ variant }) {
  const s = STYLES[variant] || STYLES.editorial;
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <section className={`relative overflow-hidden ${s.wrap}`} style={s.wrapStyle} aria-label="Featured stages">
      <div className={`flex w-max ${s.speed}`}>
        {items.map((item, i) => (
          <span key={i} className={s.item} style={{ color: s.itemColor }}>
            {item}
            <span className="opacity-50 mx-6">{s.sep}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
