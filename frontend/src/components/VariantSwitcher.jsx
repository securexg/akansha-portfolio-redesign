import React from "react";
import { VARIANTS } from "../lib/variants";
import { motion, AnimatePresence } from "framer-motion";

export default function VariantSwitcher({ active, onChange }) {
  const [open, setOpen] = React.useState(false);
  const activeMeta = VARIANTS.find((v) => v.id === active) || VARIANTS[0];

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      data-testid="variant-switcher-root"
    >
      <div className="flex items-center gap-2 px-2 py-2 rounded-full backdrop-blur-xl bg-white/70 dark:bg-black/60 border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <button
          aria-label="Toggle design switcher details"
          onClick={() => setOpen((s) => !s)}
          className="text-[11px] uppercase tracking-[0.18em] font-medium px-3 py-1.5 rounded-full bg-black text-white hover:bg-neutral-800 transition"
          data-testid="variant-switcher-toggle"
        >
          {activeMeta.num} · {activeMeta.name}
        </button>

        <div className="hidden md:flex items-center gap-1">
          {VARIANTS.map((v) => {
            const isActive = v.id === active;
            return (
              <button
                key={v.id}
                onClick={() => onChange(v.id)}
                title={`${v.name} — ${v.desc}`}
                data-testid={`variant-btn-${v.id}`}
                className={`group relative h-9 w-9 rounded-full overflow-hidden border transition-all ${
                  isActive
                    ? "border-black scale-110 ring-2 ring-black/20"
                    : "border-black/20 hover:scale-105"
                }`}
                aria-label={`Switch to ${v.name}`}
                aria-pressed={isActive}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `conic-gradient(${v.swatch[0]} 0 33%, ${v.swatch[1]} 33% 66%, ${v.swatch[2]} 66% 100%)`,
                  }}
                />
                <span className="relative z-10 text-[10px] font-bold mix-blend-difference text-white">
                  {v.num}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile + expanded picker */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="mt-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-black/10 shadow-xl p-2 min-w-[280px]"
            data-testid="variant-switcher-panel"
          >
            {VARIANTS.map((v) => {
              const isActive = v.id === active;
              return (
                <button
                  key={v.id}
                  onClick={() => {
                    onChange(v.id);
                    setOpen(false);
                  }}
                  data-testid={`variant-row-${v.id}`}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition ${
                    isActive ? "bg-black text-white" : "hover:bg-black/5 text-black"
                  }`}
                >
                  <div
                    className="h-7 w-7 rounded-full shrink-0 border border-black/20"
                    style={{
                      background: `conic-gradient(${v.swatch[0]} 0 33%, ${v.swatch[1]} 33% 66%, ${v.swatch[2]} 66% 100%)`,
                    }}
                  />
                  <div className="flex-1">
                    <div className="text-xs font-semibold tracking-wide">
                      {v.num} — {v.name}
                    </div>
                    <div className={`text-[11px] ${isActive ? "text-white/70" : "text-black/60"}`}>
                      {v.desc}
                    </div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
