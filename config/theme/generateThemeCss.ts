import { darkColors, lightColors, type ThemeColorTokens } from "./colors";
import { fontRoles } from "./typography";

const CSS_VAR_NAMES: Record<keyof ThemeColorTokens, string> = {
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  secondary: "--secondary",
  secondaryForeground: "--secondary-foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  destructive: "--destructive",
  destructiveForeground: "--destructive-foreground",
  border: "--border",
  ring: "--ring",
};

function declareColors(colors: Partial<ThemeColorTokens>, indent: string): string {
  return (Object.keys(CSS_VAR_NAMES) as (keyof ThemeColorTokens)[])
    .filter((key) => colors[key] !== undefined)
    .map((key) => `${indent}${CSS_VAR_NAMES[key]}: ${colors[key]};`)
    .join("\n");
}

/**
 * Renders the raw HSL color tokens and typography fallback stacks from
 * config/theme into a plain CSS string. Injected as an inline <style> tag
 * from app/layout.tsx so app/globals.css never hardcodes brand values —
 * only the generic Tailwind `@theme inline` wiring lives there.
 */
export function generateThemeCss(): string {
  const sansFallback = fontRoles.sans.fallback.join(", ");
  const headingFallback = fontRoles.heading.fallback.join(", ");

  return `:root {
${declareColors(lightColors, "  ")}
}

@media (prefers-color-scheme: dark) {
  :root {
${declareColors(darkColors, "    ")}
  }
}

body {
  font-family: var(--font-sans), ${sansFallback};
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading), var(--font-sans), ${headingFallback};
}
`;
}
