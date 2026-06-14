import React from "react";
import VariantSwitcher from "./VariantSwitcher";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import { SelectedTalks, FeaturedTalk, Archive } from "./sections/Talks";
import Timeline from "./sections/Timeline";
import { Stats, Topics } from "./sections/StatsTopics";
import { Codelabs, Leadership, Contact } from "./sections/Extras";

const STORAGE_KEY = "akansha-redesign-variant";

export default function Portfolio() {
  const [variant, setVariant] = React.useState(() => {
    if (typeof window === "undefined") return "editorial";
    return window.localStorage.getItem(STORAGE_KEY) || "editorial";
  });

  const handleChange = (v) => {
    setVariant(v);
    try {
      window.localStorage.setItem(STORAGE_KEY, v);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      // ignore
    }
  };

  return (
    <div data-variant={variant} data-testid="portfolio-root">
      <VariantSwitcher active={variant} onChange={handleChange} />
      <Hero variant={variant} />
      <Marquee variant={variant} />
      <SelectedTalks variant={variant} />
      <FeaturedTalk variant={variant} />
      <Timeline variant={variant} />
      <Archive variant={variant} />
      <Stats variant={variant} />
      <Topics variant={variant} />
      <Codelabs variant={variant} />
      <Leadership variant={variant} />
      <Contact variant={variant} />
    </div>
  );
}
