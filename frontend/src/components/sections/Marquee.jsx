import React from "react";
import { MARQUEE } from "../../lib/data";

const STYLES = {
  playful: {
    wrap: "py-6 border-y-4 border-black font-cabinet",
    wrapStyle: { backgroundColor: "#FFDF70" },
    item: "uppercase tracking-tight text-3xl md:text-5xl font-black mx-6 whitespace-nowrap",
    itemColor: "#111111",
    speed: "animate-marquee-fast",
    sep: "★",
  },
  google: {
    wrap: "py-8 border-y font-roboto",
    wrapStyle: { backgroundColor: "#FFFFFF", borderColor: "#E8EAED" },
    item: "text-lg md:text-xl mx-8 whitespace-nowrap font-medium",
    itemColor: "#5F6368",
    speed: "animate-marquee",
    sep: "·",
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
