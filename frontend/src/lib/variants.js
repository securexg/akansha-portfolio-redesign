// Variant metadata for the switcher
export const VARIANTS = [
  {
    id: "playful",
    num: "01",
    name: "Playful Creative",
    desc: "Neobrutalist cards, hard shadows",
    swatch: ["#F4F0EA", "#FFDF70", "#FF4A8D"],
    theme: "light",
  },
  {
    id: "google",
    num: "02",
    name: "Google Brand",
    desc: "Material Design, colorful, clean",
    swatch: ["#4285F4", "#EA4335", "#FBBC05"],
    theme: "light",
  },
];

// Theme tokens lookup; consumed via useVariantTokens()
const TOKENS = {
  playful: {
    bg: "#F4F0EA",
    fg: "#111111",
    muted: "#444444",
    accent: "#FF4A8D",
    accent2: "#0047FF",
    accent3: "#FFDF70",
    border: "#111111",
    surface: "#FFDF70",
    fontHead: "font-cabinet",
    fontBody: "font-figtree",
  },
  google: {
    bg: "#FFFFFF",
    fg: "#202124",
    muted: "#5F6368",
    accent: "#4285F4",
    accent2: "#EA4335",
    accent3: "#FBBC05",
    accent4: "#34A853",
    border: "#DADCE0",
    surface: "#F8F9FA",
    fontHead: "font-product-sans",
    fontBody: "font-roboto",
  },
};

export const getTokens = (variantId) => TOKENS[variantId] || TOKENS.playful;
